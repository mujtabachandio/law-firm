# Deploying to Hostinger

The site is a static React build. Hostinger shared hosting serves static files
only (no Node), which is fine — everything the site needs at runtime comes from
Sanity's API, which is hosted separately.

| Piece | Where it lives |
|---|---|
| Website | Hostinger `public_html/` |
| Blog content (CMS) | Sanity, project `91ufe034`, dataset `production` |
| Studio (content editor) | <https://karachi-law-firms.sanity.studio> |

`karachilawfirms.pk/studio` redirects to the Studio, so there is nothing to
upload for it.

---

## Deploying

### 1. Build and package

```powershell
npm run build
npm run package
```

`build` also regenerates the three sitemap files from Sanity, so any post
published since the last deploy is included in the fallbacks.

`package` writes **`deploy.zip` (~14 MB)** containing everything in `build/`
**except `images/`**. Those 456 MB of images are already on the server and
almost never change, so re-uploading them every deploy is wasted time.

The archive has no top-level folder — extracting it in `public_html/` puts
`index.html` directly where it belongs, and it includes the hidden
`.htaccess`, which is the file most likely to be missed when dragging files by
hand.

### 2. Upload

1. hPanel → **File Manager** → open `public_html`
2. Upload `deploy.zip`
3. Right-click it → **Extract** (overwrite when asked)
4. Delete `deploy.zip` from the server

### If you changed or added an image

`images/` is not in the zip, so a new image would 404. Either upload those
specific files into `public_html/images/`, or build the full archive:

```powershell
npm run package -- --with-images     # ~477 MB
```

Blog images are not affected — posts served from Sanity load their images from
Sanity's CDN, not from your server.

### 3. Check

- <https://karachilawfirms.pk> loads
- <https://karachilawfirms.pk/blog> lists 5 posts
- Open a post, then **hard-refresh (Ctrl+F5)** — this is the real test that
  `.htaccess` is working. Without it a direct load of `/blog/<slug>` 404s.
- <https://karachilawfirms.pk/studio> redirects to the Studio
- <https://karachilawfirms.pk/api/views?slugs=how-to-hire-a-lawyer-in-karachi>
  returns a JSON count. A blog card showing a date but no view count means
  this endpoint is down, not that the post has no readers.
- <https://karachilawfirms.pk/sitemap.xml> is a **sitemap index** naming two
  child sitemaps. Open both: `/sitemap-pages.xml` should list the static
  pages and `/sitemap-posts.xml` the blog posts.
- A service page image still loads — confirms the existing `images/` folder on
  the server was left intact by the extract

> Filenames under `static/` contain a content hash, so old builds' files stay
> behind after an extract. They are harmless (nothing references them), but you
> can clear `public_html/static/` before extracting if you want it tidy.

---

## What `.htaccess` does

It ships in `public/.htaccess` and is copied into `build/` automatically.

1. **Canonical host** — forces HTTPS and strips `www.`, matching the canonical
   URLs the pages declare. The HTTPS rule checks `X-Forwarded-Proto` so it
   cannot loop behind Hostinger's SSL termination.
2. **SPA routing** — any URL that is not a real file is served `index.html` so
   React Router can handle it. This is what makes `/blog/<slug>` work on a
   direct visit.
3. **Compression** — gzip for HTML, CSS, JS, JSON, SVG and fonts.
4. **Caching** — hashed files under `/static/` are cached for a year and marked
   `immutable`; `index.html` is never cached, so a deploy takes effect
   immediately instead of visitors being stuck on the old JS.

Everything is wrapped in `<IfModule>` guards, so a missing Apache module
degrades gracefully instead of causing a 500.

> If Hostinger's hPanel also has "Force HTTPS" enabled, that is fine — the rules
> are compatible.

> There is a second, older `.htaccess` in the project root. It is **not** used by
> the build and is not uploaded. `public/.htaccess` is the real one.

---

## Publishing a blog post after go-live

1. Open <https://karachi-law-firms.sanity.studio> and publish the post.
2. It appears on the live site **and in `sitemap.xml`** immediately. No
   rebuild, no re-upload.

## How the view counter works

Blog cards and post pages show how many times a post has been read.
`.htaccess` serves **`views.php`** at `/api/views`:

