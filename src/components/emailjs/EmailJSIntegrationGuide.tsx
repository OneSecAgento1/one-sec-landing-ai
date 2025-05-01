
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const NetlifyFormsGuide = () => {
  const { toast } = useToast();
  const [formConfig, setFormConfig] = useState({
    formName: 'contact',
    honeypotField: 'bot-field'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormConfig(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveConfig = () => {
    // Save config to localStorage for future reference
    localStorage.setItem('netlify_form_config', JSON.stringify(formConfig));
    
    toast({
      title: "Configurazione salvata",
      description: "Le impostazioni del form Netlify sono state salvate con successo.",
    });
  };

  const copyCode = () => {
    const codeSnippet = `<form 
  name="${formConfig.formName}" 
  method="POST"
  data-netlify="true"
  netlify-honeypot="${formConfig.honeypotField}"
>
  {/* Campo nascosto per Netlify Forms */}
  <input type="hidden" name="form-name" value="${formConfig.formName}" />
  {/* Campo honeypot per evitare spam */}
  <p className="hidden">
    <label>
      Non compilare questo se sei umano: <input name="${formConfig.honeypotField}" />
    </label>
  </p>
  
  {/* Altri campi del form */}
</form>`;

    navigator.clipboard.writeText(codeSnippet);
    
    toast({
      title: "Codice copiato",
      description: "Snippet di codice copiato negli appunti.",
    });
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Guida all'integrazione di Netlify Forms</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">1. Configura il form HTML</h3>
          <p className="mb-2">Aggiungi gli attributi necessari al tuo tag form per attivare Netlify Forms:</p>
          <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded">
            &lt;form name="{formConfig.formName}" method="POST" data-netlify="true" netlify-honeypot="{formConfig.honeypotField}"&gt;
          </code>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">2. Aggiungi campi nascosti necessari</h3>
          <p className="mb-2">Netlify richiede un campo form-name nascosto e un honeypot per evitare lo spam:</p>
          <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded">
            &lt;input type="hidden" name="form-name" value="{formConfig.formName}" /&gt;
          </code>
          <p className="mt-2 mb-2">E un campo honeypot per prevenire lo spam:</p>
          <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded">
            &lt;p className="hidden"&gt;<br/>
            &nbsp;&nbsp;&lt;label&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;Non compilare questo se sei umano: &lt;input name="{formConfig.honeypotField}" /&gt;<br/>
            &nbsp;&nbsp;&lt;/label&gt;<br/>
            &lt;/p&gt;
          </code>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">3. Personalizza la configurazione</h3>
          
          <div className="space-y-3 mt-4">
            <div>
              <label htmlFor="formName" className="block text-sm font-medium mb-1">Nome del form</label>
              <Input
                id="formName"
                name="formName"
                value={formConfig.formName}
                onChange={handleChange}
                placeholder="es: contact"
              />
            </div>
            
            <div>
              <label htmlFor="honeypotField" className="block text-sm font-medium mb-1">Campo honeypot</label>
              <Input
                id="honeypotField"
                name="honeypotField"
                value={formConfig.honeypotField}
                onChange={handleChange}
                placeholder="es: bot-field"
              />
            </div>
          </div>
          
          <Button 
            onClick={handleSaveConfig} 
            className="mt-4 w-full"
          >
            Salva Configurazione
          </Button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">4. Copia il codice di esempio</h3>
          <p className="mb-2">Copia questo snippet di codice e adattalo al tuo form:</p>
          <div className="relative">
            <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm" style={{whiteSpace: 'pre-wrap'}}>
              {`<form 
  name="${formConfig.formName}" 
  method="POST"
  data-netlify="true"
  netlify-honeypot="${formConfig.honeypotField}"
>
  {/* Campo nascosto per Netlify Forms */}
  <input type="hidden" name="form-name" value="${formConfig.formName}" />
  {/* Campo honeypot per evitare spam */}
  <p className="hidden">
    <label>
      Non compilare questo se sei umano: <input name="${formConfig.honeypotField}" />
    </label>
  </p>
  
  {/* Altri campi del form */}
</form>`}
            </code>
            <Button 
              onClick={copyCode}
              variant="secondary"
              size="sm"
              className="absolute top-2 right-2"
            >
              Copia
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">5. Deploy su Netlify</h3>
          <p>Una volta deployato su Netlify, il form sarà automaticamente configurato. Puoi vedere le submission nella dashboard di Netlify sotto "Forms".</p>
        </div>
      </div>
    </div>
  );
};

export default NetlifyFormsGuide;
