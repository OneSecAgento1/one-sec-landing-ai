
import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useContactFormValidation, ContactFormData } from './useContactFormValidation';

interface UseContactFormStateProps {
  onSubmitSuccess: () => void;
}

export function useContactFormState({ onSubmitSuccess }: UseContactFormStateProps) {
  const { toast } = useToast();
  const { errors, validateField, validateForm, setErrors } = useContactFormValidation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    company: '',
    message: '',
    isSubmitting: false
  });

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

  const resetForm = () => {
    setFormState({
      name: '',
      email: '',
      subject: '',
      company: '',
      message: '',
      isSubmitting: false
    });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Complete form validation
    const formData: ContactFormData = {
      name: formState.name,
      email: formState.email,
      subject: formState.subject,
      company: formState.company || undefined,
      message: formState.message
    };
    
    const validationResult = validateForm(formData);
    if (!validationResult.success) {
      toast({
        title: "Form error",
        description: "Please check the highlighted fields.",
        variant: "destructive"
      });
      return;
    }

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
      resetForm();
      
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
  };

  return {
    formState,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  };
}
