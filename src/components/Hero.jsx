import React from 'react';
import Button from './Button';
import { ArrowRight, Zap, TrendingUp, Database, GitBranch, BarChart3, Workflow } from 'lucide-react';
import heroImage from '../assets/MindaPage1.webp';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-purple-50/30 overflow-hidden pt-20">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/60 shadow-sm">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-600">Data Engineering Solutions</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
              Transform Your Data Into Powerful Insights
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
              We build scalable ETL pipelines, automate data workflows, and deliver real-time dashboards that transform raw data into actionable insights for smarter business decisions.
            </p>
            
            {/* Button */}
            <div>
              <Button variant="primary" icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />} className="text-sm sm:text-base">
                Get Started
              </Button>
            </div>

            {/* Data Flow - Horizontal */}
            <div className="pt-6 sm:pt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Node 1 - Data Source */}
                  <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 flex-1 min-w-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                      <Database className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-[10px] sm:text-xs truncate">Data Sources</div>
                      <div className="text-[9px] sm:text-[10px] text-gray-600 truncate">Multiple inputs</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />

                  {/* Node 2 - ETL Process */}
                  <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200 flex-1 min-w-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                      <GitBranch className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-[10px] sm:text-xs truncate">ETL Pipeline</div>
                      <div className="text-[9px] sm:text-[10px] text-gray-600 truncate">Transform</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />

                  {/* Node 3 - Analytics */}
                  <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 flex-1 min-w-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                      <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-[10px] sm:text-xs truncate">Dashboards</div>
                      <div className="text-[9px] sm:text-[10px] text-gray-600 truncate">Insights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Hero Image */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Image Container */}
            <div className="relative rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <img 
                src={heroImage} 
                alt="Data Engineering Dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Badge - Top Left */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white rounded-lg sm:rounded-xl shadow-xl p-2 sm:p-3 border border-gray-100 flex items-center gap-1.5 sm:gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-gray-600">Real-time</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-900">Data Sync</div>
              </div>
            </div>

            {/* Floating Badge - Bottom Right */}
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-lg sm:rounded-xl shadow-xl p-2 sm:p-3 border border-gray-100 flex items-center gap-1.5 sm:gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-gray-600">Automated</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-900">Workflows</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

