import React from 'react';
import linkedin from '../assets/images/link.png'; // Import the image
import github from '../assets/images/github_contact.png'; // Import the image
import email from '../assets/images/mail.png'; // Import the image



const Contact = () => {
  return (
    <section id="contact" className="bg-balck text-white py-20 px-4 sm:px-8 lg:px-16 text-center">
      <p className="text-lg italic mb-8 max-w-2xl mx-auto">
        "The only way to do great work is to love what you do." <br />
        {/* <span className="text-sm font-semibold">– Steve Jobs</span> */}
      </p>
      <div className="relative mb-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white"></div>
        </div>
        <div className="relative inline-block px-4 bg-black  text-3xl font-bold tracking-widest">
          CONTACT ME
        </div>
      </div>
      <div className="flex justify-center space-x-8 sm:space-x-16">
        <a href="https://www.linkedin.com/in/gauri-n-22ap4081" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 bg-black " />
        </a>
        <a href="https://github.com/Gauri-Nagariya" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gaurinagariya@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src={email} alt="Email" className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 bg-black" />
        </a>
      </div>
    </section>
  );
};

export default Contact;