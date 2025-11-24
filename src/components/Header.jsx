import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Database } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <Database className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-charcoal">MidnaTech</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('who-we-are')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Who We Are
            </button>
            <button
              onClick={() => scrollToSection('what-we-build')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              What We Build
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="primary" 
            className="hidden md:inline-flex"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

