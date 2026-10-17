<?php
/**
 * Dynamic sitemaps for karachilawfirms.pk
 *
 * .htaccess routes three URLs into this one file:
 *
 *   /sitemap.xml        type=index  sitemap index pointing at the two below
 *   /sitemap-pages.xml  type=pages  the site's static pages
 *   /sitemap-posts.xml  type=posts  blog posts, fetched live from Sanity
 *
 * Pages and posts are split so Search Console reports indexing for editorial
 * content separately from the service pages. It also means only type=posts
 * ever talks to Sanity, so a slow API response can no longer delay the pages
 * sitemap or the index.
 *
 * Every response is cached for CACHE_TTL seconds so crawlers cannot hammer the
 * Sanity API, and every failure path falls back to the static file the build
 * shipped rather than returning an empty or broken document.
 */

declare(strict_types=1);

const PROJECT_ID   = '91ufe034';
const DATASET      = 'production';
const API_VERSION  = 'v2024-10-01';
const SITE_URL     = 'https://karachilawfirms.pk';
const CACHE_TTL    = 3600;   // 1 hour
const HTTP_TIMEOUT = 8;      // seconds

/** type => the static file that backs it if anything goes wrong. */
const TYPES = [
    'index' => 'sitemap.xml',
    'pages' => 'sitemap-pages.xml',
    'posts' => 'sitemap-posts.xml',
];

$type = isset($_GET['type']) ? (string) $_GET['type'] : 'index';
if (!array_key_exists($type, TYPES)) {
    $type = 'index';
}

header('Content-Type: application/xml; charset=utf-8');
header('X-Robots-Tag: noindex');   // the sitemap itself should not be indexed

// Keep the CDN in front of this honest. Without an explicit lifetime the edge
// applied the .htaccess rule for static .xml files and then went on serving a
// copy days past its expiry, so a crawler could be handed a sitemap from
// before the last deploy. Five minutes is long enough to absorb a crawl burst
// and short enough that a new post is never hidden for long. The real work is
// still skipped by the CACHE_TTL check below; this only governs the edge.
header('Cache-Control: public, max-age=300, must-revalidate');

$baseDir   = __DIR__;
$cacheFile = sys_get_temp_dir() . '/klf-sitemap-' . $type . '.xml';

/** Serve the cached copy if it is still fresh. */
function serveCache(string $cacheFile): bool
{
    if (is_readable($cacheFile) && (time() - filemtime($cacheFile)) < CACHE_TTL) {
        $cached = file_get_contents($cacheFile);
        if ($cached !== false && $cached !== '') {
            header('X-Sitemap-Source: cache');
            echo $cached;
            return true;
        }
    }
    return false;
}

/** Last resort: the static file the build produced for this type. */
function serveFallback(string $baseDir, string $type, string $reason): void
{
    $fallback = $baseDir . '/' . TYPES[$type];
    header('X-Sitemap-Source: fallback');
    header('X-Sitemap-Reason: ' . $reason);

    if (is_readable($fallback)) {
        readfile($fallback);
        return;
    }

    // Nothing on disk either. Emit something valid rather than a blank body.
    if ($type === 'index') {
        echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n"
           . '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n"
           . '  <sitemap><loc>' . SITE_URL . '/sitemap-pages.xml</loc></sitemap>' . "\n"
           . '  <sitemap><loc>' . SITE_URL . '/sitemap-posts.xml</loc></sitemap>' . "\n"
           . '</sitemapindex>' . "\n";
        return;
    }

    echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n"
       . '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n"
       . ($type === 'pages' ? '  <url><loc>' . SITE_URL . '/</loc></url>' . "\n" : '')
       . '</urlset>' . "\n";
}

/** GET a URL with a hard timeout. Returns null on any failure. */
function httpGet(string $url): ?string
{
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => HTTP_TIMEOUT,
            CURLOPT_CONNECTTIMEOUT => 5,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_USERAGENT      => 'KLF-Sitemap/1.0',
        ]);
        $body   = curl_exec($ch);
        $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        return ($body !== false && $status === 200) ? $body : null;
    }

    $context = stream_context_create([
        'http' => ['timeout' => HTTP_TIMEOUT, 'user_agent' => 'KLF-Sitemap/1.0'],
    ]);
    $body = @file_get_contents($url, false, $context);
    return $body !== false ? $body : null;
}

/** Published posts from Sanity. Null means "could not fetch". */
function fetchPosts(): ?array
{
    $groq = '*[_type == "post" && defined(slug.current) && publishedAt <= now()]'
          . '{"slug": slug.current, publishedAt, updatedAt}';

    $url = sprintf(
        'https://%s.apicdn.sanity.io/%s/data/query/%s?query=%s',
        PROJECT_ID,
        API_VERSION,
        DATASET,
        rawurlencode($groq)
    );

    $body = httpGet($url);
    if ($body === null) {
        return null;
    }

    $data = json_decode($body, true);
    if (!is_array($data) || !isset($data['result']) || !is_array($data['result'])) {
        return null;
    }

    return $data['result'];
}

