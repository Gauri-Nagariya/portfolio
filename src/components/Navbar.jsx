import React, { useState } from 'react';

const Navbar = () => {
  const [hoverColor, setHoverColor] = useState('');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleMouseEnter = () => {
    setHoverColor(getRandomColor());
  };

  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md z-50 py-4 sm:py-6 px-4 sm:px-8 shadow-lg">
      {/* <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-12 text-sm sm:text-xl font-semibold tracking-widest"> */}
      <ul className="flex justify-center space-x-3 sm:space-x-12 font-semibold px-2 sm:px-0">

        <li>
          <a
            href="#about"
            className="transition-colors duration-300 tracking-widest text-[0.7rem] sm:text-xl"
            style={{ '--hover-color': hoverColor }}
            onMouseEnter={handleMouseEnter}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="transition-colors duration-300 tracking-widest text-[0.7rem] sm:text-xl"
            style={{ '--hover-color': hoverColor }}
            onMouseEnter={handleMouseEnter}
          >
            SKILLS
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="transition-colors duration-300 tracking-widest text-[0.7rem] sm:text-xl"
            style={{ '--hover-color': hoverColor }}
            onMouseEnter={handleMouseEnter}
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            href="#certifications"
            className="transition-colors duration-300 tracking-widest text-[0.7rem] sm:text-xl"
            style={{ '--hover-color': hoverColor }}
            onMouseEnter={handleMouseEnter}
          >
            CERTIFICATIONS
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="transition-colors duration-300 tracking-widest text-[0.7rem] sm:text-xl"
            style={{ '--hover-color': hoverColor }}
            onMouseEnter={handleMouseEnter}
          >
            CONTACT
          </a>
        </li>

        {/* Resume Button */}
        {/* <a
          href="certificates/resume.pdf"
          download
          className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-white text-xs sm:text-sm shadow-lg transition-transform duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)',
            border: 'none',
          }}
        >
          DOWNLOAD RESUME
        </a> */}
      </ul>
    </nav>
  );
};

export default Navbar;