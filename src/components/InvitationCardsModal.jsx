import React, { useState } from 'react';
import { X, Download, ZoomIn, Sparkles, Heart, Phone } from 'lucide-react';

export default function InvitationCardsModal({ isOpen, onClose }) {
  const [activeCard, setActiveCard] = useState('engagement'); // 'engagement' first, then 'wedding'
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  const cardData = {
    engagement: {
      title: 'Official Engagement Invitation Card',
      date: 'Saturday, 5th September 2026',
      image: '/images/engagement-invitation-card.jpg',
      filename: 'Akhil_Josna_Engagement_Invitation_Card.jpg',
      bestWishes: 'IZZA MARIYA & FAMILY',
      contactName: 'Nithin Joshy',
      contactPhone: '+91 70511 86617',
    },
    wedding: {
      title: 'Official Wedding Invitation Card',
      date: 'Saturday, 12th September 2026',
      image: '/images/wedding-invitation-card.jpg',
      filename: 'Akhil_Josna_Wedding_Invitation_Card.jpg',
      bestWishes: 'ANJU & SRAVAN, SWARA SRAVAN, ANNAMA',
      contactName: null,
      contactPhone: null,
    },
  };

  const current = cardData[activeCard];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 md:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-3xl shadow-2xl border-2 border-[#C5A059] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Header Controls */}
        <div className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-[#C5A059]/30 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B263E]" />
            <h3 className="font-cinzel text-xs sm:text-base font-bold text-[#8B263E] uppercase tracking-wider">
              Official Invitation Cards
            </h3>
          </div>

          {/* Single Clean Close Button */}
          <button
            onClick={onClose}
            className="p-2 sm:px-3 rounded-full bg-[#8B263E] text-white hover:bg-[#A11F3C] transition-colors shadow-md flex items-center justify-center gap-1.5 text-xs font-cinzel uppercase cursor-pointer border border-[#E5C384]/40"
            title="Close Modal"
            aria-label="Close Modal"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
            <span className="text-[11px] font-bold hidden sm:inline">Close</span>
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-4 md:p-6 overflow-y-auto space-y-6">
          {/* Tab Switcher (Engagement First, Wedding Second) */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-md mx-auto">
            <button
              onClick={() => setActiveCard('engagement')}
              className={`w-full sm:w-auto py-3 px-6 rounded-full font-cinzel text-xs uppercase tracking-wider transition-all font-bold cursor-pointer flex items-center justify-center gap-2 border-2 ${
                activeCard === 'engagement'
                  ? 'bg-[#593275] text-white border-[#593275] shadow-lg scale-[1.02]'
                  : 'bg-white text-[#593275] border-[#593275]/50 hover:bg-[#593275] hover:text-white'
              }`}
            >
              <span>✨ Show Engagement Card</span>
              {activeCard === 'engagement' && <span className="w-2 h-2 rounded-full bg-[#E5C384] animate-ping" />}
            </button>

            <button
              onClick={() => setActiveCard('wedding')}
              className={`w-full sm:w-auto py-3 px-6 rounded-full font-cinzel text-xs uppercase tracking-wider transition-all font-bold cursor-pointer flex items-center justify-center gap-2 border-2 ${
                activeCard === 'wedding'
                  ? 'bg-[#8B263E] text-white border-[#8B263E] shadow-lg scale-[1.02]'
                  : 'bg-white text-[#8B263E] border-[#8B263E]/50 hover:bg-[#8B263E] hover:text-white'
              }`}
            >
              <span>💍 Show Wedding Card</span>
              {activeCard === 'wedding' && <span className="w-2 h-2 rounded-full bg-[#E5C384] animate-ping" />}
            </button>
          </div>

          {/* Card Display Area */}
          <div className="relative flex flex-col items-center">
            <div
              className={`relative rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/40 transition-transform duration-300 ${
                isZoomed ? 'scale-125 cursor-zoom-out z-20' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={current.image}
                alt={current.title}
                className="max-h-[60vh] w-auto object-contain rounded-xl"
              />
            </div>

            <span className="text-xs font-serif italic text-[#7E5F28] mt-3">
              Click image to {isZoomed ? 'zoom out' : 'zoom in'}
            </span>
          </div>

          {/* Footer Toolbar */}
          <div className="flex flex-wrap items-center justify-between border-t border-[#C5A059]/30 pt-4 gap-3">
            <div>
              <h4 className="font-serif font-bold text-base text-[#2C2623]">
                {current.title}
              </h4>
              <p className="font-cinzel text-xs text-[#7E5F28] mb-1">
                {current.date}
              </p>
              <div className="text-xs font-serif text-[#8B263E] font-semibold">
                ✨ Best Wishes: <span className="font-bold">{current.bestWishes}</span>
              </div>
              {current.contactPhone && (
                <div className="mt-1 flex items-center gap-1.5 text-xs font-sans text-[#593275] font-bold">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contact: {current.contactName} ({current.contactPhone})</span>
                </div>
              )}
            </div>

            <a
              href={current.image}
              download={current.filename}
              className="w-full sm:w-auto py-3 px-6 rounded-full bg-gradient-to-r from-[#8B263E] to-[#A11F3C] text-white font-cinzel text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 border border-[#E5C384]/40"
            >
              <Download className="w-4 h-4" />
              <span>Download Card</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
