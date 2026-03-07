import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  CheckCircle2,
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  ArrowRight,
  ClipboardList,
  Users,
  Heart,
  Home,
  MessageSquare,
  Building2,
  Settings,
  Stethoscope,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ACQSC Audit Preparation Guide — How to Prepare for Assessment Contacts",
  description:
    "Comprehensive guide to preparing for ACQSC assessment contacts under the Aged Care Act 2024. Covers all 7 Strengthened Quality Standards, evidence requirements, self-assessment, documentation, and practical preparation strategies for aged care providers.",
  alternates: { canonical: "https://statura.care/resources/audit-preparation-guide" },
  openGraph: {
    title: "ACQSC Audit Preparation Guide | Statura Care",
    description:
      "Comprehensive guide to preparing for ACQSC assessment contacts under the Aged Care Act 2024. Covers all 7 Strengthened Quality Standards, evidence requirements, and practical preparation strategies.",
    url: "https://statura.care/resources/audit-preparation-guide",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "ACQSC audit preparation",
    "aged care audit preparation",
    "ACQSC assessment contact",
    "quality standards audit",
    "aged care compliance audit",
    "ACQSC evidence requirements",
    "aged care audit checklist",
    "quality standards self-assessment",
  ],
};

interface QualityStandard {
  number: number;
  name: string;
  description: string;
  evidenceTypes: string[];
  modules: { label: string; href: string }[];
  icon: React.ElementType;
}

const qualityStandards: QualityStandard[] = [
  {
    number: 1,
    name: "The Individual",
    description:
      "Assesses how providers and workers treat older people \u2014 with dignity, respect for choices, identity, culture, and autonomy.",
    evidenceTypes: [
      "Individualised care plans reflecting consumer preferences and cultural needs",
      "Records of informed consent and advance care directives",
      "Feedback and satisfaction survey results",
      "Evidence of cultural safety practices and linguistic support",
    ],
    modules: [
      { label: "Quality Standards", href: "/modules/quality-standards" },
      { label: "Clinical Care", href: "/modules/clinical-care" },
    ],
    icon: Heart,
  },
  {
    number: 2,
    name: "The Organisation",
    description:
      "Covers governing body responsibility, culture of safety and quality, workforce governance, risk management, complaints handling, and continuous improvement.",
    evidenceTypes: [
      "Governing body meeting minutes and decision records",
      "Risk register with assessment and mitigation evidence",
      "Workforce planning, screening, training, and care minutes data",
      "Complaints register, feedback analysis, and improvement actions",
      "Continuous improvement register with progress evidence",
    ],
    modules: [
      { label: "Governance", href: "/modules/governance" },
      { label: "Responsible Persons", href: "/modules/responsible-persons" },
      { label: "Workforce Compliance", href: "/modules/workforce" },
      { label: "Complaints", href: "/modules/complaints" },
    ],
    icon: Settings,
  },
  {
    number: 3,
    name: "The Care and Services",
    description:
      "Requires safe, effective, person-centred care and services including assessments, care planning, personal care, and support services.",
    evidenceTypes: [
      "Comprehensive assessment and care plan documentation",
      "Evidence of regular care plan reviews and consumer involvement",
      "SIRS incident register with investigation and remediation outcomes",
      "Restrictive practices register and behaviour support plans",
    ],
    modules: [
      { label: "Clinical Care", href: "/modules/clinical-care" },
      { label: "SIRS & Incidents", href: "/modules/sirs" },
      { label: "Quality Standards", href: "/modules/quality-standards" },
    ],
    icon: ClipboardList,
  },
  {
    number: 4,
    name: "The Environment",
    description:
      "Requires safe, comfortable, welcoming environments that meet consumers' needs, including physical facilities, equipment, and emergency preparedness.",
    evidenceTypes: [
      "Building and equipment maintenance schedules with completion records",
      "Emergency and disaster preparedness plans and drill records",
      "Work health and safety inspection reports",
      "Environmental hazard identification and remediation records",
    ],
    modules: [
      { label: "WHS", href: "/modules/whs" },
      { label: "Accommodation", href: "/modules/accommodation" },
    ],
    icon: Building2,
  },
  {
    number: 5,
    name: "Clinical Care",
    description:
      "Covers clinical governance, medication management, infection prevention, wound care, palliative care, and response to clinical deterioration.",
    evidenceTypes: [
      "Clinical governance framework and clinical audit results",
      "Medication management records, reconciliation, and incident reports",
      "Infection prevention and control procedures and outbreak logs",
      "Wound management, vital signs monitoring, and palliative care records",
    ],
    modules: [
      { label: "Clinical Care", href: "/modules/clinical-care" },
      { label: "Medications", href: "/modules/medications" },
      { label: "Infection Prevention", href: "/modules/infection-prevention" },
    ],
    icon: Stethoscope,
  },
  {
    number: 6,
    name: "Food and Nutrition",
    description:
      "Covers food service quality, dietary requirements, nutritional assessment, meal preferences, and meeting cultural food needs.",
    evidenceTypes: [
      "Menu planning records and dietary requirement documentation",
      "Nutritional assessment and monitoring records",
      "Consumer satisfaction surveys on food and meals",
      "Evidence of meeting cultural and religious food requirements",
    ],
    modules: [
      { label: "Quality Standards", href: "/modules/quality-standards" },
      { label: "Clinical Care", href: "/modules/clinical-care" },
    ],
    icon: Home,
  },
  {
    number: 7,
    name: "The Residential Community",
    description:
      "Applies to residential care only. Covers community life, social connections, meaningful activities, and how the residential setting supports quality of life.",
    evidenceTypes: [
      "Activity programs showing variety and consumer participation",
      "Evidence of community engagement and social connection support",
      "Consumer feedback on community life and activities",
      "Records showing how consumer preferences shape community activities",
    ],
    modules: [
      { label: "Quality Standards", href: "/modules/quality-standards" },
      { label: "Accommodation", href: "/modules/accommodation" },
    ],
    icon: Users,
  },
];

