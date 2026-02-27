import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { modules } from "@/data/modules";
import {
  Check,
  ShieldCheck,
  BarChart3,
  FileCheck,
  Target,
  Zap,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Award,
  Lock,
  Clock,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aged Care Quality Standards Software — ACQSC Compliance & Self-Assessment",
  description:
    "Purpose-built aged care quality standards software for self-assessment against the 8 Aged Care Quality Standards. Map evidence, rate compliance, identify gaps, and prepare for ACQSC assessment contacts. Australian-hosted. 14-day free trial.",
  alternates: { canonical: "https://statura.care/aged-care-quality-standards-software" },
  openGraph: {
    title: "Aged Care Quality Standards Software | Statura Care",
    description:
      "Self-assessment software for the 8 Aged Care Quality Standards. Continuous improvement, evidence mapping, and ACQSC audit preparation.",
    url: "https://statura.care/aged-care-quality-standards-software",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "aged care quality standards software",
    "ACQSC quality standards compliance",
    "aged care self-assessment software",
    "quality standards assessment tool",
    "aged care quality standards 1-8",
    "ACQSC compliance software",
    "aged care quality improvement",
    "self-assessment framework",
    "quality standards evidence mapping",
    "aged care continuous improvement",
  ],
};

const benefits = [
  {
    icon: ShieldCheck,
    title: "Self-assess all 8 Quality Standards",
    description:
      "Rate compliance for each standard from 1-5 with detailed criteria. Build evidence profiles showing exactly what meets, exceeds, or needs improvement.",
  },
  {
    icon: FileCheck,
    title: "Map evidence to standards",
    description:
      "Connect SIRS incidents, complaints, staffing data, and documentation across modules. Evidence automatically feeds into Quality Standard compliance ratings.",
  },
  {
    icon: Target,
    title: "Identify compliance gaps",
    description:
      "Pinpoint exactly which standards need attention. See which areas are strengths and which require focused improvement actions.",
  },
  {
    icon: TrendingUp,
    title: "Track continuous improvement",
    description:
      "Monitor progress over time. Set improvement targets, track actions, and measure movement towards compliance on each standard.",
  },
  {
    icon: BarChart3,
    title: "Audit preparation packs",
    description:
      "Generate comprehensive audit preparation documents before ACQSC assessment contacts. Present evidence, ratings, and improvement actions with confidence.",
  },
  {
    icon: Clock,
    title: "Real-time compliance insights",
    description:
      "Dashboard shows current compliance status across all 8 standards. See what changed since last review and what action is pending.",
  },
];

const qualityStandards = [
  {
    number: "1",
    title: "Person-Centred Care",
    description:
      "Assess how well your organisation provides person-centred care that respects values, preferences, and individual needs. Map evidence from care plans, resident feedback, and incident records.",
  },
  {
    number: "2",
    title: "Organisational Governance",
    description:
      "Evaluate governance structure, accountability, and decision-making. Evidence from compliance policies, board minutes, and management records.",
  },
  {
    number: "3",
    title: "Feedback and Complaints",
    description:
      "Review complaints management, feedback systems, and resolution processes. Track all complaints, trends, and outcomes for quality improvement.",
  },
  {
    number: "4",
    title: "Staffing and Organisational Planning",
    description:
      "Assess workforce planning, care minutes targets, and staffing adequacy. Monitor staffing ratios, training, and suitability throughout the year.",
  },
  {
    number: "5",
    title: "Infection Control and Preventive Health",
    description:
      "Evaluate infection prevention, health promotion, and disease management. Map evidence from incident reports, health records, and prevention protocols.",
  },
  {
    number: "6",
    title: "Medicines Management",
    description:
      "Assess medication safety, storage, documentation, and adverse events. Track all medicine-related incidents and corrective actions.",
  },
  {
    number: "7",
    title: "Nutrition, Hydration and Meals",
    description:
      "Review meal provision, dietary requirements, and nutrition assessment. Evidence from menus, assessments, and incident records.",
  },
  {
    number: "8",
    title: "Regulation Compliance and Managing Serious Incidents",
    description:
      "Monitor compliance with the Aged Care Act 2024, SIRS reporting, and serious incident management. Automated deadline tracking for all reportable incidents.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Map Your Evidence",
    description:
      "Select which modules and data sources feed into each Quality Standard. Connect SIRS reports, complaints, staffing, and other documentation.",
  },
  {
    step: "2",
    title: "Rate Compliance",
    description:
      "Self-assess each standard from 1 (does not meet) to 5 (exceeds). Document the evidence and reasoning behind each rating.",
  },
  {
    step: "3",
    title: "Identify Gaps",
    description:
      "See exactly where compliance gaps exist. Prioritise standards that need improvement and set specific targets.",
  },
  {
    step: "4",
    title: "Track Improvement",
    description:
      "Log improvement actions, assign owners, and track progress. See trends over time and celebrate progress on each standard.",
  },
  {
    step: "5",
    title: "Prepare for Assessment",
    description:
      "Generate audit-ready packs showing evidence, ratings, and improvement journey. Prepare for ACQSC assessment contacts with confidence.",
  },
];

