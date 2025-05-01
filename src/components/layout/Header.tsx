
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  // Improved scroll to section with proper offset handling
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      // Add responsive offset for the fixed header
      const headerOffset = window.innerWidth < 768 ? 60 : 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled ? 'py-2 sm:py-4 bg-onesec-dark/95 backdrop-blur-md shadow-md' : 'py-3 sm:py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center cursor-pointer select-none"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="text-lg sm:text-xl font-bold text-white">
            OneSecAgent<span className="text-onesec-accent">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <NavLink onClick={() => scrollToSection('#services')}>Services</NavLink>
          <NavLink onClick={() => scrollToSection('#cases')}>Case Studies</NavLink>
          <NavLink onClick={() => scrollToSection('#about')}>About Us</NavLink>
          <NavLink onClick={() => scrollToSection('#contact')}>Contact</NavLink>
          <Button 
            className="bg-onesec-primary hover:bg-onesec-primary/90 text-white text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue cursor-pointer"
            onClick={() => scrollToSection('#contact')}
            type="button"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white cursor-pointer z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved z-index and positioning */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-onesec-dark/95 backdrop-blur-md p-4 shadow-lg z-40 overflow-y-auto">
          <nav className="flex flex-col space-y-4 pt-4">
            <MobileNavLink onClick={() => scrollToSection('#services')}>
              Services
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('#cases')}>
              Case Studies
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('#about')}>
              About Us
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('#contact')}>
              Contact
            </MobileNavLink>
            <Button 
              className="bg-onesec-primary hover:bg-onesec-primary/90 text-white w-full transition-all duration-300 hover:shadow-glow-blue cursor-pointer mt-4"
              onClick={() => scrollToSection('#contact')}
              type="button"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="text-white/80 hover:text-white transition-colors font-medium cursor-pointer text-sm"
    type="button"
  >
    {children}
  </button>
);

const MobileNavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="text-white/80 hover:text-white transition-colors font-medium block py-2 w-full text-left cursor-pointer text-lg"
    type="button"
  >
    {children}
  </button>
);

export default Header;
