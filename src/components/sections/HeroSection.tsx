
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 flex items-center bg-onesec-dark overflow-hidden parallax-container">
      {/* Animated background with mouse movement */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-onesec-dark via-onesec-dark to-onesec-primary/20 bg-gradient-animation"></div>
        {/* Background pattern with mouse movement */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-40 h-40 lg:w-64 lg:h-64 rounded-full animate-pulse-light mouse-move"
              style={{
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0.1) 70%, transparent 100%)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) scale(${1 + mousePosition.y * 0.1})`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div 
        className="container mx-auto relative z-10 px-4 parallax-layer parallax-fore"
        style={{ transform: `translateY(${window.scrollY * -0.2}px)` }}
      >
        <div className="lg:max-w-4xl mx-auto text-center mb-12">
          {/* Hero text with parallax effect */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in"
            style={{ transform: `translateY(${window.scrollY * -0.1}px)` }}
          >
            <span className="text-white">Grow your B2B business </span>
            <span className="gradient-text">without growing your team.</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-gray-300 mb-8 mx-auto opacity-0 animate-fade-in delay-1"
            style={{ transform: `translateY(${window.scrollY * -0.05}px)` }}
          >
            We build AI + automation systems for agencies, SaaS, and consultancies that want to grow faster — by eliminating manual work and closing more deals.
          </p>
          
          <p className="text-sm text-gray-400 mb-8 opacity-0 animate-fade-in delay-2">
            Trusted by agencies, SaaS, and consultants automating smarter to grow faster.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in delay-3">
            <Button size="lg" className="bg-onesec-accent hover:bg-onesec-accent/90 text-white font-medium text-base px-8 py-6">
              Book Your Free Strategy Call
            </Button>
            <Button size="lg" className="bg-[#2c2c3a] border border-[#4f8cff] text-white hover:bg-[#2c2c3a]/90 hover:border-[#4f8cff]/90 font-medium rounded-[6px] px-8 py-6">
              See What We Automate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
