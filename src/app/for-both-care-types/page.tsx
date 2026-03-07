import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { modules, categories, categoryColours } from "@/data/modules";
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  FileBarChart,
  Users,
  Scale,
  Copy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "One Platform for Residential Care & Support at Home",
  description:
    "Manage residential aged care and Support at Home in one platform. Shared audit trail, cross-module intelligence, unified reporting. No duplicate data entry. 32 modules covering every obligation under the Aged Care Act 2024.",
  alternates: { canonical: "https://statura.care/for-both-care-types" },
  openGraph: {
    title: "One Platform for Residential Care & Support at Home | Statura Care",
    description:
      "Manage residential aged care and Support at Home in one platform. Shared audit trail, cross-module intelligence, unified reporting. 32 modules.",
    url: "https://statura.care/for-both-care-types",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "aged care software both care types",
    "residential and home care software",
    "unified aged care platform",
    "multi-service aged care software",
    "aged care provider software Australia",
  ],
};

const benefits = [
  {
    icon: ShieldCheck,
    title: "Shared audit trail",
    description:
      "One immutable audit log across all modules and both care types. Every action by every user is logged, timestamped, and attributed. No gaps between systems, no reconciliation needed.",
  },
  {
    icon: Layers,
    title: "Cross-module intelligence",
    description:
      "SIRS data feeds quality standards. Workforce data feeds care minutes. Clinical data feeds QI reporting. Everything connects. Data entered once works everywhere — across both residential and home care.",
  },
  {
    icon: FileBarChart,
    title: "Unified reporting",
    description:
      "Generate reports across residential and home care from a single dashboard. Board packs, regulatory submissions, and operational reports pull data from all modules in both care types.",
  },
  {
    icon: Users,
    title: "One team, one login",
    description:
      "Your compliance officers, clinical staff, and managers all work in the same system. Seven distinct roles from viewer to owner. No switching between applications or reconciling between platforms.",
  },
  {
    icon: Scale,
    title: "Consistent compliance",
    description:
      "The same quality standards apply to both care types. Manage them in one place. Self-assessments, evidence mapping, and continuous improvement actions are unified across your entire organisation.",
  },
  {
    icon: Copy,
    title: "No duplication",
    description:
      "Enter a worker's screening once. It applies everywhere. A responsible person's suitability assessment covers all your services. Policies, training records, and documents are shared, not duplicated.",
  },
];

export default function ForBothCareTypesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "For Both Care Types", item: "https://statura.care/for-both-care-types" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#96A998] opacity-[0.03] blur-[120px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                For Multi-Service Providers
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                One platform.{" "}
                <span className="text-[#96A998]">Both care types.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Many providers run both residential care and Support at Home.
                Statura Care is the only platform that covers both in a single
                system — shared audit trail, shared reporting, shared team.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#0F172A] font-semibold text-sm hover:bg-slate-100 transition-all duration-150 shadow-lg"
                >
                  Request a demo
                </Link>
                <Link
                  href="/modules"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-slate-600 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-150"
                >
                  Explore all 32 modules
                </Link>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Australian-hosted in Sydney. Encrypted at rest and in transit.
              </p>
            </div>
          </div>
        </section>

        {/* The problem */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                The Problem
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Separate systems create{" "}
                <span className="text-[#3E5D4A]">separate problems.</span>
              </h2>
              <div className="mt-6 space-y-4 text-lg text-slate-500 leading-relaxed">
                <p>
                  Most providers use separate systems for residential and home
                  care. That means duplicate data entry, reconciliation
                  headaches, separate audit trails, and no cross-module
                  intelligence.
                </p>
                <p>
                  A worker&apos;s screening is entered twice. A responsible
                  person&apos;s suitability assessment exists in two places.
                  Quality Standard evidence is collected separately for each
                  care type. Your governing body receives reports from
                  different systems that use different formats and different
                  data.
                </p>
                <p>
                  Statura Care solves this. One platform. One audit trail. One
                  source of truth for your entire organisation — regardless of
                  how many care types you operate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                What You Get
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                The advantages of{" "}
                <span className="text-[#3E5D4A]">a unified platform.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                When residential care and Support at Home share the same
                platform, everything gets simpler, more consistent, and more
                efficient.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center mb-4 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                    <benefit.icon className="w-5 h-5 text-[#3E5D4A]" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#0F172A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[
                { stat: "32", label: "Total modules" },
                { stat: "2", label: "Care types in one platform" },
                { stat: "1", label: "Shared audit trail" },
                { stat: "0", label: "Duplicate data entry" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-serif font-black text-3xl text-[#96A998]">
                    {item.stat}
                  </p>
                  <p className="text-sm text-slate-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full module grid */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                All 32 Modules
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Every module,{" "}
                <span className="text-[#3E5D4A]">every care type.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                All 32 modules grouped by category. Each module shows which care
                types it applies to — residential (RES), home care (HC), or
                both.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
                  <span className="w-5 h-5 rounded bg-[#3E5D4A] text-white flex items-center justify-center text-[9px] font-bold">
                    RES
                  </span>
                  <span className="text-slate-500">Residential</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
                  <span className="w-5 h-5 rounded bg-[#96A998] text-white flex items-center justify-center text-[9px] font-bold">
                    HC
                  </span>
                  <span className="text-slate-500">Home Care</span>
                </span>
              </div>
            </div>

            {categories.map((cat) => {
              const catMods = modules.filter((m) => m.category === cat);
              const colours = categoryColours[cat];
              return (
                <div key={cat} className="mb-10 last:mb-0">
                  <p className={`text-xs font-bold uppercase tracking-[0.15em] mb-4 ${colours.text}`}>
                    {cat}
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {catMods.map((mod) => {
                      const isRes = mod.applicableTo.includes("residential");
                      const isHc = mod.applicableTo.includes("home-care");
                      return (
                        <Link
                          key={mod.slug}
                          href={`/modules/${mod.slug}`}
                          className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-[#96A998]/30 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-[#96A998]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                              <mod.icon className="w-4 h-4 text-[#3E5D4A]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-[#1E293B] truncate">
                                {mod.name}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 flex-shrink-0">
                              {isRes && (
                                <span className="w-6 h-5 rounded bg-[#3E5D4A] text-white flex items-center justify-center text-[8px] font-bold">
                                  RES
                                </span>
                              )}
                              {isHc && (
                                <span className="w-5 h-5 rounded bg-[#96A998] text-white flex items-center justify-center text-[8px] font-bold">
                                  HC
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {mod.tagline}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cross-links */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B] tracking-tight">
                Looking for a specific care type?
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                See which modules apply to your specific care type.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Link
                href="/for-residential-care"
                className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#96A998]/30 hover:shadow-sm transition-all"
              >
                <div>
                  <p className="text-base font-semibold text-[#1E293B] group-hover:text-[#3E5D4A] transition-colors">
                    Residential aged care
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Nursing homes and residential facilities
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#3E5D4A] transition-colors flex-shrink-0 ml-4" />
              </Link>
              <Link
                href="/for-home-care"
                className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#96A998]/30 hover:shadow-sm transition-all"
              >
                <div>
                  <p className="text-base font-semibold text-[#1E293B] group-hover:text-[#3E5D4A] transition-colors">
                    Support at Home
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Home care and SAH providers
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#3E5D4A] transition-colors flex-shrink-0 ml-4" />
              </Link>
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready to unify your residential and home care compliance?"
          description="Request a demo. See how one platform covers both care types. Australian-hosted in Sydney."
        />
      </main>
      <Footer />
    </>
  );
}
