import React from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppBubble() {
  const hasWhatsapp = Boolean(BUSINESS_CONFIG.whatsappRaw && BUSINESS_CONFIG.whatsappRaw.trim());

  if (!hasWhatsapp) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=Hi%20Trident%20K9%20team,%20I%20would%20like%20to%20inquire%20about%20dog%20training%20and%20K9%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/30"
        title="Chat with Trident K9 on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          WhatsApp Desk
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
      </a>
    </div>
  );
}
