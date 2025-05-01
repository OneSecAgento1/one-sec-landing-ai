
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Check } from "lucide-react";
import { z } from "zod";
import AnimatedElement from '@/components/animations/AnimatedElement';
import { supabase } from "@/integrations/supabase/client";

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

        // Success
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
          title: "Message sent",
          description: "We'll get back to you as soon as possible!"
        });
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

  return <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <AnimatedElement>
          <div className="text-center mb-12">
            <p className="text-[#94a3b8] font-medium mb-3 uppercase tracking-wider text-sm">CONTACT US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Grow your business without hiring — thanks to AI + automation
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Get a free 15-minute strategy call. We'll uncover what to automate first — and how to unlock revenue and time instantly. Clear steps, no fluff.</p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement delay={3}>
          <div className="flex justify-center">
            {/* Centered Contact form */}
            <div className="w-full max-w-2xl">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-left">Let's get started</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-left">
                  We typically reply within a few hours on business days.<br />
                  You'll get next steps, clearly explained.
                </p>
                
                {formState.isSubmitted ? <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <Check size={32} className="text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message sent!</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
                      Thank you for contacting us. A member of our team will respond
                      as soon as possible.
                    </p>
                    <Button className="mt-6" onClick={() => setFormState(prev => ({
                  ...prev,
                  isSubmitted: false
                }))}>
                      Send another message
                    </Button>
                  </div> : <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1 text-left">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input id="name" name="name" value={formState.name} onChange={handleChange} onBlur={handleBlur} placeholder="Your name" required className={errors.name ? "border-red-500" : ""} />
                        {errors.name && <p className="text-red-500 text-xs mt-1 text-left">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1 text-left">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} onBlur={handleBlur} placeholder="Your email" required className={errors.email ? "border-red-500" : ""} />
                        {errors.email && <p className="text-red-500 text-xs mt-1 text-left">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1 text-left">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} onBlur={handleBlur} placeholder="Briefly describe your request" required className={errors.subject ? "border-red-500" : ""} />
                      {errors.subject && <p className="text-red-500 text-xs mt-1 text-left">{errors.subject}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1 text-left">
                        Company
                      </label>
                      <Input id="company" name="company" value={formState.company} onChange={handleChange} onBlur={handleBlur} placeholder="Company name" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1 text-left">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea id="message" name="message" value={formState.message} onChange={handleChange} onBlur={handleBlur} placeholder="Tell us about your project or challenge..." rows={5} required className={errors.message ? "border-red-500" : ""} />
                      {errors.message && <p className="text-red-500 text-xs mt-1 text-left">{errors.message}</p>}
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-onesec-primary to-onesec-secondary hover:from-onesec-primary/90 hover:to-onesec-secondary/90 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]" disabled={formState.isSubmitting}>
                      {formState.isSubmitting ? "Sending..." : <>
                          <Send size={18} />
                          <span>Book My Free Call</span>
                        </>}
                    </Button>
                  </form>}
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>;
};

export default ContactSection;
