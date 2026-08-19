import React, { useState } from 'react';
import { X, Download, ZoomIn, Sparkles, Heart } from 'lucide-react';

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
    },
    wedding: {
      title: 'Official Wedding Invitation Card',
      date: 'Saturday, 12th September 2026',
      image: '/images/wedding-invitation-card.jpg',
      filename: 'Akhil_Josna_Wedding_Invitation_Card.jpg',
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
          <div className="flex flex-col sm:flex-row justify-center gap-2 w-full">
            <button
              onClick={() => setActiveCard('engagement')}
              className={`w-full sm:w-auto py-2.5 px-6 rounded-full font-cinzel text-xs uppercase tracking-wider transition-all font-semibold ${
                activeCard === 'engagement'
                  ? 'bg-[#593275] text-white shadow-md'
                  : 'bg-white text-[#2C2623] border border-[#C5A059]/40 hover:bg-[#FAF7F2]'
              }`}
            >
              ✨ Engagement Card (5 Sept)
            </button>

            <button
              onClick={() => setActiveCard('wedding')}
              className={`w-full sm:w-auto py-2.5 px-6 rounded-full font-cinzel text-xs uppercase tracking-wider transition-all font-semibold ${
                activeCard === 'wedding'
                  ? 'bg-[#8B263E] text-white shadow-md'
                  : 'bg-white text-[#2C2623] border border-[#C5A059]/40 hover:bg-[#FAF7F2]'
              }`}
            >
              💍 Wedding Card (12 Sept)
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
              <p className="font-cinzel text-xs text-[#7E5F28]">
                {current.date}
              </p>
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
