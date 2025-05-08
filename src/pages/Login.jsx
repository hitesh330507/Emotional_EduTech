import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [recording, setRecording] = useState(false);
  const navigate = useNavigate();

  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);

  const handleLogin = async () => {
    if (username === 'user' && password === 'password') {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        streamRef.current = stream;
        const mediaRecorder = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.ondataavailable = event => {
          if (event.data.size > 0) chunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'video/webm' });
          const url = URL.createObjectURL(blob);
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
          const a = document.createElement('a');
          a.href = url;
          a.download = `recording-${timestamp}.webm`;
          a.click();
          stream.getTracks().forEach(track => track.stop());
          navigate('/');
        };

        mediaRecorderRef.current = mediaRecorder;
        setRecording(true);
        mediaRecorder.start();

        setTimeout(() => {
          mediaRecorder.stop();
          setRecording(false);
        }, 10000); // 10 seconds recording

      } catch (err) {
        console.error('Media access denied:', err);
        setError('Could not access camera or microphone.');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 px-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">MindEase Login</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Your audio/video will be recorded for 10 seconds after login.
        </p>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>

        {recording && (
          <p className="text-center text-green-600 mt-4 animate-pulse">
            🔴 Recording in progress...
          </p>
        )}

        <div className="text-center mt-6 text-sm text-gray-400">
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
