import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function BlessingsSection() {
  return (
    <section className="py-16 px-4 bg-[#FAF7F2] relative">
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white to-[#FAF7F2] border-2 border-[#C5A059]/40 shadow-xl relative overflow-hidden">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-3 left-3 text-xl text-[#C5A059] opacity-60">⚜️</div>
          <div className="absolute top-3 right-3 text-xl text-[#C5A059] opacity-60">⚜️</div>
          <div className="absolute bottom-3 left-3 text-xl text-[#C5A059] opacity-60">⚜️</div>
          <div className="absolute bottom-3 right-3 text-xl text-[#C5A059] opacity-60">⚜️</div>

          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#A37E3B] font-semibold block mb-3">
            Solacing Blessings of Almighty
          </span>

          <h3 className="font-serif-display text-2xl md:text-3xl italic font-semibold text-[#8B263E] leading-relaxed mb-4">
            “Love is patient, love is kind. It always protects, always trusts, always hopes, always perseveres. Love never fails.”
          </h3>

          <p className="font-cinzel text-xs tracking-widest text-[#7E5F28] uppercase font-bold">
            — 1 Corinthians 13:4-8
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#2C2623]/70 font-serif italic">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Seeking your warm prayers & holy blessings on our union</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          </div>
        </div>
      </div>
    </section>
  );
}
