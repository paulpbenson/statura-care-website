import React from "react";
import {
  Shield,
  Clock,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const trustSignals = [
  { icon: Shield, label: "Built for the Aged Care Act 2024" },
  { icon: Clock, label: "Automated deadline tracking" },
  { icon: BarChart3, label: "Real-time compliance posture" },
  { icon: CheckCircle2, label: "WCAG 2.1 AA accessible" },
];

export function HeroSection() {
  return (
    <section className="relative bg-[#0F172A] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Green accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#96A998] opacity-[0.04] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#96A998] animate-pulse" />
            <span className="text-xs font-medium text-slate-300 tracking-wide">
              Now supporting the Aged Care Act 2024
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
            Aged care compliance,{" "}
            <span className="text-[#96A998]">structured.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
            Statura Care helps providers manage every obligation under the Aged
            Care Act 2024 — from responsible persons to incident reporting to
            quality standards. One platform, every module you need.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://app.statura.care/signup"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-[#0F172A] font-semibold text-sm hover:bg-slate-100 transition-all duration-150 shadow-lg hover:shadow-xl"
            >
              Start your free trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-slate-600 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-150"
            >
              See how it works
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center gap-2.5 px-3 py-2"
              >
                <signal.icon className="w-4 h-4 text-[#96A998] flex-shrink-0" />
                <span className="text-xs font-medium text-slate-400">
                  {signal.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mt-16 lg:mt-20 relative">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 shadow-2xl overflow-hidden">
            {/* Window controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="ml-4 flex-1 h-6 rounded-md bg-slate-800/80 max-w-md flex items-center px-3">
                <span className="text-[10px] text-slate-500">
                  app.statura.care
                </span>
              </div>
            </div>
            {/* Dashboard mockup */}
            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Standards Compliant", value: "7/8", color: "text-green-400" },
                  { label: "Active Incidents", value: "3", color: "text-amber-400" },
                  { label: "Overdue Actions", value: "0", color: "text-green-400" },
                  { label: "RP Assessments Due", value: "2", color: "text-blue-400" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-slate-800/60 border border-slate-700/30 p-4"
                  >
                    <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className={`text-2xl font-bold mt-1 ${stat.color}`}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
              {/* Table mockup rows */}
              <div className="space-y-2">
                {[
                  { id: "SIRS-202602-001", type: "Neglect", priority: "P2", status: "Under Investigation" },
                  { id: "SIRS-202602-002", type: "Restrictive Practice", priority: "Non-reportable", status: "Remediation" },
                  { id: "SIRS-202601-014", type: "Unexpected Death", priority: "P1", status: "Closed" },
                ].map((row) => (
                  <div
                    key={row.id}
                    className="flex items-center gap-4 px-4 py-3 rounded-lg bg-slate-800/40 border border-slate-700/20"
                  >
                    <span className="text-xs font-mono text-slate-400 w-36">
                      {row.id}
                    </span>
                    <span className="text-xs text-slate-300 flex-1">
                      {row.type}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        row.priority === "P1"
                          ? "bg-red-500/20 text-red-400"
                          : row.priority === "P2"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-slate-700 text-slate-400"
                      }`}
                    >
                      {row.priority}
                    </span>
                    <span className="text-xs text-slate-500 w-36 text-right">
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
