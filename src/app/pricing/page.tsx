import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Check,
  ShieldCheck,
  Users,
  Building2,
  Home,
  ArrowRight,
  Lock,
  FileText,
  Bell,
  Globe,
  Mail,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flexible pricing for aged care compliance software. Choose from Essentials, Professional, or Enterprise plans covering residential care and Support at Home. Start with the modules you need and scale as you grow.",
  alternates: { canonical: "https://statura.care/pricing" },
  keywords: [
    "aged care software pricing",
    "aged care compliance software cost",
    "residential care software pricing",
    "Support at Home software pricing",
    "aged care platform pricing Australia",
  ],
  openGraph: {
    title: "Pricing — Statura Care Compliance Platform",
    description:
      "Flexible modular pricing for Australian aged care providers. Essentials, Professional, and Enterprise plans for residential care and Support at Home. Contact us for a tailored quote.",
    url: "https://statura.care/pricing",
  },
};

const plans = [
  {
    name: "Essentials",
    tagline: "For providers focused on core compliance",
    price: "Contact us",
    highlight: false,
    features: [
      "Up to 5 modules",
      "10 team members",
      "Standard reporting",
      "Document storage",
      "Compliance alerts & deadline tracking",
      "Email support",
    ],
    ideal:
      "Ideal for providers starting with SIRS, Quality Standards, Responsible Persons, and a few other compliance modules.",
  },
  {
    name: "Professional",
    tagline: "For providers who need comprehensive coverage",
    price: "Contact us",
    highlight: true,
    badge: "Most popular",
    features: [
      "Up to 15 modules",
      "25 team members",
      "Everything in Essentials",
      "Cross-module intelligence",
      "PDF report generation",
      "Priority support",
      "Audit preparation packs",
      "Custom dashboards",
    ],
    ideal:
      "Ideal for providers adding clinical care, medications, workforce, and financial modules alongside their compliance foundation.",
  },
  {
    name: "Enterprise",
    tagline: "For multi-site providers and large organisations",
    price: "Contact us",
    highlight: false,
    features: [
      "All 32 modules",
      "Unlimited team members",
      "Everything in Professional",
      "Multi-site management",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Onboarding & training",
    ],
    ideal:
      "Ideal for large providers running residential care, Support at Home, or both across multiple sites with a single platform.",
  },
];

const includedInEveryPlan = [
  {
    icon: Bell,
    label: "Compliance alerts & deadline tracking",
  },
  {
    icon: Lock,
    label: "Immutable audit trail",
  },
  {
    icon: FileText,
    label: "Document storage",
  },
  {
    icon: ShieldCheck,
    label: "Role-based access control",
  },
  {
    icon: Globe,
    label: "Australian hosting (Sydney)",
  },
  {
    icon: Mail,
    label: "Email support",
  },
  {
    icon: BarChart3,
    label: "Standard reporting",
  },
];

const careTypes = [
  {
    icon: Building2,
    title: "Residential care providers",
    description:
      "Manage compliance, clinical care, workforce, and funding for residential facilities under the Aged Care Act 2024.",
    modules: [
      "SIRS & Incidents",
      "Quality Standards",
      "Responsible Persons",
      "Care Delivery",
      "Medications",
      "Rostering",
      "Funding & Claims",
      "Accommodation",
    ],
  },
  {
    icon: Home,
    title: "Support at Home providers",
    description:
      "Track client contributions, wellness goals, workforce compliance, and service delivery for in-home care programs.",
    modules: [
      "Support at Home",
      "SAH Contributions & Claims",
      "Wellness Goals",
      "Quality Standards",
      "Workforce",
      "Billing",
    ],
  },
  {
    icon: Users,
    title: "Both care types",
    description:
      "Run residential and home care from one platform. Shared audit trail, cross-module intelligence, and unified reporting across your entire organisation.",
    modules: [
      "All residential modules",
      "All home care modules",
      "Shared audit trail",
      "Cross-module intelligence",
      "Unified reporting",
    ],
  },
];

