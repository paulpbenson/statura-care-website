import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
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
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
