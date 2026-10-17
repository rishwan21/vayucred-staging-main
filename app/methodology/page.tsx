import Link from "next/link";
import { ArrowUpRight, BadgeCheck, FileClock, GitCompareArrows, Layers3, Scale, ScanSearch } from "lucide-react";

import { BoundaryNote, InnerPage } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Methodology & Integrity — Vayucred",
  description: "Vayucred’s working principles for eligibility, calculation boundaries, evidence provenance and instrument separation.",
  path: "/methodology",
});

const principles = [
  ["01", "Eligibility before aggregation", "Bundling projects does not manufacture eligibility. Screen the underlying activities first.", ScanSearch],
  ["02", "Conservative calculations", "Document baseline, project, leakage, buffer, exclusions and uncertainty rather than reducing the result to a shortcut.", Scale],
  ["03", "Traceable provenance", "Preserve the relationship between every material input, its source, time period and changes.", FileClock],
  ["04", "Explicit independent roles", "Describe who validates, verifies, registers, certifies or issues without assigning those roles to Vayucred.", BadgeCheck],
  ["05", "Instrument separation", "Keep carbon credits and I-RECs distinct across eligibility, accounting, claims and buyer use.", Layers3],
  ["06", "Claims follow evidence", "Update public language when capabilities, approvals, rules or source evidence change.", GitCompareArrows],
] as const;

export default function MethodologyPage() {
  return (
    <InnerPage
      eyebrow="Methodology & integrity"
      title="Clear boundaries make credible claims possible."
      intro="Define the instrument, asset, activity, period, source records, methodology, calculation logic and third-party roles before making a market claim."
      variant="methodology"
    >
      <section className="section shell methodology-principles" aria-labelledby="principles-title">
        <div className="route-section-heading narrow">
          <p className="kicker">Working principles</p>
          <h2 id="principles-title">Evidence earns confidence one decision at a time.</h2>
          <p>These principles guide how Vayucred frames project assessment, monitoring and market conversations.</p>
        </div>
        <div className="principle-field">
          {principles.map(([number, title, text, Icon]) => (
            <article key={number}>
              <div><span>{number}</span><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="instrument-comparison" aria-labelledby="instrument-title">
        <div className="shell">
          <div className="route-section-heading">
            <p className="kicker">Instrument distinction</p>
            <h2 id="instrument-title">Different pathways require different evidence.</h2>
            <p>Similar sustainability language does not make two instruments interchangeable.</p>
          </div>
          <div className="instrument-comparison-grid">
            <article>
              <span>01 / Carbon credits</span>
              <h3>Eligibility and additionality are foundational.</h3>
              <p>The activity, methodology, baseline, legal rights and applicable independent process must be evaluated before issuance can be contemplated.</p>
            </article>
            <article>
              <span>02 / I-RECs</span>
              <h3>Energy attributes follow a different framework.</h3>
              <p>Registration, metering, ownership, vintage and buyer claims follow instrument-specific requirements and should not be described as carbon credits.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell methodology-boundary">
        <BoundaryNote>
          The site provides general educational context, not legal, verification, registry, accounting or investment advice.
        </BoundaryNote>
        <p><Link href="/buyers">See the buyer review framework <ArrowUpRight aria-hidden="true" /></Link></p>
      </section>
    </InnerPage>
  );
}
