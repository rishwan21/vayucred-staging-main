import Link from "next/link";
import { ArrowUpRight, ClipboardList, DatabaseZap, FileClock, GitCompareArrows, Radar, ScanLine, ShieldCheck } from "lucide-react";

import { BoundaryNote, InnerPage } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "SCADA & Digital MRV in Development — Vayucred",
  description: "Vayucred is developing SCADA and digital MRV systems to support project monitoring and evidence workflows.",
  path: "/evidence-infrastructure",
});

const layers = [
  ["01", "Source capture", "Identify source systems, record ownership, collection frequency and original formats.", Radar],
  ["02", "Identity and provenance", "Connect each record to the relevant asset, device, period and responsible party.", ScanLine],
  ["03", "Reconciliation", "Compare sources, record exceptions and preserve the history of corrections.", GitCompareArrows],
  ["04", "Calculation mapping", "Connect bounded inputs to methodology logic, assumptions, exclusions and uncertainty.", DatabaseZap],
  ["05", "Document control", "Organise versions, approvals, source references and unresolved questions.", FileClock],
  ["06", "Process support", "Prepare material for applicable independent, registry and commercial workflows.", ClipboardList],
  ["07", "Buyer record", "Present origin, method, assurance state, limitations and intended use in a legible form.", ShieldCheck],
] as const;

export default function EvidenceInfrastructurePage() {
  return (
    <InnerPage
      eyebrow="Technology · In development"
      title="Tools that serve the project evidence."
      intro="Vayucred is developing supervisory control and data acquisition (SCADA) and digital measurement, reporting and verification (digital MRV) systems to support monitoring and the records behind carbon-market activity."
      variant="technology"
    >
      <section className="technology-foundation" aria-labelledby="technology-foundation-title">
        <div className="shell">
          <div className="route-section-heading technology-heading">
            <p className="kicker">Development focus</p>
            <h2 id="technology-foundation-title">Two connected capabilities.<br />One project-led purpose.</h2>
            <p>These descriptions communicate direction, not an available software product or committed launch date.</p>
          </div>
          <div className="technology-capability-grid">
            <article id="scada">
              <div><span className="status-dot" />In development</div>
              <Radar aria-hidden="true" />
              <p>Operational layer</p>
              <h3>SCADA</h3>
              <p>Intended to support the collection and organisation of operational project data.</p>
            </article>
            <article id="digital-mrv">
              <div><span className="status-dot" />In development</div>
              <ShieldCheck aria-hidden="true" />
              <p>Evidence layer</p>
              <h3>Digital MRV</h3>
              <p>Intended to support measurement, reporting and evidence preparation for applicable review processes.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell evidence-workflow" aria-labelledby="workflow-title">
        <div className="route-section-heading narrow">
          <p className="kicker">Development direction</p>
          <h2 id="workflow-title">A record should remain connected to its origin.</h2>
          <p>The stages below describe the evidence workflow Vayucred is working towards. They are not a list of deployed product features.</p>
        </div>
        <ol className="evidence-layer-list">
          {layers.map(([number, title, text, Icon]) => (
            <li key={number}>
              <span>{number}</span>
              <div className="evidence-layer-icon"><Icon aria-hidden="true" /></div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="project-first-note" aria-labelledby="project-first-title">
        <div className="shell">
          <p className="kicker">The governing idea</p>
          <h2 id="project-first-title">Technology should make project evidence easier to follow—not make the project disappear.</h2>
          <p>The asset, activity, people, source records and independent processes remain visible throughout the workflow.</p>
        </div>
      </section>

      <section className="section shell technology-boundary">
        <BoundaryNote>
          Both SCADA and digital MRV are in development. No launch date or deployed feature set is represented here. Independent validation, verification and issuance decisions remain with the applicable bodies and registries.
        </BoundaryNote>
      </section>

      <section className="route-cta technology-route-cta">
        <div className="shell route-cta-inner">
          <div><p className="kicker">Project monitoring</p><h2>Start with the activity and the records already available.</h2></div>
          <Button asChild size="lg"><Link href="/contact#project-enquiry">Discuss a project <ArrowUpRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
    </InnerPage>
  );
}
