import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ComplianceTimelineSection } from "@/components/ComplianceTimelineSection";
import { HomeModulesSection } from "@/components/HomeModulesSection";
import { WhyStaturaSection } from "@/components/WhyStaturaSection";
import { HomePricingSection } from "@/components/HomePricingSection";
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
        <HomeModulesSection />
        <WhyStaturaSection />
        <HomePricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
