import React from "react";
import {
  Scale,
  Layers,
  Zap,
  Eye,
  Puzzle,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Scale,
    title: "Purpose-built for the Act",
    description:
      "We didn't retrofit a generic compliance tool. Every data field, every workflow, every deadline maps directly to a section of the Aged Care Act 2024. When the legislation changes, the platform updates.",
  },
  {
    icon: Layers,
    title: "Modular by design",
    description:
      "Start with the modules you need most — SIRS and KeyPerson for many providers. Add Quality Standards, Prudential, or Workforce as your needs grow. Each module is independently licensable but deeply integrated.",
  },
  {
    icon: Zap,
    title: "Deadline-driven automation",
    description:
      "Priority 1 incidents trigger 24-hour countdown timers. BSP review dates create escalating alerts. Assessment schedules auto-generate. The system makes it structurally difficult to miss a deadline.",
  },
  {
    icon: Eye,
    title: "Audit-ready at all times",
    description:
      "Generate comprehensive ACQSC evidence packs at the click of a button. Self-assessments, evidence mappings, improvement registers, and cross-module data — structured exactly how assessors expect.",
  },
  {
    icon: Puzzle,
    title: "Cross-module intelligence",
    description:
      "When a SIRS incident is logged, it auto-creates evidence for Quality Standard 8. When a responsible person's screening expires, it flags in both KeyPerson and Workforce. Intelligence compounds across modules.",
  },
  {
    icon: HeartHandshake,
    title: "Built for care, not just compliance",
    description:
      "Good compliance supports good care. Statura Care surfaces the information that helps providers improve — not just tick boxes. Continuous improvement registers, trend analysis, and gap identification drive real outcomes.",
  },
];

export function WhyStaturaSection() {
  return (
    <section id="why-statura" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: header */}
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
              Why Statura Care
            </p>
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
              Compliance that works{" "}
              <span className="text-[#3E5D4A]">with</span> you, not against you.
            </h2>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              The Aged Care Act 2024 introduced the most significant regulatory
              reform in a generation. Statura Care was built from day one to
              help providers navigate it with confidence.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "14", label: "Compliance modules" },
                { value: "8", label: "Quality Standards covered" },
                { value: "24hr", label: "P1 deadline tracking" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif font-black text-3xl text-[#1E293B]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: reasons list */}
          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-[#96A998]/30 hover:bg-[#F5F6F2]/50 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-5 h-5 text-[#3E5D4A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1E293B] text-sm mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
