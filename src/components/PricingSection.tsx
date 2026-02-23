import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essentials",
    description: "For providers starting their compliance journey",
    price: "Contact us",
    period: "",
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
    period: "",
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
    period: "",
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

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
            Pricing
          </p>
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
            Start with what you need.{" "}
            <span className="text-[#3E5D4A]">Scale as you grow.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Every plan includes a 14-day free trial. No credit card required.
            Cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
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

              <h3
                className={`font-semibold text-lg ${
                  plan.highlight ? "text-white" : "text-[#1E293B]"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mt-1 ${
                  plan.highlight ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-5 mb-6">
                <span
                  className={`font-serif font-bold text-2xl ${
                    plan.highlight ? "text-white" : "text-[#1E293B]"
                  }`}
                >
                  {plan.price}
                </span>
              </div>

              <a
                href="mailto:hello@statura.care?subject=Statura%20Care%20Pricing%20Enquiry"
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
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-[#96A998]" : "text-[#3E5D4A]"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
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
  );
}
