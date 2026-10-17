# Vayucred website

This is the working nine-page website for the full rebuild. The brand book is at ../../Brand-Book/index.html; the asset catalogue is at ../index.html. The website uses the complete Air & Canopy palette, the approved connected-system mark, and the final Fraunces + DM Sans typography system.

Read [WORKFLOW.md](WORKFLOW.md) for the design direction, implementation phases, current status and launch gates.

## Run locally

Use Node 22.13 or newer. From this directory:

```sh
npm ci
npm run dev
```

The existing dev script defaults to http://localhost:5173. Use the address printed by the process. Stop it with Control-C. To use another port: `npm run dev -- --port 5175`.

```sh
npm run lint
npx tsc --noEmit
npm run qa:content
npm run qa:search
npm run build
npm run build:hostinger
```

The project retains its Vinext/Vite preview scaffold. `npm run build:hostinger` creates the static `out/` directory for Hostinger Business Web Hosting and copies the Apache redirect/security configuration into it. Staging builds must omit `NEXT_PUBLIC_ALLOW_INDEXING=true`; the production build must set it explicitly after launch approval. Copy `.env.production.example` to `.env.production.local` only for an approved production build and add search-engine verification tokens when available.

## GitHub Pages staging

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the `main` branch to the repository-scoped URL `/vayucred-staging/`. It sets the correct base path, canonical staging URL and `noindex` crawl controls automatically. In the GitHub repository settings, Pages must use **GitHub Actions** as its source.

## Where to edit

- app/page.tsx: homepage.
- app/**/page.tsx: the other eight routes.
- components/site-shell.tsx: navigation, typeset name and footer.
- app/globals.css: light website layout and responsive rules.
- app/brand-tokens.css: generated local copy of ../tokens/brand-tokens.css.
- public/fonts/: self-hosted Fraunces and DM Sans with licence text.
- public/brand/: approved source logo and deployment-ready SVG mark.
- build/: required framework source files; do not delete this directory as build output.
- scripts/: development, build and content checks.
- docs/launch-operations.md: launch, enquiry handling, measurement and rollback runbook.
- docs/launch-readiness-2026-10-09.md: evidence-based technical verdict and external launch gates.
- docs/lead-register-template.csv: copy-only template for consistent enquiry ownership and follow-up.
- docs/campaign-register-template.csv: copy-only template for UTM and outreach attribution.
- docs/enquiry-response-templates.md: approved starting points for acknowledgement and qualification replies.

Canonical palette: ../tokens/brand-tokens.json. The website carries its own generated CSS and font files for deployment.

The existing package lock is preserved. Unused starter UI widgets have been removed from the active source; installed dependency versions have not been changed during this visual/folder pass.

## Current preview behaviour

Nine routes: /, /asset-owners, /buyers, /evidence-infrastructure, /methodology, /about, /contact, /privacy, /terms. Contact is email-only through hello@vayucred.com, with an additional investor/partner subject link. The homepage keeps project owners and buyers primary and adds an investor/partner section linked to About and Contact. All routes have production canonicals and launch-ready metadata. Indexing is disabled by default for local and staging builds and enabled only with `NEXT_PUBLIC_ALLOW_INDEXING=true`. The project includes Open Graph/Twitter metadata, Organization/WebSite structured data, an environment-aware sitemap and robots route, `llms.txt`, a manifest, the approved browser icon and temporary brand-safe social artwork.

Read ../../Brand-Book/website-plan.md for remaining content facts and launch decisions. Focus areas, service scope, audience priority, founders, legal entity, registered office and public email are confirmed. SCADA and digital MRV are explicitly in development. Privacy and Terms now reflect the email-only, Hostinger-hosted launch setup and retain a counsel-review recommendation. No analytics, newsletter or active intake form is enabled. The launch runbook deliberately recommends a cookie-free initial launch until an analytics owner, measurement ID and consent approach are approved.
