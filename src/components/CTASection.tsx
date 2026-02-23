import React from "react";

export function CTASection() {
  return (
    <section className="bg-[#0F172A] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif font-black text-3xl lg:text-4xl text-white leading-tight tracking-tight">
            Ready to structure your compliance?
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Navigate the Aged Care Act 2024 with confidence. Start your
            14-day free trial and see how Statura Care structures your
            compliance from day one.
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
