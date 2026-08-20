import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Image, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenCardModal }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Couple', href: '#couple', icon: Heart },
    { name: 'Gallery', href: '#gallery', icon: Image },
    { name: 'Location', href: '#directions', icon: MapPin },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-md py-2 border-b border-[#C5A059]/30'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Brand Name (Single Line) */}
        <a href="#" className="flex items-center group">
          <span className="font-script text-2xl md:text-3xl text-[#8B263E] font-bold tracking-wide whitespace-nowrap">
            Akhil & Josna
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="font-cinzel text-xs uppercase tracking-widest text-[#2C2623] hover:text-[#8B263E] flex items-center gap-1.5 transition-colors font-semibold"
              >
                <Icon className="w-3.5 h-3.5 text-[#C5A059]" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button: View Invitation Cards */}
        <button
          onClick={onOpenCardModal}
          className="py-2 px-4 rounded-full bg-gradient-to-r from-[#8B263E] to-[#A11F3C] text-white font-cinzel text-xs tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-1.5 border border-[#E5C384]/40 font-bold"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E5C384]" />
          <span>Official Cards</span>
        </button>
      </div>
    </header>
  );
}
