
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

// Webhook URL for Make.com integration
const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/w9m2q7nvn8zcroq81w8q28nwfjl2m59j";

// Validation schema for the form
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters"
  }),
  email: z.string().email({
    message: "Invalid email address"
  }),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters"
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters"
  })
});

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    company: '',
    message: '',
    isSubmitting: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Helper function to send data to Make webhook
  const sendToMakeWebhook = async (formData: any) => {
    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          company: formData.company || 'Non specificata',
          message: formData.message,
          submitted_at: new Date().toISOString()
        }),
        mode: 'no-cors' // Needed for cross-origin requests to webhook
      });
      
      console.log("Make webhook notification sent");
      return true;
    } catch (error) {
      console.error("Error sending to Make webhook:", error);
      return false;
    }
  };

  const validateField = (name: string, value: string) => {
    try {
      // Validate only the specific field
      contactFormSchema.shape[name as keyof typeof contactFormSchema.shape].parse(value);
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.errors[0]?.message || `Invalid ${name} field`;
        setErrors(prev => ({
          ...prev,
          [name]: fieldError
        }));
        return false;
      }
      return true;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    validateField(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Complete form validation
    try {
      const formData = {
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        company: formState.company,
        message: formState.message
      };
      contactFormSchema.parse(formData);

      // Proceed with submission if validation passes
      setFormState(prev => ({
        ...prev,
        isSubmitting: true
      }));

      // Submit to Supabase
      try {
        const { error } = await supabase
          .from('contact_submissions')
          .insert({
            full_name: formData.name,
            email: formData.email,
            subject: formData.subject,
            company: formData.company || null,
            message: formData.message
          });

        if (error) {
          console.error("Error submitting form:", error);
          toast({
            title: "Submission error",
            description: "There was a problem submitting your message. Please try again.",
            variant: "destructive"
          });
          setFormState(prev => ({
            ...prev,
            isSubmitting: false
          }));
          return;
        }

        // Send data to Make webhook
        await sendToMakeWebhook(formData);

        // Success
        setFormState({
          name: '',
          email: '',
          subject: '',
          company: '',
          message: '',
          isSubmitting: false
        });
        
        toast({
          title: "Message sent",
          description: "We'll get back to you as soon as possible!"
        });
        
        onSubmitSuccess();
      } catch (submitError) {
        console.error("Error in submission:", submitError);
        toast({
          title: "Submission error",
          description: "There was a problem submitting your message. Please try again.",
          variant: "destructive"
        });
        setFormState(prev => ({
          ...prev,
          isSubmitting: false
        }));
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Form error",
          description: "Please check the highlighted fields.",
          variant: "destructive"
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-left">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input 
            id="name" 
            name="name" 
            value={formState.name} 
            onChange={handleChange} 
            onBlur={handleBlur} 
            placeholder="Your name" 
            required 
            className={errors.name ? "border-red-500" : ""} 
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 text-left">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-left">
            Email <span className="text-red-500">*</span>
          </label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formState.email} 
            onChange={handleChange} 
            onBlur={handleBlur} 
            placeholder="Your email" 
            required 
            className={errors.email ? "border-red-500" : ""} 
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 text-left">{errors.email}</p>}
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1 text-left">
          Subject <span className="text-red-500">*</span>
        </label>
        <Input 
          id="subject" 
          name="subject" 
          value={formState.subject} 
          onChange={handleChange} 
          onBlur={handleBlur} 
          placeholder="Briefly describe your request" 
          required 
          className={errors.subject ? "border-red-500" : ""} 
        />
        {errors.subject && <p className="text-red-500 text-xs mt-1 text-left">{errors.subject}</p>}
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-1 text-left">
          Company
        </label>
        <Input 
          id="company" 
          name="company" 
          value={formState.company} 
          onChange={handleChange} 
          onBlur={handleBlur} 
          placeholder="Company name" 
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-left">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea 
          id="message" 
          name="message" 
          value={formState.message} 
          onChange={handleChange} 
          onBlur={handleBlur} 
          placeholder="Tell us about your project or challenge..." 
          rows={5} 
          required 
          className={errors.message ? "border-red-500" : ""} 
        />
        {errors.message && <p className="text-red-500 text-xs mt-1 text-left">{errors.message}</p>}
      </div>
      
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
