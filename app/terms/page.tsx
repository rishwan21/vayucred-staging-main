import Link from "next/link";

import { BoundaryNote, InnerPage } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Website Terms — Vayucred",
  description: "Terms governing access to and use of the Vayucred informational website.",
  path: "/terms",
});

const office = "P. No. 36, PN Reddy Colony, Hasthinapur, Karmanghat, Saroornagar, K. V. Rangareddy – 500079, Telangana, India";

export default function TermsPage() {
  return (
    <InnerPage
      eyebrow="Website terms"
      title="Terms for using this website."
      intro="These terms apply when you access or use the public Vayucred website."
      variant="legal"
    >
      <div className="legal-status-strip"><div className="shell"><span>Last updated</span><strong>8 October 2026</strong></div></div>
      <section className="section shell legal-layout legal-document">
        <div className="legal-copy">
          <section><span>01</span><div><h2>About Vayucred</h2><p>Vayucred is a brand of RASYLONN TECHNOLOGIES PRIVATE LIMITED, with its registered office at {office}. Questions about these terms may be sent to <a href="mailto:hello@vayucred.com">hello@vayucred.com</a>.</p></div></section>
          <section><span>02</span><div><h2>Informational purpose</h2><p>The website describes Vayucred&apos;s project focus, service direction and developing evidence-infrastructure capabilities. Website content is general information only. It is not an offer, registry record, certification, prospectus, investment recommendation or guarantee that any project will qualify for, generate or sell carbon credits.</p></div></section>
          <section><span>03</span><div><h2>No professional advice</h2><p>Nothing on the website is legal, tax, accounting, financial, investment, engineering, validation, verification or registry advice. Users should obtain advice appropriate to their project and jurisdiction before acting on website information.</p></div></section>
          <section><span>04</span><div><h2>Independent decisions and engagements</h2><p>Eligibility, methodology applicability, validation, verification, registration, certification and issuance decisions remain with the relevant independent bodies and registries. Any services supplied by Vayucred will be governed by a separate written agreement. An email exchange or website visit does not by itself create an advisory, fiduciary, partnership or client relationship.</p></div></section>
          <section><span>05</span><div><h2>Acceptable use</h2><p>You may use the website for lawful informational and business-enquiry purposes. You must not attempt to disrupt or gain unauthorised access to the website, introduce malicious code, misuse another person&apos;s identity, scrape the service in a manner that impairs it, or use the content to make misleading claims about Vayucred, a project, a credit or an independent assurance process.</p></div></section>
          <section><span>06</span><div><h2>Intellectual property</h2><p>Unless stated otherwise, the website&apos;s text, visual system, graphics and original materials are owned by or licensed to RASYLONN TECHNOLOGIES PRIVATE LIMITED. You may view and share links to public pages for legitimate informational purposes. No other licence is granted, and substantial reproduction, modification, commercial republication or use of Vayucred branding requires prior written permission.</p></div></section>
          <section><span>07</span><div><h2>Accuracy, availability and external links</h2><p>We aim to keep the website useful and current, but information may be incomplete, change without notice or contain errors. We do not promise uninterrupted availability. External links are provided for convenience; Vayucred does not control or endorse all content, security or practices of third-party services.</p></div></section>
          <section><span>08</span><div><h2>Responsibility and liability</h2><p>To the extent permitted by applicable law, use of the website is at your own risk. RASYLONN TECHNOLOGIES PRIVATE LIMITED will not be responsible for indirect, incidental, special or consequential loss arising solely from reliance on general website content or temporary unavailability. Nothing in these terms excludes liability that cannot lawfully be excluded or limited.</p></div></section>
          <section><span>09</span><div><h2>Privacy</h2><p>Our <Link href="/privacy">Privacy Notice</Link> explains how website, hosting and email-enquiry information is handled. Do not send confidential project evidence, credentials, sensitive personal information or commercially sensitive files until an approved secure intake method is available.</p></div></section>
          <section><span>10</span><div><h2>Governing law and disputes</h2><p>These website terms are governed by the laws of India. Subject to any mandatory legal rights or forum requirements, courts with jurisdiction in Hyderabad, Telangana will have exclusive jurisdiction over disputes concerning use of this website. We encourage users to contact us first so concerns can be addressed promptly.</p></div></section>
          <section><span>11</span><div><h2>Changes</h2><p>We may update these terms to reflect changes to the website, company operations or applicable requirements. The date above identifies the current version. Continued use after an update means the revised terms apply to later use.</p></div></section>
        </div>
        <BoundaryNote>
          Carbon-market requirements vary by project, methodology, programme and jurisdiction. Website information cannot replace project-specific assessment or independent review.
        </BoundaryNote>
        <p className="legal-review-note">These terms are a practical early-stage website baseline and should be reviewed by qualified Indian counsel before the public production launch and after material service changes.</p>
      </section>
    </InnerPage>
  );
}
