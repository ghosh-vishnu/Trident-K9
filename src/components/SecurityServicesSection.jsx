import React from 'react';
import { SECURITY_SERVICES } from '../data/k9Data';
import K9SecurityEstimator from './K9SecurityEstimator';
import { ShieldAlert, Building2, Footprints, Search, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SecurityServicesSection({ onSelectService }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert': return ShieldAlert;
      case 'Building2': return Building2;
      case 'Footprints': return Footprints;
      case 'Search': return Search;
      default: return ShieldAlert;
    }
  };

  return (
    <section id="security" className="py-20 lg:py-28 bg-slate-50 relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            <span>Industrial & Asset Security</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            High-Vigilance <span className="text-orange-600">K9 Security Squads</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Deployable handler + K9 security units for 24/7 protection of manufacturing plants, solar farms, warehouses, perimeter boundaries, and asset tracking.
          </p>
        </div>

        {/* 2x2 Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SECURITY_SERVICES.map((sec) => {
            const IconComp = getIcon(sec.icon);
            return (
              <div
                key={sec.id}
                className="rounded-2xl bg-white border border-slate-200 hover:border-orange-400 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200">
                      Tactical Deployment
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {sec.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {sec.shortDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    {sec.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span className="block font-semibold">Ideal Deployment:</span>
                    <span className="text-slate-900 font-medium">{sec.idealFor}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(sec.title)}
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-700 hover:text-white py-2.5 px-4 rounded-lg bg-orange-50 hover:bg-orange-600 border border-orange-200 hover:border-orange-600 transition-colors"
                  >
                    <span>Request Squad</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Estimator Widget */}
        <K9SecurityEstimator onApplyEstimate={(estimateSummary) => onSelectService(estimateSummary)} />

      </div>
    </section>
  );
}
