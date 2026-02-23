import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://statura.care";
const SITE_NAME = "Statura Care";
const SITE_DESCRIPTION =
  "The modular compliance platform for Australian aged care providers. Manage every obligation under the Aged Care Act 2024 — from responsible persons to incident reporting to quality standards.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Statura Care — Aged Care Compliance Platform",
    template: "%s — Statura Care",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "aged care compliance",
    "aged care compliance software",
    "Aged Care Act 2024",
    "aged care compliance platform",
    "SIRS reporting",
    "serious incident response scheme",
    "aged care quality standards",
    "ACQSC",
    "aged care quality and safety commission",
    "responsible persons aged care",
    "aged care software Australia",
    "compliance management aged care",
    "aged care incident reporting",
    "aged care audit preparation",
    "restrictive practices register",
    "aged care workforce compliance",
    "prudential compliance aged care",
    "AN-ACC classification",
    "aged care governance",
    "residential aged care compliance",
  ],
  authors: [{ name: "Statura Pty Ltd" }],
  creator: "Statura Pty Ltd",
  publisher: "Statura Pty Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Statura Care — Aged Care Compliance Platform",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Statura Care — Aged Care Compliance Platform",
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Statura Care",
        legalName: "Statura Pty Ltd",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        email: "hello@statura.care",
        description: SITE_DESCRIPTION,
        areaServed: {
          "@type": "Country",
          name: "Australia",
        },
        knowsAbout: [
          "Aged Care Act 2024",
          "Aged care compliance",
          "SIRS reporting",
          "Aged care quality standards",
          "ACQSC",
          "Restrictive practices",
          "AN-ACC classification",
          "Prudential compliance",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-AU",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "Statura Care",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        author: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "AUD",
          availability: "https://schema.org/InStock",
          offerCount: 3,
        },
        featureList: [
          "Responsible Persons Management",
          "SIRS Incident Reporting",
          "Quality Standards Self-Assessment",
          "Complaints Management",
          "Whistleblower Protection",
          "Workforce Compliance",
          "Infection Prevention & Control",
          "Quality Indicators Reporting",
          "Prudential Compliance",
          "Agreements & Consent",
          "Funding & Claims (AN-ACC)",
          "Registration Management",
          "Code of Conduct",
          "Associated Providers",
        ],
        screenshot: `${SITE_URL}/opengraph-image`,
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
