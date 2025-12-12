import React from 'react';
import { PillarProps } from '../types';
import { Network, BrainCircuit, Activity, ShieldCheck } from 'lucide-react';

const pillars: PillarProps[] = [
  {
    number: '01',
    title: 'See Driver Problems Before They Cost You',
    description: 'Most fleets discover risky driving after an incident. MidnaTech flags patterns—excessive idling, hard braking, speeding trends—before they become claims or terminations.',
    colorClass: 'text-midna-blue'
  },
  {
    number: '02',
    title: 'Stop Guessing About Utilization',
    description: 'Which vehicles are earning their keep? Which drivers are stretched thin? MidnaTech answers questions you didn\'t know you should be asking—backed by real numbers.',
    colorClass: 'text-midna-lavender'
  },
  {
    number: '03',
    title: 'Maintenance That Prevents, Not Reacts',
    description: 'Unplanned downtime costs more than repairs. Our health monitoring catches issues at the warning-light stage, not the tow-truck stage.',
    colorClass: 'text-midna-accent'
  },
  {
    number: '04',
    title: 'Compliance Without the Panic',
    description: 'FMCSA audits shouldn\'t mean all-nighters. MidnaTech keeps your safety scores visible, your DVIRs organized, and your documentation audit-ready.',
    colorClass: 'text-emerald-400'
  }
];

const Specialization: React.FC = () => {
  return (
    <section id="specialization" className="py-32 bg-midna-charcoal relative overflow-hidden">
      {/* Background abstract shape */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-gradient-to-r from-midna-violet/10 via-midna-blue/5 to-transparent skew-y-3 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-light text-white mb-6">
            What Changes When Your Data Starts Working
          </h2>
          <p className="text-xl text-white/60 max-w-2xl font-light">
             The difference between data you have and data you use. Here's what MidnaTech actually delivers.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-midna-accent to-transparent mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-white/10 border-t border-b border-white/10">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group relative p-8 lg:p-12 hover:bg-white/5 transition-colors duration-500 min-h-[400px] flex flex-col justify-between"
            >
              <div>
                <span className={`block text-6xl font-display font-thin mb-8 opacity-40 group-hover:opacity-100 transition-opacity ${pillar.colorClass}`}>
                  {pillar.number}
                </span>
                <h3 className="text-2xl font-display font-medium text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Icon appearing on hover */}
              <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {index === 0 && <Network className="w-8 h-8 text-white/80" />}
                {index === 1 && <BrainCircuit className="w-8 h-8 text-white/80" />}
                {index === 2 && <Activity className="w-8 h-8 text-white/80" />}
                {index === 3 && <ShieldCheck className="w-8 h-8 text-white/80" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialization;