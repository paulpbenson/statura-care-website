import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Clock,
  Stethoscope,
  Calculator,
  CalendarDays,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aged Care Rostering Software — Care Minutes Tracking & Compliance",
  description:
    "Rostering software built for aged care compliance. Track care minutes against the 200-minute target, manage 24/7 RN coverage, SCHADS Award calculations, and workforce compliance under the Aged Care Act 2024.",
  alternates: { canonical: "https://statura.care/aged-care-rostering-software" },
  openGraph: {
    title: "Aged Care Rostering Software | Statura Care",
    description:
      "Rostering software with care minutes tracking, 24/7 RN coverage monitoring, SCHADS Award calculations, and workforce compliance. Built for aged care.",
    url: "https://statura.care/aged-care-rostering-software",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "aged care rostering software",
    "care minutes tracking",
    "aged care staffing software",
    "200 care minutes",
    "RN coverage aged care",
    "aged care workforce management",
    "SCHADS calculator",
    "aged care scheduling software",
  ],
};

const benefits = [
  {
    icon: Clock,
    title: "Care Minutes Tracking",
    description:
      "Real-time tracking against the 200-minute (incl. 40-minute RN) target per resident per day. See exactly where you stand against the mandatory care minutes requirement at any point in the quarter.",
  },
  {
    icon: Stethoscope,
    title: "24/7 RN Coverage",
    description:
      "Monitor registered nurse coverage requirements with gap alerts. Identify coverage gaps before they occur and ensure continuous RN presence across all shifts.",
  },
  {
    icon: Calculator,
    title: "SCHADS Calculator",
    description:
      "Automatic pay calculations including penalty rates, overtime, and allowances per the SCHADS Award. Covers all 15 classification levels from L1.1 to L8.1 with evening, night, weekend, and public holiday rates.",
  },
  {
    icon: CalendarDays,
    title: "Shift Management",
    description:
      "Create, assign, and manage shifts with qualification matching and availability checking. Drag-and-drop roster building with conflict detection and minimum rest period validation.",
  },
  {
    icon: ShieldCheck,
    title: "Worker Screening",
    description:
      "Integrated screening status tracking with expiry alerts. Monitor police checks, NDIS Worker Screening, first aid certificates, and mandatory training completion across your entire workforce.",
  },
  {
    icon: BarChart3,
    title: "Cross-Module Intelligence",
    description:
      "Roster data feeds into care minutes compliance, billing, and workforce reporting. Staffing levels automatically support Quality Standard 4 evidence and workforce compliance obligations.",
  },
];

export default function AgedCareRosteringSoftwarePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Aged Care Rostering Software", item: "https://statura.care/aged-care-rostering-software" },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Statura Care — Aged Care Rostering Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Rostering software built for aged care compliance. Track care minutes against the 200-minute target, manage 24/7 RN coverage, SCHADS Award calculations, and workforce compliance under the Aged Care Act 2024.",
    url: "https://statura.care/aged-care-rostering-software",
    author: { "@type": "Organization", name: "Statura Pty Ltd", url: "https://statura.care" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      offerCount: 3,
      description: "Essentials, Professional, and Enterprise plans available. Request a demo for pricing.",
    },
    featureList: [
      "Care minutes tracking (200-minute target)",
      "24/7 RN coverage monitoring",
      "SCHADS Award pay calculator",
      "Shift management with qualification matching",
      "Worker screening and expiry alerts",
      "Workforce compliance reporting",
    ],
    screenshot: "https://statura.care/opengraph-image",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the 200 care minutes target?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 200 care minutes target requires residential aged care facilities to provide an average of 200 minutes of care per resident per day, including at least 40 minutes from a registered nurse. This is a mandatory requirement under the Aged Care Act 2024, not a guideline.",
        },
      },
      {
        "@type": "Question",
        name: "Does Statura Care calculate SCHADS Award pay rates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The platform includes a full SCHADS Award calculator covering all 15 classification levels (L1.1 to L8.1), penalty rates for evenings, nights, weekends, and public holidays, overtime calculations, and allowances. Shift pay is calculated automatically per 15-minute segments.",
        },
      },
      {
        "@type": "Question",
        name: "How does care minutes tracking work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Statura Care tracks care minutes in real time based on rostered and actual shifts. It calculates the average minutes per resident per day and shows how you're tracking against the 200-minute target (including the 40-minute RN component) throughout the quarter.",
        },
      },
      {
        "@type": "Question",
        name: "Can it manage 24/7 RN coverage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The platform monitors registered nurse coverage across all shifts and generates gap alerts when coverage requirements are at risk. It identifies upcoming gaps before they occur so you can fill them proactively.",
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
                Aged Care Rostering Software
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Rostering that understands{" "}
                <span className="text-[#96A998]">aged care compliance.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Not just schedules — care minutes tracking, 24/7 RN coverage
                monitoring, SCHADS Award calculations, and workforce compliance.
                Built for the 200-minute target.
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
                Built for Aged Care Rostering
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Rostering software that tracks{" "}
                <span className="text-[#3E5D4A]">care minutes, not just shifts.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Generic rostering tools don&apos;t understand care minutes
                targets, RN coverage requirements, or SCHADS Award calculations.
                Statura Care&apos;s rostering module is built from the ground up
                for the specific compliance requirements of Australian aged care
                providers.
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

        {/* Stats callout */}
        <section className="bg-[#0F172A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif font-bold text-2xl lg:text-3xl text-white leading-tight tracking-tight mb-6">
                200 minutes per resident per day. 40 minutes from a registered
                nurse. 24/7 RN coverage.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                These aren&apos;t guidelines — they&apos;re mandatory. Statura
                Care tracks your care minutes in real time and alerts you before
                you fall short.
              </p>
            </div>
            <div className="grid sm:grid-cols-4 gap-8 text-center mt-12">
              {[
                { stat: "200", label: "Care minutes per resident per day" },
                { stat: "40", label: "RN minutes per resident per day" },
                { stat: "24/7", label: "Registered nurse coverage" },
                { stat: "15", label: "SCHADS classification levels" },
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
                Aged care rostering resources
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Practical guides for care minutes compliance, SCHADS
                calculations, and workforce management.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Meeting the 200 Care Minutes Target", href: "/blog/care-minutes-target-200-minutes-compliance" },
                { title: "SCHADS Award Pay Rates Explained", href: "/blog/schads-award-pay-rates-aged-care" },
                { title: "24/7 RN Coverage Requirements", href: "/blog/24-7-rn-coverage-requirements-aged-care" },
                { title: "Workforce Compliance Under the Act", href: "/blog/workforce-compliance-aged-care-act-2024" },
                { title: "Care Minutes Calculation Methodology", href: "/blog/care-minutes-calculation-methodology" },
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
                <span className="text-[#3E5D4A]">aged care rostering software.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What is the 200 care minutes target?",
                  a: "The 200 care minutes target requires residential aged care facilities to provide an average of 200 minutes of care per resident per day, including at least 40 minutes from a registered nurse. This is a mandatory requirement under the Aged Care Act 2024, not a guideline.",
                },
                {
                  q: "Does Statura Care calculate SCHADS Award pay rates?",
                  a: "Yes. The platform includes a full SCHADS Award calculator covering all 15 classification levels (L1.1 to L8.1), penalty rates for evenings, nights, weekends, and public holidays, overtime calculations, and allowances. Shift pay is calculated automatically per 15-minute segments.",
                },
                {
                  q: "How does care minutes tracking work?",
                  a: "Statura Care tracks care minutes in real time based on rostered and actual shifts. It calculates the average minutes per resident per day and shows how you're tracking against the 200-minute target (including the 40-minute RN component) throughout the quarter.",
                },
                {
                  q: "Can it manage 24/7 RN coverage?",
                  a: "Yes. The platform monitors registered nurse coverage across all shifts and generates gap alerts when coverage requirements are at risk. It identifies upcoming gaps before they occur so you can fill them proactively.",
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
          title="Ready to simplify aged care rostering?"
          description="Request a demo today. Care minutes tracking, SCHADS calculations, and workforce compliance. Australian-hosted in Sydney."
        />
      </main>
      <Footer />
    </>
  );
}
