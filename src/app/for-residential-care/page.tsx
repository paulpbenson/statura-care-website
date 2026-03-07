import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { modules, categories, categoryColours } from "@/data/modules";
import {
  ArrowRight,
  AlertTriangle,
  Clock,
  Pill,
  ClipboardCheck,
  ShieldCheck,
  BarChart3,
  Users,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Residential Aged Care Software — Compliance & Care Management",
  description:
    "Purpose-built software for residential aged care providers. SIRS reporting, quality standards, care minutes tracking, medications management, clinical assessments, rostering, funding, accommodation management, and more. 32 modules under the Aged Care Act 2024.",
  alternates: { canonical: "https://statura.care/for-residential-care" },
  openGraph: {
    title: "Residential Aged Care Software | Statura Care",
    description:
      "Purpose-built software for residential aged care providers. SIRS reporting, quality standards, care minutes, medications, clinical care, rostering, funding, and accommodation management.",
    url: "https://statura.care/for-residential-care",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "residential aged care software",
    "nursing home software",
    "residential care compliance",
    "aged care facility software",
    "residential care management",
    "care minutes software",
    "AN-ACC software",
  ],
};

const challenges = [
  {
    icon: AlertTriangle,
    title: "SIRS reporting deadlines",
    description:
      "Priority 1 incidents must be reported within 24 hours. Priority 2 within 30 days. Missing a deadline can trigger immediate regulatory intervention. You need a system that auto-calculates deadlines and escalates alerts before time runs out.",
  },
  {
    icon: Clock,
    title: "215 care minutes per day",
    description:
      "The 215/44 mandate requires 215 minutes of direct care per resident per day, with 44 from a registered nurse. Non-compliance carries financial penalties. You need daily visibility into care minutes delivery, not a quarterly surprise.",
  },
  {
    icon: Pill,
    title: "Medication management",
    description:
      "Schedule 8 controlled drugs, drug interaction checking, administration recording, adverse reaction tracking, and reconciliation. Paper charts create risks that a digital system with built-in safety checks eliminates.",
  },
  {
    icon: ClipboardCheck,
    title: "ACQSC audit preparation",
    description:
      "Assessments can happen at any time — announced or unannounced. If your evidence is scattered across filing cabinets and shared drives, you are not ready. Statura Care maps evidence from every module into audit preparation packs automatically.",
  },
];

const workflowSteps = [
  { step: "01", title: "Report the incident", description: "Staff report a serious incident. The system auto-classifies priority and calculates the ACQSC notification deadline." },
  { step: "02", title: "Track the deadline", description: "Priority 1 triggers a 24-hour countdown with escalating alerts. Priority 2 has a 30-day deadline with alerts at 14, 25, and 28 days." },
  { step: "03", title: "Investigate and document", description: "Assign an investigator, record findings, identify root causes, and document recommendations with full audit trail." },
  { step: "04", title: "Map evidence to standards", description: "Incident data auto-feeds into Standard 2 (The Organisation) and Standard 3 (The Care and Services). Clinical data feeds Standard 5 (Clinical Care). Evidence builds through normal operations." },
  { step: "05", title: "Track workforce compliance", description: "Screening expiries, mandatory training, daily care minutes, and 24/7 RN coverage are monitored continuously." },
  { step: "06", title: "Generate the audit pack", description: "When the ACQSC arrives, generate a comprehensive audit preparation pack with all self-assessments, evidence, and improvement actions." },
];

