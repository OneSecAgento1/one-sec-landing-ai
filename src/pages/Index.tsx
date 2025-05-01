
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CasesSection from "@/components/sections/CasesSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Script per rendere visibili le card quando entrano nel viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Applica l'observer a tutti gli elementi con classe .service-card, .case-card, .pillar-card, .edge-card
    document.querySelectorAll('.service-card, .case-card, .pillar-card, .edge-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-onesec-dark min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CasesSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
