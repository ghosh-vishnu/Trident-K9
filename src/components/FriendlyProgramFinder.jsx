import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FriendlyProgramFinder({ onSelectProgram }) {
  const [selectedCategory, setSelectedCategory] = useState('family');

  const categories = [
    {
      id: 'family',
      label: 'Puppy & Family Pet',
      emoji: '🐶',
      badge: 'Gentle & Family-Friendly',
      title: 'Puppy Obedience & Household Manners',
      description: 'Ideal for puppies aged 2-8 months or family dogs that pull on leash, jump on guests, or need gentle positive reinforcement.',
      perks: [
        'Positive reinforcement & crate guidance',
        'Leash manners & reliable sit/stay/come commands',
        'Kid-safe socialization & play habits'
      ],
      recommendedService: 'Puppy Training & Basic Obedience'
    },
    {
      id: 'advanced',
      label: 'Adult Dog Discipline',
      emoji: '🐕',
      badge: 'Reliable Control',
      title: 'Advanced Off-Leash Canine Obedience',
      description: 'For energetic adult dogs needing high-distraction recall, distance commands, heel discipline, and off-leash freedom.',
      perks: [
        'Solid recall under high-distraction environments',
        'Controlled boundary & gate manners',
        'Physical agility & focus conditioning'
      ],
      recommendedService: 'Advanced Off-Leash Obedience'
    },
    {
      id: 'security',
      label: 'Site & Asset Security',
      emoji: '🛡️',
      badge: 'Enterprise Security',
      title: '24/7 K9 Handler Squads & Industrial Guarding',
      description: 'Engineered for factories, solar plants, commercial warehouses, and large perimeters requiring deterrence and active night patrolling.',
      perks: [
        'Certified K9 handler teams deployed on shifts',
        'Intrusion deterrence & perimeter patrol',
        'Logbook tracking & rapid threat deterrence'
      ],
      recommendedService: 'Industrial Plant Guarding'
    }
  ];

  const currentOption = categories.find((c) => c.id === selectedCategory) || categories[0];

  return (
    <section className="py-12 bg-slate-50/80 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Quick Match Tool</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Find the Perfect Program for Your Dog
            </h3>
            <p className="text-slate-600 text-sm">
              Select your goal below to get an instant tailored recommendation:
            </p>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3.5 ${
                    isSelected
                      ? 'bg-orange-50/80 border-orange-400 text-slate-900 shadow-sm ring-1 ring-orange-300'
                      : 'bg-slate-50/60 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/60'
                  }`}
                >
                  <span className="text-3xl">
                    {cat.emoji}
                  </span>
                  <div>
                    <span className={`block text-xs font-bold ${isSelected ? 'text-orange-600' : 'text-slate-900'}`}>
                      {cat.label}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {cat.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Category Spotlight */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                <span>Recommended Match:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800">
                  {currentOption.badge}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                {currentOption.title}
              </h4>

              <p className="text-slate-600 text-sm leading-relaxed">
                {currentOption.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                {currentOption.perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-3 pt-2 lg:pt-0">
              <button
                onClick={() => onSelectProgram(currentOption.recommendedService)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Select This Program</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-[11px] text-slate-500">
                ✨ Free phone evaluation included
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
