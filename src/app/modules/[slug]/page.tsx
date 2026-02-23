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
    title: `${mod.name} — Statura Care`,
    description: mod.longDescription,
    openGraph: {
      title: `${mod.name} — Statura Care`,
      description: mod.shortDescription,
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

  return (
    <>
      <Header />
      <main>
        <ModulePageTemplate module={mod} />
      </main>
      <Footer />
    </>
  );
}
