import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  ScrollText,
  Award,
  AlertTriangle,
  MessageSquare,
  Eye,
  UserCheck,
  Landmark,
  FileText,
  CalendarCheck,
  Scale,
  Search,
  Gavel,
  BookOpen,
  ExternalLink,
  ChevronRight,
  Home,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aged Care Act 2024 — Complete Guide for Australian Providers",
  description:
    "The definitive guide to the Aged Care Act 2024 for Australian aged care providers. Understand your obligations across SIRS reporting, quality standards, responsible persons, workforce compliance, prudential requirements, Support at Home, and more. Updated for 2026.",
  alternates: { canonical: "https://statura.care/aged-care-act-2024" },
  openGraph: {
    title: "Aged Care Act 2024 — Complete Guide for Australian Providers | Statura Care",
    description:
      "The definitive guide to the Aged Care Act 2024 for Australian aged care providers. Understand your obligations across SIRS reporting, quality standards, responsible persons, workforce compliance, prudential requirements, Support at Home, and more.",
    url: "https://statura.care/aged-care-act-2024",
    type: "article",
    locale: "en_AU",
  },
  keywords: [
    "Aged Care Act 2024",
    "Aged Care Act 2024 guide",
    "aged care legislation Australia",
    "new aged care act",
    "Aged Care Act 2024 obligations",
    "aged care provider obligations 2024",
    "aged care reform 2024",
    "aged care regulatory requirements",
    "ACQSC aged care act",
    "aged care act compliance",
  ],
};

const obligations = [
  {
    icon: ShieldCheck,
    title: "Registered Providers",
    sections: "ss 17\u201330",
    description:
      "All providers must be registered with the ACQSC and satisfy ongoing conditions of registration. The Act sets out suitability requirements, ongoing obligations, and the consequences of failing to meet registration conditions \u2014 including suspension or revocation.",
    href: "/modules/registration",
  },
  {
    icon: Users,
    title: "Responsible Persons",
    sections: "ss 12\u201313, 157\u2013161",
    description:
      "Individuals with management or control of a registered provider must satisfy a 10-matters suitability test and undergo screening. Providers must notify the ACQSC of changes to responsible persons and ensure ongoing suitability. Failure to screen or notify can result in enforcement action.",
    href: "/modules/responsible-persons",
  },
  {
    icon: ScrollText,
    title: "Code of Conduct",
    sections: "ss 63\u201365",
    description:
      "All aged care workers must comply with the Code of Conduct, which covers respectful communication, privacy, professional boundaries, and accountability. Providers must ensure workers acknowledge the Code, and investigate and act on any breaches. The ACQSC can issue banning orders for serious misconduct.",
    href: "/modules/code-of-conduct",
  },
  {
    icon: Award,
    title: "Quality Standards",
    sections: "ss 146\u2013147",
    description:
      "Providers must meet all 8 Aged Care Quality Standards at all times. These standards cover the person\u2019s experience of care, organisational governance, clinical safety, infection prevention, the care environment, food and nutrition, activities, and continuous improvement. Self-assessment and evidence packs are essential for assessment contacts.",
    href: "/modules/quality-standards",
  },
  {
    icon: AlertTriangle,
    title: "Serious Incidents (SIRS)",
    sections: "ss 162\u2013164",
    description:
      "The Serious Incident Response Scheme requires providers to identify, manage, and report serious incidents. Priority 1 incidents must be notified to the ACQSC within 24 hours. Priority 2 incidents must be notified within 30 business days. Providers must investigate all incidents and implement corrective actions to prevent recurrence.",
    href: "/modules/sirs",
  },
  {
    icon: MessageSquare,
    title: "Complaints",
    sections: "ss 196\u2013201",
    description:
      "Providers must acknowledge complaints within 5 business days and resolve them within 30 business days. The Act requires a documented complaints management system, feedback to complainants, and use of complaint data to identify systemic issues and drive quality improvements.",
    href: "/modules/complaints",
  },
  {
    icon: Eye,
    title: "Whistleblower Protection",
    sections: "ss 186\u2013195",
    description:
      "The Act establishes protections for individuals who report suspected breaches of aged care laws. Whistleblowers are protected from adverse action, identity disclosure, and reprisal. Providers must have confidential disclosure channels and policies that support safe reporting without fear of retaliation.",
    href: "/modules/whistleblower",
  },
  {
    icon: UserCheck,
    title: "Workforce",
    sections: "ss 66\u201372",
    description:
      "Providers must ensure all workers are screened, qualified, and competent. The Act mandates minimum care minutes of 200 minutes per resident per day (including 40 RN minutes), 24/7 registered nurse availability in residential care, and ongoing training. Workforce compliance is a core condition of registration.",
    href: "/modules/workforce",
  },
  {
    icon: Landmark,
    title: "Prudential Compliance",
    sections: "ss 170\u2013183",
    description:
      "Providers holding refundable accommodation deposits (RADs) must meet strict prudential obligations. These include maintaining adequate liquidity, permitted use of accommodation payments, governance of financial management, and regular reporting. The Act strengthens protections for residents\u2019 accommodation funds.",
    href: "/modules/prudential-compliance",
  },
  {
    icon: FileText,
    title: "Agreements",
    sections: "ss 44\u201351",
    description:
      "Providers must enter into written agreements with each person receiving care. Agreements must include mandatory content covering the care and services to be provided, fees and charges, rights and responsibilities, and complaint resolution. Agreements must be provided before or on the day care commences.",
    href: "/modules/agreements",
  },
];

