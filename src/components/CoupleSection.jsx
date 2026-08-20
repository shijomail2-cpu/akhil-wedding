import React from 'react';
import { Heart, Home, User, Gift } from 'lucide-react';

export default function CoupleSection() {
  return (
    <section id="couple" className="py-20 px-4 bg-gradient-to-b from-[#FAF7F2] via-[#F4E7CE]/30 to-[#FAF7F2] relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#A37E3B] font-semibold block mb-2">
            The Bride & Groom
          </span>
          <h2 className="font-script text-5xl md:text-6xl text-[#8B263E] mb-4">
            Together In Faith & Love
          </h2>
          <div className="w-24 h-0.5 bg-[#C5A059] mx-auto rounded-full"></div>
        </div>

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Groom Card */}
          <div className="bg-white/90 rounded-3xl p-8 border border-[#C5A059]/40 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C5A059]/20 to-transparent rounded-bl-full pointer-events-none"></div>

            <div>
              {/* Photo Frame with Real Cartoon Artwork */}
              <div className="relative w-56 h-56 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg border-2 border-[#C5A059] group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/cartoon-outdoor.jpg"
                  alt="Groom Akhil K Eliyas"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2C2623]/90 to-transparent py-2 text-center text-white text-xs font-cinzel tracking-wider">
                  GROOM
                </div>
              </div>

              <h3 className="font-script text-4xl text-center text-[#8B263E] mb-1 font-bold">
                Akhil K Eliyas
              </h3>

              <div className="text-center mb-6">
                <span className="font-cinzel text-xs uppercase tracking-widest text-[#7E5F28] font-semibold block">
                  Son of
                </span>
                <p className="font-serif text-base text-[#2C2623] font-semibold mt-1">
                  Mr. Eliyas K. V. <span className="text-[#8B263E]">&</span> Mrs. Santy Eliyas
                </p>
              </div>

              {/* Address Box */}
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#C5A059]/30 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs font-cinzel text-[#A37E3B] mb-1 uppercase font-semibold">
                  <Home className="w-3.5 h-3.5" /> Residence Address
                </div>
                <p className="font-serif italic text-sm text-[#2C2623]/90 leading-relaxed">
                  Kurumbemadam House<br />
                  Kaniyampetta post, Cheekkalloor<br />
                  Wayanad, Kerala
                </p>
              </div>
            </div>
          </div>

          {/* Bride Card */}
          <div className="bg-white/90 rounded-3xl p-8 border border-[#C5A059]/40 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#8B263E]/20 to-transparent rounded-bl-full pointer-events-none"></div>

            <div>
              {/* Photo Frame with Real Cartoon Artwork */}
              <div className="relative w-56 h-56 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg border-2 border-[#8B263E] group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/cartoon-car-selfie.jpg"
                  alt="Bride Josna Joshy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#8B263E]/90 to-transparent py-2 text-center text-white text-xs font-cinzel tracking-wider">
                  BRIDE
                </div>
              </div>

              <h3 className="font-script text-4xl text-center text-[#8B263E] mb-1 font-bold">
                Josna Joshy
              </h3>

              <div className="text-center mb-6">
                <span className="font-cinzel text-xs uppercase tracking-widest text-[#7E5F28] font-semibold block">
                  Daughter of
                </span>
                <p className="font-serif text-base text-[#2C2623] font-semibold mt-1">
                  Mr. Joshy Mundakkal <span className="text-[#8B263E]">&</span> Mrs. Nirmala Joshy
                </p>
              </div>

              {/* Address Box */}
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#C5A059]/30 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs font-cinzel text-[#A37E3B] mb-1 uppercase font-semibold">
                  <Home className="w-3.5 h-3.5" /> Residence Address
                </div>
                <p className="font-serif italic text-sm text-[#2C2623]/90 leading-relaxed">
                  Mundakkal House<br />
                  Nallournad PO, Thonichal, Mananthavady<br />
                  Wayanad, Kerala
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Best Wishes Banner */}
        <div className="mt-12 max-w-3xl mx-auto p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#FAF7F2] via-[#F4E7CE]/60 to-[#FAF7F2] border-2 border-[#C5A059]/40 text-center shadow-lg relative overflow-hidden">
          <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#7E5F28] font-bold flex items-center justify-center gap-2 mb-4">
            <Gift className="w-4 h-4 text-[#8B263E]" /> With Best Wishes <Gift className="w-4 h-4 text-[#8B263E]" />
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#C5A059]/30">
            {/* Wedding Best Wishes */}
            <div className="p-3">
              <span className="font-cinzel text-[11px] uppercase tracking-wider text-[#8B263E] font-bold block mb-2">
                💍 Wedding Ceremony
              </span>
              <div className="space-y-1 font-serif text-base font-bold text-[#8B263E]">
                <p>Anju & Sravan</p>
                <p>Swara Sravan</p>
                <p>Annama</p>
              </div>
            </div>

            {/* Engagement Best Wishes */}
            <div className="p-3 pt-4 md:pt-3">
              <span className="font-cinzel text-[11px] uppercase tracking-wider text-[#593275] font-bold block mb-2">
                ✨ Engagement Ceremony
              </span>
              <div className="font-serif text-base font-bold text-[#593275] mt-3">
                <p>Izza Mariya & Family</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
