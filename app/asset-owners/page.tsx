import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardCheck,
  Database,
  FileSearch,
  Leaf,
  Scale,
  Sprout,
  Sun,
  Waypoints,
  Workflow,
} from "lucide-react";

import { BoundaryNote, InnerPage } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Solar, Biogas/CBG & Biochar Projects — Vayucred",
  description: "Assessment, aggregation, monitoring and market support for Solar, Biogas/CBG and Biochar project owners.",
  path: "/asset-owners",
});

const focusAreas = [
  ["Solar", "Generation records, asset context and the intended market pathway.", Sun, "solar"],
  ["Biogas / CBG", "Feedstock, operating activity and monitoring shaped around the project.", Sprout, "biogas"],
  ["Biochar", "Feedstock, production process, end use and the records connecting them.", Leaf, "biochar"],
] as const;

const stages = [
  ["01", "Understand", "Clarify the project, activity, location, operating status and intended pathway.", Waypoints],
  ["02", "Assess", "Review the project and available records to identify potential fit and open questions.", Scale],
  ["03", "Aggregate", "Consider bringing projects together where individual assessments and the applicable pathway support it.", Database],
  ["04", "Monitor", "Work with project teams on the operational information needed to monitor activity.", FileSearch],
  ["05", "Introduce", "Support introductions between projects and buyers around their requirements.", ClipboardCheck],
  ["06", "Support sales", "Handle credit sales according to the engagement and the status of the credits involved.", Workflow],
] as const;

const firstConversation = [
  ["Project", "What the project does, where it operates and its current status."],
  ["Records", "The operational information already captured and who is responsible for it."],
  ["Pathway", "Any methodology, programme or market route already being considered."],
  ["Questions", "The eligibility, evidence or commercial questions that still need answers."],
];

export default function AssetOwnersPage() {
  return (
    <InnerPage
      eyebrow="For project owners"
      title="Carbon projects begin on the ground."
      intro="Vayucred works with Solar, Biogas/CBG and Biochar projects through assessment, aggregation and monitoring, with buyer introductions or credit sales according to the engagement."
      variant="projects"
    >
      <section className="project-focus-band" aria-labelledby="project-focus-title">
        <div className="shell">
          <div className="route-section-heading">
            <p className="kicker">Project families</p>
            <h2 id="project-focus-title">Different activities need different evidence.</h2>
            <p>We begin with the physical project and the records it can support—not a generic credit template.</p>
          </div>
          <div className="route-focus-grid">
            {focusAreas.map(([title, text, Icon, tone], index) => (
              <article className={tone} id={tone === "biogas" ? "biogas-cbg" : tone} key={title}>
                <div><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell owner-pathway" id="project-pipeline" aria-labelledby="owner-pathway-title">
        <div className="route-section-heading narrow">
          <p className="kicker">Owner pathway</p>
          <h2 id="owner-pathway-title">First understand the activity. Then shape the pathway.</h2>
          <p>Aggregation, software and documentation cannot repair an ineligible underlying activity. Screening comes first.</p>
        </div>
        <ol className="route-stage-list">
          {stages.map(([number, title, text, Icon]) => (
            <li key={number}>
              <span>{number}</span>
              <div className="route-stage-icon"><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <BoundaryNote>
          Registration, validation, verification, certification, and issuance decisions remain with the applicable independent bodies and registries.
        </BoundaryNote>
      </section>

      <section className="conversation-section" aria-labelledby="conversation-title">
        <div className="shell conversation-layout">
          <div>
            <p className="kicker">A useful first conversation</p>
            <h2 id="conversation-title">Bring what you know. Name what you do not.</h2>
            <p>No polished data room is required for an initial discussion. Start with high-level context and avoid sending sensitive files by email.</p>
          </div>
          <ol>
            {firstConversation.map(([title, text], index) => (
              <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="route-status-note">
        <div className="shell">
          <p className="kicker">Technology status</p>
          <p>Monitoring is part of Vayucred’s service scope. Our SCADA and digital MRV systems are being developed; this page does not describe an available software product.</p>
          <Link href="/evidence-infrastructure">See the development direction <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="route-cta">
        <div className="shell route-cta-inner">
          <div><p className="kicker">Start with what exists</p><h2>Bring the project, intended pathway and available records.</h2></div>
          <Button asChild size="lg"><Link href="/contact#project-enquiry">Discuss a project</Link></Button>
        </div>
      </section>
    </InnerPage>
  );
}
