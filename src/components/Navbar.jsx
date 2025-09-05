import React, { useState } from 'react';

const Navbar = () => {
  const [hoverColor, setHoverColor] = useState('');

  // Function to generate a random hexadecimal color code
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setHoverColor(getRandomColor());
  };

  return (
    // <nav className="fixed top-0 w-full bg-black z-50 py-6">
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-by z-50 py-6 shadow-lg">
      <ul className="flex justify-center space-x-4 sm:space-x-12 text-lg sm:text-xl font-semibold tracking-widest">
        <li>
          <a
            href="#about"
            className="transition-colors duration-300"
            style={{ '--hover-color': hoverColor }}
            onMouseEnter={handleMouseEnter}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="transition-colors duration-300"
            style={{ '--hover-color': hoverColor }}
            onMouseEnter={handleMouseEnter}
          >
            SKILLS
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="transition-colors duration-300"
            style={{ '--hover-color': hoverColor }}
            onMouseEnter={handleMouseEnter}
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            href="#certifications"
            className="transition-colors duration-300"
            style={{ '--hover-color': hoverColor }}
            onMouseEnter={handleMouseEnter}
          >
            CERTIFICATIONS
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="transition-colors duration-300"
            style={{ '--hover-color': hoverColor }}
            onMouseEnter={handleMouseEnter}
          >
            CONTACT
          </a>
           {/* Download Resume Button */}
        <a
          href="certificates/resume.pdf"
          download
          className="hidden sm:inline-block absolute right-10 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full font-bold text-white text-sm shadow-lg transition-transform duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)',
            border: 'none',
          }}
        >
          DOWNLOAD RESUME
        </a>
        </li>
        
      </ul>


      
    </nav>
  );
};

export default Navbar;