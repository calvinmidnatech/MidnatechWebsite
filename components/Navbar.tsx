import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  scrolled: boolean;
}

const navItems: NavItem[] = [
  { label: 'What We Do', href: '#specialization' },
  { label: 'Platform', href: '#products' },
  { label: 'Our Story', href: '#who-we-are' },
];

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-midna-dark/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-tr from-midna-violet to-midna-accent rounded-sm opacity-90 group-hover:rotate-45 transition-transform duration-500"></div>
          <span className="font-display font-semibold text-xl tracking-wide text-white">
            MIDNA
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-white group"
          >
            Talk to Us
            <ArrowRight className="w-4 h-4 text-midna-accent group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-midna-dark border-b border-white/10 p-6 md:hidden flex flex-col gap-6 animate-fade-in-up">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-display text-white/80 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-lg font-display text-midna-accent"
          >
            Talk to Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;