import React from 'react';
import { ProductProps } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const products: (ProductProps & { features: string[] })[] = [
  {
    name: 'SafetySync',
    tagline: 'Your CSA Scores, Visible and Improving',
    description: 'Every fleet manager knows the anxiety of not knowing where you stand with FMCSA. SafetySync puts your safety metrics front and center—not as a report you pull monthly, but as a living dashboard you can act on today. Defects get tracked. Drivers get accountable. Your scores get better.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    align: 'left',
    features: ['Fleet Health Dashboard & KPIs', 'Smart Defect Tracking (Major vs Minor)', 'Driver Accountability & DVIR Tracking']
  },
  {
    name: 'Fleet Utilization Dashboard',
    tagline: 'Know Which Assets Earn—and Which Sit',
    description: 'That truck that seems busy might be running empty miles. That van that seems idle might be your most profitable unit. Fleet Utilization Dashboard shows you where your money actually goes—by vehicle, by driver, by route. No more gut feelings. Just clarity.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    align: 'right',
    features: ['Trip Metrics (Daily/Weekly/Monthly)', 'Heatmap Visualizations', 'Individual Device Drill-Downs']
  },
  {
    name: 'Driver Hub',
    tagline: 'Give Drivers the Visibility They\'re Asking For',
    description: 'The best drivers want to know how they\'re doing. The ones who need coaching often don\'t know they need it. Driver Hub shows each driver their own metrics—idle time, violations, efficiency scores—so improvement becomes self-directed, not confrontational.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
    align: 'left',
    features: ['Drive Time & Idle Time Metrics', 'Rule Violation Alerts (RPMs, Speeding)', 'Self-Correction Feedback Loop']
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-32 bg-midna-dark relative overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-12 mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-light text-white">
          Three Tools. One View of What Matters.
        </h2>
      </div>

      <div className="flex flex-col gap-0">
        {products.map((product, index) => (
          <div key={index} className="relative w-full group">
            {/* Background Image with diagonal clip */}
            <div className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105 z-0`}>
              <div className="absolute inset-0 bg-midna-dark/85 z-10"></div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale opacity-50"
              />
            </div>

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-6 lg:px-12 py-24 md:py-32">
              <div className={`flex ${product.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                
                <div className={`max-w-2xl p-8 md:p-12 backdrop-blur-md border border-white/5 bg-midna-charcoal/40 transition-all duration-500 hover:bg-midna-charcoal/60 ${product.align === 'right' ? 'md:-mr-12' : 'md:-ml-12'}`}>
                  <h3 className="text-midna-accent font-mono text-sm tracking-wider uppercase mb-4">
                    Product 0{index + 1}
                  </h3>
                  <h2 className="text-4xl md:text-5xl font-display text-white mb-2">
                    {product.name}
                  </h2>
                  <p className="text-xl text-white/80 font-light italic mb-8">
                    {product.tagline}
                  </p>
                  <p className="text-white/60 leading-relaxed mb-8 font-light">
                    {product.description}
                  </p>

                  <div className="mb-8 space-y-3">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/70 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-midna-blue" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-white hover:text-midna-accent transition-colors group/btn">
                    See It in Action
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
            
            {/* Separator Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-30"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;