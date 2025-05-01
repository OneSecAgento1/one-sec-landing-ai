
import { Users, Briefcase, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { id: 1, value: "50+", label: "Clienti soddisfatti" },
    { id: 2, value: "100+", label: "Progetti completati" },
    { id: 3, value: "5+ anni", label: "Di esperienza" },
    { id: 4, value: "24/7", label: "Supporto tecnico" },
  ];

  const values = [
    {
      id: 1,
      icon: <Zap className="w-6 h-6 text-onesec-primary" />,
      title: "Innovazione",
      description: "Spingiamo costantemente i confini di ciò che è possibile con AI e automazione."
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6 text-onesec-primary" />,
      title: "Centralità del cliente",
      description: "Costruiamo soluzioni che risolvono realmente le sfide specifiche dei nostri clienti."
    },
    {
      id: 3,
      icon: <Briefcase className="w-6 h-6 text-onesec-primary" />,
      title: "Eccellenza",
      description: "Manteniamo i più alti standard di qualità in ogni soluzione che sviluppiamo."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-onesec-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div>
            <p className="text-onesec-accent font-medium mb-3 opacity-0 animate-fade-in">CHI SIAMO</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in delay-1">
              Trasformiamo il futuro <span className="gradient-text">con intelligenza artificiale</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 opacity-0 animate-fade-in delay-2">
              OneSecAgent è un'agenzia specializzata in soluzioni di intelligenza artificiale
              e automazione. Il nostro team di esperti combina profonda conoscenza tecnologica e visione
              strategica per aiutare le aziende a sfruttare appieno il potenziale della trasformazione digitale.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 opacity-0 animate-fade-in delay-3">
              Che tu stia cercando di ottimizzare i processi, migliorare l'esperienza cliente o estrarre
              valore dai tuoi dati, lavoriamo a stretto contatto con te per sviluppare soluzioni
              personalizzate che ti danno un vantaggio competitivo sostanziale.
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
