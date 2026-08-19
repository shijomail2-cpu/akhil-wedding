import React, { useState } from 'react';
import OpeningEnvelope from './components/OpeningEnvelope';
import MusicPlayer from './components/MusicPlayer';
import FallingPetals from './components/FallingPetals';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlessingsSection from './components/BlessingsSection';
import Countdown from './components/Countdown';
import CoupleSection from './components/CoupleSection';
import EventItinerary from './components/EventItinerary';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import InvitationCardsModal from './components/InvitationCardsModal';

export default function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsPlayingMusic(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#2C2623] font-sans selection:bg-[#C5A059]/20 selection:text-[#8B263E] overflow-x-hidden">
      {/* Falling Flower Petals Animation */}
      <FallingPetals />

      {/* Physical Letter Cover Opening Overlay */}
      <OpeningEnvelope onOpen={handleEnvelopeOpen} />

      {/* Floating Audio Player ("Ed Sheeran - Perfect") */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        onTogglePlay={() => setIsPlayingMusic(!isPlayingMusic)}
      />

      {/* Navigation Header */}
      <Navbar onOpenCardModal={() => setIsCardModalOpen(true)} />

      {/* Main Page Layout */}
      <main>
        {/* 1. Hero Cover Header with Couple Portrait & Engagement First */}
        <Hero onOpenCardModal={() => setIsCardModalOpen(true)} />

        {/* 2. Solacing Blessings / Scripture Quote */}
        <BlessingsSection />

        {/* 3. Live Event Countdown Clock (Engagement First) */}
        <Countdown />

        {/* 4. Groom & Bride Profiles (Parents & Family Info) */}
        <CoupleSection />

        {/* 5. Event Itinerary (Engagement Details First) */}
        <EventItinerary />

        {/* 6. Memories & Photo Gallery */}
        <PhotoGallery />
      </main>

      {/* 7. Footer with WhatsApp Share */}
      <Footer onOpenCardModal={() => setIsCardModalOpen(true)} />

      {/* Official Invitation Cards Lightbox Modal */}
      <InvitationCardsModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
      />
    </div>
  );
}
