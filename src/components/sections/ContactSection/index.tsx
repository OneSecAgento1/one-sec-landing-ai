
import { useState } from 'react';
import AnimatedElement from '@/components/animations/AnimatedElement';
import ContactForm from './ContactForm';
import ContactSuccessMessage from './ContactSuccessMessage';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <AnimatedElement>
          <div className="text-center mb-12">
            <p className="text-[#94a3b8] font-medium mb-3 uppercase tracking-wider text-sm">CONTACT US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Grow your business without hiring — thanks to AI + automation
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get a free 15-minute strategy call. We'll uncover what to automate first — and how to unlock revenue and time instantly. Clear steps, no fluff.
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement delay={3}>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-left">Let's get started</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-left">
                  We typically reply within a few hours on business days.<br />
                  You'll get next steps, clearly explained.
                </p>
                
                {isSubmitted 
                  ? <ContactSuccessMessage onReset={handleReset} /> 
                  : <ContactForm onSubmitSuccess={handleSubmitSuccess} />
                }
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ContactSection;
