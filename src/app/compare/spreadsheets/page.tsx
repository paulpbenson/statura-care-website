import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Clock,
  FileSearch,
  Files,
  Link2,
  HardDrive,
  TrendingUp,
  Check,
  X,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Layers,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Spreadsheets vs Compliance Software — Why Manual Tracking Fails in Aged Care",
  description:
    "Still using spreadsheets for aged care compliance? See why manual tracking creates risk, wastes time, and fails at scale. Compare spreadsheet workflows vs purpose-built compliance software under the Aged Care Act 2024.",
  alternates: { canonical: "https://statura.care/compare/spreadsheets" },
  keywords: [
    "aged care compliance spreadsheet",
    "aged care compliance software vs spreadsheet",
    "why compliance software aged care",
    "manual compliance tracking aged care",
    "aged care Excel tracking",
    "compliance software ROI aged care",
  ],
  openGraph: {
    title:
      "Spreadsheets vs Compliance Software — Why Manual Tracking Fails in Aged Care",
    description:
      "Still using spreadsheets for aged care compliance? See why manual tracking creates risk, wastes time, and fails at scale. Compare spreadsheet workflows vs purpose-built compliance software.",
    url: "https://statura.care/compare/spreadsheets",
  },
};

const problems = [
  {
    icon: Clock,
    title: "Missed deadlines",
    description:
      "P1 SIRS incidents require 24-hour notification. A spreadsheet can't send you an alert at 3am.",
  },
  {
    icon: FileSearch,
    title: "No audit trail",
    description:
      'When the ACQSC asks who changed what and when, "I think it was Sarah" isn\'t an answer.',
  },
  {
    icon: Files,
    title: "Version chaos",
    description:
      "Which spreadsheet is the latest? The one on Sharon's desktop or the one in the shared drive?",
  },
  {
    icon: Link2,
    title: "No cross-referencing",
    description:
      "A SIRS incident should automatically create evidence for Quality Standard 8. In a spreadsheet, that's a manual copy-paste.",
  },
  {
    icon: HardDrive,
    title: "Single point of failure",
    description:
      "One corrupted file, one accidental delete, one person on leave, and your compliance data is gone.",
  },
  {
    icon: TrendingUp,
    title: "Doesn't scale",
    description:
      "3 modules in spreadsheets is painful. 32 modules across residential care and Support at Home is impossible.",
  },
];

const comparisonRows = [
  {
    feature: "Deadline tracking",
    spreadsheet: "Manual calendar entries",
    statura: "Automated countdown with escalating alerts",
  },
  {
    feature: "Audit trail",
    spreadsheet: "None",
    statura: "Immutable, every change logged",
  },
  {
    feature: "SIRS reporting",
    spreadsheet: "Manual form filling",
    statura:
      "Auto-classification, deadline calculation, investigation workflow",
  },
  {
    feature: "Quality Standards evidence",
    spreadsheet: "Copy-paste from other files",
    statura: "Auto-populated from across all modules",
  },
  {
    feature: "Worker screening",
    spreadsheet: "Separate register",
    statura: "Integrated with expiry alerts",
  },
  {
    feature: "Access control",
    spreadsheet: "File permissions (if any)",
    statura: "Role-based, 7 permission levels",
  },
  {
    feature: "Data security",
    spreadsheet: "Local files, email attachments",
    statura: "Encrypted, Australian-hosted, row-level security",
  },
  {
    feature: "Multi-site",
    spreadsheet: "Separate files per site",
    statura: "Unified platform",
  },
  {
    feature: "Reporting",
    spreadsheet: "Build your own charts",
    statura: "Pre-built compliance reports, PDF export",
  },
  {
    feature: "Scalability",
    spreadsheet: "Breaks at ~5 modules",
    statura: "32 modules, seamlessly integrated",
  },
  {
    feature: "Backup",
    spreadsheet: "Hope someone remembers",
    statura: "Automated, continuous",
  },
  {
    feature: "Cost of non-compliance",
    spreadsheet: "Your problem",
    statura: "We help prevent it",
  },
];

const steps = [
  {
    number: "1",
    title: "Choose your modules",
    description:
      "Start with the compliance areas that matter most — SIRS, Quality Standards, Workforce, or any of our 32 modules.",
  },
  {
    number: "2",
    title: "Set up your team",
    description:
      "Invite your compliance officers, managers, and staff. Role-based access ensures everyone sees exactly what they need.",
  },
  {
    number: "3",
    title: "Start tracking compliance automatically",
    description:
      "Deadlines, alerts, audit trails, and cross-module evidence flow automatically. No more manual tracking.",
  },
];

