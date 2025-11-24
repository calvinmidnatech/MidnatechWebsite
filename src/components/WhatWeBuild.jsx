import React from 'react';
import { GitBranch, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FeatureCard from './FeatureCard';

const WhatWeBuild = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const features = [
    {
      icon: GitBranch,
      title: 'ETL Pipelines',
      description: 'We design and implement robust Extract, Transform, Load (ETL) pipelines that automate data movement and transformation, complete with intelligent scheduling and comprehensive error recovery mechanisms.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboards',
      description: 'We create intuitive, real-time dashboards that transform complex datasets into clear, actionable business insights through powerful visualizations and interactive analytics.'
    }
  ];

  return (
    <section id="what-we-build" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-10 sm:mb-12 lg:mb-16 fade-in-up ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6 text-balance">
            What We Build
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            End-to-end data engineering solutions designed to transform your data infrastructure from raw inputs to actionable insights.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {features.map((feature, index) => {
            const delayClass = index === 0 ? 'delay-200' : 'delay-300';
            return (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={delayClass}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;

