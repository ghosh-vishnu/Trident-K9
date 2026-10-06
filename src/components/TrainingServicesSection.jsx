import React from 'react';
import { TRAINING_SERVICES } from '../data/k9Data';
import { Dog, Award, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function TrainingServicesSection({ onSelectService }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Dog': return Dog;
      case 'Award': return Award;
      case 'Sparkles': return Sparkles;
      default: return Dog;
    }
  };

  return (
    <section id="training" className="py-20 lg:py-28 bg-white relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-orange-600">Canine Education</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Professional <span className="text-orange-600">Training Services</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              From early puppy socialization to precision off-leash obedience and live public demonstrations, our programs build lifelong canine discipline.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200 px-4 py-2.5 rounded-xl">
              Kennel & On-Site Programs
            </span>
          </div>
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINING_SERVICES.map((service) => {
            const IconComp = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-orange-400 hover:bg-white transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1.5 group"
              >
                <div className="p-6 sm:p-8 pb-4">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <div className="text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200 font-medium">
                    Program Duration: <strong className="text-slate-900">{service.duration}</strong>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-2.5 border-t border-slate-200 pt-4">
                    <div className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">Program Curriculum:</div>
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3.5 px-4 rounded-xl bg-white border border-slate-300 hover:border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Enquire For Program</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