export default function AgedCareQualityStandardsSoftwarePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Aged Care Quality Standards Software", item: "https://statura.care/aged-care-quality-standards-software" },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Statura Care — Aged Care Quality Standards Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Purpose-built aged care quality standards software for self-assessment against the 8 Aged Care Quality Standards. Evidence mapping, continuous improvement, and ACQSC audit preparation.",
    url: "https://statura.care/aged-care-quality-standards-software",
    author: { "@type": "Organization", name: "Statura Pty Ltd", url: "https://statura.care" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      offerCount: 3,
      description: "14-day free trial. Essentials, Professional, and Enterprise plans.",
    },
    featureList: [
      "Self-assessment for all 8 Aged Care Quality Standards",
      "Evidence mapping across modules",
      "Continuous improvement tracking",
      "ACQSC audit preparation",
      "Compliance gap analysis",
      "Real-time compliance dashboard",
    ],
    screenshot: "https://statura.care/opengraph-image",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the 8 Aged Care Quality Standards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 8 Aged Care Quality Standards are: Standard 1 (Consumer Dignity and Choice), Standard 2 (Ongoing Assessment and Planning), Standard 3 (Personal and Clinical Care), Standard 4 (Services and Supports for Daily Living), Standard 5 (Organisation's Service Environment), Standard 6 (Feedback and Complaints), Standard 7 (Human Resources), and Standard 8 (Organisational Governance).",
        },
      },
      {
        "@type": "Question",
        name: "How does self-assessment work in Statura Care?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Statura Care's Quality Standards module lets you rate compliance against each standard's requirements, map evidence from across all 14 modules, identify gaps with automated analysis, and generate audit preparation packs. Evidence from SIRS, workforce, complaints, and other modules automatically populates relevant standards.",
        },
      },
      {
        "@type": "Question",
        name: "How often should providers self-assess against the Quality Standards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ACQSC recommends continuous self-assessment rather than point-in-time exercises. Best practice is to conduct formal reviews quarterly with ongoing evidence collection between reviews. Statura Care supports both approaches with real-time compliance dashboards and scheduled assessment workflows.",
        },
      },
      {
        "@type": "Question",
        name: "What is an ACQSC assessment contact?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An assessment contact is a visit or review conducted by the Aged Care Quality and Safety Commission to evaluate a provider's compliance with the Quality Standards. These can be announced or unannounced and may focus on specific standards or cover all eight. Providers who maintain continuous self-assessment evidence are significantly better prepared.",
        },
      },
      {
        "@type": "Question",
        name: "Can Statura Care generate audit preparation packs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Statura Care generates comprehensive audit preparation packs that compile evidence across all 8 Quality Standards, including self-assessment ratings, mapped evidence from SIRS, workforce, complaints, and other modules, gap analysis, and improvement action tracking.",
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
                Quality Standards Software
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Self-assess all{" "}
                <span className="text-[#96A998]">8 Aged Care Quality Standards.</span>{" "}
                Prepare for ACQSC assessment contacts with confidence.
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Statura Care's quality standards software helps your organisation assess compliance across all 8 standards, map evidence, identify gaps, and track continuous improvement. Prepare audit-ready documentation in minutes.
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

        {/* Benefits */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Why Statura Quality Standards
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Built for quality standards{" "}
                <span className="text-[#3E5D4A]">self-assessment and improvement.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Statura Care's quality standards module goes beyond simple checklists. It connects evidence across all your modules, helps you understand compliance reality, and guides continuous improvement.
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

        {/* The 8 Quality Standards */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Complete Coverage
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                The 8 Aged Care Quality Standards.{" "}
                <span className="text-[#3E5D4A]">Self-assess all of them.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Self-assess your organisation against each of the 8 Aged Care Quality Standards. Map evidence, understand compliance gaps, and track improvement on each standard.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {qualityStandards.map((standard) => (
                <div
                  key={standard.number}
                  className="group p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#96A998]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#96A998]/20 transition-colors">
                      <span className="font-serif font-bold text-lg text-[#3E5D4A]">
                        {standard.number}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                        {standard.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {standard.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                The Process
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                How self-assessment{" "}
                <span className="text-[#3E5D4A]">actually works in Statura.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                From evidence mapping to audit preparation, a structured approach that connects your data to quality standards compliance.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#96A998] to-[#96A998]/20 hidden lg:block" />

                <div className="space-y-12">
                  {howItWorks.map((item, i) => (
                    <div key={item.step} className="relative pl-20 lg:pl-32">
                      {/* Circle badge */}
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center border-4 border-white shadow-lg">
                        <span className="font-serif font-bold text-lg text-[#96A998]">
                          {item.step}
                        </span>
                      </div>

                      <div className="pt-1">
                        <h3 className="font-semibold text-lg text-[#1E293B] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-base text-slate-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-[#0F172A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-4 gap-8 text-center">
              {[
                { stat: "8", label: "Quality Standards covered" },
                { stat: "∞", label: "Evidence connections" },
                { stat: "Real-time", label: "Compliance visibility" },
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

        {/* Assessment Preparation */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#96A998]/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-[#3E5D4A]" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B] mb-2">
                      ACQSC Assessment Preparation
                    </h2>
                    <p className="text-base text-slate-500 leading-relaxed">
                      When ACQSC assessment contacts your organisation, be ready. Generate comprehensive audit preparation packs that show:
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 ml-16 mb-6">
                  {[
                    "Your self-assessment ratings for each Quality Standard",
                    "Evidence supporting each rating with source documentation",
                    "Identified compliance gaps and improvement actions",
                    "Progress tracking and trends over time",
                    "Demonstrable continuous improvement journey",
                    "All supporting documentation in one location",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#3E5D4A] flex-shrink-0 mt-0.5" />
                      <span className="text-base text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-slate-500 leading-relaxed">
                  No more scrambling to find evidence or reconstruct what you did. Your assessment journey is documented in real-time. When ACQSC contacts you, open Statura and demonstrate your commitment to quality and compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  Self-assessment spreadsheet vs purpose-built software
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  See how dedicated quality standards software improves your assessment and compliance preparation.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { feature: "Self-assess all 8 Quality Standards", spreadsheet: false, statura: true },
                  { feature: "Connect evidence across modules automatically", spreadsheet: false, statura: true },
                  { feature: "Track compliance trends over time", spreadsheet: false, statura: true },
                  { feature: "Generate audit-ready documentation", spreadsheet: false, statura: true },
                  { feature: "Real-time compliance dashboard", spreadsheet: false, statura: true },
                  { feature: "Identify improvement priorities", spreadsheet: "manual", statura: true },
                  { feature: "Assign and track improvement actions", spreadsheet: false, statura: true },
                  { feature: "Cross-module evidence mapping", spreadsheet: false, statura: true },
                  { feature: "ACQSC assessment contact preparation", spreadsheet: false, statura: true },
                  { feature: "Audit trail and immutable records", spreadsheet: false, statura: true },
                ].map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white border border-slate-200"
                  >
                    <div className="text-sm font-medium text-[#1E293B]">{row.feature}</div>
                    <div className="flex justify-center">
                      {row.spreadsheet === true ? (
                        <Check className="w-5 h-5 text-slate-300" />
                      ) : row.spreadsheet === "manual" ? (
                        <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded">Manual</span>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {row.statura === true ? (
                        <Check className="w-5 h-5 text-[#3E5D4A]" />
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-[#96A998]/5 border border-[#96A998]/20 rounded-xl">
                <p className="text-xs text-slate-500 text-center">
                  <span className="font-semibold text-slate-600">Spreadsheet</span> vs <span className="font-semibold text-[#3E5D4A]">Statura Care Quality Standards Module</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B] tracking-tight">
                Quality standards resources
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Guides and frameworks to help you understand and assess the 8 Aged Care Quality Standards.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "8 Aged Care Quality Standards Explained", href: "/blog/aged-care-quality-standards-explained" },
                { title: "Quality Standards Self-Assessment Checklist", href: "/blog/aged-care-quality-standards-self-assessment-checklist" },
                { title: "ACQSC Assessment Contact Preparation Guide", href: "/blog/acqsc-assessment-contact-preparation" },
                { title: "Continuous Improvement in Aged Care", href: "/blog/continuous-improvement-aged-care" },
                { title: "Mapping Evidence to Quality Standards", href: "/blog/evidence-mapping-quality-standards" },
                { title: "View all modules", href: "/modules" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#96A998]/30 hover:shadow-sm transition-all"
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
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="mb-14 text-center">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Common Questions
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Frequently asked questions about the{" "}
                <span className="text-[#3E5D4A]">8 Quality Standards.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What are the 8 Aged Care Quality Standards?",
                  a: "The 8 Aged Care Quality Standards are: Standard 1 (Consumer Dignity and Choice), Standard 2 (Ongoing Assessment and Planning), Standard 3 (Personal and Clinical Care), Standard 4 (Services and Supports for Daily Living), Standard 5 (Organisation's Service Environment), Standard 6 (Feedback and Complaints), Standard 7 (Human Resources), and Standard 8 (Organisational Governance).",
                },
                {
                  q: "How does self-assessment work in Statura Care?",
                  a: "Statura Care's Quality Standards module lets you rate compliance against each standard's requirements, map evidence from across all 14 modules, identify gaps with automated analysis, and generate audit preparation packs. Evidence from SIRS, workforce, complaints, and other modules automatically populates relevant standards.",
                },
                {
                  q: "How often should providers self-assess against the Quality Standards?",
                  a: "The ACQSC recommends continuous self-assessment rather than point-in-time exercises. Best practice is to conduct formal reviews quarterly with ongoing evidence collection between reviews. Statura Care supports both approaches with real-time compliance dashboards and scheduled assessment workflows.",
                },
                {
                  q: "What is an ACQSC assessment contact?",
                  a: "An assessment contact is a visit or review conducted by the Aged Care Quality and Safety Commission to evaluate a provider's compliance with the Quality Standards. These can be announced or unannounced and may focus on specific standards or cover all eight. Providers who maintain continuous self-assessment evidence are significantly better prepared.",
                },
                {
                  q: "Can Statura Care generate audit preparation packs?",
                  a: "Yes. Statura Care generates comprehensive audit preparation packs that compile evidence across all 8 Quality Standards, including self-assessment ratings, mapped evidence from SIRS, workforce, complaints, and other modules, gap analysis, and improvement action tracking.",
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

        {/* Key Features Highlight */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Integrated Features
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Quality standards meets{" "}
                <span className="text-[#3E5D4A]">all your compliance modules.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                The Quality Standards module integrates seamlessly with all Statura Care compliance modules. Your evidence isn't siloed — it works across your entire compliance platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "SIRS Incident Integration",
                  description: "SIRS incidents automatically feed into Standard 8 (Regulation Compliance) and other relevant standards. Incident trends inform quality improvement decisions.",
                },
                {
                  icon: Users,
                  title: "Staffing & Care Minutes",
                  description: "Your care minutes and staffing data automatically supports Standard 4 (Staffing and Planning) and Standard 7 (Nutrition and Meals) assessments.",
                },
                {
                  icon: Clock,
                  title: "Complaints & Feedback",
                  description: "Complaint trends and feedback automatically map to Standard 3 (Feedback and Complaints) and inform continuous improvement across all standards.",
                },
                {
                  icon: Lock,
                  title: "Evidence Audit Trail",
                  description: "Every assessment decision, rating, and supporting evidence is logged in an immutable audit trail. Complete transparency for your ACQSC assessment contact.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F5F6F2] flex items-center justify-center mb-4 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                    <feature.icon className="w-6 h-6 text-[#3E5D4A]" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          title="Ready to assess and improve your Quality Standards compliance?"
          description="Start your 14-day free trial. No credit card required. Australian-hosted."
        />
      </main>
      <Footer />
    </>
  );
}
