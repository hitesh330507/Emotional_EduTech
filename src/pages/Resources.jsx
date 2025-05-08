import React from "react";

// Extended resources list
const resources = [
  {
    title: "Mindfulness Basics",
    description: "Learn how to stay present and reduce stress with simple mindfulness exercises.",
    link: "https://www.mindful.org/meditation/mindfulness-getting-started/",
  },
  {
    title: "MoodGym",
    description: "A fun, interactive way to learn cognitive behavior therapy skills.",
    link: "https://moodgym.com.au/",
  },
  {
    title: "Headspace",
    description: "Guided meditations and mental wellness resources for beginners.",
    link: "https://www.headspace.com/",
  },
  {
    title: "BetterHelp",
    description: "Affordable online therapy with licensed therapists. Speak with a professional from the comfort of your home.",
    link: "https://www.betterhelp.com/",
  },
  {
    title: "Calm",
    description: "A relaxation app for meditation, sleep stories, and breathing exercises.",
    link: "https://www.calm.com/",
  },
  {
    title: "National Suicide Prevention Lifeline",
    description: "A 24/7 crisis support helpline. Call if you or someone you know is experiencing a mental health crisis.",
    link: "https://suicidepreventionlifeline.org/",
  },
  {
    title: "Psychology Today",
    description: "Find a therapist near you. A trusted directory of mental health professionals.",
    link: "https://www.psychologytoday.com/us/therapists",
  },
  {
    title: "The Trevor Project",
    description: "A suicide prevention resource for LGBTQ youth. Get support via text, chat, or phone.",
    link: "https://www.thetrevorproject.org/",
  },
  {
    title: "Talkspace",
    description: "Access therapy from licensed therapists through text, video, or audio messaging.",
    link: "https://www.talkspace.com/",
  },
];

const Resources = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-700">🌱 Helpful Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {resources.map((res, index) => (
          <a
            key={index}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-indigo-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-indigo-100"
          >
            <h3 className="text-xl font-bold text-indigo-800 mb-2">{res.title}</h3>
            <p className="text-gray-600 mb-4">{res.description}</p>
            <div className="text-indigo-600 font-semibold">Visit</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Resources;
