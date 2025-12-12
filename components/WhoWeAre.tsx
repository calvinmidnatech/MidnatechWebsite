import React from 'react';

interface WhoWeAreProps {
  scrollY: number;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ scrollY }) => {
  return (
    <section id="who-we-are" className="relative py-32 lg:py-48 bg-midna-dark overflow-hidden">
      
      {/* Background oversized text */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
        style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.1}px))` }}
      >
        <span className="text-[25vw] font-display font-bold text-outline opacity-20">
          CLARITY
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
          
          {/* Left: Content */}
          <div className="lg:w-1/2 pr-0 lg:pr-24 flex flex-col justify-center py-12">
            <h4 className="text-midna-blue uppercase tracking-widest text-sm font-semibold mb-6">Built by Fleet Operators, for Fleet Operators</h4>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-8 leading-tight">
              We've sat in your seat. <br/><span className="text-white font-medium">We built the tools we wished existed.</span>
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-8">
              Running a fleet means drowning in dashboards. You've got telematics data, maintenance logs, driver reports, compliance paperwork—and somehow you're expected to make sense of it all.
            </p>
            <p className="text-lg text-white/60 font-light leading-relaxed border-l border-midna-accent/50 pl-6">
              That's why MidnaTech isn't another data platform. It's a decision-making partner—one that knows what matters, when it matters, and why. We don't just give you more data. We give you direction.
            </p>
          </div>

          {/* Right: Atmospheric Color Field */}
          <div className="lg:w-1/2 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-midna-violet to-indigo-900 opacity-80 transition-opacity duration-700 group-hover:opacity-100"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-12">
               <h3 className="text-3xl md:text-5xl font-display font-light text-white text-center leading-tight">
                 Fleet intelligence <br />
                 <span className="font-bold tracking-tight italic">built for the long haul.</span>
               </h3>
            </div>

            {/* Decorative Lines */}
            <div className="absolute bottom-0 right-0 w-32 h-32 border-l border-t border-white/20"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;