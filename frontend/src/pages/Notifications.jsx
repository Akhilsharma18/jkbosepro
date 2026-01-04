import React, { useEffect, useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Mock data
    setNotifications([
      { _id: '1', date: '2025-01-02', title: 'Date Sheet for Class 10th Annual Regular 2025' },
      { _id: '2', date: '2024-12-28', title: 'Result Gazette Class 12th Bi-Annual' },
      { _id: '3', date: '2024-12-25', title: 'Circular regarding change in exam centers' },
      { _id: '4', date: '2024-12-20', title: 'Tender Notice for Printing of Answer Books' },
      { _id: '5', date: '2024-12-15', title: 'Notification regarding scholarship scheme' },
    ]);
  }, []);

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-primary border-b-2 border-gray-300 pb-2 mb-6">Notifications & Orders</h2>

      <div className="overflow-x-auto">
        <table className="table-custom">
          <thead>
            <tr>
              <th className="w-32">Date</th>
              <th>Notification Title</th>
              <th className="w-24">Download</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notif) => (
              <tr key={notif._id} className="hover:bg-gray-50">
                <td className="text-center font-bold text-gray-600">
                  {new Date(notif.date).toLocaleDateString('en-GB')}
                </td>
                <td>
                  <a href="#" className="text-secondary hover:underline font-medium">
                    {notif.title}
                  </a>
                </td>
                <td className="text-center">
                  <button className="text-red-700 font-bold text-xs border border-red-700 px-2 py-1 rounded hover:bg-red-50">
                    PDF ⬇
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;
