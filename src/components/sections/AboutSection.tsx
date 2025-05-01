
import { Zap, Settings, Clock, TrendingUp, Users, Award, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const pillars = [
    {
      id: 1,
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Real Systems, Real ROI",
      description: "We build AI and automation systems that drive revenue — not just look impressive."
    },
    {
      id: 2,
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Built for Your Bottlenecks",
      description: "We design around your data, your workflows, and your sales goals — not generic templates."
    },
    {
      id: 3,
      icon: <Gauge className="w-6 h-6 text-white" />,
      title: "Fast Execution, High Impact",
      description: "We deliver results in days, not quarters — with a clear focus on what moves the needle."
    }
  ];

  const edges = [
    {
      id: 1,
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Built Around Revenue, Not Code",
      description: "We don't sell tech — we sell outcomes. Every system is tied to measurable business results."
    },
    {
      id: 2,
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Speed Over Process",
      description: "No delays, no unnecessary meetings. You get fast execution where it matters."
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Small, Focused, Brutally Effective",
      description: "No big teams. Just operators who do the work and take responsibility for results."
    },
    {
      id: 4,
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Obsessed With Your ROI",
      description: "You don't pay for effort. You pay for results — and that's what we deliver."
    }
  ];

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

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-onesec-dark/90 to-onesec-dark relative">
      {/* Reduced number of decorative background elements and lowered opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Dot textures with reduced opacity */}
      <div className="absolute inset-0 dot-texture opacity-5 pointer-events-none"></div>
      
      {/* Simplified decorative shapes with reduced size and moved away from interactive elements */}
      <div className="decorative-shape shape-circle bg-onesec-primary/10 w-60 h-60 -top-40 -left-40 animate-rotate-slow pointer-events-none"></div>
      <div className="decorative-shape shape-blob bg-onesec-secondary/10 w-52 h-52 bottom-1/4 -right-20 animate-float pointer-events-none"
        style={{ animationDelay: '1.5s' }}></div>
      
      {/* Background floating elements with reduced number and opacity */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(6)].map((_, i) => <div key={i} className="absolute w-24 h-24 lg:w-36 lg:h-36 rounded-full animate-pulse-light pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(84, 169, 255, 0.2) 0%, rgba(84, 169, 255, 0.05) 70%, transparent 100%)',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`
        }}></div>)}
      </div>
      
      {/* Content container with increased z-index to ensure interactivity */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <p className="text-[#94a3b8] font-medium mb-3 uppercase tracking-wider text-sm opacity-0 animate-fade-in">ABOUT US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 opacity-0 animate-fade-in delay-1">
            We use AI and automations to cut costs, close more deals, and eliminate manual work.
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto opacity-0 animate-fade-in delay-2">
            Most companies lose time, money, and sales because their systems are inefficient.
            We build custom AI and automation solutions that remove inefficiencies and unlock growth — so you scale without hiring more people.
          </p>
        </div>
        
        {/* Three value cards with simplified glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-20">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id} 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 
                hover:border-onesec-primary/50 transition-all text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gray-800/80 flex items-center justify-center mb-6 mx-auto">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-gray-300">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Our Edge section with simplified glassmorphism */}
        <div className="mt-24 relative z-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 opacity-0 animate-fade-in">Our Edge</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {edges.map((edge, index) => (
              <Card 
                key={edge.id} 
                className="bg-white/5 backdrop-blur-sm border-white/10 
                  hover:border-onesec-accent/50 transition-all duration-300 opacity-0 animate-fade-in relative z-20"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800/80 flex items-center justify-center mb-4 mx-auto">
                    {edge.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{edge.title}</h3>
                  <p className="text-gray-300 text-sm">{edge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Simplified CTA Section with proper button handling */}
        <div className="mt-24 bg-white/5 backdrop-blur-xl rounded-2xl p-10 max-w-4xl mx-auto text-center border border-white/15 opacity-0 animate-fade-in relative z-20" style={{ animationDelay: "0.7s" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 select-text">
            Ready to fix what's slowing you down and scale with AI + Automations?
          </h2>
          <p className="text-gray-300 mb-8 select-text">
            Let's talk. 15 minutes to see if we're a fit — no fluff, just value.
          </p>
          <Button 
            size="lg" 
            className="bg-onesec-primary hover:bg-onesec-primary/90 text-white px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue pointer-events-auto cursor-pointer select-none relative z-30"
            onClick={scrollToContact}
            type="button"
          >
            Book Your Free Strategy Call
          </Button>
        </div>
      </div>
      
      {/* Simplified connecting line that doesn't interfere with interactions */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 pointer-events-none">
        <svg width="2" height="96" className="mx-auto">
          <line x1="1" y1="0" x2="1" y2="96" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4,4" className="animate-draw" style={{ animationDelay: '1s' }} />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
