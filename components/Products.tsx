import React from 'react';
import { ProductProps } from '../types';
import { CheckCircle2 } from 'lucide-react';

const products: (ProductProps & { features: string[] })[] = [
  {
    name: 'Compliance & Safety',
    tagline: 'Built for the Entire Operation',
    description: 'Every fleet manager knows the anxiety of not knowing where you stand with FMCSA. We build compliance and safety products that combine data from multiple sources—telematics, inspections, violations—into a single living system you can act on today. Track historical trends to see how your safety posture is improving over time, not just where it stands right now. Automated coaching workflows flag drivers who break rules, assign warnings, and track resolution—so nothing falls through the cracks.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    align: 'left',
    features: ['CSA Score Monitoring & Historical Trends', 'Multi-Source Data Integration', 'Automated Coaching Workflows & Escalations', 'Smart Defect Tracking & DVIR Accountability']
  },
  {
    name: 'Fleet Intelligence',
    tagline: 'Built for Fleet Managers',
    description: 'That truck that seems busy might be running empty miles. That van that seems idle might be your most profitable unit. We merge data sets that don\'t naturally come together—telematics, fuel, maintenance, operations—into intelligence layers that show fleet managers where their money actually goes. Dashboards built for historical trend analysis let you see how your fleet is improving over weeks, months, and quarters. AI-driven insights surface what needs attention for cost, retention, and safety—so managers act on clarity, not gut feelings.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    align: 'right',
    features: ['Cross-Platform Data Integration', 'Historical Trend Analysis & Reporting', 'AI-Powered Cost, Retention & Safety Insights', 'Custom Dashboards & Visualizations']
  },
  {
    name: 'Driver Experience',
    tagline: 'Built for the Driver',
    description: 'The best drivers want to know how they\'re doing. The ones who need coaching often don\'t know they need it. We build driver-facing tools that pull together performance data across multiple sources—giving drivers a complete view of their metrics, trends over time, and how they\'re improving. When automated coaching kicks in, drivers see exactly where they stand and what to correct—so improvement becomes self-directed, not confrontational.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
    align: 'left',
    features: ['Personal Performance Trends Over Time', 'Automated Coaching Status & Alerts', 'Multi-Source Driver Scorecards', 'Self-Correction Feedback Loops']
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-32 bg-midna-dark relative overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-12 mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-light text-white">
          We Build Products Around What Matters Most
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
                    0{index + 1}
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