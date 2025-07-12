import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Login ke baad Dashboard pe bhejega
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-purple-400">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">🔐 Welcome Back</h2>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-md"
          >
            🔓 Login
          </button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <span
              onClick={() => navigate('/register')}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Register Now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
