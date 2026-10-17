# Vayucred website workflow

Updated 11 October 2026. This file tracks the new website itself; brand guidance is in `../../Brand-Book/` and reusable source assets remain in `../`.

## Design objective

Create a warm, credible and human sustainability website—not a black technology or SaaS interface. Cream is the primary canvas; Pine anchors typography and actions; Sky, Moss, Leaf and Sun provide quiet environmental cues. Fraunces carries the editorial voice and DM Sans carries working information.

The website leads with real Solar, Biogas/CBG and Biochar projects. Technology supports that work. It does not become the identity of the company.

## Confirmed public scope

- Focus areas: Solar, Biogas/CBG and Biochar.
- Current support: assessment, aggregation, monitoring, and buyer introductions or credit sales according to the engagement.
- SCADA and digital MRV: in development.
- Primary audiences: project owners and carbon buyers.
- Additional audiences: investors and partners.
- Company details: Vayucred, a brand of RASYLONN TECHNOLOGIES PRIVATE LIMITED; Hyderabad, India; `hello@vayucred.com`.

Do not publish invented project metrics, earnings estimates, clients, certifications, methodology approvals, prices or technology deployment claims.

## Information architecture

| Route | Role |
|---|---|
| `/` | Brand narrative, focus areas, services and audience pathways |
| `/asset-owners` | Carbon-project support and owner responsibilities |
| `/buyers` | Buyer requirements and evidence questions |
| `/evidence-infrastructure` | SCADA and digital MRV direction, clearly marked in development |
| `/methodology` | Instrument and independent-role boundaries |
| `/about` | Company purpose plus investor and partner pathway |
| `/contact` | High-level email enquiry guidance |
| `/privacy` | Privacy notice for the email-only, Hostinger-hosted website |
| `/terms` | Website terms for the current informational scope |

## Build phases

1. **Foundation — complete.** Dedicated `Website/` project, restored 16-colour palette, approved connected-system mark, local Fraunces and DM Sans files, nine routes, claim checks and a recoverable archive.
2. **Homepage design system — complete for review.** Editorial landscape hero, project-family cards, service journey, owner/buyer pathways, evidence principles, developing-technology note and investor/partner route.
3. **Whole-site design pass — complete for review.** Carbon projects, For buyers, Technology, Methodology, About and Contact carry the landscape system and page-specific storytelling. Privacy and Terms use a quieter legal-document treatment.
4. **Content enrichment — partly complete.** Confirmed founder names, roles and LinkedIn links are present. Publishable project examples, supported measurements and approved original founder/project photography remain optional additions.
5. **Search discovery foundation — complete in source.** Production canonicals, Organization/WebSite structured data, sitemap, robots, `llms.txt`, manifest, the approved browser icon and temporary social artwork are present. Indexing is environment-gated so staging stays blocked and production can be enabled deliberately.
6. **Launch preparation — in progress.** Hostinger Business Web Hosting and email are confirmed. Legal copy, registered office and retention baseline are present. Private staging, responsive review and production-host checks remain.

## Review gates

- Keep public content indexable only on the production domain. Duplicate and staging builds must remain `noindex` and crawler-blocked.
- Any change to the shape, sequence or position of website information must preserve one descriptive H1, logical H2/H3 order, crawlable text, answer-first summaries, descriptive internal links, entity consistency, structured-data/content parity and mobile readability. Re-run search QA after the change.
- Run `npm run lint`, `npx tsc --noEmit`, `npm run qa:content`, `npm run qa:search` and `npm run build` after meaningful code changes.
- Review at desktop and mobile widths before accepting a design pass.
- Treat the current live site and the earlier Vercel concept as reference material only. Do not carry over their calculator, earnings claims, black styling or software-dashboard treatment.
- External model or design-tool review is optional. Do not transmit unpublished source files without explicit approval of the exact payload and provider.

## Current review note

The homepage action reads “I need carbon credits.” All nine routes have received the visual pass. Privacy and Terms now use the confirmed Hostinger, email, legal-entity, registered-office, retention and jurisdiction details. Staging remains non-indexable by default; production indexing requires an explicit build flag. Before public launch, review the staging build, obtain counsel review where appropriate, and replace the temporary social artwork once the approved logo lockups have been exported at the required campaign sizes.

About includes the useful origin story from the earlier Vercel concept, confirmed services and project focus, developing technology, the founding team, company facts and the investor/partner pathway. Unconfirmed pilot claims, additional project types and product-stage claims remain excluded.
