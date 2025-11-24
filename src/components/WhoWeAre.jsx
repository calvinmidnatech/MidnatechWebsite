import React from 'react';
import Card from './Card';
import { Truck, Shield, Lightbulb } from 'lucide-react';
import missionImage from '../assets/ourmission.jpg';

const WhoWeAre = () => {
  const values = [
    {
      icon: Truck,
      title: 'Telematics Expertise',
      description: 'With over 10 years of industry experience, we specialize in vehicle data processing, GPS tracking, fleet management, and IoT sensor integration for the telematics sector.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We deliver robust, scalable solutions that organizations can depend on, backed by 99.9% uptime guarantees and comprehensive support.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We leverage cutting-edge tools and methodologies to solve complex data challenges efficiently and stay ahead of industry trends.'
    }
  ];

  return (
    <section id="who-we-are" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6 text-balance">
            Who We Are
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            MidnaTech is a specialized data transformation and analytics company. We help organizations organize, clean, and activate their data through proven automation and engineering best practices.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index}>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Our Mission Section */}
        <div className="bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-blue-50/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-blue-200/50 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="flex-shrink-0 w-full sm:w-auto">
              <img 
                src={missionImage} 
                alt="Our Mission - Team collaboration" 
                className="w-full sm:w-56 md:w-64 lg:w-80 h-56 sm:h-56 md:h-64 lg:h-80 object-cover rounded-xl sm:rounded-2xl shadow-xl mx-auto sm:mx-0"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3 sm:mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-base sm:text-lg">
                We believe every organization deserves access to clean, organized data that drives intelligent decision-making. Our team brings decades of combined experience from leading technology companies, helping businesses of all sizes unlock the full potential of their data.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Founded by data engineers who have scaled systems handling petabytes of data, we understand the unique challenges of building robust data infrastructure. We're passionate about making enterprise-grade data solutions accessible to organizations at every stage of growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

