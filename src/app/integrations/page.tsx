import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Stethoscope,
  CalendarClock,
  GraduationCap,
  Landmark,
  ShieldCheck,
  ArrowRight,
  Plug,
  Workflow,
  FileSpreadsheet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Statura Care integrates with Australia's leading aged care systems — rostering, clinical care, training, accounting, and background screening — so compliance data flows automatically instead of being re-entered.",
  alternates: { canonical: "https://statura.care/integrations" },
  openGraph: {
    title: "Integrations — Statura Care Compliance Platform",
    description:
      "Connect Statura Care with your existing aged care systems. Integrations with Humanforce, Deputy, Xero, MYOB, AlayaCare, Person Centred Software, Go1, National Crime Check, and more.",
    url: "https://statura.care/integrations",
  },
};

interface Integration {
  name: string;
  description: string;
  dataFlows: string[];
  modules: string[];
  status: "available" | "coming-soon" | "roadmap";
}

interface IntegrationCategory {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  why: string;
  integrations: Integration[];
}

const categories: IntegrationCategory[] = [
  {
    title: "Rostering & Workforce",
    subtitle: "Shift data in. Care minutes calculated.",
    icon: CalendarClock,
    why: "Instead of manually logging staffing hours, pull actual roster data and calculate 200-minute compliance automatically. Know your RN coverage gaps before they become a breach.",
    integrations: [
      {
        name: "Humanforce",
        description:
          "Australia's leading workforce management platform for aged care. REST API with employee, roster, and timesheet endpoints.",
        dataFlows: [
          "Shift data → daily care minutes calculation",
          "Employee roles → RN / EN / PCW classification",
          "Timesheets → 24/7 RN coverage verification",
          "Qualifications → screening expiry tracking",
        ],
        modules: ["Workforce Compliance", "Quality Standards"],
        status: "coming-soon",
      },
      {
        name: "Deputy",
        description:
          "Scheduling and time tracking with a well-documented resource API. Used by aged care providers of all sizes.",
        dataFlows: [
          "Roster data → staffing minutes per resident",
          "Employee records → workforce register sync",
          "Timesheet approvals → actual vs rostered hours",
        ],
        modules: ["Workforce Compliance"],
        status: "coming-soon",
      },
      {
        name: "Mirus Australia",
        description:
          "Workforce analytics platform purpose-built for aged care. Integrates with Medicare for funding data.",
        dataFlows: [
          "Workforce analytics → staffing mix reports",
          "Funding metrics → AN-ACC reconciliation",
          "KPI data → governing body dashboards",
        ],
        modules: ["Workforce Compliance", "Funding & Claims"],
        status: "roadmap",
      },
    ],
  },
  {
    title: "Clinical Care Management",
    subtitle: "Care data flows. Incidents surface automatically.",
    icon: Stethoscope,
    why: "Clinical systems hold the data that drives SIRS incidents, quality indicators, and care plan compliance. Connecting these means incidents are captured at the point of care — not re-entered hours later from handover notes.",
    integrations: [
      {
        name: "AlayaCare",
        description:
          "Modern care management platform with an excellent RESTful API documented on SwaggerHub. Clean authentication, well-structured endpoints.",
        dataFlows: [
          "Clinical incidents → SIRS auto-creation",
          "Care plan changes → agreement review triggers",
          "Client demographics → resident register sync",
          "Medication events → quality indicator data",
        ],
        modules: [
          "SIRS & Incidents",
          "Quality Indicators",
          "Agreements & Consent",
        ],
        status: "coming-soon",
      },
      {
        name: "Person Centred Software",
        description:
          "Widely adopted digital care management system with an open API philosophy and demonstrated third-party integrations.",
        dataFlows: [
          "Care records → quality standards evidence",
          "Medication administration → QI polypharmacy data",
          "Falls and incidents → SIRS incident feed",
          "Roster data → workforce module sync",
        ],
        modules: ["SIRS & Incidents", "Quality Standards", "Quality Indicators"],
        status: "roadmap",
      },
      {
        name: "Leecare Solutions",
        description:
          "Platinum 6 unified care platform with a generic API supporting pharmacy and third-party system connections.",
        dataFlows: [
          "Care plans → quality standards evidence",
          "Clinical events → SIRS incident creation",
          "HR data → workforce register sync",
        ],
        modules: ["SIRS & Incidents", "Quality Standards", "Workforce Compliance"],
        status: "roadmap",
      },
      {
        name: "Telstra Health",
        description:
          "Industry-leading clinical systems (eCase, iCare, Clinical Manager) with Smart API+ integration gateway built on FHIR standards. Requires partner engagement.",
        dataFlows: [
          "Clinical data → quality standards evidence",
          "Incident records → SIRS incident feed",
          "Medication records → quality indicator data",
        ],
        modules: ["SIRS & Incidents", "Quality Standards", "Quality Indicators"],
        status: "roadmap",
      },
    ],
  },
  {
    title: "Training & Learning",
    subtitle: "Course completed. Compliance updated.",
    icon: GraduationCap,
    why: "Training compliance is one of the most manually intensive parts of workforce management. When your LMS talks to Statura Care, a completed course automatically updates the worker's training register — no spreadsheet reconciliation needed.",
    integrations: [
      {
        name: "Go1",
        description:
          "Content aggregation platform with SCIM provisioning, SCORM/xAPI support, and embeddable learning widgets.",
        dataFlows: [
          "Course completions → training register updates",
          "User provisioning → workforce register sync",
          "Compliance courses → Code of Conduct training tracking",
        ],
        modules: ["Workforce Compliance", "Code of Conduct"],
        status: "coming-soon",
      },
      {
        name: "Ausmed",
        description:
          "Healthcare-specific LMS widely used across Australian aged care for mandatory training and CPD tracking.",
        dataFlows: [
          "Training completions → mandatory training register",
          "CPD records → qualification tracking",
          "IPC training → infection prevention compliance",
        ],
        modules: [
          "Workforce Compliance",
          "Infection Prevention",
          "Code of Conduct",
        ],
        status: "roadmap",
      },
      {
        name: "Kineo",
        description:
          "Enterprise learning platform built on Totara with xAPI support for granular learning data interchange.",
        dataFlows: [
          "Learning records → training compliance tracking",
          "Completion certificates → document store",
        ],
        modules: ["Workforce Compliance"],
        status: "roadmap",
      },
    ],
  },
  {
    title: "Accounting & Finance",
    subtitle: "Financial position in real time.",
    icon: Landmark,
    why: "Prudential compliance requires demonstrating your liquidity position against refundable deposit obligations. Pulling live financial data from your accounting system means your liquidity dashboard reflects reality — not last month's spreadsheet.",
    integrations: [
      {
        name: "Xero",
        description:
          "Australia's most popular accounting platform with a comprehensive REST API, OAuth 2.0 authentication, and an Australian-specific Payroll API.",
        dataFlows: [
          "Account balances → liquidity dashboard",
          "Invoicing data → fee reconciliation",
          "Payroll data → workforce cost reporting",
          "Financial reports → prudential compliance evidence",
        ],
        modules: ["Prudential Compliance", "Funding & Claims"],
        status: "coming-soon",
      },
      {
        name: "MYOB",
        description:
          "Established Australian accounting software with a modern REST API (v2) supporting AccountRight, Essentials, and MYOB Business.",
        dataFlows: [
          "Account balances → liquidity position",
          "General ledger → prudential reporting",
          "Invoicing → fee reconciliation",
        ],
        modules: ["Prudential Compliance", "Funding & Claims"],
        status: "coming-soon",
      },
    ],
  },
  {
    title: "Background Screening",
    subtitle: "Check cleared. Register updated.",
    icon: ShieldCheck,
    why: "Screening expiry is a hard compliance requirement — a lapsed police check can put your registration at risk. Automated status updates from screening providers mean you know the moment a check clears or expires.",
    integrations: [
      {
        name: "National Crime Check",
        description:
          "Well-documented consumer API with webhook-based result delivery. HTTPS/JSON standard with direct integration support.",
        dataFlows: [
          "Check results → screening register auto-update",
          "Status webhooks → real-time clearance tracking",
          "Expiry dates → automated alert scheduling",
        ],
        modules: ["Responsible Persons", "Workforce Compliance"],
        status: "coming-soon",
      },
      {
        name: "Fit2Work",
        description:
          "Equifax-owned background screening platform with API integration support for police checks, employment history, and medical assessments.",
        dataFlows: [
          "Police check results → screening register",
          "Employment verification → workforce records",
          "Candidate status → compliance tracking",
        ],
        modules: ["Responsible Persons", "Workforce Compliance"],
        status: "roadmap",
      },
    ],
  },
];

