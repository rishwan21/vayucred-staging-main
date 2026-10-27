# Search grader follow-up — 25 October 2026

The report flags homepage content, SSL and low organic discovery. Source changes expand the visible project guidance, link to detailed service pages, generate FAQ structured data from the displayed answers, and align canonical/social URLs with the trailing-slash sitemap. Homepage statistics now contain their correct values before JavaScript runs and have stable accessible text.

`npm run qa:export` checks the built HTML for all nine routes, sitemap/canonical parity, indexing controls, FAQ parity, content and statistics. Run it after `npm run build`. For a staging build, pass the same `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_ALLOW_INDEXING=false` to the build and QA commands.

The upstream security updates are preserved. React and React DOM are aligned to the server-rendering package's required version, and the dependency lockfile is refreshed so clean installs use those updates.

On 27 October, the long project-guidance section below the contact section was removed from the homepage. The existing project cards, service journey, FAQs and detailed service pages remain. Export QA now checks that the project families and services appear in the initial HTML rather than enforcing a homepage word count.

## HTTPS

Live checks on 25 October returned HTTPS 200 for `https://vayucred.com/`, with successful certificate validation. `https://www.vayucred.com/` and `http://vayucred.com/` returned 301 to the canonical HTTPS address. The screenshot's certificate warning was not reproduced. These checks do not constitute a full TLS configuration audit.

The Apache configuration adds proxy-aware HTTPS redirects and HSTS for the current hostname. It does not opt other subdomains into HSTS or request preload. A certificate must be installed and renewed by the hosting provider; an HTTP redirect cannot repair a certificate. `.htaccess` applies to Apache-compatible static hosting. For the standalone Node deployment, configure HTTPS redirects and equivalent headers at the hosting/CDN layer.

## After deployment

1. Check HTTPS, redirect behavior, `/robots.txt` and `/sitemap.xml` on the public domain. Production should allow crawling; staging should remain blocked.
2. Add the actual Google/Bing ownership tokens through the existing verification environment variables, rebuild, and submit the sitemap in the respective webmaster accounts.
3. Rerun the grader after the deployed pages are recrawled. Content length alone does not guarantee a higher score or search ranking.
4. Grow discovery through accurate company profiles, relevant editorial coverage and useful project material. Backlinks, rankings and organic referrals require external activity and cannot be created by metadata changes alone.
