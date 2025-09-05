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
    const delay = isDeleting ? 100 : 1000;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, index, fullText]);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold">Hey, I'm Gauri Nagariya!</h1>
        <div className="my-4">
          <p className="text-2xl sm:text-4xl text-orange-500 font-extrabold inline-block">
            {typedText}
          </p>
          <span className="inline-block animate-pulse w-2 h-8 bg-orange-500 ml-1"></span>
        </div>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          I love building interactive and visually appealing web experiences using React, Tailwind CSS, and JavaScript. Passionate about crafting seamless UI/UX designs that enhance user engagement.
        </p>
      </div>
    </section>
  );
};

export default Hero;