
import { Check, Code, Cog, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <Zap className="w-6 h-6 text-onesec-accent" />,
      title: "AI Solutions",
      description: "Sviluppiamo soluzioni di intelligenza artificiale su misura per le esigenze della tua azienda, ottimizzando processi decisionali e operativi."
    },
    {
      id: 2,
      icon: <Cog className="w-6 h-6 text-onesec-accent" />,
      title: "Automazione dei Processi",
      description: "Automatizziamo i flussi di lavoro ripetitivi, liberando il tuo team per attività a maggior valore aggiunto e riducendo gli errori."
    },
    {
      id: 3,
      icon: <Code className="w-6 h-6 text-onesec-accent" />,
      title: "Chatbot Intelligenti",
      description: "Creiamo assistenti virtuali basati su AI avanzata per supportare clienti e dipendenti, disponibili 24/7 su tutti i canali."
    },
    {
      id: 4,
      icon: <Check className="w-6 h-6 text-onesec-accent" />,
      title: "Data Analysis",
      description: "Analizziamo i tuoi dati per estrarre insights preziosi e supportare decisioni strategiche basate su evidenze concrete."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-onesec-dark to-onesec-dark/95">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-onesec-accent font-medium mb-3 opacity-0 animate-fade-in">I NOSTRI SERVIZI</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 opacity-0 animate-fade-in delay-1">
            Soluzioni intelligenti per sfide complesse
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in delay-2">
            Offriamo un ecosistema completo di servizi basati su intelligenza artificiale e automazione
            per aiutarti a navigare la trasformazione digitale.
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
