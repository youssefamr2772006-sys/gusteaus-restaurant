import React, { useState } from 'react';

export default function ReservationSection({ onReserve }) {
  const today = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState({
    name: '',
    guests: '2 People',
    date: today,
    time: '20:00',
    note: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onReserve(formData.name || 'Guest');
    setFormData({ name: '', guests: '2 People', date: today, time: '20:00', note: '' });
  };

  return (
    <section id="reserve" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[#731d22] font-bold tracking-widest uppercase text-xs">Parisian service</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-[#3b0e12] my-2">Reserve your table</h2>
        <p className="text-[#76665d]">Choose a date and let the kitchen prepare something special.</p>
      </div>

      <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-8 items-stretch">
        <aside className="bg-gradient-to-br from-[#731d22] to-[#3b0e12] text-white p-8 rounded-[22px] flex flex-col justify-center">
          <h3 className="text-2xl font-serif text-[#d6aa54] mb-3">Tonight at Gusteau's</h3>
          <p className="text-sm text-[#f9ead4]">Fine French dining with a cinematic twist.</p>
          <ul className="mt-6 space-y-3 text-sm border-t border-white/10 pt-4">
            <li>🍽️ Signature Ratatouille</li>
            <li>🐀 Remy's Little Chef experience</li>
            <li>🕯️ Classic Parisian dining room</li>
            <li>⭐ “Anyone Can Cook” philosophy</li>
          </ul>
        </aside>

        <form onSubmit={handleSubmit} className="bg-white border border-[#3b0e12]/15 rounded-[22px] p-8 shadow-xl grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-[#731d22] mb-1">Full name</label>
            <input
              id="name"
              required
              placeholder="Anton Ego"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border border-[#d6c9bc] rounded-xl text-sm bg-[#fffdf9] focus:outline-none focus:border-[#d6aa54]"
            />
          </div>

          <div>
            <label htmlFor="guests" className="block text-xs font-bold text-[#731d22] mb-1">Guests</label>
            <select
              id="guests"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full p-3 border border-[#d6c9bc] rounded-xl text-sm bg-[#fffdf9] focus:outline-none focus:border-[#d6aa54]"
            >
              <option>1 Person</option>
              <option>2 People</option>
              <option>4 People</option>
              <option>6 People</option>
              <option>8 People</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-xs font-bold text-[#731d22] mb-1">Date</label>
            <input
              id="date"
              type="date"
              min={today}
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full p-3 border border-[#d6c9bc] rounded-xl text-sm bg-[#fffdf9] focus:outline-none focus:border-[#d6aa54]"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-xs font-bold text-[#731d22] mb-1">Time</label>
            <select
              id="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full p-3 border border-[#d6c9bc] rounded-xl text-sm bg-[#fffdf9] focus:outline-none focus:border-[#d6aa54]"
            >
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="note" className="block text-xs font-bold text-[#731d22] mb-1">Special request</label>
            <input
              id="note"
              placeholder="A table near the kitchen, please…"
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              className="w-full p-3 border border-[#d6c9bc] rounded-xl text-sm bg-[#fffdf9] focus:outline-none focus:border-[#d6aa54]"
            />
          </div>

          <button type="submit" className="sm:col-span-2 mt-2 w-full bg-[#d6aa54] text-[#3b0e12] font-bold py-3.5 rounded-full hover:bg-yellow-500 transition-all">
            Request a table
          </button>
        </form>
      </div>
    </section>
  );
}