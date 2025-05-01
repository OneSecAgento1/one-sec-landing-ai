
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { CustomTooltip } from "@/components/ui/custom-tooltip";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-onesec-dark/95 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-white">
            OneSecAgent<span className="text-onesec-accent">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <CustomTooltip content="Our AI & automation solutions">
            <NavLink href="#services">Services</NavLink>
          </CustomTooltip>
          <CustomTooltip content="See our success stories">
            <NavLink href="#cases">Case Studies</NavLink>
          </CustomTooltip>
          <CustomTooltip content="Learn about our approach">
            <NavLink href="#about">About Us</NavLink>
          </CustomTooltip>
          <CustomTooltip content="Get in touch with our team">
            <NavLink href="#contact">Contact</NavLink>
          </CustomTooltip>
          <CustomTooltip content="Schedule your free consultation">
            <Button className="bg-onesec-primary hover:bg-onesec-primary/90 text-white">
              Get Started
            </Button>
          </CustomTooltip>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-onesec-dark/95 backdrop-blur-md p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="#services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink href="#cases" onClick={() => setMobileMenuOpen(false)}>
              Case Studies
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <Button className="bg-onesec-primary hover:bg-onesec-primary/90 text-white w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white/80 hover:text-white transition-colors font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white/80 hover:text-white transition-colors font-medium block py-2"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Header;