const timelineEvents = [
  {
    date: "1 July 2024",
    title: "Aged Care Act 2024 commenced",
    description:
      "The new Act replaced the Aged Care Act 1997 as the primary legislation governing aged care in Australia. New obligations for registration, governance, incidents, quality, and workforce took effect.",
  },
  {
    date: "1 July 2025",
    title: "Support at Home program launched",
    description:
      "The Support at Home program replaced Home Care Packages (HCP) and the Commonwealth Home Support Programme (CHSP). 8 classification levels, quarterly budgets, and per-service contributions commenced.",
  },
  {
    date: "Ongoing",
    title: "ACQSC assessment contacts under new framework",
    description:
      "The ACQSC conducts assessment contacts against the 8 Quality Standards and the strengthened regulatory framework. Providers must maintain continuous compliance and audit-ready evidence.",
  },
];

const faqs = [
  {
    q: "What is the Aged Care Act 2024?",
    a: "The Aged Care Act 2024 is the primary legislation governing aged care in Australia. It replaced the Aged Care Act 1997 and introduced a new regulatory framework with strengthened obligations for provider governance, safety, quality, workforce, financial management, and complaints handling. The Act also establishes the Support at Home program for home care services.",
  },
  {
    q: "When did the Aged Care Act 2024 commence?",
    a: "The Aged Care Act 2024 commenced on 1 July 2024. The Support at Home program, established under the Act, commenced on 1 July 2025. Providers were expected to meet their new obligations from commencement, with some transitional arrangements for specific provisions.",
  },
  {
    q: "What are the key changes from the previous Act?",
    a: "The key changes include: strengthened governance and responsible persons requirements with a 10-matters suitability test; enhanced SIRS reporting with defined Priority 1 (24-hour) and Priority 2 (30 business day) timeframes; 8 new Quality Standards replacing the previous standards; minimum care minutes of 200 per resident per day including 40 RN minutes; the Support at Home program replacing HCP and CHSP; enhanced ACQSC powers including compliance notices and civil penalties; and strengthened whistleblower protections.",
  },
  {
    q: "Does the Aged Care Act 2024 apply to home care providers?",
    a: "Yes. The Act covers both residential aged care and home care. The Support at Home program, established under the Act, is the new framework for home care services. Home care providers must meet registration, governance, quality, workforce, and complaints obligations, and manage Support at Home classification levels, budgets, and contributions.",
  },
  {
    q: "What are the penalties for non-compliance?",
    a: "The ACQSC has enhanced enforcement powers under the Act, including the ability to issue compliance notices, accept enforceable undertakings, impose sanctions, vary or revoke provider registration, and pursue civil penalties. The severity of action depends on the nature and extent of non-compliance, and whether it poses a risk to the safety or wellbeing of people receiving care.",
  },
  {
    q: "How can software help with Aged Care Act compliance?",
    a: "Purpose-built compliance software helps providers structure their obligations into manageable modules, automate deadline tracking (such as SIRS reporting timeframes and complaints resolution deadlines), maintain audit-ready evidence for assessment contacts, identify cross-module risks through integrated intelligence, and generate compliance reports on demand. This reduces administrative burden and allows staff to focus on delivering care.",
  },
  {
    q: "What are the 8 Aged Care Quality Standards?",
    a: "The 8 Quality Standards under the Act cover: (1) The person\u2019s experience of care, (2) The organisation\u2019s governance and accountability, (3) Clinical care and safety, (4) The care environment, (5) Food and nutrition, (6) Activities and community, (7) Infection prevention and control, and (8) Workforce and human resources. Providers must meet all 8 standards at all times.",
  },
  {
    q: "What is SIRS reporting?",
    a: "SIRS (Serious Incident Response Scheme) is the mandatory incident reporting framework under the Act. Providers must identify, manage, investigate, and report serious incidents to the ACQSC. Priority 1 incidents \u2014 including unreasonable use of force, sexual misconduct, and unexpected death \u2014 must be reported within 24 hours. Priority 2 incidents must be reported within 30 business days. Providers must also have an effective incident management system.",
  },
];

