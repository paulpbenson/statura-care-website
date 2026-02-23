import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { modules, categories, categoryColours } from "@/data/modules";

export function HomeModulesSection() {
  return (
    <section id="modules" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
            14 Compliance Modules
          </p>
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
            Every obligation,{" "}
            <span className="text-[#3E5D4A]">one platform.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Pick the modules you need today. Add more as you grow. Each module
            plugs into the same platform core — shared audit trail, alerts,
            documents, and dashboard.
          </p>
        </div>

        {/* Module category overview */}
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const catMods = modules.filter((m) => m.category === cat);
            const colours = categoryColours[cat];
            return (
              <div key={cat} className="space-y-3">
                <p className={`text-xs font-bold uppercase tracking-[0.15em] ${colours.text}`}>
                  {cat}
                </p>
                <div className="space-y-2">
                  {catMods.map((mod) => (
                    <Link
                      key={mod.slug}
                      href={`/modules/${mod.slug}`}
                      className={`group flex items-center gap-3 p-3.5 rounded-xl bg-gradient-to-br ${colours.gradient} border ${colours.border} hover:shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition-all duration-200`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <mod.icon className="w-4.5 h-4.5 text-[#3E5D4A]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-[#1E293B] text-sm">
                            {mod.name}
                          </h4>
                          <span className="text-[9px] font-mono text-slate-400 bg-slate-200/60 px-1.5 py-0.5 rounded hidden sm:inline">
                            {mod.section}
                          </span>
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
            Explore all 14 modules in detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
