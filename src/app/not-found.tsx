import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Home,
  Layers,
  BookOpen,
  DollarSign,
  Mail,
  MonitorPlay,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const helpfulLinks = [
  {
    icon: Home,
    title: "Home",
    description:
      "Back to the homepage for an overview of the Statura Care platform.",
    href: "/",
  },
  {
    icon: Layers,
    title: "Modules",
    description:
      "Explore all 32 compliance and care management modules in detail.",
    href: "/modules",
  },
  {
    icon: BookOpen,
    title: "Blog",
    description:
      "Insights, guides, and updates on aged care compliance in Australia.",
    href: "/blog",
  },
  {
    icon: DollarSign,
    title: "Pricing",
    description:
      "Transparent pricing plans for residential care and Support at Home.",
    href: "/pricing",
  },
  {
    icon: Mail,
    title: "Contact",
    description:
      "Get in touch with the team or send us a message about your needs.",
    href: "/contact",
  },
  {
    icon: MonitorPlay,
    title: "Request a Demo",
    description:
      "Book a personalised walkthrough tailored to your organisation.",
    href: "/demo",
  },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#96A998] opacity-[0.03] blur-[100px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[8rem] sm:text-[10rem] lg:text-[12rem] font-serif font-black text-white/5 leading-none select-none">
                404
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl text-white leading-[1.05] tracking-tight -mt-8 sm:-mt-12">
                Page not found.
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
                The page you&apos;re looking for may have been moved, removed,
                or doesn&apos;t exist. Try one of the links below to find what
                you need.
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#0F172A] font-semibold text-sm hover:bg-slate-100 transition-all duration-150 shadow-lg"
                >
                  Back to homepage
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Helpful Links */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
                Helpful Links
              </p>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
                Where would you like to go?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F6F2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#96A998]/10 transition-colors duration-200">
                      <link.icon className="w-5 h-5 text-[#3E5D4A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E293B] text-base mb-1 group-hover:text-[#3E5D4A] transition-colors duration-200">
                        {link.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
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
