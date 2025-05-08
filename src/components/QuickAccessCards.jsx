import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuickAccessCards() {
  const navigate = useNavigate();

  const actions = [
    { label: '🧘 Guided Meditation', path: '/guided-meditation' },
    { label: '📓 Journaling', path: '/journals' },
    { label: '🤖 Talk to AI Companion', path: '/chatbot' },
    { label: '🚨 Emergency Help', path: '/emergency-help' },
  
  ];

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-[#66FCF1] mb-4">Quick Support Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((action, idx) => (
          <div
            key={idx}
            onClick={() => navigate(action.path)}
            className="bg-[#1F2833] rounded-xl shadow-md p-6 cursor-pointer hover:bg-[#45A29E] transition duration-300 hover:scale-105"
          >
            <h3 className="text-lg font-semibold text-[#CFC6C7]">{action.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
