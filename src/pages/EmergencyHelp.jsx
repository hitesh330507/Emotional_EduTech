const EmergencyHelp = () => {
  const helpNumbers = [
    { name: "National Suicide Prevention Lifeline", number: "1-800-273-TALK" },
    { name: "Crisis Text Line", number: "Text HOME to 741741" },
    { name: "Domestic Violence Hotline", number: "1-800-799-7233" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0C10] p-6">
      <div className="w-full max-w-xl bg-[#1F2833] rounded-3xl shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center text-[#66FCF1] mb-6">Emergency Help</h2>
        
        <ul className="list-none space-y-4">
          {helpNumbers.map((contact, index) => (
            <li key={index} className="flex justify-between items-center border-b py-4 text-[#CFC6C7]">
              <span className="font-semibold">{contact.name}:</span> 
              <span className="text-[#45A29E]">{contact.number}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-[#CFC6C7]">
          If you're in immediate danger, please call <strong className="text-[#66FCF1]">911</strong> or your local emergency number.
        </p>
      </div>
    </div>
  );
};

export default EmergencyHelp;
