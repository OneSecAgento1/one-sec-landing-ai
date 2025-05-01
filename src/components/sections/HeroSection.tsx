
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 flex items-center bg-onesec-dark overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-onesec-dark via-onesec-dark to-onesec-primary/20 bg-gradient-animation"></div>
        
        {/* Background pattern with dot texture */}
        <div className="absolute inset-0 dot-texture"></div>
        
        {/* Decorative shapes */}
        <div className="decorative-shape shape-circle bg-onesec-primary/20 w-64 h-64 -top-20 -left-20 animate-rotate-slow"></div>
        <div className="decorative-shape shape-circle bg-onesec-secondary/20 w-96 h-96 -bottom-40 -right-40 animate-rotate-slow" 
          style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        <div className="decorative-shape shape-blob bg-onesec-accent/10 w-72 h-72 top-1/4 -right-20 animate-float"
          style={{ animationDelay: '2s' }}></div>
        <div className="decorative-shape shape-triangle bg-onesec-primary/10 w-48 h-48 bottom-1/4 left-10 animate-float"
          style={{ animationDelay: '1s' }}></div>
        
        {/* Background pattern - Aumentata opacità da 0.05 (5%) a 0.15 (15%) */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(20)].map((_, i) => <div key={i} className="absolute w-40 h-40 lg:w-64 lg:h-64 rounded-full animate-pulse-light" style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, rgba(99, 102, 241, 0.2) 70%, transparent 100%)',
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
      </div>
      
      {/* Moved the connecting line outside the container div and positioned it at the bottom of the section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-24">
        <svg width="2" height="96" className="mx-auto">
          <line x1="1" y1="0" x2="1" y2="96" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4,4" className="animate-draw" style={{ animationDelay: '1s' }} />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