const faqs = [
  {
    q: "How long does it take to migrate from spreadsheets to Statura Care?",
    a: "Most providers are up and running within a few weeks. We help you set up your modules, import existing data where possible, and train your team. You don't need to migrate everything at once — start with the modules that cause you the most pain in spreadsheets and expand from there.",
  },
  {
    q: "What if my team isn't technical?",
    a: "Statura Care is designed for compliance officers and care managers, not IT teams. If your team can use a spreadsheet, they can use Statura Care. The interface is straightforward, and we provide onboarding support to get everyone comfortable.",
  },
  {
    q: "Can I keep using spreadsheets alongside Statura Care during the transition?",
    a: "Yes. Many providers run both in parallel during the first few weeks to build confidence. Once your team sees the automated alerts, audit trails, and cross-module linking in action, the spreadsheets tend to retire themselves.",
  },
  {
    q: "How much does it cost compared to spreadsheets?",
    a: "Spreadsheets are free to use but expensive when they fail. A missed SIRS deadline, a lost audit trail, or a compliance gap during an ACQSC visit costs far more than software. Statura Care pricing is modular — you only pay for the modules you use. Contact us for a tailored quote.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
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
      name: "Compare",
      item: "https://statura.care/compare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Spreadsheets vs Statura Care",
      item: "https://statura.care/compare/spreadsheets",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const comparisonJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Spreadsheets vs Compliance Software — Why Manual Tracking Fails in Aged Care",
  description:
    "Comparison of spreadsheet-based compliance tracking vs purpose-built aged care compliance software under the Aged Care Act 2024.",
  url: "https://statura.care/compare/spreadsheets",
  mainEntity: {
    "@type": "Table",
    about:
      "Comparison of spreadsheets vs Statura Care for aged care compliance tracking",
  },
};

export default function CompareSpreadsheets() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd,
            faqJsonLd,
            comparisonJsonLd,
          ]),
        }}
      />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#96A998] opacity-[0.03] blur-[100px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Spreadsheets vs Compliance Software
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Still tracking compliance{" "}
                <span className="text-[#96A998]">in spreadsheets?</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                The Aged Care Act 2024 introduced dozens of new obligations with
                strict deadlines. Spreadsheets were never designed for this.
                Here&apos;s why manual tracking creates risk — and what the
                alternative looks like.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                The Problem
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                What goes wrong{" "}
                <span className="text-[#3E5D4A]">with spreadsheets.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Spreadsheets are great for budgets and rosters. They were never
                designed to manage regulatory compliance across 32 obligation
                areas with strict deadlines, audit trails, and multi-user
                access.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem) => (
                <div
                  key={problem.title}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center mb-4 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                    <problem.icon className="w-5 h-5 text-[#3E5D4A]" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Side-by-Side Comparison
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Spreadsheets vs{" "}
                <span className="text-[#3E5D4A]">Statura Care.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                A direct comparison across the dimensions that matter for aged
                care compliance.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Desktop table */}
              <div className="hidden md:block rounded-2xl border border-slate-200 bg-white overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left text-sm font-semibold text-[#1E293B] p-5 w-[30%]">
                        Feature
                      </th>
                      <th className="text-left text-sm font-semibold text-slate-400 p-5 w-[35%]">
                        Spreadsheets
                      </th>
                      <th className="text-left text-sm font-semibold text-[#3E5D4A] p-5 w-[35%]">
                        Statura Care
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr
                        key={row.feature}
                        className={
                          index < comparisonRows.length - 1
                            ? "border-b border-slate-100"
                            : ""
                        }
                      >
                        <td className="p-5 text-sm font-medium text-[#1E293B]">
                          {row.feature}
                        </td>
                        <td className="p-5">
                          <div className="flex items-start gap-2">
                            <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400" />
                            <span className="text-sm text-slate-400">
                              {row.spreadsheet}
                            </span>
                          </div>
                        </td>
                        <td className="p-5">
                          <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#3E5D4A]" />
                            <span className="text-sm text-[#1E293B]">
                              {row.statura}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-4">
                {comparisonRows.map((row) => (
                  <div
                    key={row.feature}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <h3 className="font-semibold text-[#1E293B] text-sm mb-3">
                      {row.feature}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400" />
                        <span className="text-sm text-slate-400">
                          {row.spreadsheet}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#3E5D4A]" />
                        <span className="text-sm text-[#1E293B]">
                          {row.statura}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Risk Section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-[0.2em] mb-2">
                    The Real Cost
                  </p>
                  <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                    The real cost isn&apos;t the software — it&apos;s the risk of
                    non-compliance.
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-[#F8FAFC]">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-base text-slate-500 leading-relaxed">
                    The ACQSC can issue compliance notices, sanctions, and
                    revocations of provider approval. Enforcement actions are
                    published publicly and affect your organisation&apos;s
                    reputation, funding, and ability to operate.
                  </p>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-[#F8FAFC]">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-base text-slate-500 leading-relaxed">
                    Under the Aged Care Act 2024, governing body members have
                    personal duties. A missed SIRS deadline or an incomplete
                    audit trail doesn&apos;t just affect the organisation — it
                    can have personal consequences for responsible persons.
                  </p>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-[#F8FAFC]">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-base text-slate-500 leading-relaxed">
                    A spreadsheet can&apos;t demonstrate to the Commission that
                    your compliance systems are robust, proactive, and auditable.
                    Purpose-built software can.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                How It Works
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                From spreadsheets to{" "}
                <span className="text-[#3E5D4A]">structured compliance.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="p-7 rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3E5D4A] flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/modules"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#3E5D4A] hover:text-[#1E293B] transition-colors"
              >
                Explore all 32 modules
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Frequently asked questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 rounded-2xl border border-slate-200 bg-white"
                >
                  <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner title="Ready to move beyond spreadsheets?" />
      </main>
      <Footer />
    </>
  );
}
