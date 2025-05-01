import { TrendingUp, UserRound, ArrowRight, Zap } from "lucide-react";
const ServicesSection = () => {
  const solutions = [{
    id: 1,
    icon: <TrendingUp className="w-6 h-6 text-onesec-accent" />,
    title: "Margins & Sales",
    description: "We increase margins and sales with artificial intelligence systems and automations."
  }, {
    id: 2,
    icon: <UserRound className="w-6 h-6 text-onesec-accent" />,
    title: "Retention & CRM",
    description: "We improve retention with custom CRM and personalized onboarding processes."
  }, {
    id: 3,
    icon: <ArrowRight className="w-6 h-6 text-onesec-accent" />,
    title: "Sales Pipeline",
    description: "We structure your sales pipeline to never miss an opportunity."
  }, {
    id: 4,
    icon: <Zap className="w-6 h-6 text-onesec-accent" />,
    title: "Leads & Automation",
    description: "We generate leads and automate sales processes."
  }];
  return <section id="services" className="py-20 bg-gradient-to-b from-onesec-dark to-onesec-dark/95">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-onesec-accent font-medium mb-3 opacity-0 animate-fade-in">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 opacity-0 animate-fade-in delay-1">Your Problems 
are 
Our Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in delay-2">
            We address your specific challenges with cutting-edge AI and automation technologies,
            delivering measurable results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => <div key={solution.id} className={`bg-gradient-to-br from-gray-900/70 to-gray-800/50 p-6 rounded-xl border border-gray-800 hover:border-onesec-primary/50 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in`} style={{
          animationDelay: `${0.1 + index * 0.1}s`
        }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-onesec-primary to-onesec-secondary flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;