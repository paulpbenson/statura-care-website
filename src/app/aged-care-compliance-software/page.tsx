import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { modules, categories, categoryColours } from "@/data/modules";
import {
  Check,
  ShieldCheck,
  Clock,
  FileCheck,
  Users,
  BarChart3,
  ArrowRight,
  Server,
  Lock,
  Puzzle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aged Care Compliance Software Australia — Built for the Aged Care Act 2024",
  description:
    "Purpose-built aged care compliance software for Australian providers. 14 modules covering SIRS reporting, quality standards, responsible persons, workforce compliance, prudential obligations, and more. Australian-hosted. 14-day free trial.",
  alternates: { canonical: "https://statura.care/aged-care-compliance-software" },
  openGraph: {
    title: "Aged Care Compliance Software Australia | Statura Care",
    description:
      "The modular compliance platform built specifically for the Aged Care Act 2024. 14 modules. Australian-hosted. Free trial.",
    url: "https://statura.care/aged-care-compliance-software",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "aged care compliance software",
    "aged care compliance software Australia",
    "aged care compliance platform",
    "aged care regulatory software",
    "Aged Care Act 2024 software",
    "ACQSC compliance software",
    "aged care quality and safety software",
    "residential aged care compliance",
    "aged care governance software",
    "compliance management aged care",
  ],
};

const benefits = [
  {
    icon: ShieldCheck,
    title: "Purpose-built for the Aged Care Act 2024",
    description:
      "Not adapted from generic GRC software. Every module, workflow, and deadline is mapped directly to the obligations in the new Act and the Aged Care Quality Standards.",
  },
  {
    icon: Clock,
    title: "Automated deadline tracking",
    description:
      "SIRS Priority 1 (24-hour) and Priority 2 (30-day) deadlines, screening expiry dates, assessment due dates, and ACQSC notification windows — all tracked automatically with escalating alerts.",
  },
  {
    icon: FileCheck,
    title: "Audit-ready evidence",
    description:
      "Every action is logged in an immutable audit trail. Self-assessment evidence maps across modules. Generate audit preparation packs before ACQSC assessment contacts.",
  },
  {
    icon: Users,
    title: "Role-based access for aged care teams",
    description:
      "Seven distinct roles from viewer to owner. Compliance officers, facility managers, clinical staff, and governing body members each see exactly what they need.",
  },
  {
    icon: BarChart3,
    title: "Cross-module intelligence",
    description:
      "SIRS data feeds Quality Standard 8 evidence. Workforce staffing feeds Standard 7. Complaint trends feed Standard 6. Data entered once works everywhere.",
  },
  {
    icon: Server,
    title: "Australian-hosted in Sydney",
    description:
      "All data stored in Sydney on Australian infrastructure. Encrypted at rest and in transit. Row-level security ensures complete data isolation between organisations.",
  },
];

const comparisonPoints = [
  { feature: "Built specifically for Aged Care Act 2024", statura: true, generic: false },
  { feature: "All 14 compliance obligation areas covered", statura: true, generic: false },
  { feature: "SIRS incident reporting with deadline automation", statura: true, generic: "partial" },
  { feature: "Responsible persons suitability assessments", statura: true, generic: false },
  { feature: "Quality Standards self-assessment engine", statura: true, generic: false },
  { feature: "Prudential compliance & RAD tracking", statura: true, generic: false },
  { feature: "Care minutes calculator (200-min target)", statura: true, generic: false },
  { feature: "Whistleblower confidentiality controls", statura: true, generic: false },
  { feature: "Cross-module evidence mapping", statura: true, generic: false },
  { feature: "Australian-hosted (Sydney)", statura: true, generic: "varies" },
  { feature: "Immutable audit trail", statura: true, generic: "partial" },
  { feature: "14-day free trial", statura: true, generic: "varies" },
];

export default function AgedCareComplianceSoftwarePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Aged Care Compliance Software", item: "https://statura.care/aged-care-compliance-software" },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Statura Care — Aged Care Compliance Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Purpose-built aged care compliance software for Australian providers. 14 modules covering every obligation under the Aged Care Act 2024.",
    url: "https://statura.care/aged-care-compliance-software",
    author: { "@type": "Organization", name: "Statura Pty Ltd", url: "https://statura.care" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      offerCount: 3,
      description: "14-day free trial. Essentials, Professional, and Enterprise plans.",
    },
    featureList: modules.map((m) => m.name),
    screenshot: "https://statura.care/opengraph-image",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#96A998] opacity-[0.03] blur-[120px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Aged Care Compliance Software
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                The compliance platform{" "}
                <span className="text-[#96A998]">built for the Aged Care Act 2024.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Statura Care is purpose-built aged care compliance software for
                Australian providers. 14 modules covering every regulatory obligation
                — from SIRS incident reporting to quality standards to prudential
                compliance. Not adapted from generic risk software. Built from the
                ground up for aged care.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://app.statura.care/signup"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#0F172A] font-semibold text-sm hover:bg-slate-100 transition-all duration-150 shadow-lg"
                >
                  Start your 14-day free trial
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-slate-600 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-150"
                >
                  Request a demo
                </Link>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                No credit card required. Australian-hosted in Sydney.
              </p>
            </div>
          </div>
        </section>

        {/* Why purpose-built matters */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Why Statura Care
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Aged care compliance software that{" "}
                <span className="text-[#3E5D4A]">understands the Act.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Generic GRC platforms require months of configuration to approximate
                aged care compliance. Statura Care delivers it out of the box —
                because every module was designed around the specific obligations
                in the Aged Care Act 2024 and the Quality Standards.
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

        {/* 14 Modules */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Complete Coverage
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                14 compliance modules.{" "}
                <span className="text-[#3E5D4A]">Every obligation covered.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Pick the modules you need today. Add more as your compliance
                requirements evolve. Each module integrates with the shared
                audit trail, alert system, and evidence mapping.
              </p>
            </div>

            {categories.map((cat) => {
              const catMods = modules.filter((m) => m.category === cat);
              const colours = categoryColours[cat];
              return (
                <div key={cat} className="mb-10 last:mb-0">
                  <p className={`text-xs font-bold uppercase tracking-[0.15em] mb-4 ${colours.text}`}>
                    {cat}
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {catMods.map((mod) => (
                      <Link
                        key={mod.slug}
                        href={`/modules/${mod.slug}`}
                        className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-[#96A998]/30 hover:shadow-sm transition-all"
                      >
                        <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-[#96A998]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                          <mod.icon className="w-4 h-4 text-[#3E5D4A]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[#1E293B] truncate">{mod.name}</p>
                          <p className="text-[11px] text-slate-400 font-mono">{mod.section}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Comparison table */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Purpose-built vs generic software
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                See how dedicated aged care compliance software compares to
                adapting generic risk and governance platforms.
              </p>
            </div>

            <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0F172A]">
                    <th className="text-left text-sm font-semibold text-white p-4">Feature</th>
                    <th className="text-center text-sm font-semibold text-[#96A998] p-4 w-32">Statura Care</th>
                    <th className="text-center text-sm font-semibold text-slate-400 p-4 w-32">Generic GRC</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                      <td className="text-sm text-slate-600 p-4">{row.feature}</td>
                      <td className="text-center p-4">
                        {row.statura === true ? (
                          <Check className="w-5 h-5 text-[#3E5D4A] mx-auto" />
                        ) : (
                          <span className="text-xs text-slate-400">—</span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {row.generic === true ? (
                          <Check className="w-5 h-5 text-slate-400 mx-auto" />
                        ) : row.generic === "partial" ? (
                          <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Partial</span>
                        ) : row.generic === "varies" ? (
                          <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Varies</span>
                        ) : (
                          <span className="text-xs text-slate-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-[#0F172A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-4 gap-8 text-center">
              {[
                { stat: "14", label: "Compliance modules" },
                { stat: "24hr", label: "P1 SIRS deadline tracking" },
                { stat: "8", label: "Quality Standards covered" },
                { stat: "Sydney", label: "Australian-hosted data" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-serif font-black text-3xl text-[#96A998]">{item.stat}</p>
                  <p className="text-sm text-slate-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B] tracking-tight">
                Aged care compliance resources
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Practical guides to help you navigate aged care compliance obligations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "SIRS Reporting Obligations Under the Aged Care Act 2024", href: "/blog/sirs-reporting-obligations-aged-care-act-2024" },
                { title: "How to Build a Responsible Persons Register", href: "/blog/responsible-persons-register-guide" },
                { title: "Quality Standards Self-Assessment Checklist", href: "/blog/aged-care-quality-standards-self-assessment-checklist" },
                { title: "Meeting the 200 Care Minutes Target", href: "/blog/care-minutes-target-200-minutes-compliance" },
                { title: "Prudential Compliance for Aged Care", href: "/blog/prudential-compliance-refundable-deposits-aged-care" },
                { title: "View all modules", href: "/modules" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-[#96A998]/30 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-medium text-[#1E293B] group-hover:text-[#3E5D4A] transition-colors">
                    {link.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#3E5D4A] transition-colors flex-shrink-0 ml-2" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready to simplify aged care compliance?"
          description="Start your 14-day free trial. No credit card required. Australian-hosted."
        />
      </main>
      <Footer />
    </>
  );
}
