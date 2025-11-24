import React from 'react';
import Card from './Card';
import { GitBranch, BarChart3 } from 'lucide-react';

const WhatWeBuild = () => {
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
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6 text-balance">
            What We Build
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            End-to-end data engineering solutions designed to transform your data infrastructure from raw inputs to actionable insights.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-charcoal mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;