export default function ForResidentialCarePage() {
  const residentialModules = modules.filter((m) =>
    m.applicableTo.includes("residential")
  );

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "For Residential Care", item: "https://statura.care/for-residential-care" },
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
                For Residential Aged Care Providers
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Built for{" "}
                <span className="text-[#96A998]">residential aged care.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Every obligation under the Aged Care Act 2024, structured into
                one platform. SIRS, quality standards, care minutes, medications,
                clinical care, rostering, funding — everything your facility needs.
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
                  Explore all modules
                </Link>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Australian-hosted in Sydney. Encrypted at rest and in transit.
              </p>
            </div>
          </div>
        </section>

        {/* Key challenges */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                The Reality
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                What residential providers{" "}
                <span className="text-[#3E5D4A]">deal with every day.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Running a residential aged care facility means managing complex
                regulatory obligations alongside clinical care, workforce
                management, and financial sustainability. These are the challenges
                Statura Care was built to solve.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {challenges.map((challenge) => (
                <div
                  key={challenge.title}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center mb-4 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                    <challenge.icon className="w-5 h-5 text-[#3E5D4A]" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules for residential care */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Modules for Residential Care
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                {residentialModules.length} modules{" "}
                <span className="text-[#3E5D4A]">for your facility.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Every module relevant to residential aged care, grouped by
                category. Each integrates with the shared audit trail, alert
                system, and cross-module evidence mapping.
              </p>
            </div>

            {categories.map((cat) => {
              const catMods = residentialModules.filter((m) => m.category === cat);
              if (catMods.length === 0) return null;
              const colours = categoryColours[cat];
              return (
                <div key={cat} className="mb-10 last:mb-0">
                  <p className={`text-xs font-bold uppercase tracking-[0.15em] mb-4 ${colours.text}`}>
                    {cat}
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {catMods.map((mod) => (
                      <Link
                        key={mod.slug}
                        href={`/modules/${mod.slug}`}
                        className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-[#96A998]/30 hover:shadow-sm transition-all"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-[#96A998]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                            <mod.icon className="w-4 h-4 text-[#3E5D4A]" />
                          </div>
                          <p className="text-sm font-semibold text-[#1E293B]">
                            {mod.name}
                          </p>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {mod.tagline}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                How It Works
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                From SIRS to audit-ready{" "}
                <span className="text-[#3E5D4A]">in 6 steps.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Compliance evidence builds through normal operations. By the time
                an assessor arrives, your audit pack is already compiled.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative p-6 rounded-2xl border border-slate-200 bg-white"
                >
                  <span className="text-xs font-mono font-bold text-[#96A998] mb-3 block">
                    Step {step.step}
                  </span>
                  <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats callout */}
        <section className="bg-[#0F172A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="font-serif font-bold text-2xl lg:text-3xl text-white leading-tight tracking-tight">
                The numbers your facility lives by.{" "}
                <span className="text-[#96A998]">We track them all.</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[
                { stat: "215", label: "Care minutes per day" },
                { stat: "44", label: "RN minutes minimum" },
                { stat: "24/7", label: "RN coverage required" },
                { stat: "8", label: "Quality Standards" },
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

        {/* Residential-specific advantages */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Residential Advantages
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Built for the complexity{" "}
                <span className="text-[#3E5D4A]">of facility-based care.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Stethoscope,
                  title: "9 clinical assessments built in",
                  description:
                    "MMSE, RUDAS, MoCA, Braden Scale, ADL, IADL, Falls Risk, MNA, and Abbey Pain Scale with automated score interpretation and risk categorisation.",
                },
                {
                  icon: ShieldCheck,
                  title: "AN-ACC classification tracking",
                  description:
                    "Track every resident across 13 AN-ACC classes with subsidy rates, reassessment alerts, and monthly claims reconciliation.",
                },
                {
                  icon: BarChart3,
                  title: "QI reporting automation",
                  description:
                    "Quarterly data collection across 5 mandatory domains with rate calculations, national benchmarking, and CSV export for submission.",
                },
                {
                  icon: Users,
                  title: "Visual bed map and occupancy",
                  description:
                    "Real-time accommodation management with room inventory, booking system, and occupancy reporting across multiple facilities.",
                },
                {
                  icon: Clock,
                  title: "Prudential compliance",
                  description:
                    "Refundable deposit register, liquidity monitoring with coverage ratios, permitted use tracking, and 4-standard governance compliance.",
                },
                {
                  icon: ShieldCheck,
                  title: "Star Rating projection",
                  description:
                    "Based on your current care minutes, QI data, compliance status, and staffing, project your likely Star Rating across all four domains.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center mb-4 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                    <item.icon className="w-5 h-5 text-[#3E5D4A]" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready to simplify residential care compliance?"
          description="Request a demo tailored to your facility. Australian-hosted in Sydney."
        />
      </main>
      <Footer />
    </>
  );
}
