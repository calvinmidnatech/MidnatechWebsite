import React from 'react';
import { Database } from 'lucide-react';

const Footer = () => {
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
    <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Left Column - Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <Database className="w-6 h-6 text-white" />
            </div>
              <span className="text-xl font-bold text-white">MidnaTech</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming data into powerful insights through scalable engineering solutions.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('who-we-are')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Who We Are
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('what-we-build')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  What We Build
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column - Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#what-we-build" className="text-gray-300 hover:text-white transition-colors text-sm">
                  ETL Pipelines
                </a>
              </li>
              <li>
                <a href="#what-we-build" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Analytics Dashboards
                </a>
              </li>
              <li>
                <a href="#who-we-are" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Telematics Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MidnaTech. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

