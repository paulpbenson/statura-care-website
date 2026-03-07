import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileCheck,
  ShieldCheck,
  Search,
  ClipboardCheck,
  ArrowRight,
  Zap,
  BookOpen,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SIRS Compliance Checklist — Serious Incident Response Scheme",
  description:
    "Free SIRS compliance checklist for aged care providers. Check your incident reporting processes against every requirement of the Serious Incident Response Scheme under the Aged Care Act 2024. Priority 1, Priority 2, investigation, and remediation requirements.",
  alternates: { canonical: "https://statura.care/resources/sirs-checklist" },
  openGraph: {
    title: "SIRS Compliance Checklist | Statura Care",
    description:
      "Free SIRS compliance checklist for aged care providers. Check your incident reporting processes against every requirement of the Serious Incident Response Scheme under the Aged Care Act 2024.",
    url: "https://statura.care/resources/sirs-checklist",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "SIRS checklist",
    "SIRS compliance checklist",
    "serious incident response scheme checklist",
    "aged care incident reporting checklist",
    "SIRS requirements aged care",
    "SIRS reporting obligations",
    "ACQSC SIRS requirements",
  ],
};

interface ChecklistItem {
  text: string;
  description?: string;
}

interface ChecklistSection {
  id: string;
  number: number;
  title: string;
  icon: React.ElementType;
  items: ChecklistItem[];
}

