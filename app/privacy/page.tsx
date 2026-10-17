import { BoundaryNote, InnerPage } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy Notice — Vayucred",
  description: "How Vayucred handles website, hosting and email-enquiry information.",
  path: "/privacy",
});

const office = "P. No. 36, PN Reddy Colony, Hasthinapur, Karmanghat, Saroornagar, K. V. Rangareddy – 500079, Telangana, India";

export default function PrivacyPage() {
  return (
    <InnerPage
      eyebrow="Privacy notice"
      title="How we handle information."
      intro="This notice explains the limited personal information handled through the Vayucred website and public email channel."
      variant="legal"
    >
      <div className="legal-status-strip"><div className="shell"><span>Last updated</span><strong>8 October 2026</strong></div></div>
      <section className="section shell legal-layout legal-document">
        <div className="legal-copy">
          <section><span>01</span><div><h2>Who is responsible</h2><p>Vayucred is a brand of RASYLONN TECHNOLOGIES PRIVATE LIMITED. The company is responsible for deciding why and how personal information described in this notice is handled. Our registered office is {office}. Privacy questions and requests may be sent to <a href="mailto:hello@vayucred.com">hello@vayucred.com</a>.</p></div></section>
          <section><span>02</span><div><h2>Information we receive</h2><p>If you email us, we receive your email address, name or organisation details you provide, your message, and any other information you choose to include. Our website does not currently provide user accounts, an enquiry form, newsletter registration, payment flow or file-upload facility.</p><p>Hostinger, our website and email provider, may process routine technical information needed to deliver and protect the service, such as IP address, browser or device information, request timestamps, diagnostic information and security logs.</p></div></section>
          <section><span>03</span><div><h2>Why we use it</h2><p>We use information to respond to enquiries, understand a potential project or business relationship, arrange requested conversations, maintain correspondence, protect the website and email service, prevent misuse, and meet applicable legal obligations. We do not sell personal information or use it for third-party advertising.</p></div></section>
          <section><span>04</span><div><h2>Consent and permitted processing</h2><p>When you contact us voluntarily, we use the information necessary to respond and take the steps you request. Depending on the circumstances, processing may also be necessary for an engagement, compliance with law, security, or another use permitted under applicable law. Where consent is required, you may withdraw it by contacting us; withdrawal does not affect processing already carried out lawfully.</p></div></section>
          <section><span>05</span><div><h2>Service providers and disclosure</h2><p>We use Hostinger for website hosting and business email. Information may also be shared with professional advisers or other service providers where reasonably necessary and subject to appropriate confidentiality or data-protection obligations. We may disclose information where required by law, legal process or a competent authority, or where necessary to protect rights, safety and service security.</p></div></section>
          <section><span>06</span><div><h2>Retention</h2><p>Ordinary enquiries are normally retained for up to 12 months after the last substantive interaction. Information connected with an active or prospective engagement may be retained for the duration of that relationship and for any further period required for legal, accounting, dispute-resolution or legitimate record-keeping purposes. Security and server logs follow the operational retention settings of the hosting provider. We may retain a minimal record of a privacy request for up to three years to demonstrate how it was handled.</p></div></section>
          <section><span>07</span><div><h2>Your choices and rights</h2><p>You may ask us to describe the personal information we hold about you, correct inaccurate or incomplete information, erase information that is no longer required, or address a concern about its use. Rights and exceptions depend on the law applicable to the request and the commencement of relevant provisions. To make a request or raise a grievance, email <a href="mailto:hello@vayucred.com?subject=Privacy%20request">hello@vayucred.com</a>. We may need reasonable information to verify your identity before acting.</p></div></section>
          <section><span>08</span><div><h2>Security and international processing</h2><p>We use reasonable organisational and technical safeguards appropriate to this limited website and email service. No internet transmission or storage system is completely secure. Hostinger and other authorised providers may process information in locations where they operate, subject to their contractual safeguards and applicable law.</p></div></section>
          <section><span>09</span><div><h2>Children, external links and changes</h2><p>This website is intended for business audiences and is not directed to children under 18. Links to external websites, including LinkedIn, are governed by those services&apos; own privacy practices. We may update this notice as the website, services or legal requirements change; the date above will identify the current version.</p></div></section>
        </div>
        <BoundaryNote>
          Please do not email confidential project records, credentials, sensitive personal information or commercially sensitive files until Vayucred provides an approved secure intake method.
        </BoundaryNote>
        <p className="legal-review-note">This operational notice is a startup compliance baseline and should be reviewed periodically by qualified Indian counsel as applicable requirements and the Vayucred service model develop.</p>
      </section>
    </InnerPage>
  );
}
