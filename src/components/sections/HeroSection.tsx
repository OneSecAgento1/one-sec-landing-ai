
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 flex items-center bg-onesec-dark overflow-hidden">
      {/* Sfondo animato */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-onesec-dark via-onesec-dark to-onesec-primary/20 bg-gradient-animation"></div>
        {/* Pattern di sfondo */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-40 h-40 lg:w-64 lg:h-64 rounded-full animate-pulse-light"
              style={{
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0.1) 70%, transparent 100%)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Testo hero */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in">
              <span className="text-white">Ai & Automazione per </span>
              <span className="gradient-text">accelerare il tuo business</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in delay-1">
              OneSecAgent trasforma il tuo business con soluzioni intelligenti. 
              Dalla progettazione all'implementazione, ti accompagniamo nel viaggio verso 
              l'innovazione digitale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 opacity-0 animate-fade-in delay-2">
              <Button size="lg" className="bg-onesec-primary hover:bg-onesec-primary/90 text-white">
                Scopri i nostri servizi
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contattaci
              </Button>
            </div>
          </div>
          
          {/* Immagine/animazione hero */}
          <div className="lg:col-span-2 opacity-0 animate-fade-in delay-3">
            <div className="glassmorphism rounded-2xl p-4 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-bg"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-onesec-accent"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
                alt="AI & Automation" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a href="#services" className="flex flex-col items-center text-white/50 hover:text-white transition-colors">
            <span className="mb-2">Scroll down</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