const checklistSections: ChecklistSection[] = [
  {
    id: "incident-identification",
    number: 1,
    title: "Incident Identification",
    icon: Search,
    items: [
      {
        text: "Do you have a clear definition of what constitutes a reportable serious incident?",
        description:
          "Your organisation should have documented criteria that align with the eight reportable incident types defined in the Aged Care Act 2024.",
      },
      {
        text: "Are all staff trained to identify and report potential SIRS incidents?",
        description:
          "Training should cover all staff — clinical, care, administrative, and ancillary — not just clinical leads. The 24-hour clock starts when any staff member becomes aware.",
      },
      {
        text: "Do you distinguish between Priority 1 and Priority 2 incidents?",
        description:
          "Priority 1 incidents involve immediate danger, death, or serious injury and require notification within 24 hours. Priority 2 incidents must be reported within 30 calendar days.",
      },
      {
        text: "Is there a process for identifying unreasonable use of force, unlawful sexual contact, psychological abuse, unexpected death, stealing or financial coercion, neglect, and inappropriate restrictive practices?",
        description:
          "Each incident type has specific characteristics. Staff should be able to recognise all eight categories, not just the most obvious ones like physical harm.",
      },
    ],
  },
  {
    id: "priority-1-reporting",
    number: 2,
    title: "Priority 1 Reporting (24 hours)",
    icon: AlertTriangle,
    items: [
      {
        text: "Can you identify Priority 1 incidents (immediate danger, death, serious injury)?",
        description:
          "Priority 1 includes death of a care recipient, serious injury or illness requiring hospitalisation, and incidents where there is an immediate risk to health, safety, or wellbeing.",
      },
      {
        text: "Do you have a process to notify ACQSC within 24 hours of becoming aware?",
        description:
          "The notification must be submitted to the Aged Care Quality and Safety Commission within 24 hours. This is calendar hours, not business hours.",
      },
      {
        text: "Is there an after-hours notification process for incidents that occur outside business hours?",
        description:
          "A Priority 1 incident at 11pm on a Saturday still requires notification within 24 hours. Your process must cover weekends, public holidays, and night shifts.",
      },
      {
        text: "Do you track the exact time of awareness to calculate the 24-hour deadline?",
        description:
          "The clock starts when any staff member becomes aware of the incident, not when a manager is informed. Accurate time tracking is essential for demonstrating compliance.",
      },
    ],
  },
  {
    id: "priority-2-reporting",
    number: 3,
    title: "Priority 2 Reporting (30 calendar days)",
    icon: Clock,
    items: [
      {
        text: "Can you identify Priority 2 incidents?",
        description:
          "Priority 2 incidents are reportable serious incidents that do not meet the threshold for Priority 1 — they do not involve immediate danger, death, or serious injury but are still reportable under SIRS.",
      },
      {
        text: "Do you have a process to notify ACQSC within 30 calendar days?",
        description:
          "The 30 business day deadline requires careful tracking. Late notifications are a compliance failure that may trigger regulatory attention.",
      },
      {
        text: "Do you track the 30 calendar day deadline accurately?",
        description:
          "The 30-day deadline is counted in calendar days (not business days). Accurate tracking and automated reminders help ensure notifications are submitted on time.",
      },
    ],
  },
  {
    id: "investigation",
    number: 4,
    title: "Investigation",
    icon: FileCheck,
    items: [
      {
        text: "Do you assign an independent investigator for each reportable incident?",
        description:
          "The investigator should be independent of the incident — not the person who was involved, their direct supervisor, or anyone with a conflict of interest.",
      },
      {
        text: "Is there a structured investigation methodology?",
        description:
          "Investigations should follow a documented methodology: gather facts, interview witnesses, review documentation, identify contributing factors, and determine root causes.",
      },
      {
        text: "Do you document findings, root causes, and contributing factors?",
        description:
          "Investigation reports must capture what happened, why it happened, what systemic factors contributed, and what needs to change to prevent recurrence.",
      },
      {
        text: "Are affected individuals (care recipients, families) notified appropriately?",
        description:
          "Open disclosure principles apply. Affected care recipients and their families should be informed of the incident, what action has been taken, and what changes are being made.",
      },
      {
        text: "Do you apply natural justice principles during investigations?",
        description:
          "Staff members who are the subject of an investigation have the right to know the allegations, respond to them, and have their response considered before findings are made.",
      },
    ],
  },
  {
    id: "remediation",
    number: 5,
    title: "Remediation",
    icon: ClipboardCheck,
    items: [
      {
        text: "Do investigation findings result in documented remediation actions?",
        description:
          "Every investigation that identifies a gap, failure, or contributing factor should produce specific, actionable remediation steps — not vague commitments to improve.",
      },
      {
        text: "Are remediation actions assigned to specific responsible persons with due dates?",
        description:
          "Each action should have a named owner and a target completion date. Unassigned actions or open-ended timelines indicate a weak remediation process.",
      },
      {
        text: "Do you track completion of remediation actions?",
        description:
          "Actions should be tracked to completion with evidence of implementation. Overdue actions should trigger escalation alerts to management.",
      },
      {
        text: "Are systemic issues identified and addressed?",
        description:
          "Individual incidents may reveal systemic patterns — staffing gaps, training deficiencies, environmental hazards, or policy failures. Remediation should address root causes, not just symptoms.",
      },
    ],
  },
  {
    id: "record-keeping",
    number: 6,
    title: "Record Keeping",
    icon: BookOpen,
    items: [
      {
        text: "Do you maintain a register of all incidents (reportable and non-reportable)?",
        description:
          "A comprehensive incident register captures all incidents, not just those that meet the SIRS reporting threshold. This supports trend analysis and pattern identification.",
      },
      {
        text: "Are all ACQSC notifications documented with timestamps?",
        description:
          "Every notification to the ACQSC should be recorded with the date and time of submission, the notification reference number, and the content of the notification.",
      },
      {
        text: "Is there an immutable audit trail of all incident-related actions?",
        description:
          "Every action taken — from initial report through investigation, notification, and remediation — should be logged in a tamper-proof audit trail with timestamps and user identification.",
      },
      {
        text: "Can you produce a complete incident history for ACQSC on request?",
        description:
          "During an assessment contact, ACQSC assessors may request your full incident history. You should be able to produce this within minutes, not days.",
      },
    ],
  },
  {
    id: "restrictive-practices",
    number: 7,
    title: "Restrictive Practices",
    icon: Scale,
    items: [
      {
        text: "Do you maintain a restrictive practices register?",
        description:
          "All uses of restrictive practices — physical restraint, chemical restraint, mechanical restraint, seclusion, and environmental restraint — must be recorded in a dedicated register.",
      },
      {
        text: "Are behaviour support plans in place before any restrictive practice is used?",
        description:
          "A current, reviewed behaviour support plan must be in place before any restrictive practice is applied. The plan should document alternative strategies attempted and the rationale for the restrictive practice.",
      },
      {
        text: "Are restrictive practices reported through SIRS where required?",
        description:
          "Inappropriate use of restrictive practices — or use without a behaviour support plan — is a reportable incident under SIRS and must be notified to the ACQSC.",
      },
    ],
  },
];

