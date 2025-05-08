import React from 'react';

export default function Herosection() {
  return (
    <section className="mb-10 text-center px-4 pt-24"> {/* Add pt-24 for spacing */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#66FCF1] mb-4 animate-fadeIn">
        Welcome to MindEase 💙
      </h1>
      <p className="text-lg md:text-xl text-[#CFC6C7] max-w-2xl mx-auto">
        Your personal space for self-care, emotional check-ins, and wellness support.
      </p>
    </section>
  );
}
