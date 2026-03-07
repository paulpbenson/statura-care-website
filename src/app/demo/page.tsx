import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import {
  Clock,
  Target,
  MonitorPlay,
  MessageCircleQuestion,
  Handshake,
  Layers,
  Globe,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Demo — See Statura Care in Action",
  description:
    "Request a personalised demo of Statura Care. See how 32 modules cover every obligation under the Aged Care Act 2024 — for residential care, Support at Home, or both. No obligation. 30-minute walkthrough tailored to your needs.",
  alternates: { canonical: "https://statura.care/demo" },
  keywords: [
    "aged care compliance software demo",
    "Statura Care demo",
    "aged care software demo",
    "compliance platform demo Australia",
  ],
  openGraph: {
    title: "Request a Demo — See Statura Care in Action",
    description:
      "Request a personalised demo of Statura Care. See how 32 modules cover every obligation under the Aged Care Act 2024. No obligation. 30-minute walkthrough tailored to your needs.",
    url: "https://statura.care/demo",
  },
};

const expectations = [
  {
    icon: Clock,
    text: "30-minute personalised walkthrough",
  },
  {
    icon: Target,
    text: "We'll focus on your specific compliance priorities",
  },
  {
    icon: MonitorPlay,
    text: "See real workflows: SIRS reporting, quality standards, workforce tracking",
  },
  {
    icon: MessageCircleQuestion,
    text: "Ask anything — pricing, implementation, security",
  },
  {
    icon: Handshake,
    text: "No obligation. No sales pressure.",
  },
];

const trustSignals = [
  {
    icon: Layers,
    title: "32 modules",
    description: "Covering every obligation under the Aged Care Act 2024",
  },
  {
    icon: Globe,
    title: "Australian-hosted",
    description: "All data stored in Sydney, never leaves Australia",
  },
  {
    icon: Building2,
    title: "Both care types",
    description: "Residential care and Support at Home in one platform",
  },
];

const stats = [
  { value: "32", label: "modules" },
  { value: "8", label: "Quality Standards" },
  { value: "68", label: "compliance deadlines tracked" },
  { value: "1", label: "platform" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://statura.care",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Request a Demo",
      item: "https://statura.care/demo",
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Request a Demo — See Statura Care in Action",
  description:
    "Request a personalised demo of Statura Care. See how 32 modules cover every obligation under the Aged Care Act 2024.",
  url: "https://statura.care/demo",
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Statura Care",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "AUD",
    },
  },
};

export default function DemoPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd, webPageJsonLd]),
        }}
      />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Request a Demo
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl text-white leading-[1.05] tracking-tight">
                See Statura Care{" "}
                <span className="text-[#96A998]">in action.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Request a personalised 30-minute demo. We&apos;ll walk you
                through the modules most relevant to your organisation — no
                obligation, no pressure.
              </p>
            </div>
          </div>
        </section>

        {/* Two-column: expectations + form */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left — What to expect */}
              <div>
                <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B] leading-tight tracking-tight mb-8">
                  What to expect
                </h2>

                <div className="space-y-5 mb-10">
                  {expectations.map((item) => (
                    <div key={item.text} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#3E5D4A]" />
                      </div>
                      <p className="text-base text-[#1E293B] leading-relaxed pt-2">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Trust signal cards */}
                <div className="space-y-4">
                  {trustSignals.map((signal) => (
                    <div
                      key={signal.title}
                      className="group p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                          <signal.icon className="w-5 h-5 text-[#3E5D4A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#1E293B] text-base mb-1">
                            {signal.title}
                          </h3>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {signal.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Social proof stats */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                One platform for{" "}
                <span className="text-[#3E5D4A]">complete compliance.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                32 modules. 7 Quality Standards. 68 compliance deadlines tracked
                automatically. One platform.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl border border-slate-200 bg-white"
                >
                  <p className="font-serif font-bold text-4xl text-[#3E5D4A] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
