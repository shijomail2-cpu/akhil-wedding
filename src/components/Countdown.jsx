import React, { useState, useEffect } from 'react';
import { Clock, Heart, Calendar } from 'lucide-react';

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

  return (
    <section className="py-16 px-4 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 text-[#A37E3B] mb-3">
          <Clock className="w-4 h-4 animate-spin-slow" />
          <span className="font-cinzel text-xs uppercase tracking-[0.2em] font-semibold">Counting Down To The Big Day</span>
        </div>

        <h2 className="font-script text-4xl md:text-5xl text-[#8B263E] mb-6">
          Every Moment Brings Us Closer
        </h2>

        {/* Tab Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-center p-1.5 bg-[#E8D4A6]/30 rounded-2xl sm:rounded-full border border-[#C5A059]/40 mb-8 max-w-sm sm:max-w-none mx-auto gap-2 sm:gap-0">
          <button
            onClick={() => setActiveTab('engagement')}
            className={`w-full sm:w-auto py-2.5 px-6 rounded-xl sm:rounded-full font-cinzel text-xs uppercase tracking-wider transition-all font-semibold ${
              activeTab === 'engagement'
                ? 'bg-[#593275] text-white shadow-md'
                : 'text-[#2C2623]/80 hover:text-[#593275]'
            }`}
          >
            ✨ Holy Engagement (5 Sept)
          </button>
          <button
            onClick={() => setActiveTab('wedding')}
            className={`w-full sm:w-auto py-2.5 px-6 rounded-full font-cinzel text-xs uppercase tracking-wider transition-all font-semibold ${
              activeTab === 'wedding'
                ? 'bg-[#8B263E] text-white shadow-md'
                : 'text-[#2C2623]/80 hover:text-[#8B263E]'
            }`}
          >
            💍 Wedding Matrimony (12 Sept)
          </button>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-[#C5A059]/30 shadow-lg transform hover:-translate-y-1 transition-transform"
            >
              <div className="font-serif-display text-4xl md:text-5xl font-bold text-[#8B263E] mb-1">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="font-cinzel text-xs uppercase tracking-widest text-[#7E5F28] font-semibold">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 font-serif italic text-sm text-[#2C2623]/70">
          {activeTab === 'wedding'
            ? 'Saturday, 12th September 2026 • St. George Jacobite Syrian Church, Kaniyambetta'
            : 'Saturday, 5th September 2026 • St. Sebastian’s Church, Thonichal'}
        </p>
      </div>
    </section>
  );
}
