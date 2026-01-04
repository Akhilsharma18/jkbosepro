import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    if (email === 'admin@jkbose.nic.in' && password === 'admin123') {
      localStorage.setItem('adminToken', 'dummy-token');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="bg-white p-8 border border-gray-300 shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold">Email ID</label>
            <input
              type="email"
              className="w-full p-2 border"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold">Password</label>
            <input
              type="password"
              className="w-full p-2 border"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 font-bold hover:bg-secondary">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
