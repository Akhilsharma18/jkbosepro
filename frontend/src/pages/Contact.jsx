import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (Simulation)");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-primary border-b-2 border-gray-300 pb-2 mb-6">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 border">
          <h3 className="text-lg font-bold text-secondary mb-4">Board Offices</h3>
          <div className="mb-4">
            <h4 className="font-bold underline">Jammu Position</h4>
            <p>Rehari Colony, Jammu (Nov-Apr)</p>
            <p>Phone: 0191-258XXXX</p>
          </div>
          <div>
            <h4 className="font-bold underline">Srinagar Position</h4>
            <p>Bemina, Srinagar (May-Oct)</p>
            <p>Phone: 0194-249XXXX</p>
          </div>
        </div>

        <div className="bg-white p-6 border shadow-sm">
          <h3 className="text-lg font-bold text-secondary mb-4">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-2 border"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>
            <button type="submit" className="bg-primary text-white px-6 py-2 font-bold hover:bg-secondary">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
