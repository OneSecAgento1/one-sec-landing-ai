
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const EmailJSIntegrationGuide = () => {
  const { toast } = useToast();
  const [keys, setKeys] = useState({
    serviceId: '',
    templateId: '',
    userId: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setKeys(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveKeys = () => {
    // Qui puoi salvare le chiavi in localStorage o in un altro storage
    localStorage.setItem('emailjs_config', JSON.stringify(keys));
    
    toast({
      title: "Chiavi salvate",
      description: "Le tue chiavi EmailJS sono state salvate con successo.",
    });
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Guida all'integrazione di EmailJS</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">1. Crea un account EmailJS</h3>
          <p className="mb-2">Vai su <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">emailjs.com</a> e crea un account gratuito.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">2. Configura un servizio Email</h3>
          <p className="mb-2">Nel dashboard di EmailJS, vai su "Email Services" e aggiungi un nuovo servizio (Gmail, Outlook, ecc.).</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">3. Crea un template Email</h3>
          <p className="mb-2">Vai su "Email Templates" e crea un nuovo template. Usa le seguenti variabili nel tuo template:</p>
          <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded">
            Da: {{from_name}} ({{from_email}})<br/>
            Oggetto: {{subject}}<br/>
            Azienda: {{company}}<br/>
            Messaggio: {{message}}
          </code>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">4. Ottieni le tue chiavi API</h3>
          <p className="mb-2">Copia il Service ID, Template ID e User ID di integrazione:</p>
          
          <div className="space-y-3 mt-4">
            <div>
              <label htmlFor="serviceId" className="block text-sm font-medium mb-1">Service ID</label>
              <Input
                id="serviceId"
                name="serviceId"
                value={keys.serviceId}
                onChange={handleChange}
                placeholder="es: service_abc123"
              />
            </div>
            
            <div>
              <label htmlFor="templateId" className="block text-sm font-medium mb-1">Template ID</label>
              <Input
                id="templateId"
                name="templateId"
                value={keys.templateId}
                onChange={handleChange}
                placeholder="es: template_xyz789"
              />
            </div>
            
            <div>
              <label htmlFor="userId" className="block text-sm font-medium mb-1">User ID (Public Key)</label>
              <Input
                id="userId"
                name="userId"
                value={keys.userId}
                onChange={handleChange}
                placeholder="es: user_abcxyz123"
              />
            </div>
          </div>
          
          <Button 
            onClick={handleSaveKeys} 
            className="mt-4 w-full"
          >
            Salva Chiavi
          </Button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">5. Modifica il file di configurazione</h3>
          <p className="mb-2">Apri il file <code>src/services/emailService.ts</code> e sostituisci i valori delle costanti con le tue chiavi:</p>
          <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded">
            const SERVICE_ID = "{keys.serviceId}";<br/>
            const TEMPLATE_ID = "{keys.templateId}";<br/>
            const USER_ID = "{keys.userId}";
          </code>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">6. Aggiorna ContactSection.tsx</h3>
          <p className="mb-2">Modifica il metodo handleSubmit nel componente ContactSection per utilizzare il servizio email:</p>
          <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm" style={{whiteSpace: 'pre-wrap'}}>
{`import { sendContactEmail } from '@/services/emailService';

// Nel metodo handleSubmit:
try {
  // Validazione...
  
  // Invia email
  await sendContactEmail({
    name: formState.name,
    email: formState.email,
    subject: formState.subject,
    company: formState.company,
    message: formState.message
  });

  // Aggiorna stato...
} catch (error) {
  // Gestisci errori...
}`}
          </code>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">7. Inizializza EmailJS</h3>
          <p>Aggiungi l'inizializzazione di EmailJS nel file main.tsx:</p>
          <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm" style={{whiteSpace: 'pre-wrap'}}>
{`import { initEmailJS } from './services/emailService';

// Inizializza EmailJS
initEmailJS();`}
          </code>
        </div>
      </div>
    </div>
  );
};

export default EmailJSIntegrationGuide;
