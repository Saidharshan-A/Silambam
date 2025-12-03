import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-academy-dark/95 backdrop-blur-md shadow-lg border-b border-academy-maroon/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-academy-maroon rounded-full flex items-center justify-center border-2 border-academy-gold shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <span className="font-serif font-bold text-academy-gold text-xl">V</span>
          </div>
          <span className="font-serif font-bold text-lg md:text-xl text-stone-100 tracking-wide group-hover:text-academy-gold transition-colors">
            Veera Pugazh Cholan
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-widest text-stone-300 hover:text-academy-gold transition-colors font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-academy-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#timings"
            onClick={(e) => handleNavClick(e, '#timings')}
            className="px-5 py-2 bg-academy-maroon text-white text-sm font-semibold rounded hover:bg-red-800 transition-colors border border-red-700"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stone-100 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-academy-charcoal border-b border-academy-maroon/30 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-stone-300 hover:text-academy-gold text-lg font-medium border-b border-stone-800 pb-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;