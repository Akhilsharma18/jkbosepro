import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/api/admin/login', { email, password });
      localStorage.setItem('adminToken', data.token);
      navigate('/admin/dashboard');
    } catch (error) {
      alert(error.response?.data?.message || 'Invalid Credentials');
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
