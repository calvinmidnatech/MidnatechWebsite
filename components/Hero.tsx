import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Background with Atmospheric Gradients */}
      <div className="absolute inset-0 bg-midna-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-midna-violet/30 rounded-full blur-[120px] animate-slow-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] animate-float"></div>
        
        {/* Glass Overlay for Kyndryl effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midna-dark/20 to-midna-dark"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-midna-dark/80 via-transparent to-midna-dark/40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 z-10 pt-20">
        <div className="max-w-5xl">
          <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white mb-8 animate-fade-in-up">
            Know your fleet <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-midna-blue via-white to-white font-normal">
              before it needs you.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/70 max-w-3xl font-light mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Most telematics platforms give you data. We give you direction. From driver performance to vehicle health, MidnaTech surfaces the insights that actually move your business forward.
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="inline-block px-8 py-4 bg-white text-midna-dark font-semibold tracking-wide hover:bg-gray-100 transition-colors">
              Request a Demo
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade/scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <ChevronDown size={32} />
      </div>

      {/* Large Parallax Text - Decorative */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none select-none opacity-10">
        <span className="text-[20vw] font-display font-bold text-white leading-none tracking-tighter">
          INSIGHT
        </span>
      </div>
    </section>
  );
};

export default Hero;