import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midna-charcoal text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-6 h-6 bg-gradient-to-tr from-midna-violet to-midna-accent rounded-sm opacity-90"></div>
               <span className="font-display font-bold text-lg tracking-wide">MIDNA</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Reinventing fleet intelligence through advanced AI and telematics analytics.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#who-we-are" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-midna-violet transition-colors rounded-sm text-white/70 hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-midna-accent transition-colors rounded-sm text-white/70 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-midna-blue transition-colors rounded-sm text-white/70 hover:text-white">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Midna Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;