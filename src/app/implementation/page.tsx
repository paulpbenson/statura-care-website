import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Rocket,
  Search,
  Settings,
  DatabaseZap,
  GraduationCap,
  HeadsetIcon,
  UserCheck,
  ArrowRightLeft,
  Users,
  Cog,
  LifeBuoy,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Implementation & Onboarding — Get Started with Statura Care",
  description:
    "See how Statura Care onboarding works. From initial demo to live compliance tracking in weeks, not months. Structured implementation with dedicated support, data migration, team training, and go-live assistance.",
  alternates: { canonical: "https://statura.care/implementation" },
  keywords: [
    "aged care software implementation",
    "compliance software onboarding",
    "aged care software setup",
    "Statura Care onboarding",
    "aged care software migration",
  ],
  openGraph: {
    title: "Implementation & Onboarding — Get Started with Statura Care",
    description:
      "From initial demo to live compliance tracking in weeks, not months. Structured implementation with dedicated support, data migration, team training, and go-live assistance.",
    url: "https://statura.care/implementation",
  },
};

const timelineSteps = [
  {
    step: 1,
    icon: Search,
    title: "Discovery & Demo",
    timing: "Week 1",
    points: [
      "We learn about your organisation, care types, and compliance priorities",
      "You see the platform in action with modules relevant to your needs",
      "Together we identify which modules to start with",
    ],
  },
  {
    step: 2,
    icon: Settings,
    title: "Configuration",
    timing: "Week 2",
    points: [
      "Your organisation is set up in the platform",
      "Modules are activated based on your plan",
      "Roles and permissions are configured for your team structure",
      "Branding and preferences are applied",
    ],
  },
  {
    step: 3,
    icon: DatabaseZap,
    title: "Data Migration",
    timing: "Week 2\u20133",
    points: [
      "We help migrate your existing data \u2014 resident/client records, incident history, workforce records",
      "Data is validated and mapped to the platform structure",
      "Historical compliance data is preserved for audit continuity",
    ],
  },
  {
    step: 4,
    icon: GraduationCap,
    title: "Team Training",
    timing: "Week 3\u20134",
    points: [
      "Compliance officers and managers get hands-on training",
      "Role-specific sessions ensure each team member knows their workflows",
      "Training materials and guides provided for ongoing reference",
    ],
  },
  {
    step: 5,
    icon: HeadsetIcon,
    title: "Go Live & Support",
    timing: "Week 4+",
    points: [
      "Your team starts using the platform for day-to-day compliance",
      "Dedicated support during the first month",
      "Regular check-ins to ensure smooth adoption",
      "Add more modules as you\u2019re ready",
    ],
  },
];

const includedItems = [
  {
    icon: UserCheck,
    title: "Dedicated onboarding contact",
    description:
      "A single point of contact who understands your organisation and guides you through every step of implementation.",
  },
  {
    icon: ArrowRightLeft,
    title: "Data migration assistance",
    description:
      "We help you move existing compliance data into the platform \u2014 resident records, incident history, workforce information, and more.",
  },
  {
    icon: Users,
    title: "Team training sessions",
    description:
      "Role-specific training for compliance officers, managers, and team members so everyone is confident from day one.",
  },
  {
    icon: Cog,
    title: "Module configuration",
    description:
      "Modules are configured to match your organisation\u2019s structure, workflows, and compliance priorities.",
  },
  {
    icon: LifeBuoy,
    title: "Go-live support",
    description:
      "Dedicated support during your first month live, with regular check-ins to ensure smooth adoption across your team.",
  },
  {
    icon: BookOpen,
    title: "Documentation and guides",
    description:
      "Comprehensive documentation and reference guides provided for ongoing use after training is complete.",
  },
];

const faqs = [
  {
    q: "How long does implementation take?",
    a: "Typically 2\u20134 weeks depending on complexity. Some providers are live within a week with core modules.",
  },
  {
    q: "Do we need IT involvement?",
    a: "Minimal. Statura Care is cloud-based \u2014 no on-premise installation. Your IT team may want to review our security documentation.",
  },
  {
    q: "Can we migrate data from spreadsheets?",
    a: "Yes. We help migrate your existing compliance data to ensure continuity.",
  },
  {
    q: "What training is provided?",
    a: "Role-specific training for compliance officers, managers, and team members. Plus ongoing documentation and support.",
  },
  {
    q: "Can we start with a few modules and add more later?",
    a: "Absolutely. Most providers start with 3\u20135 core modules and expand over time.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
    { "@type": "ListItem", position: 2, name: "Implementation", item: "https://statura.care/implementation" },
  ],
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

export default function ImplementationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#96A998] opacity-[0.03] blur-[100px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-2xl bg-[#96A998]/10 border border-[#96A998]/20 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-[#96A998]" />
              </div>
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Implementation
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                From demo to live in weeks,{" "}
                <span className="text-[#96A998]">not months.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Statura Care is designed for fast onboarding. We guide you
                through every step &mdash; from choosing your modules to going live
                with your team. No lengthy IT projects, no consultants required.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                How It Works
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Five steps to{" "}
                <span className="text-[#3E5D4A]">go live.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                A structured implementation process that gets your team up and
                running without disrupting day-to-day operations.
              </p>
            </div>

            <div className="max-w-4xl">
              <div className="space-y-6">
                {timelineSteps.map((step, index) => (
                  <div
                    key={step.step}
                    className="relative flex gap-6"
                  >
                    {/* Connector line */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-2xl bg-[#F5F6F2] border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-[#3E5D4A]" />
                      </div>
                      {index < timelineSteps.length - 1 && (
                        <div className="w-px flex-1 bg-slate-200 mt-3" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em]">
                          Step {step.step}
                        </span>
                        <span className="text-xs text-slate-400">&middot;</span>
                        <span className="text-xs font-medium text-slate-400">
                          {step.timing}
                        </span>
                      </div>
                      <h3 className="font-semibold text-[#1E293B] text-lg mb-3">
                        {step.title}
                      </h3>
                      <ul className="space-y-2">
                        {step.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm text-slate-500 leading-relaxed"
                          >
                            <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                What&apos;s Included
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Everything you need to{" "}
                <span className="text-[#3E5D4A]">get started.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Every implementation includes the support, training, and
                guidance to make your transition seamless.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {includedItems.map((item) => (
                <div
                  key={item.title}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center mb-4 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                    <item.icon className="w-5 h-5 text-[#3E5D4A]" />
                  </div>
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
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Frequently asked questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 rounded-2xl border border-slate-200 bg-white"
                >
                  <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner title="Ready to get started?" />
      </main>
      <Footer />
    </>
  );
}
