
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-onesec-dark text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block">
              OneSecAgent<span className="text-onesec-accent">.</span>
            </Link>
            <p className="text-gray-400 mt-4">
              Trasformiamo le tue idee in soluzioni intelligenti con AI e automazione.
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
              <FooterLink href="#services">Servizi</FooterLink>
              <FooterLink href="#cases">Casi di studio</FooterLink>
              <FooterLink href="#about">Chi siamo</FooterLink>
              <FooterLink href="#contact">Contatti</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servizi</h3>
            <ul className="space-y-2">
              <FooterLink href="#ai-solutions">AI Solutions</FooterLink>
              <FooterLink href="#process-automation">Automazione dei Processi</FooterLink>
              <FooterLink href="#data-analysis">Data Analysis</FooterLink>
              <FooterLink href="#chatbot">Chatbot Intelligenti</FooterLink>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contattaci</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 text-onesec-accent shrink-0 mt-1" />
                <span>info@onesecagent.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 text-onesec-accent shrink-0 mt-1" />
                <span>+39 123 456 7890</span>
              </li>
              <li>
                Milano, Italia
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} OneSecAgent. Tutti i diritti riservati.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white">Termini di servizio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </a>
  </li>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-onesec-primary transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
