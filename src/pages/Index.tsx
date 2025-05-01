
import { useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CasesSection from "@/components/sections/CasesSection";
import AboutSection from "@/components/sections/AboutSection";

const Index = () => {
  // Riferimento per memorizzare gli elementi da animare
  const parallaxElements = useRef<NodeListOf<Element> | null>(null);
  const fadeElements = useRef<NodeListOf<Element> | null>(null);
  const isMobileRef = useRef<boolean>(window.innerWidth < 768);

  // Set up scroll-based parallax effects and improved smooth scrolling
  useEffect(() => {
    // Check if it's a mobile device
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 768;
    };
    window.addEventListener('resize', checkMobile);
    checkMobile();

    // Ottieni gli elementi solo una volta all'avvio
    parallaxElements.current = document.querySelectorAll(".parallax-bg-item");
    fadeElements.current = document.querySelectorAll(".fade-on-scroll");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Apply parallax effect to various decorative elements, but with reduced impact on mobile
      if (parallaxElements.current) {
        parallaxElements.current.forEach((el) => {
          // Reduce parallax effect on mobile or disable it entirely
          const speed = isMobileRef.current ? 0.01 : Number(el.getAttribute("data-speed") || 0.02);
          const yPos = -scrollPosition * speed;
          el.setAttribute("style", `transform: translateY(${yPos}px)`);
        });
      }

      // Fade in elements as they come into view
      if (fadeElements.current) {
        fadeElements.current.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Adjust threshold for mobile - elements appear sooner while scrolling
          const threshold = isMobileRef.current ? 0.8 : 0.9;
          
          if (rect.top <= viewportHeight * threshold) {
            el.classList.add("faded-in");
          }
        });
      }
    };

    // Set up improved smooth scroll for anchor links
    const setupSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          
          const targetId = this.getAttribute('href');
          if (!targetId || targetId === '#') return;
          
          const target = document.querySelector(targetId);
          if (target) {
            // Add offset for the fixed header - smaller on mobile
            const headerOffset = isMobileRef.current ? 60 : 80;
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
    
    // Initial scroll handler call to set up any initial animations
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
