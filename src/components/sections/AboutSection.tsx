
import { Users, Briefcase, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { id: 1, value: "50+", label: "Satisfied clients" },
    { id: 2, value: "100+", label: "Completed projects" },
    { id: 3, value: "5+ years", label: "Of experience" },
    { id: 4, value: "24/7", label: "Technical support" },
  ];

  const values = [
    {
      id: 1,
      icon: <Zap className="w-6 h-6 text-onesec-primary" />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI and automation."
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6 text-onesec-primary" />,
      title: "Client-centricity",
      description: "We build solutions that truly solve our clients' specific challenges."
    },
    {
      id: 3,
      icon: <Briefcase className="w-6 h-6 text-onesec-primary" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in every solution we develop."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-onesec-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div>
            <p className="text-onesec-accent font-medium mb-3 opacity-0 animate-fade-in">ABOUT US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in delay-1">
              Transforming the future <span className="gradient-text">with artificial intelligence</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 opacity-0 animate-fade-in delay-2">
              OneSecAgent is an agency specializing in artificial intelligence
              and automation solutions. Our team of experts combines deep technological knowledge and strategic
              vision to help companies fully leverage the potential of digital transformation.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 opacity-0 animate-fade-in delay-3">
              Whether you're looking to optimize processes, improve customer experience, or extract
              value from your data, we work closely with you to develop
              customized solutions that give you a substantial competitive advantage.
            </p>
            
            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={value.id}
                  className="flex items-start opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="mr-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image and stats */}
          <div className="space-y-8">
            <div className="relative opacity-0 animate-fade-in delay-2">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-onesec-accent/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-onesec-primary/10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60" 
                alt="Team OneSecAgent" 
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 opacity-0 animate-fade-in delay-3">
              {stats.map((stat) => (
                <div 
                  key={stat.id} 
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl font-bold text-onesec-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
