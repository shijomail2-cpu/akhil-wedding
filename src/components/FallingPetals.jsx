import React, { useEffect, useState } from 'react';

export default function FallingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalColors = ['#E75874', '#F394A5', '#C52B4D', '#D7BB7B', '#8B263E', '#F9C4CD'];
    const generated = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 16,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 8,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      rotation: Math.random() * 360,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full opacity-60 filter blur-[0.3px]"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            backgroundColor: p.color,
            borderRadius: '80% 0 80% 0',
            animation: `fall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% {
            top: -5%;
            transform: translateX(0) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateX(40px) rotate(180deg);
          }
          100% {
            top: 105%;
            transform: translateX(-30px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
