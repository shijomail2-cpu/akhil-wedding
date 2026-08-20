import React, { useState, useEffect } from 'react';

export default function StickyCoupleAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isProposed, setIsProposed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
        
        if (progress > 12 && !isProposed) {
          setIsProposed(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProposed]);

  // Met in center condition
  const met = scrollProgress > 12 || isProposed;

  // Calculate walking offset for both characters
  // 0% scroll: offset is 0px (they start far apart)
  // 12% scroll: offset is max (~75px each) so they meet in center!
  const walkOffset = met ? 75 : Math.min(75, (scrollProgress / 12) * 75);

  return (
    <div 
      onClick={() => setIsProposed(!isProposed)}
      className="fixed bottom-4 left-4 sm:left-6 z-40 bg-transparent cursor-pointer select-none pointer-events-auto flex flex-col items-center group"
    >
      {/* SVG Stick Figure Animation Container */}
      <div className="relative w-72 sm:w-80 h-28 flex items-end justify-center drop-shadow-md">
        
        {/* BOY (Akhil) Stick Figure - Walks right towards center */}
        <div 
          className="absolute bottom-0 transition-all duration-500 ease-out flex flex-col items-center z-20"
          style={{
            left: `${12 + walkOffset}px`,
          }}
        >
          {met ? (
            /* KNEELING PROPOSING BOY SVG */
            <svg width="65" height="75" viewBox="0 0 65 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Head */}
              <circle cx="20" cy="18" r="10" stroke="#8B263E" strokeWidth="2.5" fill="#FAF7F2" />
              {/* Hair strands */}
              <path d="M15 11 Q17 6 22 10 Q25 6 28 11" stroke="#8B263E" strokeWidth="2" strokeLinecap="round" />
              {/* Face features */}
              <circle cx="17" cy="17" r="1.2" fill="#8B263E" />
              <circle cx="23" cy="17" r="1.2" fill="#8B263E" />
              <path d="M17 22 Q20 25 23 22" stroke="#8B263E" strokeWidth="1.5" strokeLinecap="round" />

              {/* Torso */}
              <line x1="20" y1="28" x2="20" y2="48" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" />

              {/* Outstretched Arms holding Heart */}
              <path d="M20 33 L36 31 L48 24" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 35 L34 37 L48 28" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

              {/* Kneeling Legs */}
              <path d="M20 48 L34 46 L34 68" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 48 L8 58 L24 68" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            /* WALKING BOY SVG */
            <svg width="45" height="75" viewBox="0 0 45 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="16" r="10" stroke="#8B263E" strokeWidth="2.5" fill="#FAF7F2" />
              <path d="M17 9 Q19 4 24 8 Q27 4 30 9" stroke="#8B263E" strokeWidth="2" strokeLinecap="round" />
              <circle cx="19" cy="15" r="1.2" fill="#8B263E" />
              <circle cx="25" cy="15" r="1.2" fill="#8B263E" />
              <path d="M19 20 Q22 23 25 20" stroke="#8B263E" strokeWidth="1.5" strokeLinecap="round" />

              <line x1="22" y1="26" x2="22" y2="48" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" />

              {/* Walking Arms & Legs */}
              <line x1="22" y1="32" x2="12" y2="42" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="22" y1="32" x2="32" y2="40" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" />

              <line x1="22" y1="48" x2="12" y2="68" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="22" y1="48" x2="30" y2="68" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          )}
          <span className="text-[9.5px] font-cinzel font-bold text-[#8B263E] bg-[#FAF7F2]/90 backdrop-blur-sm px-1.5 py-0.5 rounded-full border border-[#C5A059]/40 mt-0.5 shadow-sm">
            Akhil
          </span>
        </div>

        {/* FLOATING PROPOSAL HEART IN CENTER */}
        <div 
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 flex flex-col items-center z-30 ${
            met ? 'scale-100 opacity-100 -translate-y-2' : 'scale-0 opacity-0'
          }`}
        >
          {/* Big Solid Red/Burgundy Heart */}
          <svg width="34" height="34" viewBox="0 0 24 24" fill="#8B263E" className="animate-pulse drop-shadow-md">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="text-[8.5px] font-bold font-cinzel text-[#8B263E] bg-white px-2 py-0.5 rounded-full border border-[#C5A059] shadow-md mt-0.5 whitespace-nowrap animate-bounce">
            Will You Marry Me? 💍
          </span>
        </div>

        {/* GIRL (Josna) Stick Figure - Walks left towards center */}
        <div 
          className="absolute bottom-0 transition-all duration-500 ease-out flex flex-col items-center z-20"
          style={{
            right: `${12 + walkOffset}px`,
          }}
        >
          <svg width="55" height="75" viewBox="0 0 55 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Long Hair */}
            <path d="M16 16 C10 24 10 38 14 46" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M34 16 C40 24 40 38 36 46" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M16 16 C20 8 30 8 34 16" stroke="#8B263E" strokeWidth="2.5" fill="none" />

            {/* Head */}
            <circle cx="25" cy="18" r="9" stroke="#8B263E" strokeWidth="2.5" fill="#FAF7F2" />
            <circle cx="21" cy="17" r="1.2" fill="#8B263E" />
            <circle cx="27" cy="17" r="1.2" fill="#8B263E" />
            <path d="M21 22 Q25 25 29 22" stroke="#8B263E" strokeWidth="1.5" strokeLinecap="round" />

            {/* Dress */}
            <path d="M25 27 L15 54 L35 54 Z" stroke="#8B263E" strokeWidth="2.5" fill="#FAF7F2" strokeLinejoin="round" />

            {/* Arms (Surprised/Joyful pose when proposed to vs walking arms) */}
            {met ? (
              <path d="M21 34 L13 28 M29 34 L37 28" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <path d="M21 34 L14 42 M29 34 L36 42" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" />
            )}

            {/* Legs */}
            <line x1="21" y1="54" x2="21" y2="68" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="29" y1="54" x2="29" y2="68" stroke="#8B263E" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="text-[9.5px] font-cinzel font-bold text-[#8B263E] bg-[#FAF7F2]/90 backdrop-blur-sm px-2 py-0.5 rounded-full border border-[#C5A059]/40 mt-0.5 shadow-sm">
            Josna
          </span>
        </div>
      </div>
    </div>
  );
}
