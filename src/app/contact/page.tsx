import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a demo of Statura Care, ask a question about aged care compliance modules, or discuss your organisation's requirements. We respond within one business day.",
  alternates: { canonical: "https://statura.care/contact" },
  openGraph: {
    title: "Contact Statura Care — Request a Demo",
    description:
      "Get in touch with the Statura Care team. Request a demo, ask about pricing, or discuss your aged care compliance needs.",
    url: "https://statura.care/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Contact
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl text-white leading-[1.05] tracking-tight">
                Let&apos;s talk about your{" "}
                <span className="text-[#96A998]">compliance needs.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Whether you want a demo, have questions about a specific module,
                or need to discuss your organisation&apos;s requirements — we&apos;re here
                to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left — Info */}
              <div>
                <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B] leading-tight tracking-tight mb-8">
                  Get in touch
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#3E5D4A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E293B] text-sm mb-1">Email</h3>
                      <a href="mailto:hello@statura.care" className="text-sm text-[#3E5D4A] hover:underline">
                        hello@statura.care
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#3E5D4A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E293B] text-sm mb-1">Response time</h3>
                      <p className="text-sm text-slate-500">
                        We aim to respond within one business day.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-[#3E5D4A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E293B] text-sm mb-1">What to expect</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        We&apos;ll arrange a 30-minute call to understand your
                        compliance priorities, then walk you through the modules
                        most relevant to your organisation. No pressure, no
                        obligation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct email CTA */}
                <div className="mt-10 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <p className="text-sm text-slate-500 mb-3">
                    Prefer to email directly?
                  </p>
                  <a
                    href="mailto:hello@statura.care?subject=Statura%20Care%20Enquiry"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0F172A] text-white font-semibold text-sm hover:bg-[#1E293B] transition-all duration-150"
                  >
                    Email hello@statura.care
                  </a>
                </div>
              </div>

              {/* Right — Contact Form */}
              <div>
                <div className="p-8 rounded-2xl border border-slate-200 bg-[#F8FAFC]">
                  <h3 className="font-semibold text-[#1E293B] text-lg mb-6">
                    Request a demo
                  </h3>
                  <form
                    action="mailto:hello@statura.care"
                    method="POST"
                    encType="text/plain"
                    className="space-y-5"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1E293B] mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#96A998] focus:border-transparent transition"
                        placeholder="Jane Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1E293B] mb-1.5">
                        Work email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#96A998] focus:border-transparent transition"
                        placeholder="jane@yourprovider.com.au"
                      />
                    </div>

                    <div>
                      <label htmlFor="organisation" className="block text-sm font-medium text-[#1E293B] mb-1.5">
                        Organisation
                      </label>
                      <input
                        type="text"
                        id="organisation"
                        name="organisation"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#96A998] focus:border-transparent transition"
                        placeholder="Your aged care provider name"
                      />
                    </div>

                    <div>
                      <label htmlFor="enquiry" className="block text-sm font-medium text-[#1E293B] mb-1.5">
                        What are you most interested in?
                      </label>
                      <select
                        id="enquiry"
                        name="enquiry"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#96A998] focus:border-transparent transition"
                      >
                        <option value="demo">Platform demo</option>
                        <option value="pricing">Pricing enquiry</option>
                        <option value="sirs">SIRS & Incidents module</option>
                        <option value="keyperson">Responsible Persons module</option>
                        <option value="standards">Quality Standards module</option>
                        <option value="security">Security & data protection</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#1E293B] mb-1.5">
                        Message (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#96A998] focus:border-transparent transition resize-none"
                        placeholder="Tell us about your compliance priorities..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#0F172A] text-white font-semibold text-sm hover:bg-[#1E293B] transition-all duration-150 shadow-sm hover:shadow-md"
                    >
                      Send enquiry
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      No spam. No obligation. We&apos;ll respond within one business day.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
