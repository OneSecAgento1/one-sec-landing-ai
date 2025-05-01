
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-onesec-dark">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-8 text-onesec-dark">Privacy Policy</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">Introduction</h2>
                <p className="text-gray-700">
                  This Privacy Policy explains how OneSecAgent ("we," "us," or "our") collects, uses, shares, and protects information in relation to our services, website, and any software provided on or in connection with OneSecAgent services (collectively, the "Service").
                </p>
                <p className="text-gray-700 mt-4">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">Information We Collect</h2>
                <p className="text-gray-700">
                  When you interact with our Service, we may collect the following information:
                </p>
                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
                  <li>
                    <strong>Personal Information</strong>: Information that can identify you such as your name, email address, phone number, and company information.
                  </li>
                  <li>
                    <strong>Usage Data</strong>: Information about how you use our Service, including log data, device information, and analytics.
                  </li>
                  <li>
                    <strong>Communications</strong>: When you contact us directly, we may keep a record of that correspondence.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">How We Use Your Information</h2>
                <p className="text-gray-700">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
                  <li>Providing, maintaining, and improving our Service</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Responding to your comments, questions, and requests</li>
                  <li>Sending technical notices, updates, security alerts, and support messages</li>
                  <li>Monitoring and analyzing trends, usage, and activities in connection with our Service</li>
                  <li>Marketing and advertising purposes, subject to your consent where required</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">Information Sharing</h2>
                <p className="text-gray-700">
                  We may share your information with:
                </p>
                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
                  <li>Service providers who perform services on our behalf</li>
                  <li>Professional advisors such as lawyers, auditors, and insurers</li>
                  <li>Business partners with your consent</li>
                  <li>Law enforcement when we have a good-faith belief that it is necessary to comply with a law, regulation, legal process, or governmental request</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">Your Rights</h2>
                <p className="text-gray-700">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate or incomplete information</li>
                  <li>Deletion of your personal information</li>
                  <li>Objection to or restriction of the processing of your personal information</li>
                  <li>Data portability</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, please contact us at <a href="mailto:privacy@onesecagent.com" className="text-onesec-primary hover:underline">privacy@onesecagent.com</a>.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">Security</h2>
                <p className="text-gray-700">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4 text-onesec-dark">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
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

export default Privacy;
