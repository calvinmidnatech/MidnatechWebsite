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

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/60 shadow-sm">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Data Engineering Solutions</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
              Transform Your Data Into Powerful Insights
            </h1>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
              We build scalable ETL pipelines, automate data workflows, and deliver real-time dashboards that transform raw data into actionable insights for smarter business decisions.
            </p>
            
            {/* Button */}
            <div>
              <Button variant="primary" icon={<ArrowRight className="w-5 h-5" />}>
                Get Started
              </Button>
            </div>

            {/* Data Flow - Horizontal */}
            <div className="pt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  {/* Node 1 - Data Source */}
                  <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 flex-1">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                      <Database className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-xs">Data Sources</div>
                      <div className="text-[10px] text-gray-600">Multiple inputs</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />

                  {/* Node 2 - ETL Process */}
                  <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200 flex-1">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                      <GitBranch className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-xs">ETL Pipeline</div>
                      <div className="text-[10px] text-gray-600">Transform</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />

                  {/* Node 3 - Analytics */}
                  <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 flex-1">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-xs">Dashboards</div>
                      <div className="text-[10px] text-gray-600">Insights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Hero Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <img 
                src={heroImage} 
                alt="Data Engineering Dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Badge - Top Left */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100 flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600">Real-time</div>
                <div className="text-sm font-semibold text-gray-900">Data Sync</div>
              </div>
            </div>

            {/* Floating Badge - Bottom Right */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100 flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600">Automated</div>
                <div className="text-sm font-semibold text-gray-900">Workflows</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