const statusLabels: Record<string, { label: string; color: string }> = {
  available: { label: "Available", color: "bg-green-100 text-green-700" },
  "coming-soon": {
    label: "Coming soon",
    color: "bg-[#96A998]/15 text-[#3E5D4A]",
  },
  roadmap: { label: "On roadmap", color: "bg-slate-100 text-slate-500" },
};

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#96A998] opacity-[0.04] blur-[100px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-2xl bg-[#96A998]/10 border border-[#96A998]/20 flex items-center justify-center mb-6">
                <Plug className="w-7 h-7 text-[#96A998]" />
              </div>
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Integrations
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Your systems connected.{" "}
                <span className="text-[#96A998]">Compliance automated.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Statura Care connects with the rostering, clinical, training,
                accounting, and screening systems Australian aged care providers
                already use — so compliance data flows in automatically instead
                of being re-entered.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-[#F8FAFC] py-16 lg:py-20 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Plug,
                  title: "Connect once",
                  description:
                    "Authenticate with your existing system. Statura Care handles the mapping.",
                },
                {
                  icon: Workflow,
                  title: "Data flows automatically",
                  description:
                    "Roster changes, screening results, training completions, and financial data sync on schedule.",
                },
                {
                  icon: FileSpreadsheet,
                  title: "Compliance updates itself",
                  description:
                    "Modules are populated with real data. Alerts fire on real deadlines. No manual re-entry.",
                },
              ].map((step) => (
                <div key={step.title} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#96A998]/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-[#3E5D4A]" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration categories */}
        {categories.map((cat, catIdx) => (
          <section
            key={cat.title}
            className={`py-20 lg:py-28 border-b border-slate-100 last:border-0 ${
              catIdx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="max-w-3xl mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#96A998]/10 flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-[#3E5D4A]" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B] tracking-tight">
                      {cat.title}
                    </h2>
                    <p className="text-sm font-medium text-[#3E5D4A]">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-base text-slate-500 leading-relaxed">
                  {cat.why}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {cat.integrations.map((integration) => {
                  const badge = statusLabels[integration.status];
                  return (
                    <div
                      key={integration.name}
                      className="p-7 rounded-2xl border border-slate-200 bg-white"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-[#1E293B] text-lg">
                          {integration.name}
                        </h3>
                        <span
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider flex-shrink-0 ${badge.color}`}
                        >
                          {badge.label}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed mb-5">
                        {integration.description}
                      </p>

                      <div className="mb-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2">
                          Data flows
                        </p>
                        <ul className="space-y-1.5">
                          {integration.dataFlows.map((flow) => (
                            <li
                              key={flow}
                              className="flex items-start gap-2 text-sm text-slate-600"
                            >
                              <ArrowRight className="w-3.5 h-3.5 text-[#96A998] mt-0.5 flex-shrink-0" />
                              {flow}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {integration.modules.map((mod) => (
                          <span
                            key={mod}
                            className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 text-slate-500"
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* CSV / Manual import section */}
        <section className="bg-[#0F172A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                No integration? No problem.
              </p>
              <h2 className="font-serif font-bold text-2xl lg:text-3xl text-white leading-tight tracking-tight">
                Every module supports CSV import and manual entry.
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Integrations accelerate your workflow, but they&apos;re not required.
                You can import data via CSV, enter it directly, or start with
                manual entry and connect systems later. Statura Care works
                either way.
              </p>
            </div>
          </div>
        </section>

        {/* Request an integration */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Don&apos;t see your system?
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                We&apos;re actively building new integrations based on what
                providers need most. If you use a system that isn&apos;t listed
                here, tell us — it helps us prioritise.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#0F172A] text-white font-semibold text-sm hover:bg-[#1E293B] transition-all duration-150 shadow-sm hover:shadow-md"
                >
                  Request an integration
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTABanner compact />
      </main>
      <Footer />
    </>
  );
}
