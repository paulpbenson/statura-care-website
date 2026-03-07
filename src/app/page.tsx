import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ComplianceTimelineSection } from "@/components/ComplianceTimelineSection";
import { HomeModulesSection } from "@/components/HomeModulesSection";
import { WhyStaturaSection } from "@/components/WhyStaturaSection";
import { HomePricingSection } from "@/components/HomePricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aged Care Compliance Software — Statura Care",
  description:
    "Statura Care is Australia's compliance and care management platform for residential aged care and Support at Home. 32 modules covering SIRS, Quality Standards, workforce, clinical care, billing, and more. Built and hosted in Australia.",
  alternates: { canonical: "https://statura.care" },
  keywords: [
    "aged care compliance software",
    "aged care management platform",
    "residential aged care software",
    "Support at Home software",
    "aged care quality standards",
    "SIRS reporting software",
    "Australian aged care software",
  ],
  openGraph: {
    title: "Aged Care Compliance Software — Statura Care",
    description:
      "Australia's compliance and care management platform for residential aged care and Support at Home. 32 modules. Built and hosted in Sydney.",
    url: "https://statura.care",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComplianceTimelineSection />
        <HomeModulesSection />
        <WhyStaturaSection />
        <HomePricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
