
import emailjs from 'emailjs-com';

// Interfaccia per i dati del form da inviare via EmailJS
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  company?: string;
  message: string;
}

// Costanti per EmailJS - questi valori dovrebbero essere sostituiti con quelli reali
// dal tuo account EmailJS
const SERVICE_ID = "YOUR_SERVICE_ID"; // Sostituisci con il tuo Service ID
const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Sostituisci con il tuo Template ID
const USER_ID = "YOUR_USER_ID"; // Sostituisci con il tuo User ID

/**
 * Invia un'email usando EmailJS
 * 
 * @param {ContactFormData} formData - I dati del form da inviare
 * @returns {Promise<emailjs.EmailJSResponseStatus>} - Una promessa con lo stato della risposta
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<emailjs.EmailJSResponseStatus> => {
  try {
    // Imposta i dati del template per l'email
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      company: formData.company || 'Non specificata',
      message: formData.message,
    };

    // Invia l'email usando EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );

    console.log('Email inviata con successo:', response);
    return response;
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    throw error;
  }
};

// Inizializza EmailJS (da chiamare all'avvio dell'applicazione)
export const initEmailJS = () => {
  emailjs.init(USER_ID);
};
