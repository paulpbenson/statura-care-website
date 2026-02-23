import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  { name: "Essentials", modules: "Up to 3", team: "5 members", highlight: false },
  { name: "Professional", modules: "Up to 8", team: "15 members", highlight: true, badge: "Most popular" },
  { name: "Enterprise", modules: "All 14", team: "Unlimited", highlight: false },
];

export function HomePricingSection() {
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
          </p>
        </div>

        {/* Compact pricing cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 text-center ${
                plan.highlight
                  ? "bg-[#0F172A] text-white border-2 border-[#96A998]/30 shadow-xl"
                  : "bg-white border border-slate-200 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                  <span className="text-[9px] font-semibold px-2.5 py-0.5 rounded-full bg-[#96A998] text-white uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3 className={`font-semibold text-base mb-3 ${plan.highlight ? "text-white" : "text-[#1E293B]"}`}>
                {plan.name}
              </h3>
              <div className="space-y-1.5">
                <div className="flex items-center justify-center gap-2">
                  <Check className={`w-3.5 h-3.5 ${plan.highlight ? "text-[#96A998]" : "text-[#3E5D4A]"}`} />
                  <span className={`text-sm ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>
                    {plan.modules} modules
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className={`w-3.5 h-3.5 ${plan.highlight ? "text-[#96A998]" : "text-[#3E5D4A]"}`} />
                  <span className={`text-sm ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>
                    {plan.team}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View full pricing */}
        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3E5D4A] hover:text-[#2F4B3B] transition-colors"
          >
            View full pricing details and FAQ
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
