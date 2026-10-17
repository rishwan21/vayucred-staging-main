import type { Metadata } from "next";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://vayucred.com").replace(/\/$/, "");
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const siteName = "Vayucred";
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
export const defaultDescription =
  "Vayucred supports Solar, Biogas/CBG and Biochar projects through assessment, aggregation, monitoring, and buyer introductions or credit sales.";

const socialImage = {
  // Metadata URLs are resolved against metadataBase, whose staging value already
  // includes the repository base path. Adding basePath here would duplicate it.
  url: "/social/vayucred-social.png",
  width: 1200,
  height: 630,
  alt: "Vayucred — From real projects to carbon markets",
};

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: path,
      siteName,
      title,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
    robots: index && allowIndexing
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: true },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Vayucred",
      legalName: "RASYLONN TECHNOLOGIES PRIVATE LIMITED",
      url: siteUrl,
      email: "hello@vayucred.com",
      description: defaultDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress: "P. No. 36, PN Reddy Colony, Hasthinapur, Karmanghat",
        addressLocality: "Saroornagar, K. V. Rangareddy",
        addressRegion: "Telangana",
        postalCode: "500079",
        addressCountry: "IN",
      },
      sameAs: [
        "https://x.com/vayucred",
        "https://www.instagram.com/vayucred/",
        "https://www.threads.com/@vayucred",
        "https://www.linkedin.com/company/vayucred/",
        "https://www.linkedin.com/in/rishwan-reddy/",
        "https://www.linkedin.com/in/saipuneethbandi/",
      ],
      founder: [
        {
          "@type": "Person",
          name: "Rishwan Reddy",
          jobTitle: "Founder",
          sameAs: "https://www.linkedin.com/in/rishwan-reddy/",
        },
        {
          "@type": "Person",
          name: "Sai Puneeth Bandi",
          jobTitle: "Co-founder",
          sameAs: "https://www.linkedin.com/in/saipuneethbandi/",
        },
      ],
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@vayucred.com",
        contactType: "business enquiries",
        areaServed: "IN",
        availableLanguage: ["English"],
      },
      knowsAbout: [
        "Solar carbon projects",
        "Biogas and compressed biogas carbon projects",
        "Biochar carbon projects",
        "Carbon project assessment",
        "Carbon project aggregation",
        "Project monitoring",
        "Carbon buyer introductions",
        "Carbon credit sales support",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Project-to-market support",
        itemListElement: [
          "Assessment",
          "Aggregation",
          "Monitoring",
          "Buyer introductions and credit sales support",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: defaultDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};
