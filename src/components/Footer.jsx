import React from 'react';
import { Heart, Calendar, Share2, MapPin, Sparkles } from 'lucide-react';

export default function Footer({ onOpenCardModal }) {
  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `💍 You are cordially invited to the Wedding & Engagement of Akhil K Eliyas & Josna Joshy!\n\n✨ Engagement: 5th Sept 2026 at St. Sebastian's Church, Thonichal\n💍 Wedding: 12th Sept 2026 at St. George Jacobite Syrian Church, Kaniyambetta\n\nView full invitation website: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <footer id="directions" className="bg-[#1A1412] text-white pt-16 pb-12 px-4 border-t border-[#C5A059]/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Monogram Rings */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#8B263E] to-[#C5A059] mx-auto flex items-center justify-center text-2xl font-cinzel font-bold text-white shadow-xl mb-4 border border-[#E5C384]/40">
          A&J
        </div>

        <h2 className="font-script text-5xl md:text-6xl text-[#E5C384] mb-2">
          Akhil & Josna
        </h2>

        <p className="font-serif-display italic text-sm md:text-base text-white/70 max-w-md mx-auto mb-8">
          Thank you for being a part of our journey and sharing in our holy matrimonial celebration!
        </p>

        {/* Quick Action Footer Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 w-full max-w-md mx-auto sm:max-w-none">
          <button
            onClick={onOpenCardModal}
            className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#8B263E] hover:bg-[#A11F3C] text-white font-cinzel text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-[#E5C384]/30 font-semibold"
          >
            <Sparkles className="w-4 h-4 text-[#E5C384]" /> Official Invitation Cards
          </button>

          <button
            onClick={handleShareWhatsApp}
            className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE57] text-white font-cinzel text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 font-bold shadow-lg"
          >
            <Share2 className="w-4 h-4" /> Share On WhatsApp
          </button>
        </div>

        <div className="w-full h-px bg-white/10 my-8"></div>

        <p className="font-cinzel text-xs text-[#E5C384]/60 tracking-widest uppercase">
          5th September 2026 • 12th September 2026 | Wayanad, Kerala
        </p>
      </div>
    </footer>
  );
}
