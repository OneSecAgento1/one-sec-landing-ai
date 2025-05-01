
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-onesec-dark text-white relative overflow-hidden">
      {/* Decorative background with increased opacity */}
      <div className="absolute inset-0 opacity-20">
        <div className="decorative-shape shape-circle bg-onesec-primary/40 w-96 h-96 -top-40 right-20 animate-rotate-slow"></div>
        <div className="decorative-shape shape-square bg-onesec-secondary/40 w-60 h-60 bottom-0 left-20 rotate-45 animate-float" style={{
        animationDuration: '8s'
      }}></div>
        <div className="decorative-shape shape-blob bg-onesec-accent/30 w-72 h-72 top-1/3 right-1/4 animate-float" style={{
        animationDelay: '2s',
        animationDuration: '10s'
      }}></div>
      </div>
      
      {/* Light texture with increased opacity */}
      <div className="absolute inset-0 line-texture" style={{
      opacity: '0.08'
    }}></div>
      
      {/* Background floating elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => <div key={i} className="absolute w-24 h-24 rounded-full animate-pulse-light" style={{
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.05) 70%, transparent 100%)',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`
      }}></div>)}
      </div>
      
      <div className="container mx-auto py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block">
              OneSecAgent<span className="text-onesec-accent">.</span>
            </Link>
            <p className="text-gray-400 mt-4">
              We transform your ideas into intelligent solutions with AI and automation.
            </p>
            <div className="mt-6 flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#cases">Case Studies</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#ai-solutions">AI Solutions</FooterLink>
              <FooterLink href="#process-automation">Process Automation</FooterLink>
              <FooterLink href="#data-analysis">Data Analysis</FooterLink>
              <FooterLink href="#chatbot">Intelligent Chatbots</FooterLink>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} OneSecAgent. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>;
};

const FooterLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) => <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </a>
  </li>;

const SocialIcon = ({
  icon
}: {
  icon: React.ReactNode;
}) => <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-onesec-primary transition-colors">
    {icon}
  </a>;

export default Footer;
