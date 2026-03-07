import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { modules, categories, categoryColours } from "@/data/modules";
import {
  ArrowRight,
  Calculator,
  CalendarRange,
  Target,
  FileCheck,
  RefreshCw,
  Wallet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support at Home Software — SAH Compliance & Care Management",
  description:
    "Purpose-built software for Support at Home providers. SAH classification management, quarterly budgets, contribution calculations, claims, wellness goals, care delivery, and compliance under the Aged Care Act 2024.",
  alternates: { canonical: "https://statura.care/for-home-care" },
  openGraph: {
    title: "Support at Home Software | Statura Care",
    description:
      "Purpose-built software for Support at Home providers. SAH classification management, quarterly budgets, contribution calculations, claims, wellness goals, and care delivery.",
    url: "https://statura.care/for-home-care",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "home care software Australia",
    "Support at Home software",
    "SAH provider software",
    "home care compliance",
    "home care management software",
    "SAH budget management",
    "SAH claims software",
  ],
};

const challenges = [
  {
    icon: Calculator,
    title: "Contribution calculations across tiers",
    description:
      "SAH contributions vary by service category (Clinical, Independence, Everyday Living) and means testing tier. Calculating the correct contribution per service and tracking against lifetime caps is complex. Manual calculation risks over- or under-charging clients.",
  },
  {
    icon: CalendarRange,
    title: "Quarterly budget management",
    description:
      "Each client has a quarterly budget based on their classification level. Carry-over is capped at the greater of $1,000 or 10%. You need real-time visibility into budget utilisation per client, not end-of-quarter reconciliation headaches.",
  },
  {
    icon: Target,
    title: "Wellness goals and reablement",
    description:
      "The SAH program mandates wellness and reablement goals for every client with regular progress reviews and outcome documentation. Tracking goals, progress, and outcomes across your caseload requires a structured system.",
  },
  {
    icon: FileCheck,
    title: "Claims submission and validation",
    description:
      "ACPP claims must accurately reflect services delivered, correctly split between subsidy and client contribution. Pre-validation catches duplicates, date errors, missing fields, and budget exceedance before you submit.",
  },
  {
    icon: RefreshCw,
    title: "Transitioning HCP and CHSP clients",
    description:
      "Many clients are transitioning from Home Care Packages and the Commonwealth Home Support Programme. You need a system that handles SAH natively while supporting grandfathered clients with different rules, retained balances, and lifetime cap thresholds.",
  },
];

export default function ForHomeCarePage() {
  const homeCareModules = modules.filter((m) =>
    m.applicableTo.includes("home-care")
  );

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "For Home Care", item: "https://statura.care/for-home-care" },
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
                For Support at Home Providers
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Built for{" "}
                <span className="text-[#96A998]">Support at Home providers.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                The SAH program changed everything — classification levels,
                quarterly budgets, per-service contributions, wellness goals.
                Statura Care handles all of it.
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

        {/* SAH-specific challenges */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                The SAH Reality
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                What home care providers{" "}
                <span className="text-[#3E5D4A]">are navigating right now.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                The Support at Home program replaced HCP with an entirely
                new funding model (CHSP transitions no earlier than July 2027).
                These are the challenges Statura Care was built to solve for
                home care providers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Modules for home care */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Modules for Home Care
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                {homeCareModules.length} modules{" "}
                <span className="text-[#3E5D4A]">for your organisation.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Every module relevant to Support at Home providers, grouped by
                category. Each integrates with the shared audit trail, alert
                system, and cross-module evidence mapping.
              </p>
            </div>

            {categories.map((cat) => {
              const catMods = homeCareModules.filter((m) => m.category === cat);
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

        {/* SAH at a glance */}
        <section className="bg-[#0F172A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="font-serif font-bold text-2xl lg:text-3xl text-white leading-tight tracking-tight">
                Support at Home at a glance.{" "}
                <span className="text-[#96A998]">We manage every element.</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[
                { stat: "8", label: "Classification levels" },
                { stat: "4", label: "Means-testing tiers" },
                { stat: "3", label: "Service categories" },
                { stat: "Quarterly", label: "Budgets with carry-over" },
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

        {/* SAH-specific capabilities */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Purpose-Built for SAH
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Every SAH obligation{" "}
                <span className="text-[#3E5D4A]">handled natively.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Wallet,
                  title: "Automatic contribution calculations",
                  description:
                    "When a service is delivered, the system calculates the client's contribution based on their means testing tier and service category. Clinical care has zero or minimal contributions. Everyday Living has the highest. Lifetime caps are tracked and enforced.",
                },
                {
                  icon: CalendarRange,
                  title: "Quarterly budget tracking",
                  description:
                    "Real-time budget utilisation per client per quarter. Automated carry-over calculations capped at the greater of $1,000 or 10%. Care management deductions and alerts when budgets are running low.",
                },
                {
                  icon: Target,
                  title: "Wellness and reablement goals",
                  description:
                    "Create and track mandatory wellness and reablement goals per client. Monitor progress, review dates, and outcome measures. Goal achievement rates are tracked for audit preparation.",
                },
                {
                  icon: FileCheck,
                  title: "ACPP claims with pre-validation",
                  description:
                    "Bundle completed services into claim periods, run pre-validation checks for duplicates, date errors, missing fields, and budget exceedance, then generate CSV files for ACPP submission.",
                },
                {
                  icon: Calculator,
                  title: "Price list management",
                  description:
                    "Maintain your organisation's price list by service type and category with unit prices, effective dates, and active/inactive status. Unique constraints prevent overlapping prices.",
                },
                {
                  icon: RefreshCw,
                  title: "HCP and CHSP transition support",
                  description:
                    "Manage HCP and CHSP packages during transition with retained balance tracking and grandfathered lifetime cap thresholds for clients migrating to SAH.",
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
          title="Ready to simplify Support at Home compliance?"
          description="Request a demo tailored to your home care organisation. Australian-hosted in Sydney."
        />
      </main>
      <Footer />
    </>
  );
}
