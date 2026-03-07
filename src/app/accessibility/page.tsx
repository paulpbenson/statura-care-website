import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Accessibility,
  Keyboard,
  AudioLines,
  Contrast,
  Focus,
  MonitorSmartphone,
  ScanEye,
  Type,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Statura Care's commitment to digital accessibility. WCAG 2.1 Level AA compliance, keyboard navigation, screen reader support, and inclusive design for all users.",
  alternates: { canonical: "https://statura.care/accessibility" },
  openGraph: {
    title: "Accessibility Statement — Statura Care",
    description:
      "Statura Care's commitment to digital accessibility. WCAG 2.1 Level AA compliance, keyboard navigation, screen reader support, and inclusive design for all users.",
    url: "https://statura.care/accessibility",
  },
};

const accessibilityFeatures = [
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description:
      "All interactive elements are fully accessible via keyboard. Tab order follows logical page flow.",
  },
  {
    icon: AudioLines,
    title: "Screen Reader Support",
    description:
      "Semantic HTML, ARIA labels, and proper heading hierarchy ensure screen readers can navigate effectively.",
  },
  {
    icon: Contrast,
    title: "Colour Contrast",
    description:
      "All text meets WCAG 2.1 Level AA contrast ratios. Colour is never the sole indicator of information.",
  },
  {
    icon: Focus,
    title: "Focus Indicators",
    description:
      "All interactive elements have visible focus states for keyboard users.",
  },
  {
    icon: ScanEye,
    title: "Reduced Motion",
    description:
      "The platform respects the prefers-reduced-motion setting for users who are sensitive to animation.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description:
      "The platform works across desktop, tablet, and mobile devices at any zoom level up to 200%.",
  },
  {
    icon: Type,
    title: "Text Readability",
    description:
      "Clear typography, adequate line spacing, and readable font sizes throughout.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
    { "@type": "ListItem", position: 2, name: "Accessibility", item: "https://statura.care/accessibility" },
  ],
};

export default function AccessibilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#96A998] opacity-[0.03] blur-[100px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-2xl bg-[#96A998]/10 border border-[#96A998]/20 flex items-center justify-center mb-6">
                <Accessibility className="w-7 h-7 text-[#96A998]" />
              </div>
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Accessibility
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Accessible to everyone.
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Statura Care is committed to ensuring digital accessibility for
                all users. We design and develop our platform to meet WCAG 2.1
                Level AA standards.
              </p>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Our Commitment
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight mb-6">
                Accessibility as a{" "}
                <span className="text-[#3E5D4A]">core principle.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Aged care compliance software must be usable by everyone on your
                team &mdash; regardless of ability. We&apos;ve built Statura Care with
                accessibility as a core principle, not an afterthought.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                What We Do
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Built for{" "}
                <span className="text-[#3E5D4A]">inclusive use.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Accessibility features are integrated throughout the platform,
                ensuring every user can navigate, understand, and interact
                effectively.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessibilityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center mb-4 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                    <feature.icon className="w-5 h-5 text-[#3E5D4A]" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-base mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Standards
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight mb-6">
                WCAG 2.1{" "}
                <span className="text-[#3E5D4A]">Level AA.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Statura Care targets conformance with the Web Content
                Accessibility Guidelines (WCAG) 2.1 at Level AA. These
                guidelines define how to make web content more accessible to
                people with disabilities, including visual, auditory, physical,
                speech, cognitive, language, learning, and neurological
                disabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Feedback */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Feedback
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight mb-6">
                We welcome your{" "}
                <span className="text-[#3E5D4A]">feedback.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-4">
                We welcome feedback on the accessibility of Statura Care. If you
                encounter any accessibility barriers or have suggestions for
                improvement, please contact us at{" "}
                <a
                  href="mailto:hello@statura.care"
                  className="text-[#3E5D4A] hover:underline font-medium"
                >
                  hello@statura.care
                </a>
                . We take all accessibility feedback seriously and aim to respond
                within 5 business days.
              </p>
              <p className="text-sm text-slate-400 mt-8">
                Last updated: 7 March 2026
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner compact />
      </main>
      <Footer />
    </>
  );
}
