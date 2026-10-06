import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function LightboxModal({ image, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-tactical-950/95 backdrop-blur-lg animate-in fade-in duration-200">
      
      {/* Top Bar with Close & Info */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="bg-tactical-900/90 border border-slate-700 px-4 py-2 rounded-lg pointer-events-auto backdrop-blur-md">
          <span className="text-xs font-semibold uppercase tracking-wider text-copper-400">
            {image.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-tactical-900/90 border border-slate-700 text-slate-300 hover:text-white hover:border-copper-400 pointer-events-auto transition-colors shadow-lg"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Left Arrow */}
      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-tactical-900/90 border border-slate-700 text-slate-300 hover:text-copper-400 hover:border-copper-400 transition-colors shadow-xl"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] w-full flex flex-col items-center justify-center">
        <img
          src={image.image}
          alt={image.title}
          className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-slate-800"
        />

        {/* Caption Card */}
        <div className="mt-4 text-center max-w-xl p-4 rounded-xl bg-tactical-900/90 border border-slate-800 backdrop-blur-md">
          <h4 className="font-display text-lg font-bold text-white mb-1">
            {image.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300">
            {image.caption}
          </p>
        </div>
      </div>

      {/* Navigation Right Arrow */}
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-tactical-900/90 border border-slate-700 text-slate-300 hover:text-copper-400 hover:border-copper-400 transition-colors shadow-xl"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

    </div>
  );
}