| Request | Does |
|---|---|
| `GET /api/views?slugs=a,b,c` | Returns `{"views":{"a":12,...}}`, changes nothing |
| `POST /api/views` with `slug=a` | Adds one view, returns the new total |

The listing asks for every count in one request rather than one per card,
and both requests happen after the page has painted, so the counter never
delays anything a reader is waiting for.

**Crawlers do not count.** `views.php` filters by user agent, which also
covers the social preview fetchers — otherwise every time someone shared a
link on WhatsApp the post would gain a view. A repeat visit inside one
browser session is suppressed in the browser with `sessionStorage`.

### Where the counts live

```
~/klf-data/klf-views.sqlite
```

**Not** in `public_html`, and that matters twice over: anything in there is
a URL someone can fetch, and a deploy extracts `deploy.zip` over that
directory, so counts kept there would be both public and wiped on release.
Nothing in the deploy touches `~/klf-data`, so the numbers survive.

SQLite rather than a JSON file because two readers opening the same post at
the same moment would otherwise read, increment and write over each other.

To read or reset the counts over SSH:

```bash
# current counts
php -r '$d=new PDO("sqlite:".getenv("HOME")."/klf-data/klf-views.sqlite");
  foreach($d->query("SELECT slug,count FROM views") as $r)
    echo $r["slug"]," = ",$r["count"],PHP_EOL;'

# start again from zero
php -r '$d=new PDO("sqlite:".getenv("HOME")."/klf-data/klf-views.sqlite");
  $d->exec("DELETE FROM views");'
```

If the database cannot be opened at all, `views.php` returns zeroes with
HTTP 200 and the counter simply hides itself. A broken counter must never
be able to take the blog down with it.

---

## How the sitemap works

There are three sitemap URLs, and none of them is a real file — `.htaccess`
rewrites all three to **`sitemap.php`**, which builds each document per
request:

| URL | What it contains |
|---|---|
| `/sitemap.xml` | A sitemap index pointing at the two below |
| `/sitemap-pages.xml` | The static pages |
| `/sitemap-posts.xml` | The blog posts |

Pages and posts are separate documents so Search Console reports indexing
for editorial content apart from the service pages.

- **Blog URLs** are fetched live from Sanity, so publishing in the Studio is
  all that is required for a post to appear.
- **Static URLs** come from `sitemap-routes.json`, which the build generates
  by **parsing `src/App.js`**. Add or remove a page in the router and the
  sitemap follows on the next deploy — there is no second list to keep in
  sync.

Only the posts sitemap talks to Sanity. The pages sitemap and the index are
built from local data, so a CMS outage cannot delay or empty them.

Each URL is cached separately for one hour, so crawlers cannot hammer the
Sanity API. A freshly published post therefore shows up within the hour; to
see it at once, delete `klf-sitemap-posts.xml` from the server’s temp
directory, or just wait.

Every failure path degrades instead of breaking. If Sanity is unreachable or
the route data is missing, `sitemap.php` serves the matching static file that
ships with each build, so the URL keeps working with the content from the
last deploy. Response headers say which path was taken —
`X-Sitemap-Source: live | cache | fallback`, plus `X-Sitemap-Reason` when it
fell back.

> **If PHP is ever unavailable on the host**, comment out the three
> `RewriteRule ^sitemap...` lines in `.htaccess`. The static `.xml` files then
> take over at the same URLs, and you are back to needing a rebuild per
> post — but nothing breaks.

### If Sanity is ever unreachable

The site falls back to the five posts bundled in `src/data/blogPosts.json`, so
the blog never renders empty. Nothing to configure — it is automatic.

---

## Updating the Studio

Only needed after changing files in `studio/`:

```powershell
npm run studio:deploy
```

---

## A note on the images

Skipping `images/` solves the *upload* problem, but not the *visitor* one.

`build/images/` is **456 MB** across 259 files — 33 of them over 5 MB, the
largest 27 MB. They are unresized camera originals, several 6000+ pixels wide,
displayed in boxes a few hundred pixels across. The app code by comparison is
**470 KB gzipped**.

Those files are still being served to every visitor. Page speed is a Google
ranking factor, and a page pulling a 19 MB hero image will fail Core Web Vitals
no matter how good the meta tags and structured data are.

Resizing them to their display dimensions would cut the folder to roughly
20–30 MB with no visible quality difference — and would then make
`--with-images` deploys trivial too. Worth doing when there is time.
