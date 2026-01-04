import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Notifications', path: '/notifications' },
    { name: 'Results', path: '/results' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Admin Login', path: '/admin/login' },
  ];

  return (
    <nav className="bg-secondary text-white border-b-2 border-primary shadow-md">
      <div className="container-custom">
        <ul className="flex flex-wrap justify-center md:justify-start">
          {navItems.map((item) => (
            <li key={item.name} className="border-r border-blue-400 last:border-none">
              <Link
                to={item.path}
                className="block px-4 py-3 hover:bg-primary transition-colors text-sm font-bold uppercase"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
