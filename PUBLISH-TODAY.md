# Publish today — the 60-second path (2026-04-23)

Today's batch is written, HTML-rendered, and wired into `sitemap.xml`, `rss.xml`, and `blog/index.html`. Branch: `publish-2026-04-23`. Opens a PR into `main`.

## Today's 5 new URLs

1. https://www.gnzenterprises.com/blog/web-design-mistakes-to-avoid/
2. https://www.gnzenterprises.com/blog/web-design-animation/
3. https://www.gnzenterprises.com/blog/microcopy-in-web-design/
4. https://www.gnzenterprises.com/blog/b2b-web-design/
5. https://www.gnzenterprises.com/blog/web-design-for-startups/

## Keyword map (today's batch)

| Slug | Primary keyword | Intent | Competition |
|---|---|---|---|
| `web-design-mistakes-to-avoid` | web design mistakes | Informational / commercial | Mid |
| `web-design-animation` | web design animation | Informational | Mid |
| `microcopy-in-web-design` | microcopy in web design | Informational | Low |
| `b2b-web-design` | b2b web design | Commercial | High (worth it) |
| `web-design-for-startups` | web design for startups | Commercial | Mid |

All five reinforce the primary head term "web design" via natural secondary usage, internal linking, and pillar topology.

## 1. Review & merge the PR

Open the PR titled **"Publish 2026-04-23: 5 new essays (mistakes, animation, microcopy, B2B, startups)"** — review, then squash-merge into `main`. GitHub Pages rebuilds automatically.

## 2. Tell Google about today's URLs (do this after merge)

1. Go to https://search.google.com/search-console
2. URL Inspection → paste each new URL → **Request Indexing** for:
   - https://www.gnzenterprises.com/blog/web-design-mistakes-to-avoid/
   - https://www.gnzenterprises.com/blog/web-design-animation/
   - https://www.gnzenterprises.com/blog/microcopy-in-web-design/
   - https://www.gnzenterprises.com/blog/b2b-web-design/
   - https://www.gnzenterprises.com/blog/web-design-for-startups/
3. Ping the sitemap (optional — IndexNow is faster if configured):

```bash
curl "https://www.google.com/ping?sitemap=https://www.gnzenterprises.com/sitemap.xml"
curl "https://www.bing.com/ping?sitemap=https://www.gnzenterprises.com/sitemap.xml"
```

## 3. That's it

For the deeper indexing playbook (IndexNow, Bing Webmaster, E-E-A-T, rich results testing, weekly hygiene pass), see `INDEXING.md`.
