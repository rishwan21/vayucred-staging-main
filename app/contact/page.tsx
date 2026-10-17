import { ArrowUpRight, BadgeCheck, Handshake, Leaf, Mail, Sprout } from "lucide-react";

import { BoundaryNote, InnerPage } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact — Vayucred",
  description: "Begin a project, carbon credit, investment or partnership conversation with Vayucred.",
  path: "/contact",
});

const conversations = [
  ["Project owner", "Share the project type, general location, operating status and the pathway you are exploring.", "Vayucred project conversation", Sprout, "project-enquiry"],
  ["Carbon buyer", "Describe the intended use, timing, project preferences and evidence your review process expects.", "Vayucred carbon credit enquiry", BadgeCheck, "buyer-enquiry"],
  ["Investor", "Introduce your organisation and the kind of investment conversation you would like to begin.", "Vayucred investor enquiry", Leaf, "investor-enquiry"],
  ["Partner", "Tell us where you work in the ecosystem and the type of collaboration you have in mind.", "Vayucred partnership enquiry", Handshake, "partner-enquiry"],
] as const;

const preparation = [
  ["Context", "Who you are, your organisation and the conversation you want to begin."],
  ["Project or need", "The project, carbon credit requirement or partnership idea at a high level."],
  ["Current position", "What is already known, available or decided—and what is not."],
  ["Next question", "The most useful question for an initial Vayucred conversation to address."],
];

export default function ContactPage() {
  return (
    <InnerPage
      eyebrow="Talk to Vayucred"
      title="Bring the context. Bring the questions."
      intro="Whether you are a project owner, carbon buyer, investor or partner, start with a short, high-level introduction so we can understand the conversation you want to begin."
      variant="contact"
    >
      <section className="contact-paths" aria-labelledby="contact-paths-title">
        <div className="shell">
          <div className="route-section-heading">
            <p className="kicker">Choose your conversation</p>
            <h2 id="contact-paths-title">One public address. A clearer starting point.</h2>
            <p>Every route currently begins by email at hello@vayucred.com. The suggested subject helps direct the conversation.</p>
          </div>
          <div className="contact-path-grid">
            {conversations.map(([title, text, subject, Icon, id], index) => (
              <article id={id} key={title}>
                <div><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={`mailto:hello@vayucred.com?subject=${encodeURIComponent(subject)}`}>Begin by email <ArrowUpRight aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell contact-preparation-layout" aria-labelledby="preparation-title">
        <div>
          <p className="kicker">Prepare the conversation</p>
          <h2 id="preparation-title">Four things make a first discussion useful.</h2>
          <p>Keep the first contact high level. A polished presentation or complete project file is not required.</p>
        </div>
        <ol>
          {preparation.map(([title, text], index) => (
            <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>
          ))}
        </ol>
      </section>

      <section className="public-contact" aria-labelledby="public-contact-title">
        <div className="shell public-contact-layout">
          <div className="contact-mail-icon"><Mail aria-hidden="true" /></div>
          <div><p className="kicker">Public contact</p><h2 id="public-contact-title">hello@vayucred.com</h2><p>Vayucred is a brand of RASYLONN TECHNOLOGIES PRIVATE LIMITED, based in Hyderabad, India.</p></div>
          <a href="mailto:hello@vayucred.com?subject=Vayucred%20conversation">Write to Vayucred <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>

      <section className="section shell contact-boundary">
        <BoundaryNote>
          Email is not a secure project-data room. Do not attach confidential contracts, credentials, personal data or raw project files until Vayucred provides an approved intake route.
        </BoundaryNote>
      </section>
    </InnerPage>
  );
}
