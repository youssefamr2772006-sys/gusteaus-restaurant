import React from 'react';

export default function EgoSection() {
  return (
    <section id="ego" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[#731d22] font-bold tracking-widest uppercase text-xs">The critic</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-[#3b0e12] my-2">Anton Ego's table</h2>
        <p className="text-[#76665d]">One of the film's most memorable culinary moments: a single bite becomes a doorway into memory and changes the way Ego sees food.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="rounded-[22px] overflow-hidden min-h-[350px] shadow-xl">
          <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/7f43c71d-8919-4944-b84d-adf43d176986/AntonEgo11.jpg" alt="Anton Ego" className="w-full h-full object-cover" />
        </div>
        <div className="bg-gradient-to-br from-[#fffdf7] to-[#f2e3c8] rounded-[22px] p-8 border border-[#3b0e12]/15 flex flex-col justify-center">
          <span className="text-[#731d22] font-bold tracking-widest uppercase text-xs">A critic's perspective</span>
          <h2 className="text-3xl font-serif text-[#3b0e12] my-2">The Grim Eater</h2>
          <p className="text-[#251816] text-sm leading-relaxed mb-6">
            Anton Ego is portrayed by Pixar as one of Paris's most powerful food critics. His reputation makes chefs nervous, but Remy's cooking ultimately reminds him that great food can be emotional, personal and unexpectedly simple.
          </p>
          <div className="bg-[#3b0e12] text-white p-6 rounded-2xl relative overflow-hidden">
            <span className="absolute -right-4 -top-8 text-8xl text-[#d6aa54]/10 font-serif leading-none">“</span>
            <p className="text-base sm:text-lg italic text-[#f8f0df] relative z-10">
              “Not everyone can become a great artist, but a great artist can come from anywhere.”
            </p>
            <strong className="block mt-3 text-[#d6aa54] text-xs uppercase tracking-wider">— Anton Ego's realization</strong>
          </div>
        </div>
      </div>
    </section>
  );
}