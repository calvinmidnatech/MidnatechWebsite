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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-6 sm:mb-8">
          {/* Left Column - Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <Database className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
              <span className="text-lg sm:text-xl font-bold text-white">MidnaTech</span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Transforming data into powerful insights through scalable engineering solutions.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('who-we-are')}
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Who We Are
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('what-we-build')}
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  What We Build
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column - Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#what-we-build" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                  ETL Pipelines
                </a>
              </li>
              <li>
                <a href="#what-we-build" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Analytics Dashboards
                </a>
              </li>
              <li>
                <a href="#who-we-are" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Telematics Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} MidnaTech. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
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

