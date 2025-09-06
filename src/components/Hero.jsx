import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Frontend Developer";
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        setIndex(prev => prev + 1);
      } else if (isDeleting && index >= 0) {
        setTypedText(fullText.substring(0, index));
        setIndex(prev => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, index, fullText]);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-12 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
        Hey, I'm Gauri Nagariya!
      </h1>

      {/* Typing Text */}
      <div className="my-4 flex items-center justify-center min-h-[2.5rem] sm:min-h-[3.5rem]">
        <p className="text-2xl sm:text-4xl text-orange-500 font-extrabold inline-block">
          {typedText || '\u00A0'}
        </p>
        <span className="inline-block animate-pulse w-2 h-6 sm:h-8 bg-orange-500 ml-1"></span>
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg max-w-md sm:max-w-2xl mx-auto px-2">
        I love building interactive and visually appealing web experiences using React, Tailwind CSS, and JavaScript. Passionate about crafting seamless UI/UX designs that enhance user engagement.
      </p>

      {/* Download Resume Button - Always Visible */}
      <a
        href="certificates/resume.pdf"
        download
        className="inline-block mt-8 px-4 py-2 rounded-full font-bold text-white text-sm shadow-lg transition-transform duration-300 hover:scale-105"
        style={{
          background: 'linear-gradient(90deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)',
          border: 'none',
        }}
      >
        DOWNLOAD RESUME
      </a>
    </section>
  );
};

export default Hero;