const evidenceChecklist = [
  "Self-assessment records against each of the seven Quality Standards",
  "Improvement plans with progress evidence and completion dates",
  "Incident registers (SIRS) with investigation outcomes and remediation evidence",
  "Complaints register with resolution evidence, timeframes, and improvement actions",
  "Workforce compliance records including screening, police checks, training, and care minutes data",
  "Clinical care documentation including assessments, care plans, medication records, and vital signs",
  "Governance records including board minutes, risk register, compliance reports, and policies",
  "Responsible persons register with suitability assessments and screening clearances",
];

const commonPitfalls = [
  {
    title: "Relying on paper-based or spreadsheet systems",
    description:
      "When assessors request evidence, you need to produce it quickly. Spreadsheets scattered across shared drives, paper registers in filing cabinets, and email chains do not support rapid evidence retrieval. Assessors notice when it takes hours to find a document.",
  },
  {
    title: "Not conducting regular self-assessments",
    description:
      "Self-assessment should be ongoing, not annual. Providers who only assess compliance before a known audit often have gaps they are unaware of. Regular self-assessment identifies issues before assessors do.",
  },
  {
    title: "No continuous improvement register",
    description:
      "Assessors look for evidence that you identify opportunities for improvement and act on them. Without a formal register linking identified gaps to actions, timelines, and outcomes, you cannot demonstrate a culture of continuous improvement.",
  },
  {
    title: "SIRS investigation outcomes not linked to quality improvement",
    description:
      "An incident that is investigated but produces no systemic change suggests a compliance-only mindset. Assessors expect investigation findings to feed into your improvement register and inform changes to policies, training, or procedures.",
  },
  {
    title: "Workforce compliance gaps",
    description:
      "Expired police checks, missed mandatory training, insufficient care minutes, or incomplete screening records are among the most common findings. These are binary — you either have current records or you do not.",
  },
  {
    title: "No cross-referencing between modules",
    description:
      "If an incident in SIRS does not link to the resident in clinical care, the staff member in workforce, and the relevant quality standard in governance, you are missing the connections assessors look for. Siloed systems create siloed evidence.",
  },
];

const platformBenefits = [
  {
    title: "Auto-generated evidence packs",
    description:
      "Generate compliance evidence for each Quality Standard at the click of a button. Evidence is pulled from across all modules — incidents, complaints, workforce, clinical, and governance — into a single structured report.",
  },
  {
    title: "Cross-module intelligence",
    description:
      "Data flows between modules automatically. An incident in SIRS links to the resident, the staff member, the complaint, and the relevant Quality Standard. Nothing is siloed.",
  },
  {
    title: "Continuous self-assessment",
    description:
      "Track your self-assessment progress against each standard continuously. Identify gaps as they emerge, not months later during audit preparation.",
  },
  {
    title: "Always audit-ready",
    description:
      "Because compliance is woven into daily operations, you are always prepared for an unannounced assessment contact. No scrambling, no last-minute document hunts.",
  },
];

