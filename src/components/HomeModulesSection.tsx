import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { modules, categories, categoryColours, categoryDescriptions } from "@/data/modules";

export function HomeModulesSection() {
  return (
    <section id="modules" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
            {modules.length} Modules
          </p>
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
            Every obligation,{" "}
            <span className="text-[#3E5D4A]">one platform.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Residential care, home care, or both. Pick the modules you need
            today. Add more as you grow. Each module plugs into the same
            platform core — shared audit trail, alerts, documents, and
            dashboard.
          </p>
        </div>

        {/* Module category overview — 2 columns on lg, 1 on mobile */}
        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((cat) => {
            const catMods = modules.filter((m) => m.category === cat);
            const colours = categoryColours[cat];
            return (
              <div key={cat} className="space-y-3">
                <div className="mb-2">
                  <p className={`text-xs font-bold uppercase tracking-[0.15em] ${colours.text}`}>
                    {cat}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {categoryDescriptions[cat]}
                  </p>
                </div>
                <div className="space-y-1.5">
                  {catMods.map((mod) => (
                    <Link
                      key={mod.slug}
                      href={`/modules/${mod.slug}`}
                      className={`group flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br ${colours.gradient} border ${colours.border} hover:shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition-all duration-200`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <mod.icon className="w-4 h-4 text-[#3E5D4A]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-[#1E293B] text-sm">
                            {mod.name}
                          </h4>
                          <div className="hidden sm:flex items-center gap-1">
                            {mod.applicableTo.includes("residential") && (
                              <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded bg-blue-100 text-blue-600">
                                RES
                              </span>
                            )}
                            {mod.applicableTo.includes("home-care") && (
                              <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-600">
                                HC
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#3E5D4A] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3E5D4A] hover:text-[#2F4B3B] transition-colors"
          >
            Explore all {modules.length} modules in detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
