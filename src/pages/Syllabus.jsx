import React, { useState, useEffect } from 'react';

const syllabusData = {
  Biology: [
    {
      topic: "Cell Structure",
      youtube: "https://www.youtube.com/watch?v=URUJD5NEXC8",
      reference: "https://www.khanacademy.org/science/biology/structure-of-a-cell"
    },
    {
      topic: "Genetics",
      youtube: "https://www.youtube.com/watch?v=Mehz7tCxjSE",
      reference: "https://www.nature.com/subjects/genetics"
    }
  ],
  Physics: [
    {
      topic: "Newton's Laws",
      youtube: "https://www.youtube.com/watch?v=kKKM8Y-u7ds",
      reference: "https://www.physicsclassroom.com/class/newtlaws"
    }
  ],
  Chemistry: [
    {
      topic: "Periodic Table",
      youtube: "https://www.youtube.com/watch?v=0RRVV4Diomg",
      reference: "https://www.chemicool.com/"
    }
  ],
  Maths: [
    {
      topic: "Calculus Basics",
      youtube: "https://www.youtube.com/watch?v=WUvTyaaNkzM",
      reference: "https://www.khanacademy.org/math/calculus-1"
    }
  ]
};

const Syllabus = () => {
  const [expanded, setExpanded] = useState(null);
  const [completedTopics, setCompletedTopics] = useState(() => {
    return JSON.parse(localStorage.getItem("completedTopics")) || {};
  });

  const toggleSubject = subject => {
    setExpanded(expanded === subject ? null : subject);
  };

  const handleVisit = (subject, topic) => {
    setTimeout(() => {
      const updated = {
        ...completedTopics,
        [`${subject}-${topic}`]: true
      };
      setCompletedTopics(updated);
      localStorage.setItem("completedTopics", JSON.stringify(updated));
    }, 10000); // 10 seconds delay
  };

  return (
    <div className="max-w-5xl mx-auto p-4 pt-24 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-800">📘 Syllabus</h1>
      {Object.entries(syllabusData).map(([subject, topics]) => (
        <div key={subject} className="bg-white shadow-md rounded-xl p-4 transition-all duration-300">
          <div
            onClick={() => toggleSubject(subject)}
            className="cursor-pointer flex justify-between items-center text-xl font-semibold text-blue-700 hover:text-blue-900"
          >
            <span>{subject}</span>
            <span>{expanded === subject ? '−' : '+'}</span>
          </div>
          {expanded === subject && (
            <ul className="mt-3 space-y-3">
              {topics.map(({ topic, youtube, reference }) => {
                const key = `${subject}-${topic}`;
                const isCompleted = completedTopics[key];

                return (
                  <li key={topic} className="bg-gray-100 rounded-lg p-3 shadow-sm hover:bg-blue-50 flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">
                        {topic} {isCompleted && <span className="text-green-500 ml-1">✔</span>}
                      </h4>
                      <div className="text-sm text-blue-600 space-x-4 mt-1">
                        <a
                          href={youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          onClick={() => handleVisit(subject, topic)}
                        >
                          🎥 YouTube
                        </a>
                        <a
                          href={reference}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          onClick={() => handleVisit(subject, topic)}
                        >
                          🔗 Reference
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Syllabus;