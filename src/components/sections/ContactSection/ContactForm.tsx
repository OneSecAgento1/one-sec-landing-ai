
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { FormField } from "./components/FormField";
import { useContactFormState } from "./hooks/useContactFormState";

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const {
    formState,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = useContactFormState({ onSubmitSuccess });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="name"
          name="name"
          label="Full Name"
          value={formState.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your name"
          required
          error={errors.name}
        />
        
        <FormField
          id="email"
          name="email"
          label="Email"
          value={formState.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your email"
          type="email"
          required
          error={errors.email}
        />
      </div>
      
      <FormField
        id="subject"
        name="subject"
        label="Subject"
        value={formState.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Briefly describe your request"
        required
        error={errors.subject}
      />
      
      <FormField
        id="company"
        name="company"
        label="Company"
        value={formState.company}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Company name"
        error={errors.company}
      />
      
      <FormField
        id="message"
        name="message"
        label="Message"
        value={formState.message}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Tell us about your project or challenge..."
        required
        as="textarea"
        rows={5}
        error={errors.message}
      />
      
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-onesec-primary to-onesec-secondary hover:from-onesec-primary/90 hover:to-onesec-secondary/90 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]" 
        disabled={formState.isSubmitting}
      >
        {formState.isSubmitting ? "Sending..." : (
          <>
            <Send size={18} />
            <span>Book My Free Call</span>
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
