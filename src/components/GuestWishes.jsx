import React, { useState, useEffect } from 'react';
import { Send, Heart, MessageSquare, Sparkles, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GuestWishes() {
  const defaultWishes = [
    {
      id: 1,
      name: 'Anju & Sravan, Swara, Annama',
      message: 'Heartiest congratulations & best wishes to Akhil & Josna! May your union be filled with boundless joy, love, and heavenly blessings.',
      date: 'Aug 20, 2026',
    },
    {
      id: 2,
      name: 'Izza Mariya & Family',
      message: 'Wishing Akhil & Josna a lifetime of joy, laughter, and unconditional love! May God abundantly bless your marriage.',
      date: 'Aug 20, 2026',
    },
    {
      id: 3,
      name: 'Eldho & Family',
      message: 'Congratulations Akhil brother & Josna! So happy for both of you. Can’t wait to celebrate on 12th September at Kaniyambetta!',
      date: 'Aug 19, 2026',
    },
  ];

  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('akhil_josna_wishes');
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (e) {
        setWishes(defaultWishes);
      }
    } else {
      setWishes(defaultWishes);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('akhil_josna_wishes', JSON.stringify(updated));

    setName('');
    setMessage('');

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#8B263E', '#C5A059', '#FAF7F2'],
    });
  };

  return (
    <section id="wishes" className="py-20 px-4 bg-gradient-to-b from-[#FAF7F2] via-[#F4E7CE]/30 to-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#A37E3B] font-semibold block mb-2">
            Warm Blessings & RSVP
          </span>
          <h2 className="font-script text-5xl md:text-6xl text-[#8B263E] mb-3">
            Send Your Wishes
          </h2>
          <p className="font-serif italic text-base text-[#2C2623]/80">
            Leave your heartfelt messages and congratulations for Akhil & Josna
          </p>
        </div>

        {/* Input Form Card */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#C5A059]/40 shadow-xl mb-12 relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-cinzel text-xs uppercase tracking-wider text-[#7E5F28] font-bold mb-1">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul & Family"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#C5A059]/30 bg-[#FAF7F2] focus:bg-white focus:ring-2 focus:ring-[#8B263E] focus:outline-none font-serif text-sm text-[#2C2623] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block font-cinzel text-xs uppercase tracking-wider text-[#7E5F28] font-bold mb-1">
                Your Blessing Message
              </label>
              <textarea
                required
                rows={3}
                placeholder="Write your wishes for Akhil & Josna..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 rounded-xl border border-[#C5A059]/30 bg-[#FAF7F2] focus:bg-white focus:ring-2 focus:ring-[#8B263E] focus:outline-none font-serif text-sm text-[#2C2623] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#8B263E] via-[#A11F3C] to-[#8B263E] text-white font-cinzel text-xs uppercase tracking-widest font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 border border-[#E5C384]/40"
            >
              <Send className="w-4 h-4 text-[#E5C384]" />
              <span>Send Blessing Wish</span>
            </button>
          </form>
        </div>

        {/* Wishes Wall List */}
        <div className="space-y-4">
          <h3 className="font-cinzel text-sm uppercase tracking-widest text-[#8B263E] font-bold flex items-center gap-2 mb-4">
            <MessageSquare className="w-4 h-4 text-[#C5A059]" /> Wishes Wall ({wishes.length})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wishes.map((w) => (
              <div
                key={w.id}
                className="p-5 rounded-2xl bg-white border border-[#C5A059]/30 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif font-bold text-base text-[#8B263E]">
                    {w.name}
                  </span>
                  <span className="font-cinzel text-[10px] text-[#7E5F28]">
                    {w.date}
                  </span>
                </div>
                <p className="font-serif italic text-sm text-[#2C2623]/90 leading-relaxed">
                  "{w.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
