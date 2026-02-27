import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Check,
  Clock,
  AlertTriangle,
  FileText,
  Users,
  TrendingUp,
  ArrowRight,
  Shield,
  Zap,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "SIRS Incident Reporting Software Australia — Meet Priority 1 & Priority 2 Deadlines",
  description:
    "Purpose-built SIRS incident reporting and compliance software for Australian aged care providers. Automated Priority 1 (24-hour) and Priority 2 (30-day) deadline tracking. ACQSC notification workflows. Quality Standard 8 evidence mapping. Australian-hosted. 14-day free trial.",
  alternates: {
    canonical: "https://statura.care/aged-care-incident-reporting-software",
  },
  openGraph: {
    title: "SIRS Incident Reporting Software | Statura Care",
    description:
      "Automated SIRS reporting with Priority 1 and Priority 2 deadline tracking, investigation workflows, and ACQSC notification. Built for Australian aged care.",
    url: "https://statura.care/aged-care-incident-reporting-software",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "aged care incident reporting software",
    "SIRS reporting software",
    "SIRS compliance software Australia",
    "incident management aged care",
    "SIRS Priority 1 deadline tracking",
    "SIRS Priority 2 reporting",
    "aged care incident investigation",
    "ACQSC incident notification",
    "Quality Standard 8 software",
    "incident audit trail aged care",
  ],
};

const benefits = [
  {
    icon: Clock,
    title: "Automated deadline tracking",
    description:
      "Priority 1 (24-hour) and Priority 2 (30-day) SIRS deadlines tracked automatically. Escalating alerts ensure nothing falls through the cracks. Calendar integration shows all upcoming notification windows.",
  },
  {
    icon: AlertTriangle,
    title: "8 reportable incident types",
    description:
      "Pre-configured for all SIRS reportable incidents: death, serious injury, safeguarding, austere conditions, worker behaviour, medication, skin integrity, and unlawful activity. Clear classification guidance built in.",
  },
  {
    icon: FileText,
    title: "Complete investigation workflows",
    description:
      "From initial report through classification, investigation, remediation, and evidence collection. Assign investigators, track timelines, document findings, and link evidence to Quality Standards.",
  },
  {
    icon: Users,
    title: "Role-based incident management",
    description:
      "Compliance officers, managers, clinical staff, and investigators each have role-specific views. Notification workflows ensure the right people see urgent incidents immediately.",
  },
  {
    icon: TrendingUp,
    title: "Quality Standard 8 evidence mapping",
    description:
      "Every incident investigation automatically maps to Quality Standard 8 (Feedback and Complaints) evidence. Self-assessment data updates in real time. Audit preparation packs auto-generate.",
  },
  {
    icon: Lock,
    title: "Immutable audit trail",
    description:
      "Every action — report, classification, notification, investigation step — logged with timestamp and user. Regulatory-ready evidence for ACQSC inspections.",
  },
];

const sirsWorkflow = [
  {
    step: 1,
    title: "Incident Report",
    description: "Staff member reports incident with initial observations and context.",
  },
  {
    step: 2,
    title: "Classification",
    description: "Determine if reportable under SIRS. Assign Priority 1 or Priority 2.",
  },
  {
    step: 3,
    title: "ACQSC Notification",
    description: "Priority 1 within 24 hours. Priority 2 within 30 days. Automated email and form submission.",
  },
  {
    step: 4,
    title: "Investigation",
    description: "Assign investigator, document findings, collect evidence, determine root cause.",
  },
  {
    step: 5,
    title: "Remediation",
    description: "Plan corrective actions, assign owners, track completion, verify effectiveness.",
  },
  {
    step: 6,
    title: "Evidence & Learning",
    description: "Archive complete incident file. Link to Quality Standard 8. Update policies if needed.",
  },
];

const comparisonPoints = [
  { feature: "SIRS Priority 1 (24-hour) deadline automation", statura: true, generic: false },
  { feature: "SIRS Priority 2 (30-day) deadline automation", statura: true, generic: false },
  { feature: "Pre-configured reportable incident types", statura: true, generic: false },
  { feature: "ACQSC notification form integration", statura: true, generic: false },
  { feature: "Investigation workflow management", statura: true, generic: "partial" },
  { feature: "Quality Standard 8 evidence mapping", statura: true, generic: false },
  { feature: "Immutable audit trail", statura: true, generic: "partial" },
  { feature: "Role-based access control", statura: true, generic: true },
  { feature: "Automated escalation alerts", statura: true, generic: "partial" },
  { feature: "Australian-hosted (Sydney)", statura: true, generic: "varies" },
  { feature: "14-day free trial", statura: true, generic: "varies" },
  { feature: "No credit card required", statura: true, generic: false },
];

export default function AgedCareIncidentReportingSoftwarePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Aged Care Incident Reporting Software",
        item: "https://statura.care/aged-care-incident-reporting-software",
      },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Statura Care — SIRS Incident Reporting Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Purpose-built SIRS incident reporting and compliance software for Australian aged care providers. Automated Priority 1 and Priority 2 deadline tracking with investigation workflows and Quality Standard 8 evidence mapping.",
    url: "https://statura.care/aged-care-incident-reporting-software",
    author: { "@type": "Organization", name: "Statura Pty Ltd", url: "https://statura.care" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      offerCount: 3,
      description: "14-day free trial. Essentials, Professional, and Enterprise plans.",
    },
    featureList: [
      "SIRS Priority 1 deadline tracking",
      "SIRS Priority 2 deadline tracking",
      "Incident classification",
      "Investigation workflows",
      "ACQSC notification",
      "Quality Standard 8 evidence mapping",
      "Audit trail",
    ],
    screenshot: "https://statura.care/opengraph-image",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#96A998] opacity-[0.03] blur-[120px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                SIRS Incident Reporting
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Automated SIRS incident reporting{" "}
                <span className="text-[#96A998]">that meets your deadlines.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Purpose-built SIRS incident reporting software for Australian aged care
                providers. Automatic Priority 1 (24-hour) and Priority 2 (30-day) deadline
                tracking. Investigation workflows. ACQSC notification. Quality Standard 8
                evidence mapping. Immutable audit trail. Not adapted from generic incident
                management tools — built specifically for SIRS compliance.
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

        {/* Why SIRS-specific matters */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Built for SIRS Compliance
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Incident reporting software designed for{" "}
                <span className="text-[#3E5D4A]">SIRS, not spreadsheets.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Managing SIRS incident reporting with email and spreadsheets is error-prone
                and audit-unfriendly. Statura Care automates the entire workflow from initial
                report through investigation to ACQSC notification — ensuring no Priority 1
                deadline is missed and every incident is documented for audit readiness.
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

        {/* SIRS Workflow */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Complete Incident Lifecycle
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                The SIRS incident reporting workflow{" "}
                <span className="text-[#3E5D4A]">from report to resolution.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Every incident follows a structured path. Statura Care automates alerts,
                deadline tracking, notifications, and evidence collection at each stage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sirsWorkflow.map((item, idx) => (
                <div key={item.step} className="relative">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-10 h-10 rounded-full bg-[#96A998] text-white font-semibold flex items-center justify-center text-sm">
                        {item.step}
                      </div>
                      {idx !== sirsWorkflow.length - 1 && (
                        <div className="w-1 h-20 bg-[#96A998]/20 mt-2" />
                      )}
                    </div>
                    <div className="pb-8 md:pb-0">
                      <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                SIRS software vs spreadsheets & email
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                See how dedicated SIRS incident reporting software compares to managing
                incidents across spreadsheets, email, and manual processes.
              </p>
            </div>

            <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0F172A]">
                    <th className="text-left text-sm font-semibold text-white p-4">Feature</th>
                    <th className="text-center text-sm font-semibold text-[#96A998] p-4 w-32">
                      Statura Care
                    </th>
                    <th className="text-center text-sm font-semibold text-slate-400 p-4 w-32">
                      Spreadsheets & Email
                    </th>
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
                          <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                            Partial
                          </span>
                        ) : row.generic === "varies" ? (
                          <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                            Varies
                          </span>
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
                { stat: "24hr", label: "Priority 1 deadline tracking" },
                { stat: "30-day", label: "Priority 2 deadline tracking" },
                { stat: "8", label: "Reportable incident types" },
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
                SIRS incident reporting resources
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Practical guides to understand SIRS reportable incidents and compliance
                obligations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "SIRS Reporting Obligations Under the Aged Care Act 2024",
                  href: "/blog/sirs-reporting-obligations-aged-care-act-2024",
                },
                {
                  title: "Understanding SIRS Priority 1 and Priority 2 Deadlines",
                  href: "/blog/sirs-priority-1-priority-2-deadlines",
                },
                {
                  title: "The 8 Reportable Incident Types in SIRS",
                  href: "/blog/8-reportable-incident-types-sirs",
                },
                {
                  title: "ACQSC Incident Notification Requirements",
                  href: "/blog/acqsc-incident-notification-requirements",
                },
                {
                  title: "Quality Standard 8: Feedback and Complaints",
                  href: "/blog/quality-standard-8-aged-care",
                },
                {
                  title: "View all modules",
                  href: "/modules",
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
          title="Ready to automate SIRS incident reporting?"
          description="Start your 14-day free trial. No credit card required. Australian-hosted."
        />
      </main>
      <Footer />
    </>
  );
}
