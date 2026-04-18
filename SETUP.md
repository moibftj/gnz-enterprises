# One-Time Setup — GNZ Enterprises Blog

The site is fully built locally in this folder. Two things are needed to take it live on **www.gnzenterprises.com**: create the GitHub repo, and point DNS.

---

## 1. Create the repo on GitHub (2 minutes)

The scheduled task runner did not have `repo:create` permission on your GitHub connector, so this one step must be done manually.

1. Go to <https://github.com/new>
2. Repository name: **`gnz-enterprises`**
3. Owner: **`moibftj`**
4. Visibility: **Public**
5. **Do not** initialize with a README — this folder already has one.
6. Click **Create repository**.

---

## 2. Push this folder to `main` (1 minute)

Open a terminal in this folder and run:

```bash
git init -b main
git add .
git commit -m "Initial blog setup — 5 articles, sitemap, RSS, CNAME"
git remote add origin https://github.com/moibftj/gnz-enterprises.git
git push -u origin main
```

---

## 3. Enable GitHub Pages (30 seconds)

1. Repo → **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` / `/ (root)`
4. Save. The `CNAME` file already in the repo tells Pages to serve it at `www.gnzenterprises.com`.

---

## 4. Point DNS (5 minutes)

At your DNS provider (Cloudflare, Namecheap, etc.) for the domain **gnzenterprises.com**:

| Type  | Host | Value |
|-------|------|-------|
| CNAME | `www` | `moibftj.github.io` |
| A     | `@`  | `185.199.108.153` |
| A     | `@`  | `185.199.109.153` |
| A     | `@`  | `185.199.110.153` |
| A     | `@`  | `185.199.111.153` |

If you use Cloudflare, set the `www` CNAME to **DNS only** (grey cloud) during the first Pages cert issuance, then toggle back to proxied once HTTPS is green.

Back in **Repo → Settings → Pages**, tick **Enforce HTTPS** as soon as the certificate provisions (usually within 5–15 minutes of DNS propagation).

---

## 5. Submit to Google (3 minutes)

1. Verify the domain in <https://search.google.com/search-console/>
2. Submit `https://www.gnzenterprises.com/sitemap.xml`
3. Request indexing for the homepage and each of the five article URLs.

---

## What's already done

- [x] Landing page with hero, services, schema.org Organization + WebSite
- [x] `/blog/` index with post cards for all five articles
- [x] 5 long-form SEO-optimized articles (each ~1,500–2,500 words)
- [x] `sitemap.xml` listing every URL
- [x] `rss.xml` for RSS readers
- [x] `robots.txt` pointing to the sitemap
- [x] `CNAME` for www.gnzenterprises.com
- [x] Shared `/assets/style.css`
- [x] Article JSON-LD (`Article` + `FAQPage` where relevant)
- [x] Canonical URLs, OpenGraph, Twitter cards, responsive meta viewport

---

## Daily cadence going forward

The scheduled task will ship 5 new articles per day. Each new article needs:

1. A new folder at `blog/<slug>/` with `index.html`.
2. A new `<url>` entry in `sitemap.xml`.
3. A new `<item>` entry in `rss.xml`.
4. A new card at the top of `blog/index.html`.

The existing five articles are all the scaffolding you need — copy any one of them, swap the body, update the meta/title/canonical.
