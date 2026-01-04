import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Marquee from './Marquee';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      <Header />
      <Navbar />
      <Marquee />
      <main className="flex-grow container-custom bg-white shadow-xl min-h-[500px] border-x border-gray-200">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
