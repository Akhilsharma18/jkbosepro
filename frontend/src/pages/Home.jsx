import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

const Home = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await API.get('/api/notifications');
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="py-6">
      {/* Welcome Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary border-b-2 border-gray-300 pb-2 mb-4">
          Welcome to JKBOSE
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src="https://via.placeholder.com/300x200?text=Board+Image"
            alt="Board Building"
            className="w-full md:w-1/3 border border-gray-300 p-1"
          />
          <div className="flex-1 text-justify text-sm leading-relaxed">
            <p className="mb-4">
              The Jammu and Kashmir Board of School Education (JKBOSE) is the main board of school education in the Indian Union Territory of Jammu and Kashmir. It is an autonomous body under the administration of the government of Jammu and Kashmir. The board gives affiliation to more than 10,200 schools across the province and employs 22,856 teachers.
            </p>
            <p>
              Its primary function is to prescribe syllabi, courses of instructions, and text books, and to conduct examinations and declare results.
            </p>
            <button className="mt-4 bg-primary text-white px-4 py-2 text-sm font-bold hover:bg-secondary">
              READ MORE
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Latest Notifications */}
        <section>
          <div className="bg-primary text-white p-3 font-bold uppercase flex justify-between items-center">
            <span>Latest Notifications</span>
            <Link to="/notifications" className="text-xs underline text-yellow-300">View All</Link>
          </div>
          <div className="border border-gray-300 bg-white">
            <ul className="divide-y divide-gray-200">
              {notifications.map((notif) => (
                <li key={notif._id} className="p-3 text-sm hover:bg-gray-50 flex items-start">
                  <span className="text-accent font-bold mr-2 text-xs border border-accent px-1">
                    {new Date(notif.date).getDate()} {new Date(notif.date).toLocaleString('default', { month: 'short' })}
                  </span>
                  <a href="#" className="hover:text-secondary hover:underline">{notif.title}</a>
                  {/* Simulate New Badge */}
                  <img src="https://via.placeholder.com/20x10?text=NEW" className="ml-2 h-4" alt="new" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Quick Links & Results */}
        <section>
          <div className="bg-secondary text-white p-3 font-bold uppercase mb-4">
            Student Corner
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/results" className="bg-gray-100 border border-gray-300 p-4 text-center hover:bg-white hover:shadow-md transition">
              <div className="text-3xl text-primary mb-2">🎓</div>
              <div className="font-bold text-primary">Results</div>
            </Link>
            <Link to="/downloads" className="bg-gray-100 border border-gray-300 p-4 text-center hover:bg-white hover:shadow-md transition">
              <div className="text-3xl text-primary mb-2">📥</div>
              <div className="font-bold text-primary">Downloads</div>
            </Link>
            <Link to="/notifications" className="bg-gray-100 border border-gray-300 p-4 text-center hover:bg-white hover:shadow-md transition">
              <div className="text-3xl text-primary mb-2">📜</div>
              <div className="font-bold text-primary">Date Sheets</div>
            </Link>
            <Link to="/academics" className="bg-gray-100 border border-gray-300 p-4 text-center hover:bg-white hover:shadow-md transition">
              <div className="text-3xl text-primary mb-2">📚</div>
              <div className="font-bold text-primary">Syllabus</div>
            </Link>
          </div>

          <div className="bg-accent text-white p-3 font-bold uppercase mt-6 mb-2">
            Important Information
          </div>
          <div className="border border-gray-200 p-4 bg-yellow-50 text-sm">
            <p className="mb-2"><strong>Helpline:</strong> 0191-258XXXX (Jammu), 0194-249XXXX (Srinagar)</p>
            <p className="text-red-700 font-bold">Note: Students are advised not to believe in fake news circulating on social media.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
