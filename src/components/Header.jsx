import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Shield, Menu, X, ChevronRight, Phone, MessageSquare, Award, Clock } from 'lucide-react';

export default function Header({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const hasPhone = Boolean(BUSINESS_CONFIG.phone && BUSINESS_CONFIG.phone.trim());
  const hasWhatsapp = Boolean(BUSINESS_CONFIG.whatsappRaw && BUSINESS_CONFIG.whatsappRaw.trim());

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Training Services', href: '#training' },
    { name: 'K9 Security', href: '#security' },
    { name: 'Featured Breeds', href: '#breeds' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-xs text-slate-300 py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center text-amber-400 font-medium">
              <Award className="w-3.5 h-3.5 mr-1.5 shrink-0" />
              <span className="truncate max-w-[160px] sm:max-w-none">{BUSINESS_CONFIG.region}</span>
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline text-slate-300 items-center">
              <Clock className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
              {BUSINESS_CONFIG.hours}
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {hasPhone ? (
              <a
                href={`tel:${BUSINESS_CONFIG.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center text-slate-200 hover:text-amber-400 transition-colors font-semibold"
                title="Call Trident K9 Desk"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-400 shrink-0" />
                <span className="text-[11px] sm:text-xs">{BUSINESS_CONFIG.phone}</span>
              </a>
            ) : null}

            {hasWhatsapp ? (
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                <span>WhatsApp Desk</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`relative transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md py-3 border-b border-slate-200'
            : 'bg-white py-3.5 border-b border-slate-100 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 sm:gap-3 group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <span className="block font-display text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                TRIDENT <span className="text-orange-600">K9</span>
              </span>
              <span className="block text-[9px] sm:text-[10px] tracking-wider uppercase text-slate-500 font-semibold">
                Training & Security Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (>= 1024px) */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA (>= 1024px) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => {
                const contactSec = document.querySelector('#contact');
                if (contactSec) {
                  contactSec.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5"
            >
              <span>Enquire Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile & Tablet Toggle (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-orange-600 hover:bg-slate-200 border border-slate-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Modal */}
        {isMobileMenuOpen && (
          <>
            {/* Dark semi-transparent backdrop to block page content behind */}
            <div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Completely Opaque, Solid White Mobile Drawer Menu */}
            <div className="fixed top-[calc(100%)] left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-2xl px-5 py-6 max-h-[calc(100vh-100px)] overflow-y-auto lg:hidden">
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-semibold text-slate-800 hover:text-orange-600 hover:bg-orange-50/60 px-3 py-3 rounded-xl transition-colors flex items-center justify-between border-b border-slate-100 last:border-0"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}

                {/* Mobile Quick Contact Badges */}
                <div className="pt-4 pb-2 border-t border-slate-200 grid grid-cols-2 gap-2.5">
                  {hasPhone && (
                    <a
                      href={`tel:${BUSINESS_CONFIG.phone.replace(/\s+/g, '')}`}
                      className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-orange-600" />
                      <span>Direct Call</span>
                    </a>
                  )}

                  {hasWhatsapp && (
                    <a
                      href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>

                {/* Enquire Now Action Button */}
                <div className="pt-2">
                  <button
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full text-center py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl shadow-md transition-all active:scale-95"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
