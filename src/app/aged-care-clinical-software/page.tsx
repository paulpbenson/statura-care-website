import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  ClipboardList,
  Pill,
  Activity,
  HeartPulse,
  CalendarCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aged Care Clinical Software — Assessments, Medications & Care Delivery",
  description:
    "Clinical care software for aged care providers. Standardised assessments (MMSE, Braden, MNA, Abbey Pain), medications management with S8 controls, vital signs monitoring, and care delivery tracking.",
  alternates: { canonical: "https://statura.care/aged-care-clinical-software" },
  openGraph: {
    title: "Aged Care Clinical Software | Statura Care",
    description:
      "Clinical care software with standardised assessments, medications management, vital signs monitoring, wound tracking, and care delivery. Built for aged care compliance.",
    url: "https://statura.care/aged-care-clinical-software",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "aged care clinical software",
    "aged care assessments",
    "aged care medications management",
    "clinical care aged care",
    "aged care vital signs",
    "aged care care planning",
    "S8 medication register",
    "aged care wound management",
  ],
};

const benefits = [
  {
    icon: ClipboardList,
    title: "Standardised Assessments",
    description:
      "9 validated scoring tools (MMSE, RUDAS, MoCA, Braden, ADL, IADL, Falls, MNA, Abbey Pain) with auto-calculated scores. Each assessment uses the validated clinical algorithm — no manual scoring errors.",
  },
  {
    icon: Pill,
    title: "Medications Management",
    description:
      "Full medication lifecycle with S8 register, PRN rules, drug interaction checking, and reconciliation. Track administrations, missed doses, and medication incidents with a complete audit trail.",
  },
  {
    icon: Activity,
    title: "Vital Signs Monitoring",
    description:
      "Abnormal detection with configurable reference ranges and clinical alerts. Track blood pressure, heart rate, temperature, respiratory rate, and oxygen saturation with automated alerting when readings fall outside safe ranges.",
  },
  {
    icon: HeartPulse,
    title: "Wound Management",
    description:
      "Track wound assessments with validated scales and healing progress. Document wound type, location, size, stage, and treatment with photo attachments and Braden scale integration.",
  },
  {
    icon: CalendarCheck,
    title: "Care Delivery Tracking",
    description:
      "Record care activities against care plans with care minutes integration. Every care activity feeds into care minutes calculations and Quality Standard evidence automatically.",
  },
  {
    icon: BarChart3,
    title: "Quality Indicators",
    description:
      "Clinical data auto-feeds into QI reporting across 5 national domains. Track pressure injuries, physical restraint, unplanned weight loss, falls, and medication management against national benchmarks.",
  },
];

export default function AgedCareClinicalSoftwarePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Aged Care Clinical Software", item: "https://statura.care/aged-care-clinical-software" },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Statura Care — Aged Care Clinical Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Clinical care software for aged care providers. Standardised assessments, medications management with S8 controls, vital signs monitoring, wound tracking, and care delivery — all integrated with compliance.",
    url: "https://statura.care/aged-care-clinical-software",
    author: { "@type": "Organization", name: "Statura Pty Ltd", url: "https://statura.care" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      offerCount: 3,
      description: "Essentials, Professional, and Enterprise plans available. Request a demo for pricing.",
    },
    featureList: [
      "9 validated clinical assessment tools",
      "S8 medication register",
      "Drug interaction checking",
      "Vital signs monitoring with alerts",
      "Wound management tracking",
      "Quality indicator reporting",
    ],
    screenshot: "https://statura.care/opengraph-image",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What clinical assessments does Statura Care include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Statura Care includes 9 validated scoring tools: MMSE (Mini-Mental State Examination), RUDAS (Rowland Universal Dementia Assessment Scale), MoCA (Montreal Cognitive Assessment), Braden Scale (pressure injury risk), ADL (Activities of Daily Living), IADL (Instrumental Activities of Daily Living), Falls Risk Assessment, MNA (Mini Nutritional Assessment), and Abbey Pain Scale. All scores are auto-calculated using the validated clinical algorithms.",
        },
      },
      {
        "@type": "Question",
        name: "How does the S8 medication register work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The S8 register tracks Schedule 8 (controlled) medications with full chain-of-custody documentation. It records receipt, administration, disposal, and balance reconciliation with dual-witness verification. Every transaction is logged in an immutable audit trail.",
        },
      },
      {
        "@type": "Question",
        name: "Does it check drug interactions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The platform checks for drug-drug interactions across a resident's full medication list. It includes 20 interaction rules covering 50+ drug-class mappings, with severity ratings and clinical guidance for each flagged interaction.",
        },
      },
      {
        "@type": "Question",
        name: "How does clinical data feed into quality indicators?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clinical data — vital signs, assessments, medication incidents, pressure injuries, falls, and weight changes — automatically feeds into national Quality Indicator reporting across 5 domains. Rates are calculated against national benchmarks with trend analysis.",
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
                Aged Care Clinical Software
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Clinical care,{" "}
                <span className="text-[#96A998]">structured for compliance.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Standardised assessments, medications management, vital signs
                monitoring, wound tracking, and care delivery — all integrated
                with your compliance framework.
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
                Built for Aged Care Clinical Needs
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Clinical software that{" "}
                <span className="text-[#3E5D4A]">connects care to compliance.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Clinical care in aged care isn&apos;t just about documenting —
                it&apos;s about ensuring every assessment, medication, and
                observation feeds into your compliance framework. Statura Care
                connects clinical data to quality indicators, care minutes,
                incident reporting, and audit evidence automatically.
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

        {/* Assessment Tools Detail */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Validated Tools
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                9 validated assessment tools.{" "}
                <span className="text-[#3E5D4A]">Auto-calculated scores.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Each assessment uses the published clinical algorithm. Scores
                are calculated automatically — no manual scoring, no transcription
                errors.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "MMSE", full: "Mini-Mental State Examination", domain: "Cognitive screening" },
                { name: "RUDAS", full: "Rowland Universal Dementia Assessment Scale", domain: "Culturally fair cognitive assessment" },
                { name: "MoCA", full: "Montreal Cognitive Assessment", domain: "Mild cognitive impairment" },
                { name: "Braden Scale", full: "Braden Scale for Pressure Injury Risk", domain: "Pressure injury risk" },
                { name: "ADL", full: "Katz Activities of Daily Living", domain: "Functional independence" },
                { name: "IADL", full: "Lawton Instrumental Activities of Daily Living", domain: "Complex daily tasks" },
                { name: "Falls Risk", full: "Falls Risk Assessment Tool", domain: "Falls prevention" },
                { name: "MNA", full: "Mini Nutritional Assessment", domain: "Nutritional status" },
                { name: "Abbey Pain", full: "Abbey Pain Scale", domain: "Pain in non-verbal residents" },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="group p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <p className="font-semibold text-[#3E5D4A] text-sm mb-1">{tool.name}</p>
                  <p className="text-sm font-medium text-[#1E293B] mb-1">{tool.full}</p>
                  <p className="text-xs text-slate-500">{tool.domain}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-[#0F172A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-4 gap-8 text-center">
              {[
                { stat: "9", label: "Validated assessment tools" },
                { stat: "S8", label: "Controlled medication register" },
                { stat: "5", label: "National QI domains" },
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
                Aged care clinical resources
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Guides to clinical assessments, medications management, and
                quality indicator reporting in aged care.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Clinical Assessments in Aged Care — MMSE, Braden & More", href: "/blog/clinical-assessments-aged-care" },
                { title: "S8 Medication Register Requirements", href: "/blog/s8-medication-register-aged-care" },
                { title: "Quality Indicators — National Benchmarks", href: "/blog/quality-indicators-national-benchmarks" },
                { title: "Drug Interaction Checking in Aged Care", href: "/blog/drug-interaction-checking-aged-care" },
                { title: "Vital Signs Monitoring Best Practice", href: "/blog/vital-signs-monitoring-aged-care" },
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
                <span className="text-[#3E5D4A]">aged care clinical software.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What clinical assessments does Statura Care include?",
                  a: "Statura Care includes 9 validated scoring tools: MMSE (Mini-Mental State Examination), RUDAS (Rowland Universal Dementia Assessment Scale), MoCA (Montreal Cognitive Assessment), Braden Scale (pressure injury risk), ADL (Activities of Daily Living), IADL (Instrumental Activities of Daily Living), Falls Risk Assessment, MNA (Mini Nutritional Assessment), and Abbey Pain Scale. All scores are auto-calculated using the validated clinical algorithms.",
                },
                {
                  q: "How does the S8 medication register work?",
                  a: "The S8 register tracks Schedule 8 (controlled) medications with full chain-of-custody documentation. It records receipt, administration, disposal, and balance reconciliation with dual-witness verification. Every transaction is logged in an immutable audit trail.",
                },
                {
                  q: "Does it check drug interactions?",
                  a: "Yes. The platform checks for drug-drug interactions across a resident's full medication list. It includes 20 interaction rules covering 50+ drug-class mappings, with severity ratings and clinical guidance for each flagged interaction.",
                },
                {
                  q: "How does clinical data feed into quality indicators?",
                  a: "Clinical data — vital signs, assessments, medication incidents, pressure injuries, falls, and weight changes — automatically feeds into national Quality Indicator reporting across 5 domains. Rates are calculated against national benchmarks with trend analysis.",
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
          title="Ready to streamline aged care clinical workflows?"
          description="Request a demo today. Assessments, medications, vital signs, and care delivery in one platform. Australian-hosted in Sydney."
        />
      </main>
      <Footer />
    </>
  );
}
