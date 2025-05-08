import React, { useState, useEffect } from 'react';

export default function moodselector() {
  const moods = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😡', label: 'Angry' },
    { emoji: '😴', label: 'Tired' },
  ];

  const [selectedMood, setSelectedMood] = useState(null);

  // Load saved mood from localStorage on first mount
  useEffect(() => {
    const saved = localStorage.getItem('selectedMood');
    if (saved) {
      setSelectedMood(JSON.parse(saved));
    }
  }, []);

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    localStorage.setItem('selectedMood', JSON.stringify(mood));
  };

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Hi there, how are you feeling today?</h2>
      <div className="flex space-x-4 text-4xl">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => handleMoodClick(mood)}
            className={`transition-transform transform hover:scale-110 ${
              selectedMood?.label === mood.label ? 'ring-4 ring-blue-400 rounded-full' : ''
            }`}
            title={mood.label}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      {selectedMood && (
        <p className="mt-4 text-lg text-blue-800">
          You selected: <strong>{selectedMood.label}</strong>
        </p>
      )}
    </section>
  );
}
