import React from 'react';

export default function Toast({ message, visible }) {
  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#3b0e12] text-white px-6 py-3 rounded-full shadow-2xl z-50 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      {message}
    </div>
  );
}