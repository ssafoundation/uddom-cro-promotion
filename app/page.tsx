import ABTestingSection from "@/components/sections/ABTestingSection";
import AnalyticsSection from "@/components/sections/AnalyticsSection";
import BundleSection from "@/components/sections/BundleSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import CroSection from "@/components/sections/CroSection";
import CroSimulator from "@/components/sections/CroSimulator";
import EcosystemSection from "@/components/sections/EcosystemSection";
import EmailSection from "@/components/sections/EmailSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import LoopSection from "@/components/sections/LoopSection";
import OffersSection from "@/components/sections/OffersSection";
import PlatformSection from "@/components/sections/PlatformSection";
import PricingSection from "@/components/sections/PricingSection";
import ProblemSection from "@/components/sections/ProblemSection";
import RecoverySection from "@/components/sections/RecoverySection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import SubscriptionSection from "@/components/sections/SubscriptionSection";
import ThemeSection from "@/components/sections/ThemeSection";
import TrustBar from "@/components/sections/TrustBar";

/**
 * The landing page. Section order follows the intended scroll rhythm:
 * hero → trust → problem → platform → CRO → offers → upsell → analytics →
 * A/B → loop → email → recovery → subscriptions → themes → ecosystem →
 * showcase → comparison → how it works → pricing → FAQ → final CTA → footer.
 */
export default function Home() {
  return (
    <div id="top">
      <Hero />
      <TrustBar />

      <ProblemSection />
      <PlatformSection />
      <CroSection />
      <CroSimulator />
      <OffersSection />
      <BundleSection />
      <AnalyticsSection />
      <ABTestingSection />
      <LoopSection />
      <EmailSection />
      <RecoverySection />
      <SubscriptionSection />
      <ThemeSection />
      <EcosystemSection />
      <ShowcaseSection />
      <ComparisonSection />
      <HowItWorksSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />

      <Footer />
    </div>
  );
}
