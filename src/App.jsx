import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FriendlyProgramFinder from './components/FriendlyProgramFinder';
import AboutSection from './components/AboutSection';
import TrainingServicesSection from './components/TrainingServicesSection';
import SecurityServicesSection from './components/SecurityServicesSection';
import BreedShowcase from './components/BreedShowcase';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';

export default function App() {
  const [selectedServicePreset, setSelectedServicePreset] = useState('');

  const scrollToSection = (sectionId) => {
    const el = document.querySelector(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedServicePreset(serviceTitle);
    scrollToSection('#contact');
  };

  const handleSelectBreed = (breedName) => {
    setSelectedServicePreset(`${breedName} - Inquiry`);
    scrollToSection('#contact');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Header Navigation */}
      <Header onOpenContact={() => scrollToSection('#contact')} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (Warm, Friendly & Welcoming) */}
        <Hero
          onExploreClick={() => scrollToSection('#training')}
          onEnquireClick={() => scrollToSection('#contact')}
        />

        {/* 2. Interactive Program Matcher */}
        <FriendlyProgramFinder onSelectProgram={handleSelectService} />

        {/* 3. About Section & Methodology */}
        <AboutSection />

        {/* 4. Professional Training Services */}
        <TrainingServicesSection onSelectService={handleSelectService} />

        {/* 5. K9 Security Squads */}
        <SecurityServicesSection onSelectService={handleSelectService} />

        {/* 6. Featured Working Breeds & Comparison Matrix */}
        <BreedShowcase onSelectBreed={handleSelectBreed} />

        {/* 7. Action Photo Gallery */}
        <GallerySection />

        {/* 8. Contact Section */}
        <ContactSection
          selectedServicePreset={selectedServicePreset}
          onClearServicePreset={() => setSelectedServicePreset('')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Clean WhatsApp Quick Action Button */}
      <WhatsAppBubble />

    </div>
  );
}
