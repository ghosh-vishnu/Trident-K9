import React, { useState } from 'react';
import { FEATURED_BREEDS } from '../data/k9Data';
import BreedComparisonMatrix from './BreedComparisonMatrix';
import { Shield, Info, X, Check } from 'lucide-react';

export default function BreedShowcase({ onSelectBreed }) {
  const [selectedBreedModal, setSelectedBreedModal] = useState(null);

  return (
    <section id="breeds" className="py-20 lg:py-28 bg-sand-50 text-slate-900 relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-copper-700 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Featured Working Breeds</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Canine Excellence Showcase
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We train, condition, and handle five premier working breeds known for intelligence, nerve clarity, athletic power, and protective instincts.
          </p>
        </div>

        {/* 5-Breed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_BREEDS.map((breed) => (
            <div
              key={breed.id}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-soft-card flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-copper-400 group"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-900/90 text-white px-3 py-1 rounded-full backdrop-blur-md">
                      {breed.country} • {breed.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-copper-600 transition-colors">
                    {breed.name}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {breed.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Traits:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {breed.traits.map((trait, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md border border-slate-200"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Primary Roles:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {breed.roles.map((role, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-orange-50 text-copper-700 font-bold px-2 py-0.5 rounded border border-orange-200"
                        >
                          ✓ {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedBreedModal(breed)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 border border-slate-200 hover:border-copper-500 hover:bg-copper-600 hover:text-white text-slate-800 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  <span>View Breed Profile</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Feature 2: Interactive Breed Comparison Score Matrix */}
        <BreedComparisonMatrix onSelectBreed={(bName) => onSelectBreed(bName)} />

      </div>

      {/* Breed Modal */}
      {selectedBreedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedBreedModal(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video">
              <img
                src={selectedBreedModal.image}
                alt={selectedBreedModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <span className="text-xs uppercase font-bold text-orange-400 bg-slate-950/80 px-3 py-1 rounded-md">
                  {selectedBreedModal.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {selectedBreedModal.name}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-slate-700 text-sm leading-relaxed">
                {selectedBreedModal.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-sand-50 border border-slate-200">
                  <div className="text-xs font-bold text-copper-700 uppercase tracking-wider mb-2">Traits & Temperament</div>
                  <ul className="space-y-1 text-xs text-slate-700 font-medium">
                    {selectedBreedModal.traits.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-copper-600" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-sand-50 border border-slate-200">
                  <div className="text-xs font-bold text-copper-700 uppercase tracking-wider mb-2">Suitable Deployment</div>
                  <ul className="space-y-1 text-xs text-slate-700 font-medium">
                    {selectedBreedModal.roles.map((r, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-copper-600" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => {
                    const breedName = selectedBreedModal.name;
                    setSelectedBreedModal(null);
                    if (onSelectBreed) onSelectBreed(breedName);
                  }}
                  className="px-6 py-3 bg-copper-600 hover:bg-copper-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
                >
                  Enquire For {selectedBreedModal.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
