<?php
/**
 * View counter for blog posts.
 *
 * .htaccess routes /api/views here.
 *
 *   GET  /api/views?slugs=a,b,c   read counts, changes nothing
 *   POST /api/views  (slug=a)     count one view, returns the new total
 *
 * Counts live in SQLite rather than a JSON file because two readers landing on
 * the same post at the same moment would otherwise read, increment and write
 * over each other. SQLite serialises that for us.
 *
 * The database deliberately sits OUTSIDE public_html. Anything inside it is a
 * URL someone can fetch, and a deploy extracts a zip over that directory, so a
 * file kept there would be both public and liable to be wiped.
 *
 * Nothing here is allowed to break a page: every failure path returns zeroes
 * with HTTP 200 so the counter renders as "0 views" rather than taking the
 * blog down with it.
 */

declare(strict_types=1);

const MAX_SLUGS   = 60;    // a listing page asks for all posts at once
const SLUG_RE     = '/^[a-z0-9][a-z0-9-]{0,95}$/';
const DB_FILENAME = 'klf-views.sqlite';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');       // a cached count is a wrong count
header('X-Robots-Tag: noindex');

/**
 * Where the database lives.
 *
 * Preferred: a sibling of public_html in the account's home directory, which
 * the web server can write but no one can request. If that is not writable on
 * some future host, fall back to the temp directory — counts would reset when
 * the host clears it, but the site keeps working.
 */
function dbPath(): ?string
{
    $candidates = [
        dirname(__DIR__, 3) . '/klf-data',   // /home/<user>/klf-data
        dirname(__DIR__) . '/klf-data',      // one level up from public_html
        sys_get_temp_dir(),
    ];

    foreach ($candidates as $dir) {
        if (!is_dir($dir) && !@mkdir($dir, 0755, true) && !is_dir($dir)) {
            continue;
        }
        if (is_writable($dir)) {
            return $dir . '/' . DB_FILENAME;
        }
    }

    return null;
}

/** Open the database, creating the table on first use. Null if unavailable. */
function db(): ?PDO
{
    static $pdo = null;
    static $tried = false;

    if ($tried) {
        return $pdo;
    }
    $tried = true;

    $path = dbPath();
    if ($path === null || !class_exists('PDO') || !in_array('sqlite', PDO::getAvailableDrivers(), true)) {
        return null;
    }

    try {
        $pdo = new PDO('sqlite:' . $path, null, null, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_TIMEOUT => 5,
        ]);
        // WAL lets a read proceed while another request is writing.
        $pdo->exec('PRAGMA journal_mode = WAL');
        $pdo->exec('PRAGMA busy_timeout = 5000');
        $pdo->exec(
            'CREATE TABLE IF NOT EXISTS views (
                slug  TEXT PRIMARY KEY,
                count INTEGER NOT NULL DEFAULT 0,
                seen  TEXT
            )'
        );
    } catch (Throwable $e) {
        $pdo = null;
    }

    return $pdo;
}

function isValidSlug(string $slug): bool
{
    return (bool) preg_match(SLUG_RE, $slug);
}

/**
 * Crawlers should not inflate the numbers a human sees.
 *
 * This only has to catch the honest ones — Googlebot and the social preview
 * fetchers that would otherwise add a view every time a link is shared. A
 * crawler that lies about its user agent is indistinguishable from a reader
 * without tracking people, which this deliberately does not do.
 */
function isBot(string $ua): bool
{
    if ($ua === '') {
        return true;   // no user agent at all is a script, not a reader
    }

    $needles = [
        'bot', 'crawl', 'spider', 'slurp', 'search', 'fetch', 'monitor',
        'preview', 'scrape', 'curl', 'wget', 'python', 'headless',
        'lighthouse', 'pagespeed', 'gtmetrix', 'pingdom', 'uptime',
        'facebookexternalhit', 'whatsapp', 'telegram', 'embedly',
        'quora link preview', 'vkshare', 'skypeuripreview',
    ];

    $ua = strtolower($ua);
    foreach ($needles as $needle) {
        if (strpos($ua, $needle) !== false) {
            return true;
        }
    }

    return false;
}

/** Counts for the given slugs; every requested slug comes back, missing as 0. */
function readCounts(array $slugs): array
{
    $counts = array_fill_keys($slugs, 0);

    $pdo = db();
    if ($pdo === null || $slugs === []) {
        return $counts;
    }

    try {
        $marks = implode(',', array_fill(0, count($slugs), '?'));
        $stmt  = $pdo->prepare("SELECT slug, count FROM views WHERE slug IN ($marks)");
        $stmt->execute(array_values($slugs));
        foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
            $counts[$row['slug']] = (int) $row['count'];
        }
    } catch (Throwable $e) {
        // fall through with zeroes
    }

    return $counts;
}

/** Add one view and return the new total, or null if it could not be stored. */
function addView(string $slug): ?int
{
    $pdo = db();
    if ($pdo === null) {
        return null;
    }

    try {
        $pdo->beginTransaction();
        $pdo->prepare('INSERT OR IGNORE INTO views (slug, count, seen) VALUES (?, 0, ?)')
            ->execute([$slug, gmdate('c')]);
        $pdo->prepare('UPDATE views SET count = count + 1, seen = ? WHERE slug = ?')
            ->execute([gmdate('c'), $slug]);
        $pdo->commit();

        $stmt = $pdo->prepare('SELECT count FROM views WHERE slug = ?');
        $stmt->execute([$slug]);
        $value = $stmt->fetchColumn();

        return $value === false ? null : (int) $value;
    } catch (Throwable $e) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        return null;
    }
}

function send(array $payload): void
{
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

// ---------------------------------------------------------------------------

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$ua     = (string) ($_SERVER['HTTP_USER_AGENT'] ?? '');

if ($method === 'POST') {
    $slug = isset($_POST['slug']) ? (string) $_POST['slug'] : '';

    // Also accept a JSON body, which is what fetch() sends by default.
    if ($slug === '') {
        $body = json_decode((string) file_get_contents('php://input'), true);
        if (is_array($body) && isset($body['slug'])) {
            $slug = (string) $body['slug'];
        }
    }

    if (!isValidSlug($slug)) {
        http_response_code(400);
        send(['error' => 'invalid slug']);
    }

    // A bot still gets an honest count back, it just does not add to it.
    if (isBot($ua)) {
        $counts = readCounts([$slug]);
        send(['slug' => $slug, 'views' => $counts[$slug], 'counted' => false]);
    }

    $total = addView($slug);
    if ($total === null) {
        send(['slug' => $slug, 'views' => 0, 'counted' => false]);
    }

    send(['slug' => $slug, 'views' => $total, 'counted' => true]);
}

// GET: read only.
$raw = isset($_GET['slugs']) ? (string) $_GET['slugs'] : '';
if ($raw === '') {
    send(['views' => new stdClass()]);
}

$slugs = [];
foreach (explode(',', $raw) as $candidate) {
    $candidate = trim($candidate);
    if ($candidate !== '' && isValidSlug($candidate) && !in_array($candidate, $slugs, true)) {
        $slugs[] = $candidate;
    }
    if (count($slugs) >= MAX_SLUGS) {
        break;
    }
}

send(['views' => (object) readCounts($slugs)]);
