import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  FileCheck2,
  Gauge,
  Handshake,
  Layers3,
  MapPin,
  Radar,
} from "lucide-react";

import { BoundaryNote, InnerPage } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About Vayucred — Project-led Carbon Market Support",
  description: "Why Vayucred exists, what it handles, and how it connects Solar, Biogas/CBG and Biochar projects with carbon-market pathways.",
  path: "/about",
});

const pathway = [
  "Real project",
  "Available records",
  "Assessment",
  "Aggregation & monitoring",
  "Independent processes",
  "Market conversation",
];

const services = [
  ["01", "Assessment", "Review the activity, available records, potential pathway and questions that need resolution.", FileCheck2],
  ["02", "Aggregation", "Bring projects together where individual assessments and the applicable pathway support it.", Layers3],
  ["03", "Monitoring", "Work with project teams on the operational information needed to follow project activity.", Gauge],
  ["04", "Market support", "Support buyer introductions or credit sales according to the project and engagement.", Handshake],
] as const;

export default function AboutPage() {
  return (
    <InnerPage
      eyebrow="About Vayucred"
      title="A clearer path from climate activity to carbon markets."
      intro="Vayucred works with Solar, Biogas/CBG and Biochar projects, helping project owners organise the pathway and helping buyers understand the evidence behind the opportunity."
      variant="about"
    >
      <section className="section shell about-origin" aria-labelledby="about-origin-title">
        <p className="kicker">Why Vayucred exists</p>
        <div>
          <h2 id="about-origin-title">Environmental value can be real—and still difficult to bring to market.</h2>
          <p className="about-origin-question">If a project is creating a measurable environmental benefit, why is participation in the carbon market still so difficult?</p>
          <p>Because the activity is only the beginning. A workable pathway also needs eligibility assessment, an appropriate methodology, usable records, monitoring, applicable independent processes and a buyer conversation. Vayucred exists to help project owners work through that gap without losing sight of the real project underneath.</p>
        </div>
      </section>

      <section className="about-gap" aria-labelledby="about-gap-title">
        <div className="shell">
          <div className="route-section-heading">
            <p className="kicker">The connection that matters</p>
            <h2 id="about-gap-title">Keep the project connected to the claim.</h2>
            <p>Each step should make the activity, source records, responsibilities and remaining limitations easier to follow.</p>
          </div>
          <ol className="about-pathway" aria-label="Illustrative project-to-market pathway">
            {pathway.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
                {index < pathway.length - 1 ? <ArrowRight aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section shell about-work" aria-labelledby="about-work-title">
        <div className="route-section-heading narrow">
          <p className="kicker">What Vayucred does</p>
          <h2 id="about-work-title">Support across the project-to-market pathway.</h2>
          <p>The role depends on the project and engagement. These four areas are the confirmed service scope.</p>
        </div>
        <div className="about-service-grid">
          {services.map(([number, title, text, Icon]) => (
            <article key={number}>
              <div><span>{number}</span><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="about-project-focus">
          <p>Current project focus</p>
          <span>Solar</span>
          <span>Biogas / CBG</span>
          <span>Biochar</span>
        </div>
      </section>

      <section className="about-technology" aria-labelledby="about-technology-title">
        <div className="shell about-technology-layout">
          <div className="about-technology-mark" aria-hidden="true"><Radar /></div>
          <div>
            <p className="kicker">Technology · In development</p>
            <h2 id="about-technology-title">Technology supports the field work. It is not the company story.</h2>
            <p>Vayucred is developing SCADA and digital MRV capabilities to support monitoring and evidence workflows. No deployed product or launch date is represented here.</p>
          </div>
          <Link href="/evidence-infrastructure">Explore the development direction <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section shell about-team" aria-labelledby="about-team-title">
        <div className="route-section-heading narrow">
          <p className="kicker">Founding team</p>
          <h2 id="about-team-title">Building Vayucred from Hyderabad.</h2>
          <p>The founding team is developing Vayucred&apos;s project-led approach across carbon-market support and evidence infrastructure.</p>
        </div>
        <div className="about-team-grid">
          <article>
            <div className="team-monogram" aria-hidden="true">RR</div>
            <div><p>Founder</p><h3>Rishwan Reddy</h3><a href="https://www.linkedin.com/in/rishwan-reddy/" rel="noreferrer" target="_blank">View LinkedIn profile <ArrowUpRight aria-hidden="true" /></a></div>
          </article>
          <article>
            <div className="team-monogram" aria-hidden="true">SP</div>
            <div><p>Co-founder</p><h3>Sai Puneeth Bandi</h3><a href="https://www.linkedin.com/in/saipuneethbandi/" rel="noreferrer" target="_blank">View LinkedIn profile <ArrowUpRight aria-hidden="true" /></a></div>
          </article>
        </div>
        <p className="team-photo-note">Founder portraits will replace the monograms when stable original image files are added to the website asset library.</p>
      </section>

      <section className="company-facts" aria-label="Confirmed company facts">
        <div className="shell company-facts-layout">
          <div className="company-location"><MapPin aria-hidden="true" /><p><span>Based in</span>Hyderabad, India</p></div>
          <div><p><span>Company</span>Vayucred is a brand of RASYLONN TECHNOLOGIES PRIVATE LIMITED.</p></div>
          <div><p><span>Primary audiences</span>Project owners and carbon buyers.</p></div>
        </div>
      </section>

      <section className="section shell about-boundary">
        <BoundaryNote>
          Vayucred supports projects and market conversations. Applicable validation, verification, registration, certification and issuance decisions remain with the relevant independent bodies and registries.
        </BoundaryNote>
      </section>

      <section className="about-partners" id="investors-partners" aria-labelledby="investors-partners-title">
        <div className="shell about-partners-layout">
          <div><p className="kicker">Investors &amp; partners</p><h2 id="investors-partners-title">Help build stronger connections between projects and credible demand.</h2></div>
          <div><p>We welcome conversations with investors and partners interested in Vayucred’s company direction, project focus and developing technology.</p><Button asChild size="lg"><Link href="/contact#investor-enquiry">Start an investor conversation <ArrowUpRight aria-hidden="true" /></Link></Button><Link className="about-partner-link" href="/contact#partner-enquiry">Or discuss a partnership <ArrowUpRight aria-hidden="true" /></Link></div>
        </div>
      </section>
    </InnerPage>
  );
}
