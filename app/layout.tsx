import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { createPageMetadata, defaultDescription, siteUrl } from "@/lib/site";
import "./globals.css";

const dmSans = localFont({
  src: "../public/fonts/DMSans.woff2",
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = localFont({
  src: "../public/fonts/Fraunces.woff2",
  variable: "--font-fraunces",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Vayucred",
  category: "sustainability",
  keywords: [
    "carbon project development India",
    "solar carbon projects",
    "biogas CBG carbon projects",
    "biochar carbon projects",
    "carbon project monitoring",
    "carbon credit buyers India",
  ],
  manifest: `${basePath}/manifest.webmanifest`,
  icons: { icon: `${basePath}/icon.svg` },
  verification: {
    ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
    ...(bingSiteVerification ? { other: { "msvalidate.01": bingSiteVerification } } : {}),
  },
  ...createPageMetadata({
    title: "Vayucred — From real projects to carbon markets",
    description: defaultDescription,
    path: "/",
  }),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#F7F1E4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top" className={`${dmSans.variable} ${fraunces.variable} antialiased`}><a className="skip-link" href="#main-content">Skip to content</a>{children}</body>
    </html>
  );
}