const automationFeatures = [
  {
    title: "Auto-classification",
    description:
      "Incidents are automatically classified as Priority 1 or Priority 2 based on the details entered, reducing human error in prioritisation.",
  },
  {
    title: "Deadline calculation",
    description:
      "The system calculates exact notification deadlines — 24 hours for Priority 1, 30 calendar days for Priority 2 — with escalating alerts as deadlines approach.",
  },
  {
    title: "Escalating alerts",
    description:
      "Automated alerts escalate from info to warning to critical as deadlines approach. Critical alerts cannot be dismissed without action.",
  },
  {
    title: "Investigation workflow",
    description:
      "Structured investigation forms capture findings, root causes, contributing factors, and affected persons. Investigators are assigned and tracked.",
  },
  {
    title: "Remediation tracking",
    description:
      "Every remediation action is assigned, dated, and tracked to completion. Overdue actions trigger escalation to management.",
  },
  {
    title: "Immutable audit trail",
    description:
      "Every action — creation, update, notification, investigation step, and remediation — is logged with timestamps, user identity, and full change history.",
  },
];

export default function SirsChecklistPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://statura.care/resources" },
      { "@type": "ListItem", position: 3, name: "SIRS Compliance Checklist", item: "https://statura.care/resources/sirs-checklist" },
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
                SIRS Compliance Checklist
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Is your incident reporting process{" "}
                <span className="text-[#96A998]">compliant?</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Use this checklist to assess your organisation&apos;s Serious Incident
                Response Scheme processes against the requirements of the Aged Care
                Act 2024.
              </p>
            </div>
          </div>
        </section>

        {/* Section navigation */}
        <section className="bg-white border-b border-slate-200 py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {checklistSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[#1E293B] bg-[#F5F6F2] hover:bg-[#96A998] hover:text-white transition-all duration-150"
                >
                  <span className="text-xs text-slate-400 font-semibold">{section.number}.</span>
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist sections */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-16 lg:space-y-20">
              {checklistSections.map((section) => (
                <div key={section.id} id={section.id}>
                  {/* Section heading */}
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-[#96A998]">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-5 h-5 text-[#3E5D4A]" />
                    </div>
                    <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B]">
                      <span className="text-[#96A998] mr-2">{section.number}.</span>
                      {section.title}
                    </h2>
                  </div>

                  {/* Checklist items */}
                  <div className="space-y-4">
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                      >
                        <div className="flex items-start gap-4">
                          <CheckCircle2 className="w-5 h-5 text-[#3E5D4A] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-[#1E293B] text-base leading-relaxed">
                              {item.text}
                            </p>
                            {item.description && (
                              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Statura Care automates this */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                How Statura Care Helps
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Automate every step of{" "}
                <span className="text-[#3E5D4A]">SIRS compliance.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Statura Care&apos;s SIRS module handles incident classification,
                deadline tracking, investigation workflow, remediation management,
                and audit trail generation — so your team can focus on care, not
                paperwork.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {automationFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-7 rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-[#3E5D4A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/modules/sirs"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0F172A] text-white font-semibold text-sm hover:bg-[#1E293B] transition-all duration-150 shadow-sm hover:shadow-md"
              >
                Explore the SIRS module
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B] tracking-tight">
                Related resources
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Guides, modules, and checklists to support your SIRS compliance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "SIRS Reporting Obligations Under the Aged Care Act 2024",
                  href: "/blog/sirs-reporting-obligations-aged-care-act-2024",
                },
                {
                  title: "SIRS & Incidents Module",
                  href: "/modules/sirs",
                },
                {
                  title: "Managing Restrictive Practices in Aged Care",
                  href: "/blog/restrictive-practices-aged-care-compliance",
                },
                {
                  title: "Quality Standards Self-Assessment Checklist",
                  href: "/blog/aged-care-quality-standards-self-assessment-checklist",
                },
                {
                  title: "ACQSC Audit Preparation Guide",
                  href: "/resources/audit-preparation-guide",
                },
                {
                  title: "Compliance Glossary",
                  href: "/glossary",
                },
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

        <CTABanner
          title="Automate your SIRS compliance"
          description="Request a personalised demo and see how Statura Care handles incident reporting, investigation, and remediation — automatically."
        />
      </main>
      <Footer />
    </>
  );
}
