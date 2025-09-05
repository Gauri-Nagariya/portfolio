import React from 'react';
import aboutImg from '../assets/images/about_image.jpg'; // Import the image

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-800 py-20 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 text-center">
          <img src={aboutImg} alt="Gauri Nagariya" className="rounded-lg mt-30 max-w-full h-auto mx-auto" />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center lg:text-left">ABOUT</h2>
          <p className="text-lg mb-4 text-justify">
            I'm an engineering student with a keen interest in how technology shapes modern businesses. I enjoy working on projects that mix logic, design, and problem-solving. Along the way, I’ve picked up skills in web development, explored concepts like cybersecurity and AI through certifications, and gained a better understanding of how systems work behind the scenes.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-2">Education</h3>
            <ul className="text-lg list-none p-0">
              <li className="mb-2"><strong>Prestige Institute of Management and Research, Bhopal</strong> <br /> Bachelor of Technology (CSE) : CGPA : 7.85 (up to 6th semester) <br /> (2022 - 2026)</li>
              <li className="mb-2"><strong>Sanskar Bharti Public School</strong> <br /> Senior Secondary (Class 12), CBSE : Percentage: 80% (2021 - 2022)</li>
              <li className="mb-2"><strong>Sanskar Bharti Public School</strong> <br /> Secondary (Class 10), CBSE : Percentage: 80% (2019 - 2020)</li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-2">Career Goals & Aspirations</h3>
            <p className="text-lg text-justify">
              To build a career in enterprise technology where I can blend my technical skills with business understanding, while continuously learning and contributing to impactful solutions.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-2">Hobbies & Interests</h3>
            <p className="text-lg">
              Painting | Photography | diary writing 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;