/** Static routes produced at build time from the app router. */
function loadRoutes(string $baseDir): array
{
    $file = $baseDir . '/sitemap-routes.json';
    if (!is_readable($file)) {
        return [];
    }
    $data = json_decode((string) file_get_contents($file), true);
    return is_array($data) && isset($data['routes']) && is_array($data['routes'])
        ? $data['routes']
        : [];
}

/** A post's last-modified date as YYYY-MM-DD, or null if it has none. */
function postLastmod(array $post): ?string
{
    $raw  = (string) ($post['updatedAt'] ?? $post['publishedAt'] ?? '');
    $date = substr($raw, 0, 10);
    return $date !== '' ? $date : null;
}

function urlEntry(string $loc, string $changefreq, string $priority, ?string $lastmod): string
{
    $xml  = "  <url>\n";
    $xml .= '    <loc>' . htmlspecialchars(SITE_URL . $loc, ENT_XML1) . "</loc>\n";
    if ($lastmod) {
        $xml .= '    <lastmod>' . htmlspecialchars($lastmod, ENT_XML1) . "</lastmod>\n";
    }
    $xml .= '    <changefreq>' . $changefreq . "</changefreq>\n";
    $xml .= '    <priority>' . $priority . "</priority>\n";
    $xml .= "  </url>\n";
    return $xml;
}

function sitemapEntry(string $path, ?string $lastmod): string
{
    $xml  = "  <sitemap>\n";
    $xml .= '    <loc>' . htmlspecialchars(SITE_URL . $path, ENT_XML1) . "</loc>\n";
    if ($lastmod) {
        $xml .= '    <lastmod>' . htmlspecialchars($lastmod, ENT_XML1) . "</lastmod>\n";
    }
    $xml .= "  </sitemap>\n";
    return $xml;
}

/** Wrap entries in a urlset document. */
function urlset(string $entries): string
{
    return '<?xml version="1.0" encoding="UTF-8"?>' . "\n"
         . '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n"
         . $entries
         . '</urlset>' . "\n";
}

// ---------------------------------------------------------------------------

if (serveCache($cacheFile)) {
    exit;
}

if ($type === 'pages') {
    // Deliberately independent of Sanity: the pages sitemap must never be
    // held up or emptied by a CMS outage.
    $routes = loadRoutes($baseDir);
    if ($routes === []) {
        serveFallback($baseDir, $type, 'routes-missing');
        exit;
    }

    $entries = '';
    foreach ($routes as $route) {
        $entries .= urlEntry(
            (string) ($route['loc'] ?? '/'),
            (string) ($route['changefreq'] ?? 'monthly'),
            (string) ($route['priority'] ?? '0.6'),
            null
        );
    }

    $xml = urlset($entries);
    header('X-Sitemap-Source: live');
    header('X-Sitemap-Pages: ' . count($routes));

} elseif ($type === 'posts') {
    $posts = fetchPosts();
    // Serving an empty posts sitemap would tell Google the blog has gone, so
    // fall back to the last known good list instead.
    if ($posts === null) {
        serveFallback($baseDir, $type, 'sanity-unreachable');
        exit;
    }

    $entries = '';
    $count   = 0;
    foreach ($posts as $post) {
        $slug = (string) ($post['slug'] ?? '');
        if ($slug === '') {
            continue;
        }
        $entries .= urlEntry('/blog/' . $slug, 'monthly', '0.7', postLastmod($post));
        $count++;
    }

    if ($count === 0) {
        serveFallback($baseDir, $type, 'no-posts');
        exit;
    }

    $xml = urlset($entries);
    header('X-Sitemap-Source: live');
    header('X-Sitemap-Posts: ' . $count);

} else {
    // The index. Cheap on purpose: it only needs the two child URLs plus a
    // lastmod for each, so a Sanity failure costs a date, not the document.
    $routesFile = $baseDir . '/sitemap-routes.json';
    $pagesMod   = is_readable($routesFile)
        ? date('Y-m-d', (int) filemtime($routesFile))
        : null;

    $postsMod = null;
    $posts    = fetchPosts();
    if (is_array($posts)) {
        foreach ($posts as $post) {
            $date = postLastmod($post);
            if ($date !== null && ($postsMod === null || $date > $postsMod)) {
                $postsMod = $date;
            }
        }
    }
    if ($postsMod === null) {
        $staticPosts = $baseDir . '/' . TYPES['posts'];
        $postsMod = is_readable($staticPosts)
            ? date('Y-m-d', (int) filemtime($staticPosts))
            : null;
    }

    $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n"
         . '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n"
         . sitemapEntry('/sitemap-pages.xml', $pagesMod)
         . sitemapEntry('/sitemap-posts.xml', $postsMod)
         . '</sitemapindex>' . "\n";

    header('X-Sitemap-Source: live');
}

// Cache for the next crawler. A failed write is not fatal.
@file_put_contents($cacheFile, $xml, LOCK_EX);

echo $xml;
