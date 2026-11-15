"use client";

import { useSyncExternalStore } from "react";

type Variant = "a" | "b" | "c";

const photos = {
  solar: {
    src: "/hero/solar.webp",
    alt: "Aerial view of a ground-mounted solar farm surrounded by green fields",
    label: "Solar",
    width: 1400,
    height: 788,
    author: "Saiphani02",
    source: "https://commons.wikimedia.org/wiki/File:Solar_farm_at_Krishnapuram_Tatipudi_Water_Works_aerial_view_02.jpg",
  },
  biogas: {
    src: "/hero/biogas.webp",
    alt: "Green gas-holder dome on top of a concrete biogas digester",
    label: "Biogas / CBG",
    width: 1400,
    height: 933,
    author: "Vasyatka1",
    source: "https://commons.wikimedia.org/wiki/File:GASAG_Biogas_plant_in_Schwedt_(069).jpg",
  },
  biochar: {
    src: "/hero/biochar.webp",
    alt: "Hands holding a sample of biochar",
    label: "Biochar",
    width: 1400,
    height: 935,
    author: "Tim Brunauer / GIZ",
    source: "https://commons.wikimedia.org/wiki/File:Person_holding_sample_of_biochar_from_encroacher_bush_in_Namibia.jpg",
  },
} as const;

type PhotoKey = keyof typeof photos;

function Photo({ k, className, eager }: { k: PhotoKey; className?: string; eager?: boolean }) {
  const p = photos[k];
  return (
    <figure className={`hv-photo hv-${k} ${className ?? ""}`}>
      <img
        src={p.src}
        alt={p.alt}
        width={p.width}
        height={p.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        {...(eager ? { fetchPriority: "high" as const } : {})}
      />
      <figcaption>{p.label}</figcaption>
    </figure>
  );
}


/* Option A — staggered cards: three tall rounded cards, middle one raised */
function Staggered() {
  return (
    <div className="hv hv-staggered">
      <Photo k="solar" eager />
      <Photo k="biogas" />
      <Photo k="biochar" />
      <div className="hv-chip" aria-hidden="true"><span className="hv-dot" />3 project families · 1 evidence pathway</div>
    </div>
  );
}

/* Option B — arch triptych: echoes the arch shapes used on inner-page heroes */
function Arches() {
  return (
    <div className="hv hv-arches">
      <Photo k="biogas" />
      <Photo k="solar" eager />
      <Photo k="biochar" />
      <span className="hv-sun" aria-hidden="true" />
    </div>
  );
}

/* Option C — bento: large solar panel, biogas tile, biochar lens overlapping */
function Bento() {
  return (
    <div className="hv hv-bento">
      <Photo k="solar" eager />
      <Photo k="biogas" />
      <Photo k="biochar" />
      <span className="hv-ring" aria-hidden="true" />
    </div>
  );
}

const noopSubscribe = () => () => {};
const readVariant = (): Variant => {
  const v = new URLSearchParams(window.location.search).get("hero");
  return v === "b" || v === "c" ? v : "a";
};

export function HeroVisual() {
  // Preview switch: ?hero=a|b|c (server render defaults to a)
  const variant = useSyncExternalStore<Variant>(noopSubscribe, readVariant, () => "a");

  return (
    <div className="hero-visual">
      {variant === "a" && <Staggered />}
      {variant === "b" && <Arches />}
      {variant === "c" && <Bento />}
    </div>
  );
}
