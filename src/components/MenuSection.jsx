import React, { useState } from 'react';
import { menuDishes } from '../data/restaurantData';

export default function MenuSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredDishes = activeFilter === 'all'
    ? menuDishes
    : menuDishes.filter(dish => dish.categories.includes(activeFilter));

  return (
    <section id="menu" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[#731d22] font-bold tracking-widest uppercase text-xs">From the kitchen</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-[#3b0e12] my-2">Remy's Menu</h2>
        <p className="text-[#76665d]">A cinematic menu inspired by dishes and food moments associated with the film.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {['all', 'signature', 'savory', 'sweet'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all ${
              activeFilter === filter
                ? 'bg-[#731d22] text-white border-[#731d22]'
                : 'border-[#731d22] text-[#731d22] hover:bg-[#731d22] hover:text-white'
            }`}
          >
            {filter === 'sweet' ? 'Dessert' : filter}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDishes.map(dish => (
          <article key={dish.id} className="bg-white border border-[#3b0e12]/15 rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl transition-all">
            <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-serif font-bold text-[#731d22]">{dish.name}</h3>
                <span className="text-[#9b7128] font-bold text-sm">{dish.price}</span>
              </div>
              <p className="text-[#76665d] text-xs leading-relaxed">{dish.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}