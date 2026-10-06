import React from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Shield, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                TRIDENT <span className="text-orange-500">K9</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {BUSINESS_CONFIG.shortDesc}
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="text-orange-400 font-bold">Operational Area: </span>
              {BUSINESS_CONFIG.region}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#training" className="hover:text-orange-400 transition-colors">Training Services</a></li>
              <li><a href="#security" className="hover:text-orange-400 transition-colors">K9 Security</a></li>
              <li><a href="#breeds" className="hover:text-orange-400 transition-colors">Featured Breeds</a></li>
              <li><a href="#gallery" className="hover:text-orange-400 transition-colors">Action Gallery</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Client Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Canine Programs</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Puppy Training & Basic Obedience</li>
              <li>Advanced Off-Leash Obedience</li>
              <li>Dog Obedience Demonstrations</li>
              <li>Dog Squads for Security</li>
              <li>Plant Guarding & Industrial Security</li>
              <li>Perimeter Patrolling</li>
              <li>Tactical Scent & Area Tracking</li>
            </ul>
          </div>

          {/* Direct Contact Info (Real Clean Business Desk) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Support</h4>
            
            <div className="space-y-3 text-xs">
              {BUSINESS_CONFIG.phone && (
                <div className="flex items-center gap-2.5 text-slate-200">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <a href={`tel:${BUSINESS_CONFIG.phone.replace(/\s+/g, '')}`} className="hover:text-orange-400 transition-colors font-semibold">
                    {BUSINESS_CONFIG.phone}
                  </a>
                </div>
              )}

              {BUSINESS_CONFIG.email && (
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-orange-400 transition-colors">
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              )}

              {BUSINESS_CONFIG.address && (
                <div className="flex items-start gap-2.5 text-slate-400 leading-relaxed">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{BUSINESS_CONFIG.address}</span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500 text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1.5"
          >
            <span className="text-[11px] font-bold uppercase">Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
