import React from 'react';
import { teamMembers } from '../data/restaurantData';

export default function TeamSection() {
  return (
    <section id="team" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[#731d22] font-bold tracking-widest uppercase text-xs">The brigade</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-[#3b0e12] my-2">The team behind the plates</h2>
        <p className="text-[#76665d]">From the kitchen brigade to the front of house, Gusteau's runs on timing, teamwork and a little bit of controlled chaos.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map(member => (
          <article key={member.id} className="bg-white border border-[#3b0e12]/15 rounded-2xl overflow-hidden shadow-md">
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover object-center" />
            <div className="p-5">
              <span className="text-[#9b7128] font-bold uppercase text-[10px] tracking-widest">{member.role}</span>
              <h3 className="text-lg font-serif font-bold text-[#731d22] mt-1 mb-2">{member.name}</h3>
              <p className="text-[#76665d] text-xs leading-relaxed">{member.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}