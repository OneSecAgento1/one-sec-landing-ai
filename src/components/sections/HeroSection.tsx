
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 flex items-center bg-onesec-dark overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-onesec-dark via-onesec-dark to-onesec-primary/20 bg-gradient-animation"></div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => <div key={i} className="absolute w-40 h-40 lg:w-64 lg:h-64 rounded-full animate-pulse-light" style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0.1) 70%, transparent 100%)',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`
        }}></div>)}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div className="lg:max-w-4xl mx-auto text-center mb-12">
          {/* Hero text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in">
            <span className="text-white">Grow your B2B business </span>
            <span className="gradient-text">without growing your team.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 mx-auto opacity-0 animate-fade-in delay-1">
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
        
        {/* Simple down arrow (minimalist) */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 animate-fade-in delay-4">
          <a href="#services" className="text-white/40 hover:text-white/70 transition-colors">
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
