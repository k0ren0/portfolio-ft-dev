import React from 'react';

const About = () => {
  // Styles for technology blocks: centering content and adaptive padding
  const techStyle = "flex flex-col items-center justify-center p-4 hover:bg-gray-200 rounded-lg cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out";
  // Adaptive logo size with centering and harmonious distribution depending on the screen size
  const logoStyle = "h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] lg:h-[5rem] lg:w-[5rem]";

  return (
    <div className="p-14 rounded-lg mt-2">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <p className="text-left mt-4">I have experience in JavaScript and Python, developed over a course and through more than four years of previous experience in the high-tech industry. I leverage strong skills in continuous self-education and effective communication to drive innovation in startup environments. I have a proven track record in project management, especially within high-tech (DLP systems) and the construction industry, where my efforts have significantly contributed to companies achieving market leadership. I would be happy to utilize my extensive professional experience and knowledge in the role of a Full Stack Developer.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
        {/* Blocks for each technology */}
        <div className={techStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className={logoStyle} />
          <span>HTML5</span>
        </div>
        <div className={techStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className={logoStyle} />
          <span>CSS3</span>
        </div>
        <div className={techStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className={logoStyle} />
          <span>JavaScript</span>
        </div>
        <div className={techStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className={logoStyle} />
          <span>React</span>
        </div>
        <div className={techStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" className={logoStyle} />
          <span>Redux</span>
        </div>
        <div className={techStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className={logoStyle} />
          <span>Node.js</span>
        </div>
        <div className={techStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express.js" className={logoStyle} />
          <span>Express.js</span>
        </div>
        <div className={techStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className={logoStyle} />
          <span>PostgreSQL</span>
        </div>
        <div className={techStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className={logoStyle} />
          <span>Python</span>
        </div>
        {/* Add other technologies as needed */}
      </div>
    </div>
  );
};

export default About;


// import React from 'react';

// const About = () => {
//   const techStyle = "flex flex-col items-center justify-center p-4 hover:bg-gray-200 rounded-lg cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out space-y-2";
//   const logoStyle = "h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] lg:h-[5rem] lg:w-[5rem]";

//   return (
//     <div className="p-8 rounded-lg ">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold mb-6">About Me</h2>
//         <p className="mt-2">My experience in JavaScript and Python during course and previous experience in Hi-Tech more than 4 years, leveraging strong skills in continuous self-education and effective communication to drive innovation in startup environments. Proven track record in project management, particularly within Hi-tech (DLP systems) and the construction industry, where my efforts contributed significantly to companies achieving market leadership. I would be happy to utilize my extensive professional experience and knowledge in the role of Full Stack developer.</p>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
//         {/* Technology blocks including Python */}
//         <div className={techStyle}>
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className={logoStyle} />
//           <span>HTML5</span>
//         </div>
//         <div className={techStyle}>
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className={logoStyle} />
//           <span>CSS3</span>
//         </div>
//         <div className={techStyle}>
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className={logoStyle} />
//           <span>JavaScript</span>
//         </div>
//         <div className={techStyle}>
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className={logoStyle} />
//           <span>React</span>
//         </div>
//         <div className={techStyle}>
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" className={logoStyle} />
//           <span>Redux</span>
//         </div>
//         <div className={techStyle}>
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className={logoStyle} />
//           <span>Node.js</span>
//         </div>
//         <div className={techStyle}>
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express.js" className={logoStyle} />
//           <span>Express.js</span>
//         </div>
//         <div className={techStyle}>
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className={logoStyle} />
//           <span>PostgreSQL</span>
//         </div>
//         <div className={techStyle}>
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className={logoStyle} />
//           <span>Python</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


