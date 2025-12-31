import React, { useState } from 'react';
import html from '../assets/images/html-5.png'; 
import css from '../assets/images/css_image.png'; 
import js from '../assets/images/javas4.webp'; 
import react from '../assets/images/react.png'; 
import twcss from '../assets/images/twcss.svg'; 
import figma from '../assets/images/figma.png'; 
import java from '../assets/images/java.png'; 
import sql from '../assets/images/sql.png'; 
import github from '../assets/images/github_contact.png'; 
import exp from '../assets/images/exp.png'; 
import node from '../assets/images/node.png'; 
import mdb from '../assets/images/mdb.png'; 
import redux from '../assets/images/redux-icon.png'
import nextjs from '../assets/images/nextjs-icon.png'
import bootstrap from '../assets/images/icons8-bootstrap-96.png'
import postman from '../assets/images/postman-icon.png'



const skillsData = [
  { name: 'HTML', img: html },
  { name: 'CSS', img: css },
  { name: 'JAVASCRIPT', img: js },
  { name: 'REACT.JS', img: react },
  { name: 'REDUX', img: redux },
  { name: 'NEXT.JS', img: nextjs },
  { name: 'TAILWIND CSS', img: twcss },
  { name: 'BOOTSTRAP', img: bootstrap },
  
  { name: 'EXPRESS', img: exp },
  { name: 'NODE.JS', img: node },
  { name: 'MONGODB', img: mdb },
  
  { name: 'JAVA', img: java },
  { name: 'MYSQL', img: sql },
  // { name: 'FIGMA', img: figma },
  { name: 'POSTMAN', img: postman },
  { name: 'GITHUB', img: github },
  // { name: 'VS CODE', img: 'images/vs code.png' },
];

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills &amp; TECHNOLOGIES</h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto"> */}
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={skill.name}
            className="relative bg-black/70 rounded-xl shadow-md flex flex-col items-center justify-center text-center h-18 sm:h-24 md:h-24 w-full font-medium text-[12px] sm:text-lg transition-all duration-200 border border-[#f3f3f3]/30 hover:shadow-lg hover:shadow-[#232b3a]/60 hover:-translate-y-1 backdrop-blur-md cursor-pointer overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className={`relative z-20 transition-colors duration-500 ${hovered === index ? 'text-transparent' : ''}`}>
              {skill.name}
            </span>
            {/* Animated overlay from bottom to top */}
            <div
              className={`absolute left-0 bottom-0 w-full z-10 transition-all duration-500 ease-in-out
                ${hovered === index ? 'animate-skillcover' : 'animate-skilluncover'}
              `}
              style={{
                height: hovered === index ? '100%' : '0%',
                background: hovered === index ? 'rgba(0,0,0,0.92)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
              }}
            >
              {hovered === index && (
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 object-contain m-auto opacity-90 transition-opacity duration-300"
                  style={{ pointerEvents: 'none' }}
                />
              )}
            </div>
            {/* Keyframes for the smooth bottom-to-top overlay */}
            <style>
              {`
                @keyframes skillcover {
                  0% { height: 0%; }
                  100% { height: 100%; }
                }
                @keyframes skilluncover {
                  0% { height: 100%; }
                  100% { height: 0%; }
                }
                .animate-skillcover {
                  animation: skillcover 0.5s cubic-bezier(.4,0,.2,1) forwards;
                }
                .animate-skilluncover {
                  animation: skilluncover 0.5s cubic-bezier(.4,0,.2,1) forwards;
                }
              `}
            </style>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
