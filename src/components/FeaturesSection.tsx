import React from "react";
import {
  Bell,
  FileText,
  Users,
  Shield,
  BarChart3,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Automated Deadline Tracking",
    description:
      "Never miss a regulatory deadline. Statura calculates every notification deadline from incident dates, escalates alerts as they approach, and ensures Priority 1 SIRS incidents are notified within 24 hours.",
  },
  {
    icon: FileText,
    title: "Complete Audit Trail",
    description:
      "Every action logged, every change tracked. When the ACQSC comes calling, your compliance history is structured, searchable, and export-ready — across every module.",
  },
  {
    icon: Users,
    title: "Multi-Tenancy & Role Management",
    description:
      "Manage multiple provider organisations from one account. Granular role-based access means compliance officers, managers, and self-service users each see exactly what they need.",
  },
  {
    icon: Shield,
    title: "Cross-Module Intelligence",
    description:
      "When modules work together, intelligence multiplies. SIRS incident data auto-feeds into Quality Standards evidence. KeyPerson assessments populate governance reporting. No double entry.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Compliance Dashboard",
    description:
      "See your compliance posture at a glance. Colour-coded heatmaps across all 8 Quality Standards, active alert counts, overdue items, and upcoming deadlines — all in one view.",
  },
  {
    icon: Lock,
    title: "Australian Hosted & Secure",
    description:
      "Data hosted in Sydney on Australian infrastructure. Row-level security ensures each organisation only sees their own data. WCAG 2.1 AA accessible for government-facing use.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
            Platform Features
          </p>
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
            Built from the Act up,{" "}
            <span className="text-[#3E5D4A]">not bolted on.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Statura Care was designed specifically for the Aged Care Act 2024.
            Every feature maps directly to a legislative obligation — nothing
            generic, nothing unnecessary.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center mb-4 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                <feature.icon className="w-5 h-5 text-[#3E5D4A]" />
              </div>
              <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
