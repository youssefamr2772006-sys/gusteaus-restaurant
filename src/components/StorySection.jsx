import React from 'react';

export default function StorySection() {
  return (
    <section id="story" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[#731d22] font-bold tracking-widest uppercase text-xs">The restaurant</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-[#3b0e12] my-2">More than a kitchen. A dream.</h2>
        <p className="text-[#76665d]">
          Gusteau's is presented here as a fan-made Ratatouille experience, expanding the original restaurant concept into a richer, interactive website.
        </p>
      </div>

      <div className="grid md:grid-cols-[1.05fr_.95fr] gap-8 items-stretch">
        <article className="bg-[#fffaf0] border border-[#3b0e12]/15 rounded-[22px] p-8 shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-[#731d22] font-bold tracking-widest uppercase text-xs">Auguste Gusteau</span>
            <blockquote className="text-2xl sm:text-3xl text-[#731d22] font-serif italic my-4 leading-snug">
              “Great cooking is not about who you are. It's about what you can create.”
            </blockquote>
            <p className="text-[#251816] leading-relaxed">
              Gusteau's philosophy is at the heart of Remy's journey. The restaurant mixes classic French dining with the energetic, almost theatrical rhythm of a professional kitchen.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="p-3 border border-dashed border-[#3b0e12]/20 rounded-xl bg-[#fffdf8]">
              <strong className="block text-[#731d22] text-xs uppercase tracking-wider">Location</strong>
              <span className="text-sm font-semibold">Paris, France</span>
            </div>
            <div className="p-3 border border-dashed border-[#3b0e12]/20 rounded-xl bg-[#fffdf8]">
              <strong className="block text-[#731d22] text-xs uppercase tracking-wider">Signature</strong>
              <span className="text-sm font-semibold">Ratatouille</span>
            </div>
            <div className="p-3 border border-dashed border-[#3b0e12]/20 rounded-xl bg-[#fffdf8]">
              <strong className="block text-[#731d22] text-xs uppercase tracking-wider">Spirit</strong>
              <span className="text-sm font-semibold">Anyone Can Cook</span>
            </div>
            <div className="p-3 border border-dashed border-[#3b0e12]/20 rounded-xl bg-[#fffdf8]">
              <strong className="block text-[#731d22] text-xs uppercase tracking-wider">Kitchen star</strong>
              <span className="text-sm font-semibold">Remy 🐀</span>
            </div>
          </div>
        </article>

        <div className="relative min-h-[350px] rounded-[22px] overflow-hidden shadow-xl bg-cover bg-center" style={{ backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/5dda921f-afe4-45bc-bb36-b04de9275ab6/Remy16.jpg')` }}>
          <span className="absolute left-5 bottom-5 bg-[#3b0e12]/85 text-white text-xs px-3 py-1.5 rounded-full font-semibold">
            Remy · The Little Chef
          </span>
        </div>
      </div>
    </section>
  );
}