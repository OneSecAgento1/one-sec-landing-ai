
import { Zap, Settings, Clock, TrendingUp, Users, Award, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Renderizza immediatamente visibili tutte le card
    document.querySelectorAll('.pillar-card, .edge-card').forEach((el) => {
      el.classList.add('visible');
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-onesec-dark/90 to-onesec-dark parallax-container"
      style={{ overflow: 'hidden' }}
    >
      <div 
        className="absolute inset-0 opacity-10 mouse-move parallax-layer parallax-bg"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(84, 169, 255, 0.3) 0%, rgba(10, 15, 41, 0) 70%)',
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 parallax-layer parallax-fore">
          <p className="text-[#94a3b8] font-medium mb-3 uppercase tracking-wider text-sm">ABOUT US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            We use AI and automations to cut costs, close more deals, and eliminate manual work.
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Most companies lose time, money, and sales because their systems are inefficient.
            We build custom AI and automation solutions that remove inefficiencies and unlock growth — so you scale without hiring more people.
          </p>
        </div>
        
        {/* Three value cards with parallax effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 parallax-layer parallax-mid">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id} 
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-onesec-primary/50 transition-all text-center gradient-border hover-card pillar-card visible"
              style={{
                transform: 'translateY(0)',
                opacity: 1,
                transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s ease-out'
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-gray-800/80 flex items-center justify-center mb-6 mx-auto">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-gray-300">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Our Edge section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Edge</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {edges.map((edge, index) => (
              <Card 
                key={edge.id} 
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/90 border-gray-700 hover:border-onesec-accent/50 transition-all duration-300 gradient-border hover-card edge-card visible"
                style={{
                  transform: 'translateY(0)',
                  opacity: 1,
                  transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s ease-out'
                }}
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

        {/* CTA Section */}
        <div className="mt-24 bg-gray-800/30 rounded-2xl p-10 max-w-4xl mx-auto text-center border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to fix what's slowing you down and scale with AI + Automations?
          </h2>
          <p className="text-gray-300 mb-8">
            Let's talk. 15 minutes to see if we're a fit — no fluff, just value.
          </p>
          <Button size="lg" className="bg-onesec-primary hover:bg-onesec-primary/90 text-white px-8 py-6 text-lg">
            Book Your Free Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
