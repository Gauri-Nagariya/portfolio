import React, { useState } from 'react';

const certificationsData = [
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco (2023)',
    description: 'Gained a foundational understanding of cybersecurity concepts, including cyber threats, attack vectors, and defense mechanisms. Explored the importance of network security, ethical hacking, and risk management, equipping me with the knowledge to identify and mitigate cyber risks.',
    certLink: 'certificates/introduction to cybersecurity.pdf',
    badgeLink: null,
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco (2023)',
    description: 'Developed a deeper understanding of core cybersecurity principles, covering cryptography, endpoint protection, network security, and incident response. Acquired practical skills in identifying vulnerabilities, implementing security measures, and safeguarding digital assets.',
    certLink: 'certificates/cybersecurity essentials.pdf',
    badgeLink: null,
  },
  {
    title: 'Web Development Workshop',
    issuer: 'Microsoft Learn Student Ambassador (2024)',
    description: 'Participated in a hands-on workshop focused on modern web development technologies and best practices. Gained experience in front-end and back-end development, responsive design, and web performance optimization, enhancing my ability to create dynamic and user-friendly web applications.',
    certLink: 'certificates/microsoft workshop.pdf',
    badgeLink: null,
  },
    {
    title: 'Breaking into Product Management',
    issuer: 'GeeksforGeeks (2025)',
    description: 'Completed the ‘Breaking into Product Management’ course, gaining insights into product strategy and lifecycle management. Developed skills in market research, user-centric design, and prioritization frameworks. Enhanced my ability to bridge business, technology, and user needs effectively.',
    certLink: 'certificates/pm.pdf',
    badgeLink: null,
  },
    {
    title: 'Operating Systems Basics',
    issuer: 'Cisco (2025)',
    description: 'Completed a course on Operating Systems Basics, covering core concepts such as processes, memory management, and file systems. Gained practical understanding of scheduling, concurrency, and system calls. Strengthened my foundation in how operating systems manage hardware and software resources.',
    certLink: 'certificates/os.pdf',
    badgeLink: null,
  },
  {
    title: 'Introduction to Modern AI',
    issuer: 'Cisco (2025)',
    description: 'Earned the Cisco Introduction to Modern AI badge, covering key AI concepts like machine learning, neural networks, and real-world applications. Gained insights into AI’s impact on industries, ethical considerations, and its role in shaping future technologies. Explored how AI improves automation, data analysis, and decision-making.',
    certLink: 'certificates/modern ai certificate.pdf',
    badgeLink: 'https://www.credly.com/badges/88f3cf31-c952-416b-9833-05f270a8bf66/public_url',
  },
  {
    title: 'React.js Course',
    issuer: 'GeeksforGeeks (2025)',
    description: 'Completed a course covering React.js fundamentals such as JSX, components, props, state, hooks, and routing. Gained hands-on experience in building dynamic, responsive web applications using modern React practices, enhancing UI development skills and application performance.',
    certLink: 'certificates/react js certificate.pdf',
    badgeLink: null,
  },
  {
    title: 'SQL Course',
    issuer: 'HackerRank (2025)',
    description: 'Completed an SQL certification course with a focus on database design and management. Developed strong skills in writing queries, data retrieval, and optimization. Enhanced my ability to organize and analyze data for real-world applications.',
    certLink: 'certificates/sql.pdf',
    badgeLink: null,
  },

    {
    title: 'AWS Academy Graduate - AWS Academy Cloud Architecting',
    issuer: 'Amazon Web Services Training and Certification (2025)',
    description: 'Successfully completed AWS Academy Cloud Architecting, gaining hands-on experience in designing and deploying scalable, secure, and cost-optimized solutions on AWS. Developed skills in applying cloud best practices, building resilient infrastructures, and architecting end-to-end cloud solutions. Credential issued by Amazon Web Services Training and Certification.',
    certLink: 'certificates/aws.pdf',
    badgeLink: 'https://www.credly.com/badges/324648b3-305e-4853-a733-a36099ac66d8/public_url',
  },

  {
    title: 'Smart India Hackathon 2024',
    issuer: 'Finalist',
    description: 'Represented my college at the national level, where I collaborated with a diverse team to design and present innovative solutions. The experience strengthened my technical expertise, sharpened my project management abilities, and enhanced my teamwork, and communication skills while working under competitive and high-pressure environments.',
    certLink: 'certificates/introduction to cybersecurity.pdf',
    badgeLink: null,
  }
];

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const reversedCerts = [...certificationsData].reverse();
  const certsToShow = showAll ? reversedCerts : reversedCerts.slice(0, 3);

  return (
    // <section id="certifications" className="bg-black text-white py-20 pl-6 flex flex-col items-start">
    <section id="certifications" className="bg-black text-white py-20 px-4 sm:px-8 scroll-mt-24">
      <h2 className="text-4xl font-bold mb-12 ml-8 text-left">ACHIEVEMENT & CERTIFICATIONS</h2>
      <div className="max-w-4xl w-full space-y-12 pl-8">
        {certsToShow.map((cert, index, arr) => (
          // <div key={index} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-8 relative">
          <div key={index} className="flex items-start space-x-6 relative">
            {/* Timeline dot and line */}
            <div className="flex-shrink-0 flex flex-col items-center">
  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-orange-600 shadow-lg mb-2 z-10"></div>
  {index !== arr.length  && (
    <div className="w-0.5 bg-white" style={{ minHeight: '180px' }}></div>
  )}
</div>

            {/* Content for the certification */}
         <div className="text-left w-full">
  <h3 className="text-xl sm:text-2xl font-bold mb-1">{cert.title}</h3>
  <p className="text-base sm:text-lg font-light text-gray-400 mb-4">{cert.issuer}</p>
  <p className="text-sm sm:text-base">{cert.description}</p>
  <div className="mt-4 flex flex-wrap gap-4">
    <a href={cert.certLink} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500 transition-colors duration-300">
      View Certificate
    </a>
    {cert.badgeLink && (
      <a href={cert.badgeLink} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500 transition-colors duration-300">
        View Badge
      </a>
    )}
  </div>
</div>

          </div>
        ))}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-8 ml-6 block bg-orange-600 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition-colors duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default Certifications;