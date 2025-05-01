
import { Zap, Settings, Check, TrendingUp, Clock, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const pillars = [
    {
      id: 1,
      icon: <Zap className="w-6 h-6 text-onesec-primary" />,
      title: "Real AI, Real ROI",
      description: "We deploy AI where it makes you money, not where it looks fancy."
    },
    {
      id: 2,
      icon: <Settings className="w-6 h-6 text-onesec-primary" />,
      title: "Built For Your Bottlenecks",
      description: "Your sales process, your data, your goals — not cookie-cutter setups."
    },
    {
      id: 3,
      icon: <Check className="w-6 h-6 text-onesec-primary" />,
      title: "Done Fast, Done Right",
      description: "We move fast without breaking things. Results in weeks, not quarters."
    }
  ];

  const edges = [
    {
      id: 1,
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Built Around Revenue, Not Code",
      description: "We don't sell tech — we sell outcomes. Every automation, every system is tied to your revenue goals."
    },
    {
      id: 2,
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Speed Over Bureaucracy",
      description: "No bloated timelines, no meetings that should've been emails. We deliver in weeks, not months."
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Small, Focused, Brutally Effective",
      description: "You're not dealing with a big agency machine. Just operators who care about results."
    },
    {
      id: 4,
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Obsessed With Your Results",
      description: "We only win if you win. That's why everything we build is tied to measurable impact — not guesswork."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-onesec-dark/90 to-onesec-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-onesec-accent font-medium mb-3 opacity-0 animate-fade-in">ABOUT US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 opacity-0 animate-fade-in delay-1">
            We use AI to cut costs, close more deals, and eliminate manual work.
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto opacity-0 animate-fade-in delay-2">
            Most companies are leaking time, money, and deals because they run on inefficient systems.
            We build custom AI and automation solutions that plug those leaks — so you scale without hiring more people.
          </p>
        </div>
        
        {/* Three key pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id} 
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-onesec-primary/50 transition-all text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-onesec-primary to-onesec-secondary flex items-center justify-center mb-6 mx-auto">
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
            <h2 className="text-3xl font-bold text-white mb-6 opacity-0 animate-fade-in">Our Edge</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {edges.map((edge, index) => (
              <Card 
                key={edge.id} 
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/90 border-gray-700 hover:border-onesec-accent/50 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-onesec-primary/20 flex items-center justify-center mb-4 mx-auto">
                    {edge.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{edge.title}</h3>
                  <p className="text-gray-300 text-sm">{edge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
