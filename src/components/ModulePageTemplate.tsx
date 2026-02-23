import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { CTABanner } from "./CTABanner";
import type { ModuleData } from "@/data/modules";
import { modules, categoryColours } from "@/data/modules";

function getAdjacentModules(slug: string) {
  const idx = modules.findIndex((m) => m.slug === slug);
  const prev = idx > 0 ? modules[idx - 1] : null;
  const next = idx < modules.length - 1 ? modules[idx + 1] : null;
  return { prev, next };
}

export function ModulePageTemplate({ module: mod }: { module: ModuleData }) {
  const catColours = categoryColours[mod.category];
  const { prev, next } = getAdjacentModules(mod.slug);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#0F172A] pt-24 lg:pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/modules" className="hover:text-white transition-colors">Modules</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-300">{mod.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0F172A] pb-20 lg:pb-28 pt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Category + Section badges */}
            <div className="flex items-center gap-3 mb-6">
              <span className={`text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full border ${catColours.border} ${catColours.text} bg-white/5`}>
                {mod.category}
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
                {mod.section}
              </span>
            </div>

            {/* Module icon + name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#96A998]/10 border border-[#96A998]/20 flex items-center justify-center">
                <mod.icon className="w-7 h-7 text-[#96A998]" />
              </div>
              <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.1] tracking-tight">
                {mod.name}
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-xl lg:text-2xl text-[#96A998] font-serif font-bold leading-snug mb-6">
              {mod.tagline}
            </p>

            {/* Description */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              {mod.longDescription}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://app.statura.care/signup"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-[#0F172A] font-semibold text-sm hover:bg-slate-100 transition-all duration-150 shadow-lg"
              >
                Start your free trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-slate-600 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-150"
              >
                Request a demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-[#F8FAFC] py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
              The Challenge
            </p>
            <p className="text-lg lg:text-xl text-[#1E293B] leading-relaxed font-medium">
              {mod.problemStatement}
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
              Key Capabilities
            </p>
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
              What the {mod.name} module does.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mod.capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center mb-4 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                  <span className="text-sm font-bold text-[#3E5D4A]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow (if present) */}
      {mod.workflow && mod.workflow.length > 0 && (
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                How It Works
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                The {mod.name} workflow.
              </h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />
              <div className="space-y-6">
                {mod.workflow.map((step) => (
                  <div key={step.step} className="flex gap-5 sm:gap-8">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl border border-[#96A998]/30 bg-[#F5F6F2] flex items-center justify-center">
                        <span className="text-sm font-bold text-[#3E5D4A]">{step.step}</span>
                      </div>
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          Step {step.step}
                        </span>
                        {step.time && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                            {step.time}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-[#1E293B] text-base mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regulatory Requirements */}
      <section className={`${mod.workflow ? "bg-white" : "bg-[#F8FAFC]"} py-20 lg:py-28`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Regulatory Requirements
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                What the law requires.
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                The Aged Care Act 2024 ({mod.section}) sets specific obligations that this module helps you meet systematically.
              </p>
            </div>
            <div className="space-y-4">
              {mod.regulatoryRequirements.map((req) => (
                <div
                  key={req.title}
                  className="p-5 rounded-2xl border border-slate-100 bg-white"
                >
                  <h3 className="font-semibold text-[#1E293B] text-sm mb-1">
                    {req.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {req.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Module Integration */}
      {mod.integrations.length > 0 && (
        <section className={`${mod.workflow ? "bg-[#F8FAFC]" : "bg-white"} py-20 lg:py-28`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Works With
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Better together.
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                When modules work together, intelligence compounds. {mod.name} integrates with these modules for a complete compliance picture.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mod.integrations.map((integration) => {
                const linkedModule = modules.find((m) => m.slug === integration.moduleSlug);
                return (
                  <Link
                    key={integration.moduleSlug}
                    href={`/modules/${integration.moduleSlug}`}
                    className="group p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {linkedModule && (
                        <div className="w-8 h-8 rounded-lg bg-[#F5F6F2] group-hover:bg-[#96A998]/10 flex items-center justify-center transition-colors">
                          <linkedModule.icon className="w-4 h-4 text-[#3E5D4A]" />
                        </div>
                      )}
                      <h3 className="font-semibold text-[#1E293B] text-sm group-hover:text-[#3E5D4A] transition-colors">
                        {integration.moduleName}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {integration.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next module navigation */}
      <section className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {prev ? (
              <Link
                href={`/modules/${prev.slug}`}
                className="flex items-center gap-3 text-sm text-slate-500 hover:text-[#1E293B] transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Previous</p>
                  <p className="font-medium">{prev.name}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/modules/${next.slug}`}
                className="flex items-center gap-3 text-sm text-slate-500 hover:text-[#1E293B] transition-colors text-right group"
              >
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Next</p>
                  <p className="font-medium">{next.name}</p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title={`See ${mod.name} in action.`}
        description={`Start your 14-day free trial and explore the ${mod.name} module with sample data — no credit card required.`}
        compact
      />
    </>
  );
}
