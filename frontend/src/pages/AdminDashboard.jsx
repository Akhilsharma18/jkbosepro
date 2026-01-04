import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="py-8 px-4">
      <div className="flex justify-between items-center border-b-2 border-gray-300 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-primary">Admin Dashboard</h2>
        <button onClick={handleLogout} className="bg-red-700 text-white px-4 py-1 text-sm font-bold">LOGOUT</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Manage Notifications */}
        <div className="bg-white p-6 border shadow-sm hover:shadow-md">
          <h3 className="font-bold text-lg mb-2">📢 Notifications</h3>
          <p className="text-sm text-gray-600 mb-4">Add or delete homepage notifications.</p>
          <button className="bg-secondary text-white px-4 py-2 text-sm">Manage</button>
        </div>

        {/* Upload Results */}
        <div className="bg-white p-6 border shadow-sm hover:shadow-md">
          <h3 className="font-bold text-lg mb-2">🎓 Upload Results</h3>
          <p className="text-sm text-gray-600 mb-4">Upload student result data.</p>
          <button className="bg-secondary text-white px-4 py-2 text-sm">Upload Result</button>
        </div>

        {/* Manage Downloads */}
        <div className="bg-white p-6 border shadow-sm hover:shadow-md">
          <h3 className="font-bold text-lg mb-2">📥 Downloads</h3>
          <p className="text-sm text-gray-600 mb-4">Upload syllabus, datesheets etc.</p>
          <button className="bg-secondary text-white px-4 py-2 text-sm">Manage Files</button>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200">
        <h4 className="font-bold">System Status</h4>
        <p className="text-sm">Database Connection: <span className="text-green-600 font-bold">Active</span></p>
        <p className="text-sm">Last Login: Today</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
