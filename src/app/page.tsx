import { HydrateClient } from "~/trpc/server";
import { HeroSection } from "./_components/hero-section";
import { AboutMeSection } from "./_components/about-me-section";
import { TestimonialsSection } from "./_components/testimonial-section";
import { ServicesSection } from "./_components/services-section";
import { ContactSection } from "./_components/contact-section";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <HeroSection />
        <AboutMeSection />
        <TestimonialsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </HydrateClient>
  );
}
