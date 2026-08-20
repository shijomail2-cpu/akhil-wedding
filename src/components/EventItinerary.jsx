import React from 'react';
import { Calendar, Clock, MapPin, Navigation, Church, PartyPopper, Heart, Phone } from 'lucide-react';

export default function EventItinerary() {
  const events = [
    {
      id: 'engagement',
      title: 'Holy Engagement',
      subtitle: 'Sacred Covenant & Betrothal',
      badge: 'ENGAGEMENT',
      color: 'from-[#593275] to-[#7E529B]',
      date: 'Saturday, 5th September 2026',
      time: 'Betrothal Ceremony',
      venue: "St. Sebastian's Church, Thonichal, Wayanad",
      receptionVenue: 'Casa Wyna, Thonichal, Wayanad',
      contactPerson: 'Nithin Joshy',
      contactPhone: '+91 70511 86617',
      mapUrl: 'https://maps.google.com/?q=St.+Sebastian%27s+Church+Thonichal+Wayanad',
    },
    {
      id: 'nuptials',
      title: 'Holy Marriage Ceremony',
      subtitle: 'Sacred Nuptial Blessing',
      badge: 'NUPTIALS',
      color: 'from-[#8B263E] to-[#A11F3C]',
      date: 'Saturday, 12th September 2026',
      time: '8:00 AM IST',
      venue: 'St. George Jacobite Syrian Church in Kaniyambetta',
      receptionVenue: null,
      mapUrl: 'https://maps.google.com/?q=St.+George+Jacobite+Syrian+Church+Kaniyambetta',
    },
    {
      id: 'reception',
      title: 'Wedding Feast & Reception',
      subtitle: 'Grand Celebration & Fellowship',
      badge: 'RECEPTION',
      color: 'from-[#A37E3B] to-[#C5A059]',
      date: 'Saturday, 12th September 2026',
      time: '12:00 PM Onwards',
      venue: 'St. George Jacobite Syrian Church Auditorium, Kaniyambetta',
      receptionVenue: null,
      mapUrl: 'https://maps.google.com/?q=St.+George+Jacobite+Syrian+Church+Auditorium+Kaniyambetta',
    },
  ];

  return (
    <section id="events" className="py-20 px-4 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#A37E3B] font-semibold block mb-2">
            Wedding Itinerary & Venues
          </span>
          <h2 className="font-script text-5xl md:text-6xl text-[#8B263E] mb-4">
            Celebration Events
          </h2>
          <p className="font-serif italic text-base text-[#2C2623]/80 max-w-xl mx-auto">
            Join us in worship, prayer, and celebration as we exchange sacred vows and share happiness with family & friends.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Header Banner */}
              <div className={`p-6 bg-gradient-to-r ${evt.color} text-white relative`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-cinzel text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-bold">
                    {evt.badge}
                  </span>
                  <Calendar className="w-4 h-4 text-[#E5C384]" />
                </div>

                <h3 className="font-serif-display text-2xl font-bold mt-2">
                  {evt.title}
                </h3>
                <p className="font-serif italic text-xs text-white/80">
                  {evt.subtitle}
                </p>

                {/* Date Highlight */}
                <div className="mt-4 pt-3 border-t border-white/20 flex flex-col gap-1 font-cinzel text-xs font-semibold text-[#E5C384]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{evt.time}</span>
                  </div>
                  <span className="text-white/90 text-[11px] font-sans">{evt.date}</span>
                </div>
              </div>

              {/* Event Venues Content */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 font-cinzel text-xs font-bold text-[#8B263E] uppercase mb-1">
                    <Church className="w-4 h-4 text-[#C5A059]" /> Venue
                  </div>
                  <p className="font-serif font-semibold text-base text-[#2C2623] leading-snug">
                    {evt.venue}
                  </p>

                  {evt.receptionVenue && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 font-cinzel text-xs font-bold text-[#593275] uppercase mb-1">
                        <PartyPopper className="w-4 h-4 text-[#C5A059]" /> Reception Venue
                      </div>
                      <p className="font-serif font-semibold text-sm text-[#2C2623]">
                        {evt.receptionVenue}
                      </p>
                    </div>
                  )}

                  {evt.contactPhone && (
                    <div className="mt-3 pt-3 border-t border-purple-100 bg-[#593275]/5 p-3 rounded-xl">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-cinzel text-[10px] uppercase font-bold text-[#593275]">
                          Contact Person
                        </span>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-serif font-bold text-sm text-[#2C2623]">
                            {evt.contactPerson}
                          </span>
                          <a
                            href={`tel:${evt.contactPhone.replace(/\s+/g, '')}`}
                            className="py-1 px-2.5 rounded-lg bg-[#593275] text-white font-sans text-xs font-semibold flex items-center gap-1.5 hover:bg-[#7E529B] transition-colors shadow-sm"
                          >
                            <Phone className="w-3 h-3 text-[#E5C384]" />
                            <span>{evt.contactPhone}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href={evt.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#8B263E] hover:text-white border border-[#C5A059]/30 text-[#8B263E] font-cinzel text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 mt-4 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" /> Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
