import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Layers,
  CalendarCheck,
  Calculator,
  FileCheck,
  Target,
  Puzzle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support at Home Software — SAH Compliance & Care Management",
  description:
    "Purpose-built software for the Support at Home program. Manage SAH classifications, quarterly budgets, contribution calculations, claims, wellness goals, and care delivery. Covers all 8 classification levels. Australian-hosted.",
  alternates: { canonical: "https://statura.care/support-at-home-software" },
  openGraph: {
    title: "Support at Home Software | Statura Care",
    description:
      "Purpose-built software for the Support at Home program launching 1 July 2025. SAH classification management, quarterly budgets, contribution calculations, claims, and wellness goals.",
    url: "https://statura.care/support-at-home-software",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "Support at Home software",
    "SAH software",
    "SAH aged care",
    "Support at Home program software",
    "home care software Australia",
    "SAH budget management",
    "SAH claims software",
    "SAH contributions calculator",
    "Support at Home compliance",
    "home care package software",
  ],
};

const benefits = [
  {
    icon: Layers,
    title: "8 Classification Levels",
    description:
      "Full budget management across all SAH classification levels 1-8. Each level maps to specific funding amounts, service categories, and care needs with automatic budget allocation.",
  },
  {
    icon: CalendarCheck,
    title: "Quarterly Budgets",
    description:
      "Automated quarterly budget allocation with carry-over calculations and caps. Track spending against quarterly allocations in real time and alert before budgets are exceeded.",
  },
  {
    icon: Calculator,
    title: "Contribution Calculator",
    description:
      "Per-service contribution calculations across 4 means-testing tiers and 3 service categories. Lifetime cap tracking and hardship provisions built in.",
  },
  {
    icon: FileCheck,
    title: "Claims & Billing",
    description:
      "Draft, validate, and submit claims. Pre-submission validation catches errors before they reach the ACPP. Track claim status and reconcile payments automatically.",
  },
  {
    icon: Target,
    title: "Wellness & Reablement",
    description:
      "Mandatory wellness goals tracking with progress notes and outcome measures. Record goal-directed care activities and demonstrate reablement outcomes for each client.",
  },
  {
    icon: Puzzle,
    title: "One Platform",
    description:
      "Same system for residential care and Support at Home. Shared audit trail, alerts, and reporting. No duplicate data entry, no separate logins, no reconciliation headaches.",
  },
];

const comparisonRows = [
  { aspect: "Funding", hcp: "4 package levels", sah: "8 classification levels" },
  { aspect: "Contributions", hcp: "Income-tested fees", sah: "Per-service contributions by category" },
  { aspect: "Budget period", hcp: "Annual", sah: "Quarterly with carry-over" },
  { aspect: "Care management", hcp: "Up to 20-35%", sah: "Capped at 10%" },
  { aspect: "Goals", hcp: "Not mandatory", sah: "Wellness & reablement goals required" },
];

export default function SupportAtHomeSoftwarePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Support at Home Software", item: "https://statura.care/support-at-home-software" },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Statura Care — Support at Home Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Purpose-built software for the Support at Home program. Manage SAH classifications, quarterly budgets, contribution calculations, claims, wellness goals, and care delivery across all 8 classification levels.",
    url: "https://statura.care/support-at-home-software",
    author: { "@type": "Organization", name: "Statura Pty Ltd", url: "https://statura.care" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      offerCount: 3,
      description: "Essentials, Professional, and Enterprise plans available. Request a demo for pricing.",
    },
    featureList: [
      "8 SAH classification level management",
      "Quarterly budget allocation and tracking",
      "Per-service contribution calculator",
      "Claims drafting and validation",
      "Wellness and reablement goal tracking",
      "Residential and home care in one platform",
    ],
    screenshot: "https://statura.care/opengraph-image",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Support at Home program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAH replaces HCP and CHSP from 1 July 2025. It introduces 8 classification levels, per-service contributions, quarterly budgets, and mandatory wellness goals.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Statura Care for both residential and home care?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Statura Care covers both residential aged care and Support at Home in one platform. Same login, same audit trail, same reporting.",
        },
      },
      {
        "@type": "Question",
        name: "Does it handle SAH contribution calculations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The platform calculates per-service contributions across 3 service categories and 4 means-testing tiers, with lifetime cap tracking and hardship provisions.",
        },
      },
      {
        "@type": "Question",
        name: "Can I manage HCP clients during the transition?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Existing HCP clients can be grandfathered into the system with their retained balances while new clients are managed under SAH.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#96A998] opacity-[0.03] blur-[120px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Support at Home Software
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Purpose-built for{" "}
                <span className="text-[#96A998]">Support at Home.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                The SAH program replaces Home Care Packages from 1 July 2025.
                Statura Care is ready — with classification management, quarterly
                budgets, contribution calculations, claims, wellness goals, and
                full care delivery tracking across all 8 levels.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#0F172A] font-semibold text-sm hover:bg-slate-100 transition-all duration-150 shadow-lg"
                >
                  Request a demo
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-slate-600 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-150"
                >
                  Contact us
                </Link>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Australian-hosted in Sydney.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Built for SAH
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Support at Home software that{" "}
                <span className="text-[#3E5D4A]">covers the new model.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                The Support at Home program brings fundamental changes to home
                care funding, budgets, contributions, and care delivery. Statura
                Care handles all of it — from classification levels and quarterly
                budget management to per-service contributions and mandatory
                wellness goals.
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

        {/* HCP vs SAH Comparison */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                What&apos;s Changing
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                HCP vs Support at Home —{" "}
                <span className="text-[#3E5D4A]">what&apos;s changing?</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                The Support at Home program replaces the Home Care Packages
                program with significant structural changes. Here&apos;s what
                providers need to know.
              </p>
            </div>

            <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0F172A]">
                    <th className="text-left text-sm font-semibold text-white p-4">Aspect</th>
                    <th className="text-center text-sm font-semibold text-slate-400 p-4 w-44">HCP</th>
                    <th className="text-center text-sm font-semibold text-[#96A998] p-4 w-44">SAH</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                      <td className="text-sm font-medium text-[#1E293B] p-4">{row.aspect}</td>
                      <td className="text-sm text-slate-500 text-center p-4">{row.hcp}</td>
                      <td className="text-sm text-[#3E5D4A] font-medium text-center p-4">{row.sah}</td>
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
                { stat: "8", label: "Classification levels" },
                { stat: "4", label: "Means-testing tiers" },
                { stat: "3", label: "Service categories" },
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
                Support at Home resources
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Guides to help you prepare for the transition from HCP to the
                Support at Home program.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Support at Home Program — What Providers Need to Know", href: "/blog/support-at-home-program-guide" },
                { title: "SAH Classification Levels 1-8 Explained", href: "/blog/sah-classification-levels-explained" },
                { title: "SAH Contribution Calculations", href: "/blog/sah-contribution-calculations" },
                { title: "Transitioning from HCP to SAH", href: "/blog/transitioning-hcp-to-sah" },
                { title: "Wellness & Reablement Goals Under SAH", href: "/blog/wellness-reablement-goals-sah" },
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

        {/* FAQ Section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="mb-14 text-center">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Common Questions
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Frequently asked questions about{" "}
                <span className="text-[#3E5D4A]">Support at Home software.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What is the Support at Home program?",
                  a: "SAH replaces HCP and CHSP from 1 July 2025. It introduces 8 classification levels, per-service contributions, quarterly budgets, and mandatory wellness goals. The program is designed to provide a single, streamlined home care system that focuses on wellness, reablement, and independence.",
                },
                {
                  q: "Can I use Statura Care for both residential and home care?",
                  a: "Yes. Statura Care covers both residential aged care and Support at Home in one platform. Same login, same audit trail, same reporting. Providers operating across both care types manage everything from a single system.",
                },
                {
                  q: "Does it handle SAH contribution calculations?",
                  a: "Yes. The platform calculates per-service contributions across 3 service categories and 4 means-testing tiers, with lifetime cap tracking and hardship provisions. Contributions are calculated automatically based on the client's assessed tier and the services delivered.",
                },
                {
                  q: "Can I manage HCP clients during the transition?",
                  a: "Yes. Existing HCP clients can be grandfathered into the system with their retained balances while new clients are managed under SAH. The platform supports both models concurrently during the transition period.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl bg-white p-6 hover:shadow-sm transition-shadow"
                >
                  <h3 className="font-semibold text-[#1E293B] text-base mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready for Support at Home?"
          description="Request a demo today. Be prepared for 1 July 2025. Australian-hosted in Sydney."
        />
      </main>
      <Footer />
    </>
  );
}
