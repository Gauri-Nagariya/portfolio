import React, { useState } from "react";
import linkedin from "../assets/images/link.png"; // Import the image
import github from "../assets/images/github_contact.png"; // Import the image
import emailimg from "../assets/images/mail.png"; // Import the image

const Contact = () => {

  const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
  
   const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a9d3f7aa-37a9-4990-83f1-d238bf4471e1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: json,
});
const res = await response.json();

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <section
      id="contact"
      className="bg-black text-white py-26 px-4 sm:px-8 lg:px-16 text-center"
    >
      <div className="container  bg-transparent pb-16 rounded-4xl text-left">
        <div className="card w-full sm:w-3/4 lg:w-1/2 m-auto p-6">
          <h1 className="text-center font-bold text-3xl mb-6">
            Drop me a message here
          </h1>
          <form className="flex flex-col" onSubmit={handleFormSubmit}>
            {/* Username Field */}
            <div className="relative w-full mb-6">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="enter your name"
                required
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="peer w-full border-b-2 border-gray-400 bg-transparent text-white placeholder-transparent focus:outline-none pt-6 pb-2"
              />
              <label
                htmlFor="username"
                className="
      absolute left-0 text-gray-400 text-base transition-all duration-200
      top-4
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
      peer-focus:top-0 peer-focus:text-sm peer-focus:text-orange-500
      peer-valid:top-0 peer-valid:text-sm peer-valid:text-orange-500
    "
              >
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative w-full mb-6">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                required
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full border-b-2 border-gray-400 bg-transparent text-white placeholder-transparent focus:outline-none pt-6 pb-2"
              />
              <label
                htmlFor="email"
                className="
      absolute left-0 text-gray-400 text-base transition-all duration-200
      top-4
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
      peer-focus:top-0 peer-focus:text-sm peer-focus:text-orange-500
      peer-valid:top-0 peer-valid:text-sm peer-valid:text-orange-500
    "
              >
                Email
              </label>
            </div>

            {/* Message Field */}
            <div className="relative w-full mb-6">
              <textarea
                id="message"
                name="message"
                placeholder=" "
                required
                rows={6}
                autoComplete="off"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                //  className="peer w-full border-b-2 border-gray-400 bg-transparent text-white placeholder-transparent focus:outline-none pt-6 pb-2 resize custom-scroll"
                className="peer w-full border-b-2 border-gray-400 bg-transparent text-white placeholder-transparent focus:outline-none pt-6 mt-6 pb-2 resize-none overflow-y-auto custom-scroll"
              />
              <label
                htmlFor="message"
                className="
      absolute left-0 text-gray-400 text-base transition-all duration-200
      top-4
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
      peer-focus:top-0 peer-focus:text-sm peer-focus:text-orange-500
      peer-valid:top-0 peer-valid:text-sm peer-valid:text-orange-500
    "
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded text-center h-8 cursor-pointer bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* <div>
        <div className='container border-orange-600 bg-transparent border-2 rounded-4xl text-left'>
          <div className='card w-70 sm:w-70 lg:w-120 m-auto'>
          <h1 className='text-center font-bold text-3xl'>Contact Form</h1>
          <form className='flex flex-col'>
            <label htmlFor="username" className=''>Username</label>
            <input type="text" name='username' required autoComplete='off' className='border-2 rounded h-10'/>


            <label htmlFor="email" className=''>Email</label>
            <input type="email" name='email' required autoComplete='off' className='border-2 rounded h-10'/>

            <label htmlFor="message" className=''>Message</label>
            <textarea name="message" type="password" required autoComplete='off' rows={6} className='border-2 rounded'/>

            <button type='submit' className=' 
            w-full rounded text-center my-4 bg-orange-600 text-white'>Send Message</button>
          </form>
          </div>
        </div>
    </div> */}

      {/* <p className="text-lg italic mb-8 max-w-2xl mx-auto">
        "The only way to do great work is to love what you do." <br />
      </p> */}
      <div className="relative mb-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white"></div>
        </div>
        <div className="relative inline-block px-4 bg-black  text-3xl font-bold tracking-widest">
          OR SIMPLY REACH OUT HERE
        </div>
      </div>
      <div className="flex justify-center space-x-8 sm:space-x-16">
        <a
          href="https://www.linkedin.com/in/gauri-nagariya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 bg-black "
          />
        </a>
        <a
          href="https://github.com/Gauri-Nagariya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="GitHub"
            className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=gaurinagariya@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={emailimg}
            alt="Email"
            className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 bg-black"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
