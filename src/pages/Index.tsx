
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CasesSection from "@/components/sections/CasesSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  // Set up scroll-based parallax effects and smooth scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Apply parallax effect to various decorative elements
      document.querySelectorAll(".parallax-bg-item").forEach((el) => {
        const speed = el.getAttribute("data-speed") || 0.05;
        const yPos = -scrollPosition * Number(speed);
        el.setAttribute("style", `transform: translateY(${yPos}px)`);
      });

      // Fade in elements as they come into view
      const fadeElements = document.querySelectorAll(".fade-on-scroll");
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.9) {
          el.classList.add("faded-in");
        }
      });
    };

    // Set up improved smooth scroll for anchor links - moved inside useEffect
    const setupSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (!targetId || targetId === '#') return;
          
          const target = document.querySelector(targetId);
          if (target) {
            // Add offset for the fixed header
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    };

    // Initialize scroll handler and smooth scrolling
    window.addEventListener("scroll", handleScroll);
    setupSmoothScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // We don't need to remove the click listeners as they'll be garbage collected
    };
  }, []);

  return (
    <div className="bg-onesec-dark min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CasesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
