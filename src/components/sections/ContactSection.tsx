
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Check } from "lucide-react";

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
        subject: '',
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
    <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#94a3b8] font-medium mb-3 uppercase tracking-wider text-sm opacity-0 animate-fade-in">CONTACT US</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in delay-1">
            Let's uncover how AI + Automation can grow your business
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in delay-2">
            Book a free strategy call — we'll identify where AI can save you time, increase revenue, or remove bottlenecks in under 15 minutes.
          </p>
        </div>
        
        <div className="flex justify-center opacity-0 animate-fade-in delay-3">
          {/* Centered Contact form */}
          <div className="w-full max-w-2xl">
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
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Briefly describe the topic"
                      required
                    />
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
