import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Volume2 } from 'lucide-react';

export default function OpeningEnvelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpenState, setIsOpenState] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Call onOpen immediately on click/touch to unlock audio on iOS Safari
    onOpen();

    // Fire celebratory confetti
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#C5A059', '#8B263E', '#FAF7F2', '#D7BB7B', '#F394A5']
    });

    // Sequence the letter opening animation before hiding overlay
    setTimeout(() => {
      setIsOpenState(true);
    }, 1200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#120D0C]/95 backdrop-blur-xl transition-all duration-1000 p-4 ${
        isOpenState ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Floating Bokeh Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#C5A059] rounded-full animate-ping" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-dashed border-[#8B263E] rounded-full"></div>
      </div>

      {/* Main Compact Envelope Cover Container */}
      <div className="relative max-w-sm md:max-w-md w-full my-auto flex flex-col items-center">
        
        {/* Envelope Paper Card Structure (Compact, No Extra Blank Space) */}
        <div 
          onClick={handleOpen}
          className="relative w-full bg-[#FDFBF7] rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.75)] border-2 border-[#D7BB7B]/60 p-5 text-center overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-500 group select-none"
        >
          {/* Subtle Embossed Watermark Patterns */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#8B263E_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="absolute top-3 left-3 opacity-20 text-xl text-[#8B263E]">🤍</div>
          <div className="absolute top-3 right-3 opacity-20 text-xl text-[#8B263E]">🤍</div>
          <div className="absolute bottom-3 left-3 opacity-20 text-xl text-[#8B263E]">🤍</div>
          <div className="absolute bottom-3 right-3 opacity-20 text-xl text-[#8B263E]">🤍</div>

          {/* Envelope Top Triangular Flap */}
          <div 
            className={`absolute top-0 inset-x-0 h-24 bg-[#F4E7CE]/90 border-b border-[#C5A059]/40 z-30 transition-all duration-700 ease-in-out origin-top shadow-sm ${
              isOpening ? '-translate-y-24 opacity-0 scale-95' : 'translate-y-0 opacity-100'
            }`}
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          ></div>

          {/* Royal Heart Wax Seal */}
          <div 
            className={`absolute top-12 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
              isOpening ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#8B263E] to-[#A11F3C] border-2 border-[#E5C384] shadow-md flex items-center justify-center text-white">
              <Heart className="w-4 h-4 fill-white animate-pulse" />
            </div>
          </div>

          {/* Sliding Letter Card Inside (Compact Padding & Perfectly Balanced) */}
          <div 
            className={`relative z-20 pt-16 pb-2 px-4 flex flex-col items-center justify-center text-center transition-all duration-800 ease-out ${
              isOpening ? '-translate-y-5 scale-105' : 'translate-y-0 scale-100'
            }`}
          >
            {/* Subtitle Line 1 */}
            <p className="font-cinzel text-[11px] uppercase tracking-[0.35em] text-[#9A7B38] font-bold mb-1">
              Wedding Invitation Cover
            </p>

            {/* Couple Names Line 2 */}
            <h1 className="font-script text-4xl md:text-5xl text-[#8B263E] my-1 leading-tight font-bold drop-shadow-sm">
              Akhil & Josna
            </h1>

            {/* Click To Open Indicator Button */}
            <div className="mt-3 mb-1 flex items-center justify-center gap-2 font-cinzel text-[11px] text-[#8B263E] font-bold tracking-widest uppercase bg-[#FAF7F2] py-2 px-5 rounded-full border border-[#C5A059]/40 max-w-[220px] mx-auto shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-spin-slow" />
              <span>{isOpening ? 'Opening Letter...' : 'Click To Open'}</span>
              <span className="animate-heartbeat inline-flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#8B263E] fill-[#8B263E] drop-shadow-[0_0_8px_rgba(139,38,62,0.6)]" />
              </span>
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
