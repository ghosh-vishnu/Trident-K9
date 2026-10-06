import React from 'react';
import { HERO_DATA } from '../data/k9Data';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Shield, ArrowRight, CheckCircle2, Award, Heart } from 'lucide-react';

export default function Hero({ onExploreClick, onEnquireClick }) {
  return (
    <section id="hero" className="relative pt-32 pb-14 sm:pt-36 lg:pt-40 lg:pb-24 flex items-center bg-gradient-to-b from-amber-50/40 via-white to-slate-50 overflow-hidden">
      
      {/* Subtle decorative background glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-[11px] sm:text-xs font-bold tracking-wide shadow-sm">
              <span className="text-base">🐾</span>
              <span>Gentle Family Pet Manners & 🛡️ Certified K9 Security</span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.18] sm:leading-[1.15]">
              Expert Dog Training & <span className="text-orange-600">K9 Security</span> Services
            </h1>

            {/* User-friendly Trust Rating */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex text-amber-500 text-base">
                {'★★★★★'}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                <strong className="text-orange-600">4.9/5 Rating</strong> from 350+ Happy Dog Parents & Corporate Clients
              </span>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {HERO_DATA.subheadline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Puppy Socialization & Off-Leash Manners',
                'Certified K9 Handlers & 24/7 Security Squads',
                'Perimeter Patrolling & Industrial Site Guarding',
                'German Shepherd, Malinois & Doberman Programs'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onEnquireClick}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-semibold uppercase tracking-wider text-slate-700 bg-white border border-slate-300 hover:border-orange-500 hover:text-orange-600 rounded-xl shadow-sm hover:shadow transition-all duration-300"
              >
                <span>Explore Programs</span>
              </button>
            </div>

          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-3 shadow-xl group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=1000&q=80"
                  alt="German Shepherd K9 training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-slate-200/90 backdrop-blur-md shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-orange-600">Canine Excellence</div>
                      <div className="text-xs text-slate-600 font-medium">Positive reinforcement & controlled obedience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 gap-4">
              {BUSINESS_CONFIG.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="font-display text-lg sm:text-xl font-extrabold text-orange-600">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
