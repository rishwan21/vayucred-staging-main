"use client";

import {
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  FileCheck2,
  Gauge,
  Handshake,
  Layers3,
  Leaf,
  Sprout,
  Sun,
  TrendingUp,
  Users,
  Wind,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { organizationSchema } from "@/lib/site";

const focusAreas = [
  {
    number: "01",
    title: "Solar",
    label: "Clean energy",
    text: "Projects converting sunlight into measurable electricity and the records needed to examine a carbon pathway.",
    icon: Sun,
    tone: "solar",
  },
  {
    number: "02",
    title: "Biogas / CBG",
    label: "Waste to value",
    text: "Projects recovering organic waste streams for biogas or compressed biogas, with monitoring shaped around the activity.",
    icon: Sprout,
    tone: "biogas",
  },
  {
    number: "03",
    title: "Biochar",
    label: "Durable carbon",
    text: "Projects transforming suitable biomass into biochar, with attention to feedstock, process and end-use evidence.",
    icon: Leaf,
    tone: "biochar",
  },
];

const serviceSteps = [
  {
    number: "01",
    title: "Assess",
    text: "Review the project, available records and potential carbon-market pathway.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "Aggregate",
    text: "Bring projects together where individual assessments and the applicable pathway support it.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Monitor",
    text: "Work with project teams on the operational information needed to follow project activity.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Connect",
    text: "Support buyer introductions or credit sales according to the project and engagement.",
    icon: Handshake,
  },
];

const principles = [
  "Evidence before claims",
  "Eligibility before aggregation",
  "Clear calculation boundaries",
  "Independent assurance roles",
];

const stats = [
  { number: 3, suffix: "+", label: "Project families", sub: "Solar · Biogas / CBG · Biochar", icon: Wind },
  { number: 100, suffix: "%", label: "Evidence-led approach", sub: "Every assessment starts with the project", icon: TrendingUp },
  { number: 4, suffix: "", label: "Service stages", sub: "Assess → Aggregate → Monitor → Connect", icon: Gauge },
  { number: 2, suffix: "", label: "Founders", sub: "Based in Hyderabad, India", icon: Users },
];

const faqs = [
  {
    q: "What types of projects does Vayucred work with?",
    a: "Vayucred currently focuses on three project families: Solar (clean energy), Biogas/CBG (waste-to-value), and Biochar (durable carbon). Each pathway has different records, boundaries and requirements, and we begin by understanding those differences.",
  },
  {
    q: "Does Vayucred issue or certify carbon credits?",
    a: "No. Vayucred supports projects and market conversations. Applicable validation, verification, registration, certification and issuance decisions remain with the relevant independent bodies and registries. We help project owners organise the pathway — not shortcut it.",
  },
  {
    q: "How does the engagement process typically start?",
    a: "It starts with the project — the asset, the activity, the available records and the people responsible. Send a high-level description to hello@vayucred.com. Do not attach sensitive project files in the first message. We will review and respond with questions or a next step.",
  },
  {
    q: "Can buyers source carbon credits directly through Vayucred?",
    a: "Vayucred can support buyer introductions or credit sales according to the project and engagement. Buyers are encouraged to explore the evidence behind any opportunity — origin, methodology, calculation boundaries, assurance roles and limitations — before procurement.",
  },
  {
    q: "What is the current status of Vayucred's technology products?",
    a: "Vayucred's SCADA and digital MRV capabilities are in active development to support monitoring and evidence workflows. No deployed product or specific launch date is represented on the website. The focus is on the field work first.",
  },
  {
    q: "Is Vayucred accepting new projects right now?",
    a: "Yes. We review projects on an ongoing basis. Project owners can begin a conversation by emailing hello@vayucred.com with a brief description of the project, intended pathway and available records.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(target);
  useEffect(() => {
    if (!start || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame: number;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);
  return count;
}

function StatCard({ number, suffix, label, sub, icon: Icon }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(number, 1600, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="stat-card">
      <div className="stat-icon"><Icon aria-hidden="true" /></div>
      <div className="stat-number"><span aria-hidden="true">{count}{suffix}</span><span className="sr-only">{number}{suffix}</span></div>
      <div className="stat-label">{label}</div>
      <div className="stat-sub">{sub}</div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " faq-open" : ""}`}>
      <button
        className="faq-question"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{q}</span>
        <ChevronDown aria-hidden="true" className="faq-chevron" />
      </button>
      <div className="faq-answer" aria-hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

function ProjectLandscape() {
  return (
    <figure className="landscape" aria-labelledby="landscape-caption">
      <svg
        aria-hidden="true"
        className="landscape-art"
        viewBox="0 0 720 610"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className="air-line air-line-one" d="M80 104C215 22 397 76 519 42c62-18 104-10 141 11" />
        <path className="air-line air-line-two" d="M24 159c123-53 235-29 334 4 108 36 212 31 320-28" />
        <circle className="landscape-sun" cx="578" cy="122" r="62" />
        <path className="hill hill-back" d="M0 361c126-105 222-96 329 2 112-139 249-142 391-17v264H0Z" />
        <path className="hill hill-front" d="M0 438c121-60 246-29 344 46 111-89 235-103 376-25v151H0Z" />

        <g className="solar-field" transform="translate(65 344)">
          <path className="field-line" d="M4 133c86-34 177-31 266 8" />
          <g transform="translate(0 10)">
            <path className="panel" d="m0 45 85-24 29 59-89 24Z" />
            <path className="panel-grid" d="m28 37 26 59M57 29l27 59M10 64l91-25M18 84l91-25" />
            <path className="panel-leg" d="m53 96-5 25m42-35 8 26" />
          </g>
          <g transform="translate(122 0)">
            <path className="panel" d="m0 45 85-24 29 59-89 24Z" />
            <path className="panel-grid" d="m28 37 26 59M57 29l27 59M10 64l91-25M18 84l91-25" />
            <path className="panel-leg" d="m53 96-5 25m42-35 8 26" />
          </g>
        </g>

        <g className="digester" transform="translate(380 319)">
          <path className="digester-body" d="M14 103V59C14 24 42 0 83 0s69 24 69 59v44Z" />
          <path className="digester-line" d="M14 62h138M83 0V-33h74" />
          <circle className="digester-dot" cx="158" cy="-33" r="7" />
          <path className="grass" d="M4 105c30-16 55-13 79 2 25-17 54-18 86-2" />
        </g>

        <g className="biochar" transform="translate(555 363)">
          <path className="kiln" d="M21 98 8 29h82L77 98Z" />
          <path className="kiln-top" d="M0 29h98M27 12h44l10 17H17Z" />
          <path className="smoke" d="M46 10C19-18 64-28 43-58 28-79 52-92 66-105" />
          <path className="plant" d="M104 98V39m0 24c14-18 31-22 48-13-9 16-25 22-48 13Zm0-5c-11-16-25-21-42-14 7 16 20 23 42 14Z" />
        </g>

        <g className="landscape-markers">
          <circle cx="181" cy="349" r="7" />
          <circle cx="463" cy="311" r="7" />
          <circle cx="607" cy="355" r="7" />
        </g>
      </svg>
      <figcaption id="landscape-caption">
        <span><i className="legend-dot solar-dot" />Solar</span>
        <span><i className="legend-dot biogas-dot" />Biogas / CBG</span>
        <span><i className="legend-dot biochar-dot" />Biochar</span>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />

      <section className="home-hero" aria-labelledby="hero-title">
        <div className="shell home-hero-layout">
          <div className="home-hero-copy">
            <p className="eyebrow"><span className="signal" aria-hidden="true" />Carbon project development · India</p>
            <h1 id="hero-title">From <em>real projects</em> to carbon markets.</h1>
            <p className="hero-lede">
              Vayucred works with Solar, Biogas/CBG and Biochar projects—from
              early assessment and aggregation to monitoring and market
              connections—so owners and buyers can understand the evidence
              behind the opportunity.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg"><Link href="/asset-owners">I have a project <ArrowUpRight aria-hidden="true" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/buyers">I need carbon credits</Link></Button>
            </div>
            <p className="hero-boundary">Eligibility and outcomes remain subject to applicable requirements and independent processes.</p>
          </div>
          <ProjectLandscape />
        </div>

        <div className="shell hero-ribbon" aria-label="Vayucred focus areas">
          <span className="hero-ribbon-label">Working across</span>
          <span>Solar</span>
          <span>Biogas / CBG</span>
          <span>Biochar</span>
        </div>
      </section>

      <section className="section shell editorial-intro" aria-labelledby="belief-title">
        <p className="kicker">The starting point</p>
        <div>
          <h2 id="belief-title">Start with the project,<br /><em>not the credit.</em></h2>
          <p>
            Carbon-market participation should begin with what is physically
            happening on the ground: the asset, the activity, the records and
            the people responsible for them. Vayucred helps organise that path
            before a market claim is made.
          </p>
        </div>
      </section>

      <section className="focus-section" aria-labelledby="focus-title">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="kicker">Where we focus</p>
            <h2 id="focus-title">Three project families.<br />One evidence-led approach.</h2>
            <p>Each pathway has different records, boundaries and requirements. We begin by understanding those differences.</p>
          </div>
          <div className="project-family-grid">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article className={`project-family-card ${area.tone}`} key={area.title}>
                  <div className="project-family-top"><span>{area.number}</span><Icon aria-hidden="true" /></div>
                  <p className="project-family-label">{area.label}</p>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <Link href="/asset-owners">Explore project support <ArrowUpRight aria-hidden="true" /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section shell service-section" aria-labelledby="service-title">
        <div className="service-heading">
          <p className="kicker">How Vayucred helps</p>
          <h2 id="service-title">A clearer route from first review to market conversation.</h2>
          <p>Our role adapts to the project and engagement. The sequence begins with evidence and keeps independent roles visible.</p>
        </div>
        <ol className="service-path">
          {serviceSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.number}>
                <div className="service-node"><Icon aria-hidden="true" /></div>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="audience-section home-audiences" aria-labelledby="audience-title">
        <div className="shell audience-intro">
          <p className="kicker">Who we work with</p>
          <h2 id="audience-title">Built around both sides of a credible market.</h2>
        </div>
        <div className="shell audience-grid">
          <article className="audience-card owner-card">
            <div className="card-index">01 / Project owners</div>
            <Gauge aria-hidden="true" />
            <h2>Understand the pathway before committing the project.</h2>
            <p>Explore eligibility, records, monitoring responsibilities and the work required for an applicable carbon pathway.</p>
            <Link href="/asset-owners">For project owners <ArrowUpRight aria-hidden="true" /></Link>
          </article>
          <article className="audience-card buyer-card">
            <div className="card-index">02 / Buyers</div>
            <BadgeCheck aria-hidden="true" />
            <h2>Look beyond the credit to the evidence underneath.</h2>
            <p>Examine origin, methodology, calculation boundaries, assurance roles and limitations before procurement.</p>
            <Link href="/buyers">For carbon buyers <ArrowUpRight aria-hidden="true" /></Link>
          </article>
        </div>
      </section>

      <section className="stats-section" aria-label="Impact overview">
        <div className="shell stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="section shell integrity-section" aria-labelledby="integrity-title">
        <div className="integrity-copy">
          <p className="kicker">Evidence principles</p>
          <h2 id="integrity-title">Confidence is built in the details.</h2>
          <p>Good project records make the boundaries, sources and independent processes easier to examine.</p>
          <Link className="text-link" href="/methodology">Read our methodology perspective →</Link>
        </div>
        <ul className="integrity-list">
          {principles.map((principle, index) => (
            <li key={principle}><span>0{index + 1}</span><strong>{principle}</strong><BadgeCheck aria-hidden="true" /></li>
          ))}
        </ul>
      </section>

      <section className="faq-section shell" aria-labelledby="faq-title">
        <div className="faq-heading">
          <p className="kicker">Common questions</p>
          <h2 id="faq-title">Answers to questions we hear most.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <section className="technology-note" aria-labelledby="technology-title">
        <div className="shell technology-note-inner">
          <div className="technology-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div>
            <p className="kicker"><span className="status-dot" />Technology · In development</p>
            <h2 id="technology-title">Digital tools should support the field work—not overshadow it.</h2>
            <p>Vayucred’s SCADA and digital MRV capabilities are being developed to support monitoring and evidence workflows as the technology progresses.</p>
          </div>
          <Link href="/evidence-infrastructure">Explore the technology direction <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="partner-band" aria-labelledby="partners-title">
        <div className="shell partner-layout">
          <p className="kicker">Investors &amp; partners</p>
          <div><h2 id="partners-title">Help build stronger connections between climate projects and credible demand.</h2><p>Learn about Vayucred’s direction and begin a partnership or investment conversation.</p></div>
          <Button asChild size="lg" variant="outline"><Link href="/about#investors-partners">Explore a conversation</Link></Button>
        </div>
      </section>

      <section className="contact-section home-contact" id="contact">
        <div className="shell contact-inner">
          <div><p className="kicker">Begin a conversation</p><h2>Bring the project.<br />Bring the questions.</h2></div>
          <div><p>Tell us what you are working on, the intended pathway and the records already available. Keep the first message high level and do not attach sensitive project files.</p><a className="contact-inline" href="mailto:hello@vayucred.com">hello@vayucred.com <ArrowUpRight aria-hidden="true" /></a></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
