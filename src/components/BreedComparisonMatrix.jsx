import React, { useState } from 'react';
import { FEATURED_BREEDS } from '../data/k9Data';
import { Layers, Shield, Award, Check } from 'lucide-react';

export default function BreedComparisonMatrix({ onSelectBreed }) {
  const [activeMetric, setActiveMetric] = useState('intelligence');

  const metricLabels = {
    intelligence: 'Intelligence & Trainability',
    guardDrive: 'Guard & Defense Drive',
    agility: 'Speed & Physical Agility',
    temperament: 'Stability & Household Temperament'
  };

  return (
    <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-soft-card">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-copper-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Breed Matrix</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Working Breed Performance Comparison
          </h3>
        </div>

        {/* Metric Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {Object.keys(metricLabels).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveMetric(key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeMetric === key
                  ? 'bg-copper-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {key === 'intelligence' ? 'Intelligence' : key === 'guardDrive' ? 'Guard Drive' : key === 'agility' ? 'Agility' : 'Temperament'}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Score Bars */}
      <div className="space-y-5">
        {FEATURED_BREEDS.map((breed) => {
          const score = breed.scores[activeMetric];
          return (
            <div key={breed.id} className="p-4 rounded-2xl bg-sand-50 border border-slate-200 hover:border-copper-400 transition-all">
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-900 text-sm sm:text-base">{breed.name}</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase px-2.5 py-0.5 rounded bg-slate-200">{breed.category}</span>
                </div>
                <span className="font-display font-extrabold text-copper-600 text-sm sm:text-base">{score} / 100</span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-copper-600 to-copper-400 rounded-full transition-all duration-700"
                  style={{ width: `${score}%` }}
                ></div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {breed.roles.map((r, idx) => (
                  <span key={idx} className="text-[11px] text-slate-600 font-medium">
                    ✓ {r}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
