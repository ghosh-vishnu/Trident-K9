import React from 'react';
import { ABOUT_DATA, METHODOLOGY_STEPS } from '../data/k9Data';
import { Shield, Zap, Award, Activity } from 'lucide-react';

export default function AboutSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Shield': return Shield;
      case 'Zap': return Zap;
      case 'Award': return Award;
      case 'Activity': return Activity;
      default: return Shield;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-sand-50 text-slate-900 relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-copper-700 text-xs font-bold uppercase tracking-wider">
            <span>{ABOUT_DATA.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {ABOUT_DATA.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {ABOUT_DATA.description}
          </p>
        </div>

        {/* 4-Column Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ABOUT_DATA.highlights.map((item, idx) => {
            const IconComp = getIcon(item.icon);
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft-card hover:border-copper-500 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-copper-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-copper-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 4-Step Methodology */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-copper-600">Structured Methodology</span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Our 4-Step K9 Development Pathway
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((stepItem) => (
              <div
                key={stepItem.step}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-copper-400 transition-colors"
              >
                <div className="font-display text-3xl font-black text-copper-600 mb-3">
                  {stepItem.step}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {stepItem.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
