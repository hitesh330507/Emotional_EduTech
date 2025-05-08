import { Routes, Route } from 'react-router-dom';
import MentalHealthHome from './pages/MentalHealthHome';
import Journals from './pages/Journals'; // ✅
import GuidedMeditation from './pages/GuidedMeditation';
import EmergencyHelp from './pages/EmergencyHelp';
import Chatbot from './pages/Chatbot';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Syllabus from './pages/Syllabus';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MentalHealthHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/journals" element={<Journals />} /> {/* ✅ Make sure this exists */}
        <Route path="/guided-meditation" element={<GuidedMeditation />} />
        <Route path="/emergency-help" element={<EmergencyHelp />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/contact" element={<ContactUs />} /> {/* ✅ New Route */}
      </Routes>
    </div>
  );
};

export default App;
