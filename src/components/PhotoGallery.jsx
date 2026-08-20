import React, { useState, useRef } from 'react';
import { Image, ZoomIn, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState(null);
  const scrollContainerRef = useRef(null);

  const photos = [
    {
      id: 1,
      title: 'Oil Painting Couple Portrait',
      subtitle: 'Akhil & Josna — Classic Portrait',
      src: '/images/oil-painting-portrait.jpg',
    },
    {
      id: 2,
      title: 'Outdoor Couple Cartoon Artwork',
      subtitle: 'Together In Love',
      src: '/images/cartoon-outdoor.jpg',
    },
    {
      id: 3,
      title: 'Car Selfie Cartoon Illustration',
      subtitle: 'Cherished Moments',
      src: '/images/cartoon-car-selfie.jpg',
    },
    {
      id: 4,
      title: 'Official Engagement Card',
      subtitle: 'Saturday, 5th September 2026',
      src: '/images/engagement-invitation-card.jpg',
    },
    {
      id: 5,
      title: 'Official Wedding Card',
      subtitle: 'Saturday, 12th September 2026',
      src: '/images/wedding-invitation-card.jpg',
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-[#FAF7F2] via-[#F4E7CE]/20 to-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#A37E3B] mb-2">
              <Sparkles className="w-4 h-4 text-[#8B263E]" />
              <span className="font-cinzel text-xs uppercase tracking-[0.3em] font-semibold">
                Engagement & Wedding Artworks
              </span>
            </div>
            <h2 className="font-script text-5xl md:text-6xl text-[#8B263E]">
              Memories & Gallery
            </h2>
          </div>

          {/* Carousel Scroll Buttons */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white border border-[#C5A059]/40 shadow-md text-[#8B263E] hover:bg-[#8B263E] hover:text-white transition-all cursor-pointer"
              title="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white border border-[#C5A059]/40 shadow-md text-[#8B263E] hover:bg-[#8B263E] hover:text-white transition-all cursor-pointer"
              title="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Smooth Scrollable Gallery Slider */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="flex-none w-[300px] sm:w-[360px] md:w-[420px] snap-center group relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#C5A059]/40 bg-white cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-[420px] w-full overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2623]/90 via-[#2C2623]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="font-cinzel text-xs text-[#E5C384] tracking-widest uppercase">
                  {photo.subtitle}
                </span>
                <h4 className="font-serif font-bold text-xl mt-1 flex items-center justify-between">
                  <span>{photo.title}</span>
                  <ZoomIn className="w-5 h-5 text-[#E5C384]" />
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl max-h-[90vh] p-3 bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A059]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className="max-h-[75vh] w-auto mx-auto rounded-2xl object-contain"
            />
            <div className="p-4 text-center">
              <h3 className="font-serif font-bold text-2xl text-[#8B263E]">
                {activePhoto.title}
              </h3>
              <p className="font-cinzel text-xs text-[#7E5F28] uppercase mt-1 tracking-wider">
                {activePhoto.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
