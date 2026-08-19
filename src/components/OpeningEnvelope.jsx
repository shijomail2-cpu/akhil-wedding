import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Volume2 } from 'lucide-react';

export default function OpeningEnvelope({ onOpen }) {
  const [isOpenState, setIsOpenState] = useState(false);
  const [isOpeningFlap, setIsOpeningFlap] = useState(false);

  const handleOpen = () => {
    setIsOpeningFlap(true);

    // Fire celebratory confetti
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#C5A059', '#8B263E', '#FAF7F2', '#D7BB7B', '#F394A5']
    });

    setTimeout(() => {
      setIsOpenState(true);
      onOpen();
    }, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#120D0C]/95 backdrop-blur-xl transition-all duration-700 p-4 ${
        isOpenState ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Floating Bokeh Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#C5A059] rounded-full animate-ping" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-dashed border-[#8B263E] rounded-full"></div>
      </div>

      {/* Main Compact Envelope Cover Container */}
      <div className="relative max-w-sm md:max-w-md w-full my-auto perspective-1000 flex flex-col items-center">
        
        {/* Envelope Paper Card Structure (Reduced Height) */}
        <div 
          onClick={handleOpen}
          className="relative w-full bg-[#FDFBF7] rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.7)] border-2 border-[#D7BB7B]/60 p-5 md:p-6 text-center overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-300 group select-none"
        >
          {/* Subtle Embossed Watermark Patterns */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#8B263E_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="absolute top-3 left-3 opacity-15 text-xl text-[#8B263E]">🤍</div>
          <div className="absolute top-3 right-3 opacity-15 text-xl text-[#8B263E]">🤍</div>
          <div className="absolute bottom-3 left-3 opacity-15 text-xl text-[#8B263E]">🤍</div>
          <div className="absolute bottom-3 right-3 opacity-15 text-xl text-[#8B263E]">🤍</div>

          {/* Envelope Top Triangular Flap Overlay */}
          <div 
            className={`absolute top-0 inset-x-0 h-24 bg-[#F4E7CE]/50 border-b border-[#C5A059]/40 origin-top transition-transform duration-700 z-10 clip-path-flap ${
              isOpeningFlap ? '-rotate-x-180 opacity-40' : ''
            }`}
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          ></div>

          {/* Twine String Vertical Ribbon Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2.5 bg-gradient-to-b from-[#C5A059]/30 via-[#A37E3B]/40 to-[#C5A059]/30 border-x border-[#C5A059]/40 z-10 pointer-events-none"></div>

          {/* Envelope Header Content */}
          <div className="relative z-20 pt-2 pb-1">
            
            {/* Subtitle */}
            <p className="font-cinzel text-[11px] uppercase tracking-[0.35em] text-[#9A7B38] font-bold mb-1">
              Wedding Invitation Cover
            </p>

            {/* Couple Names */}
            <h1 className="font-script text-4xl md:text-5xl text-[#8B263E] my-1 leading-tight font-bold drop-shadow-sm">
              Akhil & Josna
            </h1>

            {/* Click To Open Indicator with Beating Heart */}
            <div className="my-3 flex items-center justify-center gap-2 font-cinzel text-[11px] text-[#8B263E] font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-spin-slow" />
              <span>Click To Open</span>
              <span className="animate-heartbeat inline-flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#8B263E] fill-[#8B263E] drop-shadow-[0_0_8px_rgba(139,38,62,0.6)]" />
              </span>
            </div>

            {/* Date, Location & Small Quote */}
            <div className="pt-2 border-t border-[#C5A059]/30 flex flex-col items-center gap-1 font-cinzel text-xs text-[#8B263E] font-bold tracking-wider">
              <span>12th September 2026</span>
              <span className="text-[11px] text-[#7E5F28] font-serif italic tracking-normal">Kaniyambetta, Wayanad</span>
              <p className="text-[10px] text-[#2C2623]/85 font-serif italic mt-1.5 font-normal tracking-normal max-w-[280px] mx-auto leading-relaxed">
                "Together with our families, we cordially invite you to celebrate our union."
              </p>
            </div>

          </div>

        </div>

        {/* Audio Turn Up Volume Subtext Below Envelope */}
        <div className="w-full mt-3 flex items-center justify-center gap-2 text-[11px] text-[#E5C384]/80 font-serif italic text-center z-30">
          <Volume2 className="w-3.5 h-3.5 animate-bounce text-[#E5C384]" />
          <span>Turn up volume 🔊 for full experience • Plays Ed Sheeran — "Perfect"</span>
        </div>

      </div>
    </div>
  );
}
