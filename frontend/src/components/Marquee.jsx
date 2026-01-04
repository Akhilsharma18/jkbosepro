import React, { useEffect, useState } from 'react';

const Marquee = () => {
  const [news, setNews] = useState([]);

  // Simulate fetching latest news
  useEffect(() => {
    // In real app, fetch from API
    setNews([
      "Result of Class 12th Annual Regular 2025 Declared",
      "Date Sheet for Class 10th Bi-Annual Examination Released",
      "Important Notification regarding Registration Renewal"
    ]);
  }, []);

  return (
    <div className="bg-gray-100 border-b border-gray-300 py-2 flex items-center">
      <div className="bg-accent text-white px-4 py-1 font-bold text-sm uppercase ml-4 rounded-sm whitespace-nowrap">
        Latest Updates
      </div>
      <div className="overflow-hidden w-full ml-4">
        <div className="whitespace-nowrap animate-marquee inline-block">
          {news.map((item, index) => (
            <span key={index} className="mx-8 text-primary font-bold text-sm">
              <span className="text-red-600 mr-2">NEW</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
