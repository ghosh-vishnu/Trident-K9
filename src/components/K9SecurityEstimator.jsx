import React, { useState } from 'react';
import { Calculator, Shield, ArrowRight } from 'lucide-react';

export default function K9SecurityEstimator({ onApplyEstimate }) {
  const [propertyType, setPropertyType] = useState('Industrial Plant');
  const [propertySize, setPropertySize] = useState('5-20 Acres');
  const [shiftType, setShiftType] = useState('24/7 Operations');

  const getRecommendation = () => {
    let squadUnits = 1;
    let handlers = 2;
    let primaryBreed = 'German Shepherd';
    let patrolFreq = 'Every 45 minutes';

    if (propertySize === '5-20 Acres') {
      squadUnits = 2;
      handlers = 3;
      primaryBreed = 'Belgian Shepherd (Malinois)';
      patrolFreq = 'Every 30 minutes';
    } else if (propertySize === '20+ Acres') {
      squadUnits = 4;
      handlers = 6;
      primaryBreed = 'Doberman Pinscher / Malinois';
      patrolFreq = 'Continuous Roving Patrol';
    }

    if (propertyType === 'Solar Farm' || propertyType === 'Warehouse') {
      patrolFreq += ' + Scent Boundary Checks';
    }

    return { squadUnits, handlers, primaryBreed, patrolFreq };
  };

  const rec = getRecommendation();

  const handleApply = () => {
    const summary = `Estimated Deployment for ${propertyType} (${propertySize}, ${shiftType}): ${rec.squadUnits} K9 Unit(s), ${rec.handlers} Handler(s), Breed Preference: ${rec.primaryBreed}.`;
    onApplyEstimate(summary);
  };

  return (
    <div className="my-16 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md relative overflow-hidden">
      
      <div className="relative z-10">
        
        {/* Widget Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5 text-orange-600" />
              <span>Deployment Calculator</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              K9 Squad & Perimeter Density Calculator
            </h3>
          </div>
          <span className="text-xs text-slate-500 max-w-xs text-left sm:text-right">
            Select site parameters to compute optimal handler-to-K9 deployment density.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                1. Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {['Industrial Plant', 'Solar Farm', 'Warehouse', 'Commercial Hub', 'Private Estate'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPropertyType(type)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      propertyType === type
                        ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Property Size */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                2. Land Area / Perimeter Size
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {['Under 5 Acres', '5-20 Acres', '20+ Acres'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setPropertySize(size)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      propertySize === size
                        ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Shift Type */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                3. Deployment Schedule
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {['Night Shift (12 hrs)', '24/7 Operations'].map((shift) => (
                  <button
                    key={shift}
                    type="button"
                    onClick={() => setShiftType(shift)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      shiftType === shift
                        ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {shift}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Dynamic Result Output Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-5 shadow-sm relative">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Calculated Deployment Recommendation
                </span>
                <Shield className="w-5 h-5 text-orange-600" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">K9 Squad Units</div>
                  <div className="text-lg font-extrabold text-slate-900 mt-1">{rec.squadUnits} Active Team(s)</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Certified Handlers</div>
                  <div className="text-lg font-extrabold text-slate-900 mt-1">{rec.handlers} Handlers</div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-500 font-medium">Recommended Breed:</span>
                  <span className="text-slate-900 font-bold">{rec.primaryBreed}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-500 font-medium">Patrol Interval:</span>
                  <span className="text-slate-900 font-bold">{rec.patrolFreq}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleApply}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Request Quote For This Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
