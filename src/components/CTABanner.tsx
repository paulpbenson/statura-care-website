import React from "react";

interface CTABannerProps {
  title?: string;
  description?: string;
  compact?: boolean;
}

export function CTABanner({
  title = "Ready to structure your compliance?",
  description = "Start your 14-day free trial. No credit card required.",
  compact = false,
}: CTABannerProps) {
  return (
    <section className={`bg-[#0F172A] ${compact ? "py-16" : "py-20 lg:py-28"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`font-serif font-black text-white leading-tight tracking-tight ${compact ? "text-2xl lg:text-3xl" : "text-3xl lg:text-4xl"}`}>
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://app.statura.care/signup"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#0F172A] font-semibold text-sm hover:bg-slate-100 transition-all duration-150 shadow-lg"
            >
              Start your free trial
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-slate-600 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-150"
            >
              Request a demo
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
