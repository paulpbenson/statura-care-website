import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { modules, categories, categoryColours } from "@/data/modules";
import { ArrowRight, Puzzle } from "lucide-react";

export const metadata: Metadata = {
  title: "14 Compliance Modules — Statura Care",
  description:
    "Every obligation under the Aged Care Act 2024, one platform. Explore all 14 compliance modules across Governance & People, Safety & Quality, and Financial & Commercial.",
};

export default function ModulesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                14 Compliance Modules
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Every obligation,{" "}
                <span className="text-[#96A998]">one platform.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Pick the modules you need today. Add more as you grow. Each
                module plugs into the same platform core — shared audit trail,
                alerts, documents, and dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Module Categories */}
        {categories.map((cat) => {
          const catMods = modules.filter((m) => m.category === cat);
          const colours = categoryColours[cat];
          return (
            <section
              key={cat}
              className="bg-white py-20 lg:py-24 border-b border-slate-100 last:border-0"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-10">
                  <p className={`text-xs font-bold uppercase tracking-[0.15em] mb-2 ${colours.text}`}>
                    {cat}
                  </p>
                  <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B] tracking-tight">
                    {cat === "Governance & People" && "The people who lead and govern your organisation."}
                    {cat === "Safety & Quality" && "The care you deliver and how you improve it."}
                    {cat === "Financial & Commercial" && "The money you manage and the agreements you keep."}
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {catMods.map((mod) => (
                    <Link
                      key={mod.slug}
                      href={`/modules/${mod.slug}`}
                      className={`group relative p-7 rounded-2xl bg-gradient-to-br ${colours.gradient} border ${colours.border} hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-200`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                          <mod.icon className="w-6 h-6 text-[#3E5D4A]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-[#1E293B] text-base">
                              {mod.name}
                            </h3>
                            <span className="text-[10px] font-mono text-slate-400 bg-slate-200/60 px-1.5 py-0.5 rounded">
                              {mod.section}
                            </span>
                          </div>
                          <p className="text-sm text-[#3E5D4A] font-medium mb-2">
                            {mod.tagline}
                          </p>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {mod.shortDescription}
                          </p>
                          <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-[#3E5D4A] group-hover:gap-2 transition-all">
                            Learn more <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Cross-module intelligence section */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#96A998]/10 border border-[#96A998]/20 flex items-center justify-center mx-auto mb-6">
                <Puzzle className="w-7 h-7 text-[#3E5D4A]" />
              </div>
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Cross-Module Intelligence
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                When modules work together,{" "}
                <span className="text-[#3E5D4A]">intelligence compounds.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                SIRS incident data auto-feeds into Quality Standard 8 evidence.
                Workforce staffing data flows into Standard 7. Complaint trends
                surface in Standard 6. Responsible person screening populates
                governance reporting. Every module shares a common audit trail,
                document store, and alert system — so data entered once works
                everywhere.
              </p>
            </div>
          </div>
        </section>

        <CTABanner compact />
      </main>
      <Footer />
    </>
  );
}
