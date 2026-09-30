import React from 'react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[88vh] grid place-items-center text-center overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(38, 9, 10, 0.65), rgba(18, 4, 5, 0.8)), url('/hero-bg.png')`
      }}
    >
      <div className="relative z-10 max-w-4xl px-6 py-16">
        <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#d6aa54] font-semibold">
          Paris · Fine Dining · Ratatouille
        </span>
        <h1 className="my-3 text-6xl sm:text-8xl md:text-9xl font-serif font-black uppercase tracking-wide drop-shadow-2xl text-[#f8f0df]">
          Gusteau's
        </h1>
        <div className="text-xl sm:text-3xl font-serif italic text-[#d6aa54]">
          “Anyone Can Cook.”
        </div>
        <p className="max-w-2xl mx-auto my-6 text-[#f9ead4] text-sm sm:text-base leading-relaxed">
          Step into a cinematic Parisian kitchen inspired by Pixar's <em>Ratatouille</em> — where Remy's passion, Gusteau's philosophy, and the rhythm of a professional brigade meet at one table.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <a href="#menu" className="bg-[#d6aa54] text-[#3b0e12] font-bold px-6 py-3 rounded-full hover:bg-yellow-500 transition-all">
            Explore the menu
          </a>
          <a href="#team" className="border border-white/50 bg-black/20 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-all">
            Meet the kitchen
          </a>
        </div>
      </div>
    </section>
  );
}