export default function AgedCareAct2024Page() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Aged Care Act 2024", item: "https://statura.care/aged-care-act-2024" },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Aged Care Act 2024 — Complete Guide for Australian Providers",
    description:
      "The definitive guide to the Aged Care Act 2024 for Australian aged care providers. Covers provider registration, responsible persons, quality standards, SIRS reporting, complaints, workforce, prudential compliance, Support at Home, and ACQSC enforcement powers.",
    url: "https://statura.care/aged-care-act-2024",
    datePublished: "2024-07-01",
    dateModified: "2026-03-07",
    author: { "@type": "Organization", name: "Statura Pty Ltd", url: "https://statura.care" },
    publisher: { "@type": "Organization", name: "Statura Pty Ltd", url: "https://statura.care" },
    mainEntityOfPage: "https://statura.care/aged-care-act-2024",
    about: {
      "@type": "Legislation",
      name: "Aged Care Act 2024",
      legislationJurisdiction: "Australia",
      legislationDate: "2024-07-01",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#96A998] opacity-[0.03] blur-[120px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                The Aged Care Act 2024
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                The definitive guide for{" "}
                <span className="text-[#96A998]">Australian providers.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                The Aged Care Act 2024 replaced the Aged Care Act 1997 as the
                primary legislation governing aged care in Australia. It
                introduced new obligations for governance, safety, quality,
                workforce, financial management, and the Support at Home program.
                This guide covers what providers need to know.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#0F172A] font-semibold text-sm hover:bg-slate-100 transition-all duration-150 shadow-lg"
                >
                  Request a demo
                </Link>
                <a
                  href="#obligations"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-slate-600 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-150"
                >
                  View key obligations
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Overview
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                A new legislative framework for{" "}
                <span className="text-[#3E5D4A]">aged care in Australia.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                The Aged Care Act 2024 commenced on 1 July 2024 and represents the
                most significant reform to aged care legislation in over two
                decades. Born from the Royal Commission into Aged Care Quality and
                Safety, the Act fundamentally restructures how aged care is
                regulated, funded, and delivered in Australia.
              </p>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                The Act places the rights of older Australians at the centre of the
                aged care system. It establishes a strengthened regulatory framework
                under the Aged Care Quality and Safety Commission (ACQSC), with
                enhanced enforcement powers and new obligations covering provider
                registration, governance, quality, workforce, financial
                management, and incident reporting.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Home,
                  stat: "Residential & Home Care",
                  label: "Covers both care types under one Act",
                },
                {
                  icon: Scale,
                  stat: "Support at Home",
                  label: "New home care program replacing HCP & CHSP",
                },
                {
                  icon: ShieldCheck,
                  stat: "Strengthened Obligations",
                  label: "Enhanced provider governance and accountability",
                },
                {
                  icon: Gavel,
                  stat: "Enhanced ACQSC Powers",
                  label: "Compliance notices, sanctions, and civil penalties",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center mb-4 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                    <item.icon className="w-5 h-5 text-[#3E5D4A]" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-base mb-1">
                    {item.stat}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Obligations */}
        <section id="obligations" className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Key Obligations
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                What the Act requires{" "}
                <span className="text-[#3E5D4A]">from providers.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                The Aged Care Act 2024 imposes obligations across 10 major areas.
                Each area maps directly to a Statura Care module, so you can
                structure your compliance around the legislation itself.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {obligations.map((obligation) => (
                <Link
                  key={obligation.title}
                  href={obligation.href}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                      <obligation.icon className="w-5 h-5 text-[#3E5D4A]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-[#1E293B] text-base group-hover:text-[#3E5D4A] transition-colors">
                          {obligation.title}
                        </h3>
                        <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded flex-shrink-0">
                          {obligation.sections}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed mb-3">
                        {obligation.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3E5D4A] group-hover:gap-2.5 transition-all duration-200">
                        View module <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Support at Home */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                  Support at Home
                </p>
                <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                  The new home care framework{" "}
                  <span className="text-[#3E5D4A]">under the Act.</span>
                </h2>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                  The Aged Care Act 2024 establishes the Support at Home (SAH)
                  program, which replaced Home Care Packages (HCP) and the
                  Commonwealth Home Support Programme (CHSP) from 1 July 2025. It
                  is a fundamental restructure of how home care is funded,
                  delivered, and regulated in Australia.
                </p>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                  Support at Home introduces 8 classification levels based on
                  assessed need, quarterly budgets with carry-over provisions,
                  per-service contributions across 3 service categories and 4
                  means-testing tiers, mandatory wellness and reablement goals,
                  and care management capped at 10% of the budget.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/support-at-home-software"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F172A] text-white font-semibold text-sm hover:bg-[#1E293B] transition-all duration-150"
                  >
                    Support at Home software <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/for-home-care"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 text-[#1E293B] font-semibold text-sm hover:bg-slate-50 transition-all duration-150"
                  >
                    Home care providers <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="mt-10 lg:mt-0 space-y-4">
                {[
                  { level: "Level 1", budget: "$11,500/yr", description: "Low care needs" },
                  { level: "Level 2", budget: "$18,000/yr", description: "Low\u2013moderate care needs" },
                  { level: "Level 3", budget: "$26,000/yr", description: "Moderate care needs" },
                  { level: "Level 4", budget: "$34,000/yr", description: "Moderate\u2013high care needs" },
                  { level: "Level 5", budget: "$42,000/yr", description: "High care needs" },
                  { level: "Level 6", budget: "$50,000/yr", description: "High\u2013complex care needs" },
                  { level: "Level 7", budget: "$58,000/yr", description: "Complex care needs" },
                  { level: "Level 8", budget: "$78,000/yr", description: "Very complex care needs" },
                ].map((level) => (
                  <div
                    key={level.level}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#F5F6F2] text-xs font-bold text-[#3E5D4A]">
                        {level.level.replace("Level ", "")}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#1E293B]">{level.level}</p>
                        <p className="text-xs text-slate-500">{level.description}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-[#3E5D4A]">{level.budget}</span>
                  </div>
                ))}
                <p className="text-xs text-slate-400 mt-2">
                  Indicative annual budgets. Actual amounts subject to government schedules and indexation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACQSC Powers */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Regulatory Oversight
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Enhanced ACQSC{" "}
                <span className="text-[#3E5D4A]">enforcement powers.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                The Aged Care Act 2024 significantly strengthened the regulatory
                powers of the Aged Care Quality and Safety Commission. The ACQSC
                now has a broader toolkit for monitoring, assessing, and enforcing
                provider compliance \u2014 with the ability to act more quickly and
                decisively when the safety or wellbeing of people receiving care is
                at risk.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Search,
                  title: "Assessment Contacts",
                  description:
                    "The ACQSC conducts assessment contacts to evaluate provider compliance with the Quality Standards and legislative obligations. These can be announced or unannounced, and involve document review, interviews, and observation.",
                },
                {
                  icon: FileText,
                  title: "Compliance Notices",
                  description:
                    "The ACQSC can issue compliance notices requiring a provider to take specific actions to remedy a breach within a defined timeframe. Non-compliance with a notice can trigger escalated enforcement action.",
                },
                {
                  icon: Gavel,
                  title: "Sanctions & Civil Penalties",
                  description:
                    "For serious or persistent non-compliance, the ACQSC can impose sanctions including restricting new admissions, revoking registration, or pursuing civil penalties through the courts.",
                },
                {
                  icon: ScrollText,
                  title: "Enforceable Undertakings",
                  description:
                    "Providers can offer enforceable undertakings \u2014 binding commitments to take agreed actions within specified timeframes. These are accepted by the ACQSC as an alternative to formal sanctions in appropriate circumstances.",
                },
                {
                  icon: Eye,
                  title: "Provider Monitoring",
                  description:
                    "The ACQSC monitors provider performance through quality indicator data, incident reports, complaints data, and financial reporting. Patterns of concern trigger targeted regulatory action.",
                },
                {
                  icon: Scale,
                  title: "Banning Orders",
                  description:
                    "The ACQSC can issue banning orders preventing individuals from working in aged care. This applies to workers who have engaged in serious misconduct or who pose a risk to the safety of people receiving care.",
                },
              ].map((power) => (
                <div
                  key={power.title}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center mb-4 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                    <power.icon className="w-5 h-5 text-[#3E5D4A]" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                    {power.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {power.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                  Key Dates
                </p>
                <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                  Aged Care Act 2024{" "}
                  <span className="text-[#3E5D4A]">timeline.</span>
                </h2>
              </div>

              <div className="space-y-0">
                {timelineEvents.map((event, idx) => (
                  <div key={event.date} className="relative flex gap-6">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#3E5D4A] flex items-center justify-center flex-shrink-0 z-10">
                        <CalendarCheck className="w-4 h-4 text-white" />
                      </div>
                      {idx < timelineEvents.length - 1 && (
                        <div className="w-0.5 bg-[#96A998]/30 flex-1 min-h-[2rem]" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-12 last:pb-0">
                      <span className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-wider">
                        {event.date}
                      </span>
                      <h3 className="font-semibold text-[#1E293B] text-lg mt-1 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-lg">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How Statura Care Helps */}
        <section className="bg-[#0F172A] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Built for the Act
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-white leading-tight tracking-tight">
                Every obligation in the Act, structured into{" "}
                <span className="text-[#96A998]">32 modules.</span>
              </h2>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Automated deadline tracking, cross-module intelligence, and
                audit-ready evidence \u2014 so you spend less time on compliance
                administration and more time on care. Each module maps directly to
                the legislative obligations, quality standards, and ACQSC
                expectations your organisation must meet.
              </p>
              <div className="mt-8 grid sm:grid-cols-4 gap-6">
                {[
                  { stat: "32", label: "Compliance modules" },
                  { stat: "84", label: "Report generators" },
                  { stat: "24/7", label: "Deadline monitoring" },
                  { stat: "Sydney", label: "Australian-hosted" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="font-serif font-black text-3xl text-[#96A998]">{item.stat}</p>
                    <p className="text-sm text-slate-400 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/modules"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0F172A] font-semibold text-sm hover:bg-slate-100 transition-all duration-150 shadow-lg"
                >
                  Explore all modules <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-slate-600 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-150"
                >
                  Request a demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="mb-14 text-center">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Common Questions
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Frequently asked questions about{" "}
                <span className="text-[#3E5D4A]">the Aged Care Act 2024.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
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

        {/* Related Resources */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Further Reading
              </p>
              <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B] tracking-tight">
                Related resources
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Guides, module pages, and external references to support your
                understanding of the Aged Care Act 2024.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "SIRS Reporting Obligations Under the Act", href: "/blog/sirs-reporting-obligations-aged-care-act-2024" },
                { title: "Responsible Persons Register Guide", href: "/blog/responsible-persons-register-guide" },
                { title: "Quality Standards Self-Assessment Checklist", href: "/blog/aged-care-quality-standards-self-assessment-checklist" },
                { title: "Prudential Compliance & Refundable Deposits", href: "/blog/prudential-compliance-refundable-deposits-aged-care" },
                { title: "Care Minutes Target: 200 Minutes Compliance", href: "/blog/care-minutes-target-200-minutes-compliance" },
                { title: "Support at Home Program Guide", href: "/blog/support-at-home-program-guide" },
                { title: "Aged Care Compliance Glossary", href: "/glossary" },
                { title: "All Compliance Modules", href: "/modules" },
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

              {/* External link to legislation */}
              <a
                href="https://www.legislation.gov.au/C2024A00036/latest/text"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-[#96A998]/30 hover:shadow-sm transition-all"
              >
                <span className="text-sm font-medium text-[#1E293B] group-hover:text-[#3E5D4A] transition-colors">
                  Aged Care Act 2024 (legislation.gov.au)
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#3E5D4A] transition-colors flex-shrink-0 ml-2" />
              </a>
            </div>
          </div>
        </section>

        <CTABanner
          title="Built for the Aged Care Act 2024."
          description="See how Statura Care structures your obligations into 32 manageable modules with automated deadline tracking and audit-ready evidence. Australian-hosted in Sydney."
        />
      </main>
      <Footer />
    </>
  );
}