const faqs = [
  {
    q: "Can I try the platform before committing?",
    a: "Yes. Request a demo and we'll walk you through the platform with your specific compliance priorities. We can also arrange a guided trial tailored to your organisation's modules and workflow.",
  },
  {
    q: "Can I change my plan or add modules later?",
    a: "Yes. You can add modules at any time as your compliance needs grow. Each module is independently licensable and integrates seamlessly with your existing setup.",
  },
  {
    q: "Is there a minimum contract term?",
    a: "We offer both monthly and annual subscriptions. Annual plans include a discount. Contact us for details specific to your organisation.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing is based on the number of modules activated and team members. The same modules and pricing apply whether you're running residential care, Support at Home, or both. Contact us for a tailored quote based on your organisation's size and needs.",
  },
  {
    q: "What support is included?",
    a: "All plans include email support. Professional plans include priority support with faster response times. Enterprise plans include a dedicated account manager and onboarding assistance.",
  },
  {
    q: "Where is my data stored?",
    a: "All data is hosted in Sydney, Australia on Australian infrastructure. Your data never leaves the country. See our Security page for full details.",
  },
  {
    q: "Do I need separate subscriptions for residential and home care?",
    a: "No. Statura Care covers both residential aged care and Support at Home in one platform and one subscription. Your team uses the same login, audit trail, and reporting whether they're managing residential care, home care, or both.",
  },
  {
    q: "Which modules do most providers start with?",
    a: "Most residential care providers start with SIRS & Incidents, Quality Standards, and Responsible Persons. Home care providers typically start with Support at Home and SAH Contributions & Claims. Both usually add Workforce Compliance early. You can add more modules at any time.",
  },
];

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

export default function PricingPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Pricing
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl text-white leading-[1.05] tracking-tight">
                Start with what you need.{" "}
                <span className="text-[#96A998]">Scale as you grow.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                One platform for residential care and Support at Home. Choose
                the modules that match your compliance priorities today and add
                more as your needs evolve.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl p-7 ${
                    plan.highlight
                      ? "bg-[#0F172A] text-white border-2 border-[#96A998]/30 shadow-xl"
                      : "bg-white border border-slate-200 shadow-[0_4px_6px_rgba(15,23,42,0.07)]"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-[#96A998] text-white uppercase tracking-wider">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <h3
                    className={`font-semibold text-lg ${plan.highlight ? "text-white" : "text-[#1E293B]"}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${plan.highlight ? "text-slate-300" : "text-slate-500"}`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-5 mb-5">
                    <span
                      className={`font-serif font-bold text-2xl ${plan.highlight ? "text-white" : "text-[#1E293B]"}`}
                    >
                      {plan.price}
                    </span>
                  </div>

                  <a
                    href="/contact"
                    className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all duration-150 mb-6 ${
                      plan.highlight
                        ? "bg-white text-[#0F172A] hover:bg-slate-100"
                        : "bg-[#0F172A] text-white hover:bg-[#1E293B]"
                    }`}
                  >
                    Get in touch
                  </a>

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-[#96A998]" : "text-[#3E5D4A]"}`}
                        />
                        <span
                          className={`text-sm ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className={`text-xs mt-6 pt-5 border-t leading-relaxed ${
                      plan.highlight
                        ? "text-slate-400 border-slate-700"
                        : "text-slate-400 border-slate-200"
                    }`}
                  >
                    {plan.ideal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included in every plan */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Included in every plan
              </h2>
              <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                Every Statura Care subscription includes the foundation you need
                to run a compliant aged care operation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {includedInEveryPlan.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-5 rounded-2xl border border-slate-200 bg-white"
                >
                  <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#3E5D4A]" />
                  <span className="text-sm text-[#1E293B] font-medium leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Choose by care type */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Choose by care type
              </h2>
              <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                Whether you deliver residential care, home care, or both,
                Statura Care has the modules to match your obligations.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {careTypes.map((careType) => (
                <div
                  key={careType.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_4px_6px_rgba(15,23,42,0.07)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#3E5D4A]/10 flex items-center justify-center">
                      <careType.icon className="w-5 h-5 text-[#3E5D4A]" />
                    </div>
                    <h3 className="font-semibold text-[#1E293B] text-base">
                      {careType.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {careType.description}
                  </p>

                  <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-wider mb-3">
                    Key modules
                  </p>
                  <ul className="space-y-2">
                    {careType.modules.map((mod) => (
                      <li key={mod} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#3E5D4A]" />
                        <span className="text-sm text-slate-600">{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="/modules"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#3E5D4A] hover:text-[#1E293B] transition-colors"
              >
                View all 32 modules
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
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
      </main>
      <CTABanner />
      <Footer />
    </>
  );
}
