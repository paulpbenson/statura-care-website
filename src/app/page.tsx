import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ComplianceTimelineSection } from "@/components/ComplianceTimelineSection";
import { ModulesSection } from "@/components/ModulesSection";
import { WhyStaturaSection } from "@/components/WhyStaturaSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComplianceTimelineSection />
        <ModulesSection />
        <WhyStaturaSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
