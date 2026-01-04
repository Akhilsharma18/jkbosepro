import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 border-b-4 border-yellow-500">
      <div className="container-custom flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl font-serif font-bold tracking-wide uppercase">
          Jammu & Kashmir Board of School Education
        </h1>
        <p className="text-sm md:text-base mt-2 font-light">
          (Academic Division, Rehari Colony, Jammu / Bemina, Srinagar)
        </p>
        <div className="text-xs bg-white text-primary px-2 py-1 mt-2 rounded font-bold">
          GOVERNMENT OF JAMMU & KASHMIR
        </div>
      </div>
    </header>
  );
};

export default Header;
