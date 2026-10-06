import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/k9Data';
import LightboxModal from './LightboxModal';
import { ZoomIn } from 'lucide-react';

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = ['All', 'Obedience', 'Security', 'Breeds'];

  const filteredImages = activeTab === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category.toLowerCase() === activeTab.toLowerCase());

  const handleOpenLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrevImage = () => {
    if (activeLightboxIndex > 0) {
      setActiveLightboxIndex(activeLightboxIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (activeLightboxIndex < filteredImages.length - 1) {
      setActiveLightboxIndex(activeLightboxIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-orange-600">Action Gallery</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Training & K9 <span className="text-orange-600">Action Photos</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Explore facility training drills, perimeter patrolling operations, and working breed displays in action.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setActiveLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6-Grid Gallery Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <LightboxModal
          image={filteredImages[activeLightboxIndex]}
          onClose={handleCloseLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          hasPrev={activeLightboxIndex > 0}
          hasNext={activeLightboxIndex < filteredImages.length - 1}
        />
      )}

    </section>
  );
}
