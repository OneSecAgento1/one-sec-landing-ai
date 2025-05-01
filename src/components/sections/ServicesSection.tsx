
import { Check, Code, Cog, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <Zap className="w-6 h-6 text-onesec-accent" />,
      title: "AI Solutions",
      description: "We develop custom AI solutions tailored to your business needs, optimizing decision-making and operational processes."
    },
    {
      id: 2,
      icon: <Cog className="w-6 h-6 text-onesec-accent" />,
      title: "Process Automation",
      description: "We automate repetitive workflows, freeing your team for higher value tasks and reducing errors."
    },
    {
      id: 3,
      icon: <Code className="w-6 h-6 text-onesec-accent" />,
      title: "Intelligent Chatbots",
      description: "We create advanced AI-based virtual assistants to support customers and employees, available 24/7 across all channels."
    },
    {
      id: 4,
      icon: <Check className="w-6 h-6 text-onesec-accent" />,
      title: "Data Analysis",
      description: "We analyze your data to extract valuable insights and support strategic decisions based on concrete evidence."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-onesec-dark to-onesec-dark/95">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-onesec-accent font-medium mb-3 opacity-0 animate-fade-in">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 opacity-0 animate-fade-in delay-1">
            Intelligent solutions for complex challenges
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in delay-2">
            We offer a complete ecosystem of AI and automation services
            to help you navigate digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`bg-gradient-to-br from-gray-900/70 to-gray-800/50 p-6 rounded-xl border border-gray-800 hover:border-onesec-primary/50 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
