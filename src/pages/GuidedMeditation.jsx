import React, { useState, useEffect } from "react";

const GuidedMeditation = () => {
  const [selectedMeditation, setSelectedMeditation] = useState(null);
  const [timer, setTimer] = useState(5);
  const [isMeditating, setIsMeditating] = useState(false);
  const [breathStep, setBreathStep] = useState(0);
  const [relaxSound, setRelaxSound] = useState("");
  const [gratitudeNote, setGratitudeNote] = useState("");
  const [affirmations] = useState([
    "You are strong. You are capable.",
    "Breathe in positivity, breathe out negativity.",
    "Peace begins with you.",
    "Your mind is calm, your body is relaxed.",
  ]);

  useEffect(() => {
    let interval;
    if (isMeditating && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 60000);
    } else {
      clearInterval(interval);
      setIsMeditating(false);
    }
    return () => clearInterval(interval);
  }, [isMeditating, timer]);

  const handleBreathing = () => {
    const steps = ["Inhale deeply...", "Hold...", "Exhale...", "Pause..."];
    setBreathStep((prev) => (prev + 1) % steps.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0C10] p-6">
      <div className="max-w-2xl bg-[#1F2833] rounded-3xl shadow-xl p-8 text-center text-[#CFC6C7]">
        <h2 className="text-4xl font-bold text-[#66FCF1] mb-6">🧘 Guided Meditation</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            "Breathing",
            "Visualization",
            "Relaxation Sounds"
          ].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedMeditation(type)}
              className={`rounded-xl py-2 px-4 font-semibold transition duration-300 ${
                selectedMeditation === type
                  ? "bg-[#66FCF1] text-[#0B0C10]"
                  : "bg-[#1F2833] border border-[#45A29E] hover:bg-[#45A29E] text-[#CFC6C7]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {selectedMeditation && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Meditation Timer (minutes)</h3>
            <input
              type="number"
              className="w-24 text-center p-2 rounded-lg bg-[#0B0C10] border border-[#45A29E] text-[#CFC6C7]"
              value={timer}
              onChange={(e) => setTimer(Number(e.target.value))}
            />
            <button
              onClick={() => setIsMeditating(true)}
              className="ml-4 bg-[#66FCF1] text-[#0B0C10] py-2 px-6 rounded-lg hover:bg-[#45A29E] font-semibold"
            >
              Start
            </button>
          </div>
        )}

        {selectedMeditation === "Breathing" && isMeditating && (
          <div className="mt-6 p-4 rounded-xl bg-[#0B0C10] border border-[#45A29E]">
            <h3 className="text-lg font-semibold mb-2">Follow the Steps:</h3>
            <p className="text-2xl mb-2">{["Inhale deeply...", "Hold...", "Exhale...", "Pause..."][breathStep]}</p>
            <button
              onClick={handleBreathing}
              className="bg-[#45A29E] text-white px-4 py-2 rounded-xl hover:bg-[#66FCF1]"
            >
              Next
            </button>
          </div>
        )}

        {selectedMeditation === "Relaxation Sounds" && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Select a Sound:</h3>
            <select
              onChange={(e) => setRelaxSound(e.target.value)}
              className="mt-2 w-full p-2 rounded-xl bg-[#0B0C10] border border-[#45A29E] text-[#CFC6C7]"
            >
              <option value="">Select</option>
              <option value="waves">🌊 Ocean Waves</option>
              <option value="rain">🌧️ Rain Sounds</option>
              <option value="wind">🍃 Soft Wind</option>
            </select>
            {relaxSound && <p className="mt-2">Playing: {relaxSound}</p>}
          </div>
        )}

        <div className="mt-8 p-4 bg-[#1F2833] border border-[#45A29E] rounded-xl">
          <h3 className="text-xl font-semibold text-[#66FCF1]">Daily Affirmation</h3>
          <p className="text-lg mt-2">{affirmations[Math.floor(Math.random() * affirmations.length)]}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#66FCF1]">Gratitude Journal</h3>
          <textarea
            className="w-full mt-2 p-3 rounded-xl bg-[#0B0C10] border border-[#45A29E] text-[#CFC6C7]"
            value={gratitudeNote}
            onChange={(e) => setGratitudeNote(e.target.value)}
            placeholder="Write something you're grateful for..."
          />
        </div>
      </div>
    </div>
  );
};

export default GuidedMeditation;