export default function AuditPreparationGuidePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://statura.care/resources" },
      { "@type": "ListItem", position: 3, name: "ACQSC Audit Preparation Guide", item: "https://statura.care/resources/audit-preparation-guide" },
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
                ACQSC Audit Preparation Guide
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                How to prepare for an ACQSC{" "}
                <span className="text-[#96A998]">assessment contact.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Assessment contacts can be announced or unannounced. The best
                preparation is continuous compliance — not last-minute scrambling.
                This guide covers what assessors look for, how to organise your
                evidence, and practical strategies for audit readiness.
              </p>
            </div>
          </div>
        </section>

        {/* What is an assessment contact? */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                  Understanding Assessment Contacts
                </p>
                <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight mb-6">
                  What is an{" "}
                  <span className="text-[#3E5D4A]">assessment contact?</span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-4">
                  An assessment contact is a regulatory evaluation conducted by the
                  Aged Care Quality and Safety Commission (ACQSC) to determine
                  whether a provider is meeting its obligations under the Aged Care
                  Act 2024 and the Aged Care Quality Standards.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Assessment contacts involve onsite inspections, document review,
                  interviews with staff, residents, and families, and observation of
                  care practices. Assessors evaluate compliance across all seven
                  Quality Standards.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Announced assessment contacts",
                    description:
                      "Scheduled in advance, giving providers time to prepare documents and coordinate staff availability. However, the scope and depth of the assessment are not disclosed beforehand.",
                  },
                  {
                    title: "Unannounced assessment contacts",
                    description:
                      "Conducted without prior notice. Assessors arrive and expect immediate access to documentation, staff, and residents. These reveal whether compliance is embedded in daily operations or only present during planned audits.",
                  },
                  {
                    title: "Review audits",
                    description:
                      "Targeted assessments triggered by a specific concern — a complaint, a SIRS notification pattern, or a previous non-compliance finding. These focus on specific standards or areas of concern.",
                  },
                ].map((type) => (
                  <div
                    key={type.title}
                    className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                  >
                    <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                      {type.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The 7 Quality Standards */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                What Assessors Evaluate
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                The 7 Aged Care{" "}
                <span className="text-[#3E5D4A]">Quality Standards.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Every assessment contact evaluates your compliance against the seven
                Strengthened Quality Standards. Understanding what assessors look for in each
                standard is the foundation of audit preparation.
              </p>
            </div>

            <div className="space-y-6">
              {qualityStandards.map((standard) => (
                <div
                  key={standard.number}
                  className="p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0">
                      <standard.icon className="w-5 h-5 text-[#3E5D4A]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-lg lg:text-xl text-[#1E293B]">
                        <span className="text-[#96A998]">Standard {standard.number}:</span>{" "}
                        {standard.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                        {standard.description}
                      </p>
                    </div>
                  </div>

                  <div className="ml-14">
                    <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.15em] mb-3">
                      Key evidence types
                    </p>
                    <div className="space-y-2 mb-4">
                      {standard.evidenceTypes.map((evidence, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#3E5D4A] mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {evidence}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {standard.modules.map((mod) => (
                        <Link
                          key={mod.href}
                          href={mod.href}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F6F2] text-xs font-medium text-[#3E5D4A] hover:bg-[#96A998] hover:text-white transition-all duration-150"
                        >
                          {mod.label}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evidence preparation checklist */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                  Evidence Preparation
                </p>
                <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight mb-6">
                  What to have{" "}
                  <span className="text-[#3E5D4A]">ready.</span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  When assessors arrive — announced or unannounced — you need to be
                  able to produce this evidence promptly. The speed and completeness
                  of your response tells assessors whether compliance is embedded in
                  your operations or assembled on demand.
                </p>
              </div>

              <div className="space-y-3">
                {evidenceChecklist.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-[#F8FAFC]"
                  >
                    <FileCheck className="w-5 h-5 text-[#3E5D4A] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Common pitfalls */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Common Pitfalls
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                What causes providers{" "}
                <span className="text-[#3E5D4A]">to fail.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Understanding what goes wrong for other providers helps you avoid
                the same mistakes. These are the most common issues identified
                during assessment contacts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {commonPitfalls.map((pitfall) => (
                <div
                  key={pitfall.title}
                  className="p-7 rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                        {pitfall.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {pitfall.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Statura Care prepares you */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                How Statura Care Helps
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Be audit-ready{" "}
                <span className="text-[#3E5D4A]">at all times.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Statura Care makes audit preparation a non-event. Because compliance
                is built into daily workflows, the evidence assessors need is
                always current, always accessible, and always connected across
                modules.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {platformBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                      <Zap className="w-5 h-5 text-[#3E5D4A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/modules/quality-standards"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0F172A] text-white font-semibold text-sm hover:bg-[#1E293B] transition-all duration-150 shadow-sm hover:shadow-md"
              >
                Explore the Quality Standards module
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B] tracking-tight">
                Related resources
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Guides, checklists, and modules to support your audit preparation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Quality Standards Self-Assessment Checklist",
                  href: "/blog/aged-care-quality-standards-self-assessment-checklist",
                },
                {
                  title: "SIRS Compliance Checklist",
                  href: "/resources/sirs-checklist",
                },
                {
                  title: "Quality Standards Module",
                  href: "/modules/quality-standards",
                },
                {
                  title: "SIRS Reporting Obligations Under the Aged Care Act 2024",
                  href: "/blog/sirs-reporting-obligations-aged-care-act-2024",
                },
                {
                  title: "Aged Care Governance Best Practices",
                  href: "/blog/aged-care-governance-best-practices-2026",
                },
                {
                  title: "Compliance Glossary",
                  href: "/glossary",
                },
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
          title="Be audit-ready at all times"
          description="Request a personalised demo and see how Statura Care generates evidence packs, tracks self-assessments, and keeps your compliance current — automatically."
        />
      </main>
      <Footer />
    </>
  );
}
