import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Target,
  Layers,
  MapPin,
  ShieldCheck,
  Stethoscope,
  DollarSign,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Statura Care",
  description:
    "Statura Care is an Australian-built compliance and care management platform purpose-built for the Aged Care Act 2024. Covering both residential care and Support at Home. Built by people who understand aged care.",
  alternates: { canonical: "https://statura.care/about" },
  keywords: [
    "about Statura Care",
    "Australian aged care software company",
    "aged care compliance platform",
    "Aged Care Act 2024 software",
  ],
  openGraph: {
    title: "About Statura Care — Built for Australian Aged Care",
    description:
      "Purpose-built compliance and care management software for aged care providers navigating the Aged Care Act 2024. Covering residential care and Support at Home.",
    url: "https://statura.care/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Purpose-built",
    description:
      "Every module maps to specific obligations in the Aged Care Act 2024. Nothing generic, nothing retrofitted.",
  },
  {
    icon: Layers,
    title: "One platform",
    description:
      "Residential care and Support at Home in a single system. One login, one audit trail, one source of truth.",
  },
  {
    icon: MapPin,
    title: "Australian-hosted",
    description:
      "All data stored in Sydney, Australia. Never leaves the country. Built on Australian infrastructure.",
  },
];

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Compliance & Governance",
    description:
      "SIRS incident reporting, quality standards, responsible persons register, code of conduct, whistleblower management, and risk governance.",
  },
  {
    icon: Stethoscope,
    title: "Clinical & Workforce",
    description:
      "Medications management, clinical assessments, care delivery, rostering, staffing compliance, and workforce screening.",
  },
  {
    icon: DollarSign,
    title: "Financial & Admin",
    description:
      "Funding management, billing and invoicing, accommodation agreements, provider registration, and prudential compliance.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Quality indicators, national benchmarking, automated report generation, compliance dashboards, and trend analysis.",
  },
];

const differentiators = [
  "Built specifically for the Aged Care Act 2024 — not adapted from generic governance, risk, and compliance software.",
  "Covers both residential aged care and Support at Home in a single platform.",
  "Modular architecture — start with the modules you need, add more as your organisation grows.",
  "Australian-hosted with defence-in-depth security: encryption, row-level security, immutable audit trails, and role-based access control.",
  "Cross-module intelligence — data flows between modules automatically. An incident in SIRS links to the resident in Clinical Care, the staff member in Workforce, and the standard in Quality.",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#96A998] opacity-[0.03] blur-[100px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                About Statura Care
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Built for Australian aged care.{" "}
                <span className="text-[#96A998]">Built for compliance.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Statura Care is purpose-built compliance and care management
                software for aged care providers navigating the Aged Care Act
                2024.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                  Our Mission
                </p>
                <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight mb-6">
                  Compliance woven into{" "}
                  <span className="text-[#3E5D4A]">daily operations.</span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-4">
                  We believe aged care providers shouldn&apos;t need 10
                  disconnected spreadsheets, manual checklists, and siloed
                  systems to meet their regulatory obligations.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Compliance should be woven into daily operations — not bolted
                  on as an afterthought. Every form, every workflow, every
                  notification in Statura Care is designed to make doing the
                  right thing the easiest thing.
                </p>
              </div>

              <div className="space-y-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                        <value.icon className="w-5 h-5 text-[#3E5D4A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1E293B] text-base mb-1">
                          {value.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                What We Do
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                One platform,{" "}
                <span className="text-[#3E5D4A]">32 modules.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Covering compliance, governance, clinical care, workforce,
                rostering, billing, home care, and analytics. One shared audit
                trail, document store, and alert system connecting everything.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="p-7 rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0">
                      <cap.icon className="w-5 h-5 text-[#3E5D4A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Statura */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                  Why Statura Care
                </p>
                <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                  What makes us{" "}
                  <span className="text-[#3E5D4A]">different.</span>
                </h2>
              </div>

              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-[#F8FAFC]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#3E5D4A] mt-0.5 flex-shrink-0" />
                    <p className="text-base text-slate-500 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
