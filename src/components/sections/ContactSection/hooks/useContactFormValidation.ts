
import { useState } from 'react';
import { z } from "zod";

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

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function useContactFormValidation() {
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

  const validateForm = (data: ContactFormData) => {
    try {
      contactFormSchema.parse(data);
      return { success: true, errors: {} };
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
        return { success: false, errors: fieldErrors };
      }
      return { success: false, errors: {} };
    }
  };

  return {
    errors,
    validateField,
    validateForm,
    setErrors
  };
}
