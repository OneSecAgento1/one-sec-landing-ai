
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-8 text-onesec-dark">Terms of Service</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">1. Introduction</h2>
                <p className="text-gray-700">
                  These Terms of Service ("Terms") govern your access to and use of OneSecAgent services, website, and any software provided on or in connection with OneSecAgent services (collectively, the "Service").
                </p>
                <p className="text-gray-700 mt-4">
                  By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
                </p>
                <p className="text-gray-700 mt-4">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">2. Use of the Service</h2>
                <p className="text-gray-700">
                  Your use of the Service is subject to your compliance with these Terms and all applicable local, state, national, and international laws and regulations.
                </p>
                <p className="text-gray-700 mt-4">
                  You agree not to:
                </p>
                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
                  <li>Use the Service for any unlawful purpose or in any way that could damage, disable, or impair the Service</li>
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                  <li>Use the Service to transmit any viruses, worms, or other malicious code</li>
                  <li>Interfere with or disrupt the integrity or performance of the Service</li>
                  <li>Reproduce, duplicate, copy, sell, or exploit any portion of the Service without express written permission</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">3. Accounts and Registration</h2>
                <p className="text-gray-700">
                  When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <p className="text-gray-700 mt-4">
                  You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">4. Intellectual Property</h2>
                <p className="text-gray-700">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of OneSecAgent and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                </p>
                <p className="text-gray-700 mt-4">
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of OneSecAgent.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">5. Termination</h2>
                <p className="text-gray-700">
                  We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including breaches of these Terms.
                </p>
                <p className="text-gray-700 mt-4">
                  Upon termination, your right to use the Service will immediately cease. All provisions of the Terms that should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">6. Disclaimer of Warranties</h2>
                <p className="text-gray-700">
                  The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
                </p>
                <p className="text-gray-700 mt-4">
                  OneSecAgent does not warrant that the Service will be uninterrupted, timely, secure, or error-free, or that defects will be corrected. We do not warrant the accuracy or reliability of any results obtained from the use of the Service.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">7. Limitation of Liability</h2>
                <p className="text-gray-700">
                  In no event shall OneSecAgent, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your access to or use of or inability to access or use the Service.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">8. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms shall be governed by and construed in accordance with the laws of the United States and the State of California, without regard to its conflict of law provisions.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">9. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately upon posting to the Service. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">10. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms, please contact us at <a href="mailto:legal@onesecagent.com" className="text-onesec-primary hover:underline">legal@onesecagent.com</a>.
                </p>
              </section>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/" className="text-onesec-primary hover:text-onesec-primary/80 transition-colors">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
