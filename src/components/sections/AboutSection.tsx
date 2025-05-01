
import { Zap, Settings, Clock, TrendingUp, Users, Award, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollTop = window.scrollY;
      
      elementsRef.current.forEach((element, index) => {
        if (!element) return;
        const speed = 0.05 * (index + 1);
        const yOffset = scrollTop * speed;
        element.style.transform = `translateY(-${yOffset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    <section id="about" className="py-32 bg-gradient-to-b from-onesec-dark/90 to-onesec-dark relative overflow-hidden" ref={parallaxRef}>
      {/* Background parallax elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={`bg-${i}`} 
            className="absolute rounded-full"
            style={{
              width: `${100 + (i * 50)}px`,
              height: `${100 + (i * 50)}px`,
              background: `radial-gradient(circle, rgba(84, 169, 255, 0.3) 0%, rgba(84, 169, 255, 0.1) 70%, transparent 100%)`,
              left: `${(i * 15) + 5}%`,
              top: `${(i * 12) + 10}%`,
            }}
            ref={el => elementsRef.current[i] = el}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#94a3b8] font-medium mb-3 uppercase tracking-wider text-sm opacity-0 animate-fade-in">ABOUT US</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 opacity-0 animate-fade-in delay-1">
            We use AI and automations to cut costs, close more deals, and eliminate manual work.
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto opacity-0 animate-fade-in delay-2">
            Most companies lose time, money, and sales because their systems are inefficient.
            We build custom AI and automation solutions that remove inefficiencies and unlock growth — so you scale without hiring more people.
          </p>
        </div>
        
        {/* Three value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id} 
              className="gradient-border card-hover bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-onesec-primary/50 transition-all text-center opacity-0 animate-fade-in"
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

        {/* Our Edge section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-6 opacity-0 animate-fade-in">Our Edge</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {edges.map((edge, index) => (
              <Card 
                key={edge.id} 
                className="gradient-border card-hover bg-gradient-to-br from-gray-800/70 to-gray-900/90 border-gray-700 hover:border-onesec-accent/50 transition-all duration-300 opacity-0 animate-fade-in"
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

        {/* CTA Section */}
        <div className="mt-24 bg-gray-800/30 rounded-2xl p-10 max-w-4xl mx-auto text-center border border-gray-700 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
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
