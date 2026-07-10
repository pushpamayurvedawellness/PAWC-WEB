# Pushpam Blog CMS

The site now includes a Decap CMS-ready admin area at `/admin/`.

Important: GitHub Pages is static hosting. A real credentialed CMS needs GitHub OAuth or another identity provider. Do not use a hardcoded browser password; it is not secure.

Recommended setup:

1. Keep the repository on GitHub.
2. Add a GitHub OAuth app or deploy the site on Netlify/Cloudflare Pages with GitHub authentication.
3. Use `admin/config.yml` as the CMS content model.
4. Blog source files live in `content/blog/`.
5. Regenerate pages with:

```powershell
node tools/build_blog.js
```

For a fully automatic CMS, add a GitHub Action that runs the build script when `content/blog/**` changes and commits generated `blog/*.html`, `blog.html`, `sitemap.xml`, and `llms.txt`.
