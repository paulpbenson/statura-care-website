import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Shield,
  Lock,
  Eye,
  Server,
  FileCheck,
  Users,
  ShieldCheck,
  Database,
  Globe,
  KeyRound,
  ScrollText,
  Fingerprint,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Data Protection — Statura Care",
  description:
    "Your compliance data deserves the same rigour as your compliance. Australian-hosted, row-level security, immutable audit trails, and privacy-by-design architecture.",
};

const securityPillars = [
  {
    icon: Server,
    title: "Australian Infrastructure",
    description:
      "All data is hosted in Sydney, Australia on Australian infrastructure. Your compliance data never leaves the country. Edge network delivery ensures fast access for Australian users.",
  },
  {
    icon: Lock,
    title: "Encryption Everywhere",
    description:
      "All data is encrypted in transit using TLS 1.3 and encrypted at rest. Database connections are secured and credentials are managed through environment-level secrets — never hardcoded.",
  },
  {
    icon: Database,
    title: "Row-Level Security",
    description:
      "Every database table is protected by row-level security (RLS) policies. Each organisation can only access their own data — enforced at the database layer, not the application layer. Even if application logic fails, the database won't serve another organisation's data.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description:
      "Seven distinct roles — from viewer to owner — control what each user can see and do. Granular permissions ensure compliance officers, managers, and self-service users each see exactly what they need, and nothing more.",
  },
  {
    icon: ScrollText,
    title: "Immutable Audit Trail",
    description:
      "Every action is logged: creates, updates, deletes, logins, exports, approvals, and escalations. The audit trail captures who did what, when, from where, and the full diff of changes. Logs are append-only and cannot be modified or deleted.",
  },
  {
    icon: KeyRound,
    title: "Passwordless Authentication",
    description:
      "Statura Care uses magic link authentication — no passwords to compromise, phish, or reuse. Users receive a secure one-time link via email to sign in. Self-service portals for responsible persons use the same secure mechanism.",
  },
];

const privacyFeatures = [
  {
    icon: Eye,
    title: "Whistleblower Confidentiality",
    description:
      "Discloser identity in the Whistleblower module is restricted to designated eligible recipients only. All other users see the disclosure content but never who made it. Every access to confidential identity fields is logged in the audit trail — demonstrating controlled access.",
  },
  {
    icon: Fingerprint,
    title: "Data Isolation",
    description:
      "Multi-tenancy is implemented with organisation-scoped data isolation. Each provider's data is logically separated at the database level. Cross-organisation queries are structurally impossible through the application.",
  },
  {
    icon: Globe,
    title: "Privacy Act 1988 Alignment",
    description:
      "Statura Care is designed to support your obligations under the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs). The platform handles personal information, sensitive information, and health information with appropriate access controls and audit trails.",
  },
  {
    icon: FileCheck,
    title: "Document Security",
    description:
      "Documents are stored in organisation-scoped paths with access controlled by the same RLS policies that protect all other data. Document uploads are associated with specific entities and modules, preventing unauthorised access.",
  },
];

const operationalItems = [
  {
    title: "Automated Compliance Monitoring",
    description: "Cron jobs run on defined schedules to check screening expiry, assessment due dates, notification deadlines, and alert escalation — ensuring nothing slips through the cracks.",
  },
  {
    title: "Structured Alert Escalation",
    description: "Compliance alerts progress through severity levels (info → warning → critical → overdue) based on deadline proximity. Critical alerts are impossible to ignore.",
  },
  {
    title: "Notification Queue",
    description: "Email and in-app notifications are queued and delivered reliably. Notification delivery is tracked, ensuring compliance-critical communications reach the right people.",
  },
  {
    title: "Accessibility",
    description: "WCAG 2.1 AA compliant. All interactive elements have visible focus states. Colour is never the sole indicator of information. Reduced motion is respected for users who prefer it.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#96A998] opacity-[0.03] blur-[100px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-2xl bg-[#96A998]/10 border border-[#96A998]/20 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#96A998]" />
              </div>
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Security & Data Protection
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Your data deserves the same rigour{" "}
                <span className="text-[#96A998]">as your compliance.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Statura Care handles personal information, health data, incident
                reports, and whistleblower disclosures. We take that
                responsibility seriously. Security isn&apos;t a feature — it&apos;s the
                foundation the platform is built on.
              </p>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Security Architecture
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Defence in depth,{" "}
                <span className="text-[#3E5D4A]">by design.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Security is enforced at every layer — infrastructure, database,
                application, and user interface. No single point of failure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center mb-4 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                    <pillar.icon className="w-5 h-5 text-[#3E5D4A]" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy & Data Handling */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Privacy & Data Handling
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Privacy by design,{" "}
                <span className="text-[#3E5D4A]">not by afterthought.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                When your platform handles PII, health data, and protected
                disclosures, privacy can&apos;t be a checkbox. It has to be
                architectural.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {privacyFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-7 rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-[#3E5D4A]" />
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
          </div>
        </section>

        {/* Operational Security */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                  Operational Security
                </p>
                <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                  The system that watches{" "}
                  <span className="text-[#3E5D4A]">the system.</span>
                </h2>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                  Automated monitoring, structured escalation, and reliable
                  notification delivery ensure compliance-critical events are
                  never missed — even when people are busy.
                </p>
              </div>

              <div className="space-y-4">
                {operationalItems.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl border border-slate-100 bg-[#F8FAFC]"
                  >
                    <h3 className="font-semibold text-[#1E293B] text-sm mb-1">
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

        {/* Data types callout */}
        <section className="bg-[#0F172A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#96A998]" />
                <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em]">
                  Data We Protect
                </p>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                Personal information of care recipients and staff. Health records
                and clinical data. Serious incident reports including allegations
                of neglect, abuse, and unexpected deaths. Whistleblower
                disclosures with protected identities. Financial records
                including refundable accommodation deposits. Worker screening and
                police check results.
              </p>
              <p className="mt-6 text-sm text-slate-400">
                Every piece of data is subject to the same security controls:
                encryption, access control, audit logging, and organisation-scoped
                isolation.
              </p>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Security questions?
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                We welcome security enquiries. If your IT team, governance board,
                or procurement process requires a detailed security review, we&apos;re
                happy to provide additional documentation.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#0F172A] text-white font-semibold text-sm hover:bg-[#1E293B] transition-all duration-150 shadow-sm hover:shadow-md"
                >
                  Contact our team
                </a>
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
