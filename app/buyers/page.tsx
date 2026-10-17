import Link from "next/link";
import { ArrowUpRight, BadgeCheck, FileSearch, Handshake, ScanSearch } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BoundaryNote, InnerPage } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "For Carbon Buyers — Vayucred",
  description: "Review the origin, methodology, boundaries, assurance and limitations behind a carbon credit opportunity.",
  path: "/buyers",
});

const questions = [
  ["Instrument", "What instrument is being offered, and for which intended use?"],
  ["Origin", "Which asset, activity, location and reporting period does it represent?"],
  ["Records", "How were the source records captured, reconciled and versioned?"],
  ["Calculation", "Which calculation method, assumptions, exclusions and buffers apply?"],
  ["Assurance", "Which independent review has occurred, and what remains pending?"],
  ["Limitations", "What unresolved questions should inform the decision?"],
];

const buyerSupport = [
  ["Understand the need", "Begin with intended use, timing, project preference and the evidence your review process expects.", ScanSearch],
  ["Connect the parties", "Support buyer introductions around relevant project context and engagement requirements.", Handshake],
  ["Keep evidence visible", "Organise the available origin, methodology, assurance state and limitations for discussion.", FileSearch],
] as const;

export default function BuyersPage() {
  return (
    <InnerPage
      eyebrow="For carbon buyers"
      title="Know what sits behind the credit."
      intro="Vayucred supports buyer introductions or credit sales connected to its work across Solar, Biogas/CBG and Biochar. Start with your requirements, intended use and evidence expectations."
      variant="buyers"
    >
      <section className="buyer-supply-band" aria-label="Vayucred project focus">
        <div className="shell">
          <p>Project focus</p>
          <span>Solar</span>
          <span>Biogas / CBG</span>
          <span>Biochar</span>
        </div>
      </section>

      <section className="section shell buyer-review-layout" aria-labelledby="buyer-review-title">
        <div className="buyer-review-intro">
          <p className="kicker">Review framework</p>
          <h2 id="buyer-review-title">Six questions before a claim becomes a decision.</h2>
          <p>A useful record makes the answer, its source and its uncertainty legible. Availability and transaction details belong to the specific engagement; this page is not a live credit listing.</p>
        </div>
        <ol className="buyer-question-list">
          {questions.map(([label, question], index) => (
            <li key={label}>
              <span>0{index + 1}</span>
              <div><p>{label}</p><h3>{question}</h3></div>
              <BadgeCheck aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>

      <section className="buyer-support-section" aria-labelledby="buyer-support-title">
        <div className="shell">
          <div className="route-section-heading">
            <p className="kicker">How Vayucred participates</p>
            <h2 id="buyer-support-title">A market conversation anchored in project context.</h2>
            <p>Vayucred’s role depends on the specific project and engagement. Independent assurance and issuance roles remain separate.</p>
          </div>
          <div className="buyer-support-grid">
            {buyerSupport.map(([title, text, Icon], index) => (
              <article key={title}><span>0{index + 1}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell buyer-boundary">
        <BoundaryNote>
          Carbon credits and I-RECs are distinct instruments. Their eligibility rules, claims, accounting treatment, and buyer uses must be evaluated separately.
        </BoundaryNote>
        <p><Link href="/methodology">Read the instrument and assurance boundaries <ArrowUpRight aria-hidden="true" /></Link></p>
      </section>

      <section className="route-cta buyer-route-cta">
        <div className="shell route-cta-inner">
          <div><p className="kicker">Buyer requirements</p><h2>Define what your internal review needs to see.</h2></div>
          <Button asChild size="lg"><Link href="/contact#buyer-enquiry">Discuss carbon credits</Link></Button>
        </div>
      </section>
    </InnerPage>
  );
}
