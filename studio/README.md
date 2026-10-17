# Karachi Law Firms — Sanity Studio

The blog for karachilawfirms.pk is managed here. The React site reads published
posts from Sanity at runtime and falls back to a bundled copy of the original
five posts if Sanity is ever unreachable, so the blog cannot go blank.

- **Project ID:** `91ufe034`
- **Dataset:** `production` (public — the site reads it without a token)

---

## First-time setup

```bash
cd studio
npm install
npx sanity login     # opens a browser; use the account that owns project 91ufe034
```

### 1. Push the five existing posts into Sanity

This is a one-off. It uploads every referenced image as a real Sanity asset,
converts each HTML body into Portable Text, and creates one `post` document per
entry.

Preview the conversion without writing anything:

```bash
npm run migrate:blog:dry     # writes studio/migration-preview.json
```

Then do it for real. You need an **Editor** token from
<https://www.sanity.io/manage/project/91ufe034/api#tokens>.

PowerShell (Windows):

```powershell
$env:SANITY_WRITE_TOKEN = "sk...your-token..."
npm run migrate:blog
```

bash / zsh / Git Bash:

```bash
SANITY_WRITE_TOKEN=sk...your-token... npm run migrate:blog
```

The script is safe to re-run: documents use a deterministic `_id`
(`post-<slug>`) and images are matched by original filename before upload, so
you will not get duplicates.

### 2. Allow the website to read the dataset from a browser

In <https://www.sanity.io/manage/project/91ufe034/api#cors-origins>, add these
origins with **credentials disabled**:

- `https://karachilawfirms.pk`
- `https://www.karachilawfirms.pk`
- `http://localhost:3000` (for local development)

Without this the browser blocks the request, the site silently falls back to the
bundled posts, and new posts will not appear.

---

## Everyday use

```bash
npm run dev          # Studio at http://localhost:3333
npm run deploy       # publish Studio to <name>.sanity.studio
```

From the site's root folder you can also run `npm run studio:dev`.

---

## The `post` schema

Grouped into three tabs in the Studio.

### Content
| Field | Notes |
|---|---|
| `title` | 10–120 characters. |
| `slug` | The URL: `/blog/<slug>`. Generated from the title. |
| `excerpt` | Shown on listing cards; also the meta description fallback. |
| `mainImage` | **Alt text required.** Used on the card, post header and breadcrumb. |
| `author` | Name, optional role/credentials and profile URL — feeds Article schema for E-E-A-T. |
| `publishedAt` | A future date keeps the post hidden until then. |
| `updatedAt` | Set when you materially revise a post; emitted as `dateModified`. |
| `body` | Portable Text. Renders as the same h2/h3/p/ul/img markup the old posts used. |
| `featured` | Sorts the post to the top of the listing. |

### SEO
`metaTitle`, `metaDescription` (both length-validated), `focusKeyword`,
`keywords`, `canonicalUrl`, `ogImage`, and a `noIndex` toggle. Everything falls
back sensibly: no meta title → the post title; no meta description → the
excerpt; no canonical → `https://karachilawfirms.pk/blog/<slug>`.

### Related & FAQ
`categories`, `tags`, `relatedServices` (internal links rendered under the post)
and `faqs`. FAQs are emitted as **FAQPage** structured data, which is the
cheapest route to a rich result for this kind of content.

Each post also emits **BlogPosting** and **BreadcrumbList** JSON-LD
automatically.

---

## How the fallback works

`src/lib/sanity.js` in the React app:

1. Queries Sanity with a 6-second timeout.
2. On success, renders the Sanity posts.
3. On failure, timeout, empty result, or a missing slug, serves
   `src/data/blogPosts.json` — the original five posts, bundled into the JS.

Pages seed their state from the bundled copy, so real content paints on first
render and the Sanity response swaps in when it arrives. A post only shows "not
found" when neither source has that slug.

**Keep `src/data/blogPosts.json` as-is.** It is the safety net, not the live
source. Once the migration has run, edit posts in the Studio; the bundled file
just stops being what visitors see.

---

## Sitemap

`npm run sitemap` (from the site root) regenerates `public/sitemap.xml` with all
static routes plus every published blog URL, pulled live from Sanity. It also
runs automatically before `npm run build`, and falls back to the bundled posts —
and never fails the build — if Sanity is unreachable.
