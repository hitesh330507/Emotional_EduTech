import React, { useState } from "react";

const MoodJournal = () => {
  const [moodNote, setMoodNote] = useState("");
  const [moodJournal, setMoodJournal] = useState([]);
  const [showJournal, setShowJournal] = useState(false);

  const saveMoodEntry = () => {
    if (moodNote.trim() === "") return;
    setMoodJournal([
      ...moodJournal,
      { note: moodNote, date: new Date().toLocaleString() },
    ]);
    setMoodNote("");
  };

  const deleteEntry = (index) => {
    setMoodJournal(moodJournal.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0C10] p-6">
      <div className="w-full max-w-2xl bg-[#1F2833] rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-[#66FCF1] text-center mb-6">📖 Mood Journal</h2>

        <button
          onClick={() => setShowJournal(!showJournal)}
          className="w-full bg-[#66FCF1] text-[#0B0C10] font-semibold py-3 rounded-xl hover:bg-[#45A29E] transition duration-300"
        >
          {showJournal ? "Close Journal" : "Open Journaling"}
        </button>

        {showJournal && (
          <div className="mt-6">
            <textarea
              className="w-full p-4 rounded-xl bg-[#0B0C10] border border-[#45A29E] text-[#CFC6C7] focus:outline-none focus:ring-2 focus:ring-[#66FCF1]"
              rows={4}
              value={moodNote}
              onChange={(e) => setMoodNote(e.target.value)}
              placeholder="Write about your mood today..."
            />
            <button
              onClick={saveMoodEntry}
              className="mt-3 w-full bg-[#66FCF1] text-[#0B0C10] font-medium py-2 rounded-xl hover:bg-[#45A29E] transition duration-300"
            >
              Save Entry
            </button>
          </div>
        )}

        {showJournal && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#66FCF1]">Past Entries:</h3>
            {moodJournal.length === 0 ? (
              <p className="text-[#CFC6C7] text-center mt-3">No journal entries yet.</p>
            ) : (
              <div className="space-y-4 mt-4">
                {moodJournal.map((entry, index) => (
                  <div key={index} className="p-4 bg-[#0B0C10] border border-[#45A29E] rounded-xl">
                    <p className="text-[#CFC6C7]">{entry.note}</p>
                    <p className="text-sm text-[#888] mt-1">{entry.date}</p>
                    <button
                      onClick={() => deleteEntry(index)}
                      className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodJournal;
