import React from 'react';

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 px-6 py-3 bg-[#3b0e12]/95 border-b border-[#d6aa54]/35 backdrop-blur-md text-white">
      <div className="hidden sm:block font-bold tracking-widest uppercase text-[#d6aa54]">
        Gusteau's Paris
      </div>
      <nav className="flex flex-wrap gap-4 sm:gap-6 justify-center text-xs sm:text-sm font-semibold tracking-wider uppercase">
        <a href="#story" className="hover:text-[#d6aa54] transition-colors">Story</a>
        <a href="#menu" className="hover:text-[#d6aa54] transition-colors">Menu</a>
        <a href="#team" className="hover:text-[#d6aa54] transition-colors">Team</a>
        <a href="#ego" className="hover:text-[#d6aa54] transition-colors">Anton Ego</a>
        <a href="#gallery" className="hover:text-[#d6aa54] transition-colors">Gallery</a>
      </nav>
      <a href="#reserve" className="hidden sm:inline-block border border-[#d6aa54] px-4 py-1.5 rounded-full text-[#d6aa54] text-xs font-semibold hover:bg-[#d6aa54] hover:text-[#3b0e12] transition-all">
        Reserve
      </a>
    </header>
  );
}