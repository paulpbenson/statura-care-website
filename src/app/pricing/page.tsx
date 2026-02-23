import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Statura Care",
  description:
    "Start with what you need, scale as you grow. Every plan includes a 14-day free trial. No credit card required.",
};

const plans = [
  {
    name: "Essentials",
    description: "For providers starting their compliance journey",
    price: "Contact us",
    highlight: false,
    features: [
      "Up to 3 modules",
      "5 team members",
      "Audit trail & document storage",
      "Compliance alerts",
      "Email support",
      "Standard reporting",
    ],
  },
  {
    name: "Professional",
    description: "For providers who need comprehensive coverage",
    price: "Contact us",
    highlight: true,
    badge: "Most popular",
    features: [
      "Up to 8 modules",
      "15 team members",
      "Everything in Essentials",
      "Cross-module intelligence",
      "PDF report generation",
      "Priority support",
      "Audit preparation packs",
      "Custom dashboards",
    ],
  },
  {
    name: "Enterprise",
    description: "For multi-site providers and large organisations",
    price: "Contact us",
    highlight: false,
    features: [
      "All 14 modules",
      "Unlimited team members",
      "Everything in Professional",
      "Multi-site management",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Onboarding & training",
    ],
  },
];

const faqs = [
  {
    q: "How does the 14-day free trial work?",
    a: "Sign up and immediately access the platform with sample data loaded. Choose the modules you want to explore. No credit card required — if you don't subscribe after 14 days, your trial simply ends.",
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
    a: "Pricing is based on the number of modules activated and team members. We tailor pricing to your organisation's size and needs — contact us for a quote.",
  },
  {
    q: "What support is included?",
    a: "All plans include email support. Professional plans include priority support with faster response times. Enterprise plans include a dedicated account manager and onboarding assistance.",
  },
  {
    q: "Where is my data stored?",
    a: "All data is hosted in Sydney, Australia on Australian infrastructure. Your data never leaves the country. See our Security page for full details.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
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
                Every plan includes a 14-day free trial. No credit card required.
                Cancel anytime.
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
                  className={`relative rounded-2xl p-7 ${
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

                  <h3 className={`font-semibold text-lg ${plan.highlight ? "text-white" : "text-[#1E293B]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mt-1 ${plan.highlight ? "text-slate-300" : "text-slate-500"}`}>
                    {plan.description}
                  </p>

                  <div className="mt-5 mb-6">
                    <span className={`font-serif font-bold text-2xl ${plan.highlight ? "text-white" : "text-[#1E293B]"}`}>
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

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-[#96A998]" : "text-[#3E5D4A]"}`} />
                        <span className={`text-sm ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
                <div key={faq.q} className="p-6 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="font-semibold text-[#1E293B] text-base mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
