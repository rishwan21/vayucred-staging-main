# Vayucred website launch operations

This runbook covers the first public release of `https://vayucred.com`. It keeps the initial website simple: static pages, one monitored email channel, no enquiry form and no advertising tracker.

## Launch gates

- The production build uses `NEXT_PUBLIC_SITE_URL=https://vayucred.com` and `NEXT_PUBLIC_ALLOW_INDEXING=true` with no base path.
- `www.vayucred.com` redirects permanently to `https://vayucred.com`.
- All nine public routes, `robots.txt`, `sitemap.xml`, `llms.txt`, the social image and the browser icon return successfully.
- Privacy Notice and Website Terms have founder approval. Qualified Indian counsel review remains recommended because the documents are an operational startup baseline, not legal advice.
- `hello@vayucred.com` is monitored and its SPF, DKIM and DMARC records remain valid.
- A backup of the current production files is available before replacement, and the previous archive is retained for rollback.

## Enquiry workflow

Use `hello@vayucred.com` as the only public intake channel until an approved secure form or CRM is introduced.

1. Acknowledge a new enquiry on the same business day.
2. Record it in one shared lead register; do not copy confidential attachments into the register.
3. Assign one owner and a next-action date.
4. Send a qualified response within two business days, or explain when a fuller response will arrive.
5. Ask senders not to email credentials, sensitive personal information, confidential project evidence or commercially sensitive files. Provide an approved secure channel before requesting such material.

Recommended register fields: received date, contact name, organisation, email, audience (project owner, buyer, investor or partner), sector, request summary, source, UTM campaign, owner, status, next action, next-action date and notes/consent basis.

Use these statuses consistently: `New`, `Acknowledged`, `Qualified`, `Follow-up`, `Closed`, `Not fit`.

## Reach and attribution

The initial launch is intentionally cookie-free. Hostinger traffic reporting can provide a basic operational view without adding a new browser tracker. If GA4 or another analytics service is later approved, update the Privacy Notice and consent approach before enabling it.

Use tagged links in campaigns:

```text
https://vayucred.com/?utm_source=linkedin&utm_medium=organic-social&utm_campaign=launch
```

Use lowercase hyphenated values. Keep a small campaign register containing destination, source, medium, campaign, owner and launch date.

After the public domain is live:

1. Add the domain to Google Search Console and Bing Webmaster Tools.
2. Insert their verification content values into the production environment variables documented in `.env.production.example`, rebuild and redeploy.
3. Submit `https://vayucred.com/sitemap.xml` to both services.
4. Review indexing, crawl errors and branded-search appearance weekly for the first month, then monthly.

Suggested first-month measures: qualified enquiries, response time, enquiry source, project-owner enquiries, buyer enquiries, investor/partner enquiries, indexed pages and search queries. Do not treat raw visits as the primary business outcome.

## Deployment and rollback

Before launch, run:

```sh
npm ci
npm run lint
npx tsc --noEmit
npm run qa:content
npm run qa:search
NEXT_PUBLIC_SITE_URL=https://vayucred.com NEXT_PUBLIC_ALLOW_INDEXING=true npm run build:hostinger
```

Archive the contents of `out/` so `index.html` and `.htaccess` are at the archive root. Back up the current Hostinger site, upload the approved archive, then verify the launch gates above on both desktop and a narrow mobile viewport.

If a material issue appears, restore the previous Hostinger archive, verify the homepage and contact route, and record the cause before attempting another release. Never solve an emergency by deleting the retained backup.

## Operating checks

- Daily for the first week: homepage, contact link, email delivery and certificate status.
- Weekly for the first month: all routes, Search Console/Bing messages, enquiry response times and Hostinger uptime/security notices.
- Monthly: dependency audit, broken-link check, privacy/terms accuracy, DNS authentication and content freshness.
- After any service-model, analytics, form, payment or secure-upload change: reassess privacy, security, retention and legal wording before deployment.
