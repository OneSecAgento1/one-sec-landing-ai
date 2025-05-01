
import { Zap, ArrowRightLeft, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Set up intersection observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Set up parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, top, left } = sectionRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const factor = (index + 1) * 10;
        card.style.transform = `perspective(1000px) rotateY(${x * factor}deg) rotateX(${-y * factor}deg) translateZ(10px)`;
      });
    };
    
    sectionRef.current?.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      sectionRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const solutions = [{
    id: 1,
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Lead Generation & Automation",
    description: "Fill your calendar with qualified leads using AI-powered sales automations."
  }, {
    id: 2,
    icon: <ArrowRightLeft className="w-6 h-6 text-white" />,
    title: "Sales Pipeline Optimization",
    description: "We build your sales pipeline so no lead ever slips through the cracks."
  }, {
    id: 3,
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "Increase Margins & Profit",
    description: "Cut costs and boost profits by removing bottlenecks with smart automation and AI systems."
  }, {
    id: 4,
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Retention & Scalable Onboarding",
    description: "Keep customers longer with personalized CRM flows and onboarding experiences that scale."
  }];

  return (
    <section ref={sectionRef} id="services" className="py-24 pt-0 bg-gradient-to-b from-onesec-dark/95 to-onesec-dark/90 relative -mt-24">
      {/* Enhanced decorative background elements with glassmorphism */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Enhanced line texture with increased opacity and animation */}
      <div className="absolute inset-0 line-texture animate-pulse-slow" style={{ opacity: '0.15' }}></div>
      
      {/* Enhanced decorative shapes that connect with hero section */}
      <div className="decorative-shape shape-square bg-onesec-primary/20 w-60 h-60 -top-40 right-20 rotate-12 animate-float-enhanced"></div>
      <div className="decorative-shape shape-circle bg-onesec-secondary/25 w-80 h-80 bottom-10 left-10 animate-pulse-opacity-enhanced"></div>
      
      {/* Enhanced background pattern with dynamic pulses that connect with hero section */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-32 h-32 lg:w-48 lg:h-48 rounded-full animate-pulse-light-enhanced parallax-bg-item" 
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, rgba(99, 102, 241, 0.1) 70%, transparent 100%)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `translateZ(${Math.random() * 20 - 10}px)`
            }}
          />
        ))}
      </div>
      
      {/* Enhanced connecting line to next section with animated dash effect */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <svg width="2" height="96" className="mx-auto">
          <line 
            x1="1" 
            y1="0" 
            x2="1" 
            y2="96" 
            stroke="rgba(255,255,255,0.3)" 
            strokeWidth="2" 
            strokeDasharray="4,4" 
            className="animate-draw-enhanced" 
            style={{ animationDelay: '0.5s' }} 
          />
        </svg>
      </div>
      
      <div className="container mx-auto pt-16">
        <div className="text-center mb-16">
          <p className="text-[#94a3b8] font-medium mb-3 uppercase tracking-wider text-sm animate-on-scroll opacity-0 animate-slide-up">SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-on-scroll opacity-0 animate-slide-up-delay-1">
            What We Fix To Grow Your Business
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto animate-on-scroll opacity-0 animate-slide-up-delay-2">
            We address your specific challenges with cutting-edge AI and automation technologies,
            delivering measurable results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id} 
              ref={(el) => cardsRef.current[index] = el}
              className={`service-card glassmorphism bg-white/5 backdrop-blur-sm 
                border border-white/10 p-6 rounded-xl transition-all duration-500 
                hover:-translate-y-2 hover:rotate-1
                hover:shadow-[0_20px_50px_rgba(84,169,255,0.2)] 
                hover:border-transparent card-hover-effect animate-on-scroll opacity-0 animate-slide-up`}
              style={{
                animationDelay: `${0.1 + index * 0.1}s`,
                transform: 'perspective(1000px)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800/90 to-gray-900/80 flex items-center justify-center mb-6
                backdrop-blur-md transition-transform duration-300 group-hover:scale-110 shadow-inner">
                <div className="icon-glow">{solution.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
              <div className="h-1 w-0 bg-gradient-to-r from-onesec-primary to-onesec-secondary mt-4 transition-all duration-300 card-indicator"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
