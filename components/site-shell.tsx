"use client";

import Link from "next/link";
import { Mail, MapPin, Menu, Moon, Phone, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/methodology", label: "Carbon Credits" },
  { href: "/evidence-infrastructure", label: "Technology" },
  { href: "/asset-owners", label: "Project Developers" },
  { href: "/buyers", label: "Buyers" },
  { href: "/about", label: "About" },
];

export function Wordmark() {
  return (
    <Link className="wordmark" href="/#top" aria-label="Vayucred home — back to top">
      <BrandMark />
      <span>Vayucred</span>
    </Link>
  );
}

function BrandMark() {
  return (
    <svg className="wordmark-mark" viewBox="0 0 512 512" aria-hidden="true">
      <path fill="#102F27" d="M256 42c9 0 17 2 26 7l156 91-139 81c-23 13-37 31-43 54-6-23-20-41-43-54L74 140l156-91c9-5 17-7 26-7Z" />
      <path fill="#89AA68" d="M56 164c-10 10-14 23-14 39v153c0 16 8 29 22 38l157 92c14 8 26 9 38 3l17-10c-22-14-32-31-32-56V318c0-24-12-43-34-56L87 191c-17-10-27-19-31-27Z" />
      <path fill="#A8CBCD" d="M456 164c10 10 14 23 14 39v153c0 16-8 29-22 38L268 499V318c0-24 12-43 34-56l123-71c17-10 27-19 31-27Z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://x.com/vayucred", label: "Vayucred on X", icon: "x" },
  { href: "https://www.instagram.com/vayucred/?hl=en", label: "Vayucred on Instagram", icon: "instagram" },
  { href: "https://www.threads.com/@vayucred?hl=en", label: "Vayucred on Threads", icon: "threads" },
  { href: "https://www.linkedin.com/company/vayucred/", label: "Vayucred on LinkedIn", icon: "linkedin" },
] as const;

const socialIconPaths = {
  x: "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z",
  instagram: "M7.03.084c-1.277.06-2.149.264-2.911.563-.789.308-1.458.72-2.123 1.388S.92 4.372.615 5.162C.32 5.926.12 6.799.063 8.076.007 9.354-.006 9.765 0 13.023c.006 3.259.021 3.667.083 4.947.061 1.277.264 2.148.564 2.911.308.789.72 1.457 1.388 2.123.668.665 1.337 1.074 2.129 1.38.763.295 1.636.496 2.913.552 1.277.056 1.688.069 4.946.063 3.258-.006 3.668-.021 4.948-.081 1.28-.061 2.147-.266 2.91-.563.789-.309 1.458-.72 2.123-1.388.665-.668 1.074-1.338 1.379-2.129.296-.763.497-1.636.552-2.912.056-1.281.069-1.69.063-4.948-.006-3.258-.021-3.667-.082-4.947-.061-1.28-.264-2.149-.563-2.912-.308-.789-.72-1.457-1.388-2.123C21.298 1.33 20.628.921 19.838.617 19.074.321 18.202.12 16.924.065 15.647.009 15.236-.005 11.977.001 8.718.008 8.31.022 7.03.084m.14 21.693c-1.17-.051-1.805-.245-2.229-.408-.561-.216-.96-.477-1.382-.895-.422-.418-.681-.819-.9-1.378-.164-.423-.362-1.058-.417-2.228-.06-1.265-.072-1.644-.079-4.848-.007-3.204.005-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.476-.96.895-1.382.419-.422.818-.681 1.378-.9.423-.165 1.058-.361 2.227-.417 1.266-.06 1.645-.072 4.848-.079 3.203-.007 3.584.005 4.85.061 1.169.051 1.805.245 2.228.408.561.216.96.475 1.382.895.422.419.682.818.901 1.379.165.422.362 1.056.417 2.226.06 1.266.074 1.645.08 4.848.006 3.203-.006 3.583-.061 4.848-.051 1.17-.245 1.806-.408 2.229-.216.56-.477.96-.896 1.381-.419.422-.818.681-1.378.9-.422.165-1.058.362-2.226.417-1.266.06-1.645.072-4.85.079-3.204.007-3.582-.006-4.848-.061M16.953 5.586a1.44 1.44 0 1 0 2.88-.005 1.44 1.44 0 0 0-2.88.005M5.839 12.012a6.162 6.162 0 1 0 12.323-.024 6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 16 11.992 4 4 0 0 1 8 12.008",
  threads: "M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452z",
};

function SocialLinks() {
  return (
    <nav className="footer-socials" aria-label="Vayucred social profiles">
      {socialLinks.map((social) => (
        <a href={social.href} key={social.label} rel="noreferrer" target="_blank" aria-label={social.label} title={social.label}>
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d={socialIconPaths[social.icon]} /></svg>
        </a>
      ))}
    </nav>
  );
}

function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("vayucred-theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("vayucred-theme", next ? "dark" : "light");
  };
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="dark-mode-toggle"
    >
      {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Wordmark />
        <nav aria-label="Primary navigation" className="desktop-nav">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Button asChild className="nav-cta">
          <Link href="/contact">Talk to Vayucred</Link>
        </Button>
        <DarkModeToggle />
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            <Link href="/contact">Talk to Vayucred</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-shell">
        <div className="footer-grid">
          <section className="footer-brand" aria-label="Vayucred contact details">
            <Wordmark />
            <p>Infrastructure for the carbon market.</p>
            <SocialLinks />
            <address>
              <a href="mailto:hello@vayucred.com"><Mail aria-hidden="true" />hello@vayucred.com</a>
              <a href="tel:+918886550400"><Phone aria-hidden="true" />8886550400</a>
              <span><MapPin aria-hidden="true" />India</span>
            </address>
          </section>

          <FooterColumn title="Products">
            <Link href="/evidence-infrastructure#scada">SCADA</Link>
            <Link href="/evidence-infrastructure#digital-mrv">Digital MRV</Link>
          </FooterColumn>

          <FooterColumn title="Carbon Credits">
            <Link href="/asset-owners#solar">Solar</Link>
            <Link href="/asset-owners#biogas-cbg">Biogas / CBG</Link>
            <Link href="/asset-owners#biochar">Biochar</Link>
            <Link href="/asset-owners#project-pipeline">Project Pathway</Link>
          </FooterColumn>

          <FooterColumn title="Company">
            <Link href="/about">About Us</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </FooterColumn>

          <FooterColumn title="Work With Us">
            <Link href="/asset-owners">Project Creators</Link>
            <Link href="/buyers">Buyers</Link>
          </FooterColumn>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Vayucred. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <nav className="footer-column" aria-label={`${title} footer navigation`}>
      <h2>{title}</h2>
      {children}
    </nav>
  );
}

export function InnerPage({
  eyebrow,
  title,
  intro,
  variant = "default",
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  variant?: "default" | "projects" | "buyers" | "technology" | "methodology" | "about" | "contact" | "legal";
  children: React.ReactNode;
}) {
  return (
    <main id="main-content">
      <SiteHeader />
      <section className={`inner-hero inner-hero-${variant}`}>
        <div className="inner-hero-art" aria-hidden="true"><span /><span /><span /></div>
        <div className="shell inner-hero-content">
          <p className="eyebrow"><span className="signal" aria-hidden="true" />{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}

export function BoundaryNote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside className={cn("boundary-note", className)}>
      <span>Boundary</span>
      <p>{children}</p>
    </aside>
  );
}
