
import { Zap, ArrowRightLeft, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const ServicesSection = () => {
  const solutionsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.service-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (solutionsRef.current) {
      observer.observe(solutionsRef.current);
    }
    
    return () => observer.disconnect();
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

  return <section id="services" className="py-24 bg-gradient-to-b from-onesec-dark to-onesec-dark/95">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#94a3b8] font-medium mb-3 uppercase tracking-wider text-sm opacity-0 animate-fade-in">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 opacity-0 animate-fade-in delay-1">
            What We Fix To Grow Your Business
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in delay-2">
            We address your specific challenges with cutting-edge AI and automation technologies,
            delivering measurable results for your business.
          </p>
        </div>

        <div ref={solutionsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              className={`bg-gradient-to-br from-gray-900/70 to-gray-800/50 p-6 rounded-xl border border-gray-800 hover:border-onesec-primary/50 transition-all duration-300 opacity-0 gradient-border hover-card service-card`}
              style={{
                animationDelay: `${0.1 + index * 0.1}s`,
                transform: 'translateY(20px)',
                opacity: 0,
                transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s ease-out'
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-gray-800/80 flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default ServicesSection;
