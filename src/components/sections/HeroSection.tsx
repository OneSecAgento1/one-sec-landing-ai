
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  // Set up intersection observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, {
      threshold: 0.1
    });
    const animatedElements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatedElements?.forEach(el => observer.observe(el));
    return () => {
      animatedElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      const headerOffset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to contact section for booking
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return <section ref={sectionRef} className="relative min-h-[85vh] md:min-h-screen pt-16 pb-20 md:pt-24 md:pb-48 flex items-center bg-onesec-dark overflow-hidden">
      {/* Simplified background with reduced elements and lower opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-onesec-dark via-onesec-dark to-transparent bg-gradient-animation"></div>
        
        {/* Background pattern with reduced opacity */}
        <div className="absolute inset-0 dot-texture opacity-[0.03]"></div>
        
        {/* Reduced decorative shapes with mobile-friendly positioning */}
        <div className="decorative-shape shape-circle bg-onesec-primary/15 w-32 h-32 md:w-64 md:h-64 -top-20 md:-top-40 -left-20 md:-left-40 animate-rotate-slow hidden md:block"></div>
        <div className="decorative-shape shape-circle bg-onesec-secondary/15 w-48 h-48 md:w-96 md:h-96 -bottom-32 md:-bottom-60 -right-32 md:-right-60 animate-rotate-slow hidden md:block" style={{
        animationDuration: '25s',
        animationDirection: 'reverse'
      }}></div>
        
        {/* Reduced background light effects optimized for mobile */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(isMobile ? 5 : 10)].map((_, i) => <div key={i} className="absolute w-20 h-20 md:w-40 md:h-40 lg:w-64 lg:h-64 rounded-full animate-pulse-light parallax-bg-item" style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, rgba(99, 102, 241, 0.1) 70%, transparent 100%)',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          transform: `translateZ(${Math.random() * 20 - 10}px)`
        }} />)}
        </div>

        {/* Flowing wave elements with better mobile compatibility */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-32 md:h-48">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-onesec-dark/40 animate-wave"></path>
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="fill-onesec-dark/30 animate-wave-slow" style={{
            animationDelay: '0.5s'
          }}></path>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div className="lg:max-w-4xl mx-auto text-center mb-8 md:mb-12">
          {/* Enhanced hero text with staggered animations and explicit pointer-events-auto */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 animate-on-scroll opacity-0 animate-slide-up select-text">
            <span className="text-white">Grow your B2B business </span>
            <span className="gradient-text-enhanced">without growing your team.</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-6 mx-auto animate-on-scroll opacity-0 animate-slide-up-delay-1 select-text">
            We build AI + automation systems for agencies, SaaS, and consultancies that want to grow faster — by eliminating manual work and closing more deals.
          </p>
          
          <p className="text-xs sm:text-sm text-gray-400 mb-4 md:mb-6 animate-on-scroll opacity-0 animate-slide-up-delay-2 select-text">
            Trusted by agencies, SaaS, and consultants automating smarter to grow faster.
          </p>
          
          {/* Enhanced buttons with consistent handling and proper interactivity */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 animate-on-scroll opacity-0 animate-slide-up-delay-3 relative z-30">
            <Button size="lg" onClick={scrollToContact} type="button" className="text-white px-4 sm:px-6 py-3 sm:py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer relative z-30 bg-[#4f8cff] font-semibold text-xs sm:text-sm md:text-base">
              Book Your Free Strategy Call
            </Button>
            <Button size="lg" onClick={scrollToServices} type="button" className="bg-[#2c2c3a] border border-[#4f8cff] text-white hover:bg-[#2c2c3a]/90 hover:border-[#4f8cff]/90 font-medium px-4 sm:px-6 py-3 sm:py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue cursor-pointer relative z-30 rounded-md text-xs sm:text-sm md:text-base">
              See What We Automate
            </Button>
          </div>
        </div>
      </div>
      
      {/* Visual transition to services section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-onesec-dark/95 z-0 pointer-events-none"></div>
      
      {/* Scrolling indicator with better interactivity */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow pointer-events-none"></div>
    </section>;
};

export default HeroSection;
