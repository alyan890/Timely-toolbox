import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactSection } from "@/components/sections/ContactSection";
import { DetailedServices } from "@/components/sections/DetailedServices";
import { FleetPreview } from "@/components/sections/FleetPreview";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Services } from "@/components/sections/Services";
import { SpecialtyPreview } from "@/components/sections/SpecialtyPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* Six-icon overview bar stays directly below the Hero. */}
      <Services />
      {/* Separate detailed service cards. */}
      <DetailedServices />
      {/* Fleet work is a priority for the business: it comes right after the core services. */}
      <FleetPreview />
      <HowItWorks />
      <AboutPreview />
      <SpecialtyPreview />
      <WhyChooseUs />
      <ServiceArea />
      <ContactSection />
    </main>
  );
}
