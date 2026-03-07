import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ModulePageTemplate } from "@/components/ModulePageTemplate";
import { modules, getModuleBySlug } from "@/data/modules";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) return { title: "Module Not Found — Statura Care" };
  return {
    title: `${mod.name} — Aged Care ${mod.category} Module`,
    description: mod.longDescription,
    keywords: [
      `${mod.name.toLowerCase()} aged care`,
      `aged care ${mod.name.toLowerCase()} software`,
      `${mod.name.toLowerCase()} compliance`,
      ...mod.applicableTo.map((t) =>
        t === "residential" ? "residential aged care" : "home care"
      ),
      mod.section,
    ].filter(Boolean),
    alternates: { canonical: `https://statura.care/modules/${slug}` },
    openGraph: {
      title: `${mod.name} — Aged Care Compliance Module | Statura Care`,
      description: mod.shortDescription,
      url: `https://statura.care/modules/${slug}`,
      type: "website",
      locale: "en_AU",
    },
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://statura.care",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Modules",
            item: "https://statura.care/modules",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: mod.name,
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: `${mod.name} — Statura Care`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: mod.longDescription,
        url: `https://statura.care/modules/${mod.slug}`,
        author: {
          "@type": "Organization",
          name: "Statura Care",
          url: "https://statura.care",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "AUD",
          availability: "https://schema.org/InStock",
        },
        featureList: mod.capabilities.map((c) => c.title),
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ModulePageTemplate module={mod} />
      </main>
      <Footer />
    </>
  );
}
