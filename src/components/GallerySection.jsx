import React from 'react';
import { galleryItems } from '../data/restaurantData';

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[#731d22] font-bold tracking-widest uppercase text-xs">Scenes & flavors</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-[#3b0e12] my-2">A little piece of the film</h2>
        <p className="text-[#76665d]">Film imagery and Ratatouille-inspired food photography arranged as a visual story.</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, idx) => (
          <figure key={item.id} className={`group relative overflow-hidden rounded-2xl bg-gray-200 h-60 ${idx === 0 ? 'sm:col-span-2 sm:row-span-2 sm:h-full' : ''}`}>
            <img src={item.image} alt={item.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}