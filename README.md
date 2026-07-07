# Vizanti Documentation

Static documentation site for [Vizanti](https://github.com/MoffKalast/vizanti), deployed with GitHub Pages. No build step — markdown pages are rendered client-side.

_Except where otherwise noted, this documentation is licensed under the BSD 3-Clause License._

## Structure

- `index.html` — the entire site shell (sidebar, styling, markdown rendering via marked.js, syntax highlighting via highlight.js)
- `nav.js` — sidebar structure, the only file to touch when adding/reordering pages
- `pages/*.md` — the content, plain GitHub-flavored markdown
- `assets/` — icons and images from the Vizanti client, referenced as `assets/<name>.svg` from any page

## Adding a page

1. Create `pages/my-page.md` (or `pages/widgets/my-widget.md`)
2. Add `{ id: "my-page", title: "My Page" }` to the appropriate group in `nav.js`

Internal links between pages just use relative markdown paths (`[link](configuration.md)`, `[link](widgets/waypoints.md)`) and are rewritten to hash routes automatically.

## Deploying

Push to the repo, then in **Settings → Pages** set the source to _Deploy from a branch_, branch `main`, folder `/ (root)`. Done.

## Previewing locally

Any static file server works, e.g.:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` directly via `file://` won't work because the page fetches markdown files.
