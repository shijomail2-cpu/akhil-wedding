import React, { useState, useEffect } from 'react';
import { Clock, Heart, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Countdown() {
  const engagementDate = new Date('2026-09-05T00:00:00+05:30').getTime();
  const weddingDate = new Date('2026-09-12T00:00:00+05:30').getTime();

  const [activeTab, setActiveTab] = useState('engagement'); // 'engagement' or 'wedding'
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = activeTab === 'engagement' ? engagementDate : weddingDate;

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [activeTab, engagementDate, weddingDate]);

  const isEngagement = activeTab === 'engagement';

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FAF7F2] via-[#F4E7CE]/20 to-[#FAF7F2] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C5A059]/10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C5A059]/40 shadow-sm mb-3">
          <Clock className="w-3.5 h-3.5 text-[#C5A059] animate-spin-slow" />
          <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#A37E3B] font-bold">
            Counting Down To Our Celebrations
          </span>
        </div>

        <h2 className="font-script text-5xl md:text-6xl text-[#8B263E] mb-8 font-bold">
          Every Moment Brings Us Closer
        </h2>

        {/* Modern Segmented Tab Bar */}
        <div className="max-w-md mx-auto mb-10 p-1.5 bg-white/90 backdrop-blur-md rounded-full border-2 border-[#C5A059]/50 shadow-xl flex items-center justify-between gap-1.5">
          <button
            onClick={() => setActiveTab('engagement')}
            className={`flex-1 py-3 px-4 rounded-full font-cinzel text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              isEngagement
                ? 'bg-gradient-to-r from-[#593275] to-[#7E529B] text-white shadow-lg border border-[#E5C384]/40 scale-[1.02]'
                : 'text-[#593275] hover:bg-[#593275]/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E5C384]" />
            <span>Engagement</span>
          </button>

          <button
            onClick={() => setActiveTab('wedding')}
            className={`flex-1 py-3 px-4 rounded-full font-cinzel text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              !isEngagement
                ? 'bg-gradient-to-r from-[#8B263E] to-[#A11F3C] text-white shadow-lg border border-[#E5C384]/40 scale-[1.02]'
                : 'text-[#8B263E] hover:bg-[#8B263E]/10'
            }`}
          >
            <span>💍 Wedding</span>
          </button>
        </div>

        {/* Luxury Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-b from-white via-[#FAF7F2] to-white border-2 border-[#C5A059]/40 shadow-xl transform hover:-translate-y-1 transition-all group overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-2 left-2 text-[10px] text-[#C5A059]/40">⚜️</div>
              <div className="absolute top-2 right-2 text-[10px] text-[#C5A059]/40">⚜️</div>

              <div
                className={`font-serif-display text-4xl md:text-5xl font-bold mb-1 tracking-tight ${
                  isEngagement ? 'text-[#593275]' : 'text-[#8B263E]'
                }`}
              >
                {String(item.value).padStart(2, '0')}
              </div>

              <div className="font-cinzel text-[11px] uppercase tracking-[0.25em] text-[#7E5F28] font-bold">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Event Details Banner */}
        <div className="max-w-xl mx-auto p-4 rounded-2xl bg-white border border-[#C5A059]/40 shadow-md flex items-center justify-center gap-2">
          <Calendar className="w-4 h-4 text-[#C5A059]" />
          <span className="font-serif italic text-sm font-semibold text-[#2C2623]/90">
            {isEngagement
              ? 'Saturday, 5th September 2026 • St. Sebastian’s Church, Thonichal'
              : 'Saturday, 12th September 2026 • St. George Jacobite Syrian Church, Kaniyambetta'}
          </span>
        </div>
      </div>
    </section>
  );
}
