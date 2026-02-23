import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Statura Care — Aged Care Compliance Platform",
  description:
    "The modular compliance platform for Australian aged care providers. Manage every obligation under the Aged Care Act 2024 — from responsible persons to incident reporting to quality standards.",
  keywords: [
    "aged care compliance",
    "Aged Care Act 2024",
    "SIRS",
    "quality standards",
    "aged care software",
    "Australian aged care",
    "ACQSC",
    "compliance platform",
  ],
  openGraph: {
    title: "Statura Care — Aged Care Compliance Platform",
    description:
      "The modular compliance platform for Australian aged care providers under the Aged Care Act 2024.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
