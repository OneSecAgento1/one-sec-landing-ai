
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Calendar, MapPin, Send, Check } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    isSubmitting: false,
    isSubmitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormState(prev => ({ ...prev, isSubmitting: true }));
    
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false,
        isSubmitted: true,
        name: '',
        email: '',
        company: '',
        message: ''
      }));
      
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible!",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-onesec-accent font-medium mb-3 opacity-0 animate-fade-in">CONTACT US</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in delay-1">
            Let's uncover how AI + Automation can grow your business
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in delay-2">
            Book a free strategy call — we'll identify where AI can save you time, increase revenue, or remove bottlenecks in under 15 minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 opacity-0 animate-fade-in delay-2">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-onesec-primary/10 flex items-center justify-center mr-4">
                    <Mail size={20} className="text-onesec-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:info@onesecagent.com" className="text-onesec-primary hover:text-onesec-secondary">
                      info@onesecagent.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-onesec-primary/10 flex items-center justify-center mr-4">
                    <Phone size={20} className="text-onesec-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+391234567890" className="text-onesec-primary hover:text-onesec-secondary">
                      +39 123 456 7890
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-onesec-primary/10 flex items-center justify-center mr-4">
                    <MapPin size={20} className="text-onesec-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Headquarters</h4>
                    <address className="not-italic text-gray-600 dark:text-gray-300">
                      Innovation Street, 42<br />
                      20100 Milan<br />
                      Italy
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-onesec-primary/10 flex items-center justify-center mr-4">
                    <Calendar size={20} className="text-onesec-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Availability</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Available Mon–Fri, 9:00–18:00 CET<br />
                      Send us a message anytime — we'll get back to you ASAP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-3 opacity-0 animate-fade-in delay-3">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Fill out the form</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We usually reply within a few hours on business days.<br />
                You'll get clear next steps. No fluff.
              </p>
              
              {formState.isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                    <Check size={32} className="text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message sent!</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
                    Thank you for contacting us. A member of our team will respond
                    as soon as possible.
                  </p>
                  <Button 
                    className="mt-6"
                    onClick={() => setFormState(prev => ({ ...prev, isSubmitted: false }))}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-onesec-primary hover:bg-onesec-primary/90 flex items-center justify-center gap-2"
                    disabled={formState.isSubmitting}
                  >
                    {formState.isSubmitting ? "Sending..." : (
                      <>
                        <Send size={18} />
                        <span>Send message</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
