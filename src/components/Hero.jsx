import React from 'react';
import { Sparkles, Calendar, MapPin, Share2, Heart } from 'lucide-react';

export default function Hero({ onOpenCardModal }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Akhil & Josna — Wedding Invitation',
        text: 'Join us in celebrating the Wedding & Engagement of Akhil K Eliyas & Josna Joshy on September 2026 in Wayanad, Kerala!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Invitation link copied to clipboard!');
    }
  };

  const handleAddToCalendar = () => {
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Akhil+K+Eliyas+%26+Josna+Joshy&dates=20260912T043000Z/20260912T120000Z&details=Wedding+Ceremony+at+St.+George+Jacobite+Syrian+Church,+Kaniyambetta&location=St.+George+Jacobite+Syrian+Church,+Kaniyambetta,+Wayanad,+Kerala`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F4E7CE]/20 to-[#FAF7F2]">
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border-8 border-[#C5A059] animate-spin-slow"></div>
        <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border-2 border-dashed border-[#8B263E]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
        {/* Luxury Gold Ornament Header Badge */}
        <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-gradient-to-r from-white via-[#FAF7F2] to-white border-2 border-[#C5A059]/60 shadow-[0_8px_25px_rgba(197,160,89,0.2)] mb-5 transform hover:scale-[1.02] transition-all">
          <Sparkles className="w-4 h-4 text-[#C5A059] animate-spin-slow" />
          <span className="font-cinzel text-xs font-extrabold uppercase tracking-[0.3em] text-[#8B263E]">
            Holy Engagement & Matrimony
          </span>
          <Sparkles className="w-4 h-4 text-[#C5A059] animate-spin-slow" />
        </div>

        {/* Intro Tagline */}
        <p className="font-serif-display italic text-base md:text-xl text-[#2C2623]/80 max-w-xl mx-auto mb-2">
          Together with our families, we joyfully invite you to celebrate the holy matrimony of our children
        </p>

        {/* Couple Names Header */}
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-[#8B263E] my-2 drop-shadow-sm leading-none font-bold">
          Akhil & Josna
        </h1>

        {/* Full Names */}
        <p className="font-serif-display text-lg md:text-2xl italic text-[#7E5F28] mb-6">
          Akhil K Eliyas <span className="text-[#8B263E] font-script text-3xl px-2">&</span> Josna Joshy
        </p>

        {/* Hero Couple Portrait Image (Matching reference site) */}
        <div className="relative max-w-md mx-auto my-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#C5A059]/50 group transform hover:scale-[1.01] transition-transform duration-500">
          <img
            src="/images/sketch-portrait-1.jpg"
            alt="Akhil & Josna Couple Portrait"
            className="w-full h-80 md:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2623]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-center">
            <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#E5C384] font-semibold">
              Save The Date
            </span>
            <h3 className="font-serif text-2xl font-bold mt-1">
              12th September 2026
            </h3>
            <span className="text-xs text-white/80 font-sans mt-0.5">
              St. George Syrian Church, Kaniyambetta
            </span>
          </div>
        </div>

        {/* Event Dates Grid */}
        <div className="max-w-xl mx-auto my-6 p-4 rounded-2xl glass-card border border-[#C5A059]/30 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#C5A059]/30">
            {/* Engagement Date */}
            <div className="p-2 text-center">
              <span className="font-cinzel text-[10px] tracking-widest uppercase text-[#7E5F28] block mb-1">
                Holy Engagement
              </span>
              <div className="font-serif text-lg font-bold text-[#593275]">
                5th September 2026
              </div>
              <span className="text-xs text-[#2C2623]/70 block">
                St. Sebastian's Church, Thonichal
              </span>
            </div>

            {/* Wedding Date */}
            <div className="p-2 text-center pt-3 md:pt-2">
              <span className="font-cinzel text-[10px] tracking-widest uppercase text-[#7E5F28] block mb-1">
                Holy Marriage Ceremony
              </span>
              <div className="font-serif text-lg font-bold text-[#8B263E]">
                12th September 2026
              </div>
              <span className="text-xs text-[#2C2623]/70 block">
                St. George Syrian Church, Kaniyambetta
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons (Full width on mobile) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 w-full max-w-md mx-auto sm:max-w-none">
          <button
            onClick={onOpenCardModal}
            className="w-full sm:w-auto py-3.5 px-7 rounded-full bg-gradient-to-r from-[#8B263E] via-[#A11F3C] to-[#8B263E] text-white font-cinzel text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 border border-[#E5C384]/40 font-semibold"
          >
            <Sparkles className="w-4 h-4 text-[#E5C384]" />
            <span>View Official Invitation Cards</span>
          </button>

          <button
            onClick={handleAddToCalendar}
            className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-[#FAF7F2] text-[#7E5F28] border border-[#C5A059] font-cinzel text-xs uppercase tracking-wider hover:bg-[#C5A059] hover:text-white transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105 font-semibold"
          >
            <Calendar className="w-4 h-4" />
            <span>Add To Calendar</span>
          </button>

          <button
            onClick={handleShare}
            className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-[#FAF7F2] text-[#2C2623] border border-[#2C2623]/20 font-cinzel text-xs uppercase tracking-wider hover:bg-[#2C2623] hover:text-white transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105 font-semibold"
          >
            <Share2 className="w-4 h-4 text-[#8B263E]" />
            <span>Share Invite</span>
          </button>
        </div>
      </div>
    </section>
  );
}
