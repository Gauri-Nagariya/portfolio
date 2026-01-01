import React from "react";
import lumeo from "../assets/images/lume.jpg"; // Import the image
import cc from "../assets/images/ccc.jpg"; // Import the image
import black from "../assets/images/black.jpg"; // Import the image
import white from "../assets/images/white.jpg"; // Import the image
import blackk from "../assets/images/blackk.jpg"; // Import the image
import whitee from "../assets/images/whitee.jpg"; // Import the image

const projectsData = [
    {
    name: "CAREERBOARD - A Job Application Tracker Web Application",
    img: black,
    projectUrl: "https://job-application-tracker-lemon-eight.vercel.app/",
    githubUrl: "https://github.com/Gauri-Nagariya/JobApplicationTracker",
  },
    {
    name: "MYDRIVE - Drive Backend Project",
    img: whitee,
    projectUrl: "https://drive-x6zy.onrender.com",
    githubUrl:
      "https://github.com/Gauri-Nagariya/Drive_BackendProject",
  },
  {
    name: "LUMEO - AI-Powered Text to Image Generator",
    img: blackk,
    projectUrl: "https://lumeo-text-to-image-generator.vercel.app",
    githubUrl: "https://github.com/Gauri-Nagariya/Lumeo-text-to-image-generator.git",
  },
  {
    name: "WEATHER APP - Real-Time Weather Forecast & Interactive Map",
    img: cc,
    projectUrl: "https://weather-forecast-web-app-mu.vercel.app",
    githubUrl: "https://github.com/Gauri-Nagariya/Weather-Forecast-Web-App.git",
  },
  {
    name: "SHORTIFY - Secure URL Shortening & QR Code Generator",
    img: lumeo,
    projectUrl: "https://shortify-two.vercel.app/",
    githubUrl: "https://github.com/Gauri-Nagariya/shortify",
  },
  // {
  //   name: "PORTFOLIO WEBSITE",
  //   img: white,
  //   projectUrl: "https://portfolio-gilt-three-66.vercel.app/",
  //   githubUrl: "https://github.com/Gauri-Nagariya/portfolio.git",
  // },
  {
    name: "NOTES TAKER APP - File-Based Notes Management Web Application",
    img: white,
    // projectUrl: "projects/tic-tac-toe/index.html",
    githubUrl:
      "https://github.com/Gauri-Nagariya/notes-taker",
  },
];

const Projects = () => {
  return (
    // <section id="projects" className="min-h-screen w-full p-0 m-0">
    <section id="projects" className="scroll-mt-24 min-h-screen w-full p-0 m-0 ">
      <h2 className="text-4xl font-bold text-center mb-12 mt-12 text-white">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-h-[70vh] w-full">
        {projectsData.map((project, index) => (
          // ...existing code...
          <div
            key={index}
            className={`
              flex flex-col w-full h-[320px] sm:h-[340px]
              ${index % 2 === 0 ? "bg-black text-white" : "bg-white text-black"}
              transition-all duration-200
              relative
              overflow-hidden
            `}
          >
            <img
              src={project.img}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center bg-black/10 dark:bg-black/50 bg-opacity-10 p-6 text-center">
              <p className="text-xl font-bold mb-4">{project.name}</p>
              <div className="space-y-2">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    block px-4 py-2 rounded font-semibold
                    text-orange-500 hover:text-orange-500
                    transition-colors duration-300
                  `}
                >
                  View Project
                </a> 
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    block px-4 py-2 rounded font-semibold
                    text-orange-500 hover:text-orange-500
                    transition-colors duration-300
                  `}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          // ...existing code...
        ))}
      </div>
    </section>
  );
};

export default Projects;
