import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Users,
  Grid3x3,
  FileText,
  ListChecks,
  Target,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aged Care Governance Software — Board, Risk & Compliance Management",
  description:
    "Governance software for aged care providers. Board meeting management, risk register with 5x5 matrix, policy library, compliance obligations tracking, and strategic planning under the Aged Care Act 2024.",
  alternates: { canonical: "https://statura.care/aged-care-governance-software" },
  openGraph: {
    title: "Aged Care Governance Software | Statura Care",
    description:
      "Board meeting management, risk register, policy library, compliance obligations, and strategic planning. Built for aged care governance under the Aged Care Act 2024.",
    url: "https://statura.care/aged-care-governance-software",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "aged care governance software",
    "aged care board management",
    "aged care risk register",
    "aged care policy management",
    "clinical governance aged care",
    "governing body aged care",
    "aged care compliance management",
  ],
};

const benefits = [
  {
    icon: Users,
    title: "Board & Meeting Management",
    description:
      "Agenda creation, minutes recording, action tracking, and attendance registers. Manage board meetings, committee meetings, and governance reviews with a complete record of decisions and actions.",
  },
  {
    icon: Grid3x3,
    title: "Risk Register",
    description:
      "5x5 risk matrix with inherent and residual scoring, controls, treatment plans, and review cycles. Categorise risks by type, assign owners, and track the effectiveness of mitigation strategies.",
  },
  {
    icon: FileText,
    title: "Policy Library",
    description:
      "Policy document management with version control, approval workflows, and review scheduling. Ensure policies are current, approved, and accessible to the right people.",
  },
  {
    icon: ListChecks,
    title: "Compliance Obligations",
    description:
      "Track obligations with deadlines, responsible persons, and evidence mapping. Map each obligation to the relevant section of the Aged Care Act 2024 and monitor compliance status.",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description:
      "Strategic objectives with KPIs, progress tracking, and board reporting. Connect strategic goals to operational activities and demonstrate progress to the governing body.",
  },
  {
    icon: HeartPulse,
    title: "Clinical Governance",
    description:
      "Clinical governance framework integration with quality and safety metrics. Connect clinical data, incident trends, and quality indicators to governance reporting and board oversight.",
  },
];

export default function AgedCareGovernanceSoftwarePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Aged Care Governance Software", item: "https://statura.care/aged-care-governance-software" },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Statura Care — Aged Care Governance Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Governance software for aged care providers. Board meeting management, risk register with 5x5 matrix, policy library, compliance obligations tracking, and strategic planning under the Aged Care Act 2024.",
    url: "https://statura.care/aged-care-governance-software",
    author: { "@type": "Organization", name: "Statura Pty Ltd", url: "https://statura.care" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      offerCount: 3,
      description: "Essentials, Professional, and Enterprise plans available. Request a demo for pricing.",
    },
    featureList: [
      "Board and meeting management",
      "5x5 risk matrix register",
      "Policy library with version control",
      "Compliance obligations tracking",
      "Strategic planning with KPIs",
      "Clinical governance integration",
    ],
    screenshot: "https://statura.care/opengraph-image",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What governance obligations do aged care providers have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Aged Care Act 2024, aged care providers must have an effective governing body that oversees the organisation's operations, ensures compliance with the Act and Quality Standards, manages risks, and maintains accountability. Governing bodies must demonstrate active oversight of clinical governance, financial management, quality improvement, and incident management.",
        },
      },
      {
        "@type": "Question",
        name: "How does the risk register work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The risk register uses a 5x5 risk matrix to assess both inherent risk (before controls) and residual risk (after controls). Each risk is categorised by type, assigned an owner, linked to controls and treatment plans, and scheduled for regular review. Risk trends are reported to the governing body automatically.",
        },
      },
      {
        "@type": "Question",
        name: "Can it manage board meetings and minutes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The platform manages the full meeting lifecycle — agenda creation, document distribution, minutes recording, action tracking, and attendance registers. All meeting records are stored with an immutable audit trail.",
        },
      },
      {
        "@type": "Question",
        name: "How does clinical governance integrate with the platform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clinical governance data from across the platform — incident trends, quality indicators, assessment outcomes, medication incidents, and complaints — feeds into governance reporting. The governing body can see clinical safety metrics, quality improvement progress, and risk exposure in one view.",
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
                Aged Care Governance Software
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Governance,{" "}
                <span className="text-[#96A998]">structured and auditable.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Board meeting management, risk register, policy library,
                compliance obligations, and strategic planning — all with a
                complete audit trail.
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
                Built for Aged Care Governance
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Governance software that{" "}
                <span className="text-[#3E5D4A]">connects oversight to operations.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                The Aged Care Act 2024 places significant accountability on
                governing bodies. Statura Care gives boards and management teams
                the tools to oversee compliance, manage risk, track strategic
                objectives, and maintain a clear audit trail — all connected to
                your operational data.
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

        {/* Risk Matrix Detail */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                  Risk Management
                </p>
                <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                  5x5 risk matrix with{" "}
                  <span className="text-[#3E5D4A]">inherent and residual scoring.</span>
                </h2>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                  Assess risk likelihood and consequence before and after
                  controls. Track treatment plans, assign owners, and schedule
                  reviews. Report risk exposure to your governing body with
                  confidence.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Risk Identification", description: "Categorise risks by type — clinical, operational, financial, strategic, and compliance. Link risks to specific obligations under the Act." },
                  { title: "Inherent Risk Assessment", description: "Score likelihood and consequence on a 5x5 matrix before controls are applied. Understand your raw risk exposure." },
                  { title: "Controls & Treatment Plans", description: "Document existing controls, plan additional treatments, and assign owners with target completion dates." },
                  { title: "Residual Risk & Review", description: "Re-score risk after controls. Schedule regular reviews to ensure controls remain effective. Track risk trends over time." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl border border-slate-200 bg-white"
                  >
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
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-[#0F172A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-4 gap-8 text-center">
              {[
                { stat: "5x5", label: "Risk matrix scoring" },
                { stat: "32", label: "Modules feeding governance" },
                { stat: "100%", label: "Audit trail coverage" },
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
                Aged care governance resources
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Guides to governance obligations, risk management, and board
                accountability in aged care.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Governing Body Obligations Under the Aged Care Act 2024", href: "/blog/governing-body-obligations-aged-care-act-2024" },
                { title: "Risk Management in Aged Care", href: "/blog/risk-management-aged-care" },
                { title: "Clinical Governance Framework Guide", href: "/blog/clinical-governance-framework-aged-care" },
                { title: "Policy Management Best Practice", href: "/blog/policy-management-aged-care" },
                { title: "Quality Standard 2: Organisational Governance", href: "/blog/quality-standard-2-organisational-governance" },
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
                <span className="text-[#3E5D4A]">aged care governance software.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What governance obligations do aged care providers have?",
                  a: "Under the Aged Care Act 2024, aged care providers must have an effective governing body that oversees the organisation's operations, ensures compliance with the Act and Quality Standards, manages risks, and maintains accountability. Governing bodies must demonstrate active oversight of clinical governance, financial management, quality improvement, and incident management.",
                },
                {
                  q: "How does the risk register work?",
                  a: "The risk register uses a 5x5 risk matrix to assess both inherent risk (before controls) and residual risk (after controls). Each risk is categorised by type, assigned an owner, linked to controls and treatment plans, and scheduled for regular review. Risk trends are reported to the governing body automatically.",
                },
                {
                  q: "Can it manage board meetings and minutes?",
                  a: "Yes. The platform manages the full meeting lifecycle — agenda creation, document distribution, minutes recording, action tracking, and attendance registers. All meeting records are stored with an immutable audit trail.",
                },
                {
                  q: "How does clinical governance integrate with the platform?",
                  a: "Clinical governance data from across the platform — incident trends, quality indicators, assessment outcomes, medication incidents, and complaints — feeds into governance reporting. The governing body can see clinical safety metrics, quality improvement progress, and risk exposure in one view.",
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
          title="Ready to strengthen aged care governance?"
          description="Request a demo today. Board management, risk register, policy library, and compliance tracking. Australian-hosted in Sydney."
        />
      </main>
      <Footer />
    </>
  );
}
