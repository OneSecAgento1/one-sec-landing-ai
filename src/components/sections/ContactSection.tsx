
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Check } from "lucide-react";
import { z } from "zod"; 
import AnimatedElement from '@/components/animations/AnimatedElement';

// Schema di validazione per il form
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve avere almeno 2 caratteri" }),
  email: z.string().email({ message: "Indirizzo email non valido" }),
  subject: z.string().min(3, { message: "L'oggetto deve avere almeno 3 caratteri" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Il messaggio deve avere almeno 10 caratteri" })
});

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    company: '',
    message: '',
    isSubmitting: false,
    isSubmitted: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    try {
      // Valida solo il campo specifico
      contactFormSchema.shape[name as keyof typeof contactFormSchema.shape].parse(value);
      setErrors(prev => ({ ...prev, [name]: '' }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.errors[0]?.message || `Campo ${name} non valido`;
        setErrors(prev => ({ ...prev, [name]: fieldError }));
        return false;
      }
      return true;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validazione completa del form
    try {
      const formData = {
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        company: formState.company,
        message: formState.message
      };
      
      contactFormSchema.parse(formData);
      
      // Procedi con l'invio se la validazione è passata
      setFormState(prev => ({ ...prev, isSubmitting: true }));
      
      // Con Netlify Forms non è necessario gestire l'invio tramite JS
      // Il form verrebbe inviato automaticamente e gestito da Netlify
      // Questo è solo per simulare l'invio e mostrare feedback all'utente
      setTimeout(() => {
        setFormState(prev => ({ 
          ...prev, 
          isSubmitting: false,
          isSubmitted: true,
          name: '',
          email: '',
          subject: '',
          company: '',
          message: ''
        }));
        
        toast({
          title: "Messaggio inviato",
          description: "Ti risponderemo il prima possibile!",
        });
      }, 1500);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Gestisce gli errori di validazione
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        toast({
          title: "Errore nel form",
          description: "Per favore controlla i campi evidenziati.",
          variant: "destructive"
        });
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <AnimatedElement>
          <div className="text-center mb-12">
            <p className="text-[#94a3b8] font-medium mb-3 uppercase tracking-wider text-sm">CONTATTACI</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Scopri come AI + Automazione possono far crescere la tua azienda
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Prenota una chiamata strategica gratuita — individueremo dove l'AI può farti risparmiare tempo, aumentare le entrate o rimuovere colli di bottiglia in meno di 15 minuti.
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement delay={3}>
          <div className="flex justify-center">
            {/* Centered Contact form */}
            <div className="w-full max-w-2xl">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4">Compila il modulo</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Di solito rispondiamo entro poche ore nei giorni lavorativi.<br />
                  Riceverai i prossimi passi chiari. Niente fronzoli.
                </p>
                
                {formState.isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <Check size={32} className="text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Messaggio inviato!</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
                      Grazie per averci contattato. Un membro del nostro team risponderà
                      il prima possibile.
                    </p>
                    <Button 
                      className="mt-6"
                      onClick={() => setFormState(prev => ({ ...prev, isSubmitted: false }))}
                    >
                      Invia un altro messaggio
                    </Button>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    name="contact" 
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                  >
                    {/* Campo nascosto per Netlify Forms */}
                    <input type="hidden" name="form-name" value="contact" />
                    {/* Campo honeypot per evitare spam */}
                    <p className="hidden">
                      <label>
                        Non compilare questo se sei umano: <input name="bot-field" />
                      </label>
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Nome completo <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Il tuo nome"
                          required
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="La tua email"
                          required
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Oggetto <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Descrivi brevemente l'argomento"
                        required
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1">
                        Azienda
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Nome azienda"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Messaggio <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Parlaci del tuo progetto..."
                        rows={5}
                        required
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-onesec-primary hover:bg-onesec-primary/80 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                      disabled={formState.isSubmitting}
                    >
                      {formState.isSubmitting ? "Invio in corso..." : (
                        <>
                          <Send size={18} />
                          <span>Invia messaggio</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ContactSection;
