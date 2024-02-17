import React from 'react';

const About = () => {
  const techStyle = "flex flex-col items-center justify-center p-4 hover:bg-gray-200 rounded-lg cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out space-y-2";
  const logoStyle = "h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] lg:h-[5rem] lg:w-[5rem]";

  return (
    <div className="m-4">
      <div className="text-center mb-8">
        <p className="text-lg mt-2">My experience in Python and JavaScript during course and previous experience in Hi-Tech more than 4 years, leveraging strong skills in continuous self-education and effective communication to drive innovation in startup environments. Proven track record in project management, particularly within Hi-tech (DLP systems) and the construction industry, where my efforts contributed significantly to companies achieving market leadership. I would be happy to utilize my extensive professional experience and knowledge in the role of Full Stack developer.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
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
        {/* Добавьте остальные технологии по мере необходимости */}
      </div>
    </div>
  );
};

export default About;


// import React from 'react';

// const About = () => {
//   // Обновленные стили для элементов списка с технологиями, добавляющие анимацию увеличения
//   const techStyle = "flex flex-col items-center justify-center p-4 hover:bg-gray-200 rounded-lg cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out space-y-2";
//   // Адаптивный размер для логотипов, увеличивается в зависимости от размера экрана
//   const logoStyle = "h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] lg:h-[5rem] lg:w-[5rem]";

//   return (
//     <div className="m-4">
//       <div className="text-center mb-8">
//         {/* <img src="/path/to/your/profile/image.jpg" alt="Viktor Korneev" className="rounded-full mx-auto" style={{ width: '150px', height: '150px' }} /> */}
//         {/* <p className="text-lg mt-4">Hello! I'm Viktor, a beginner web developer passionate about building modern web applications.</p> */}
//         <p className="text-lg mt-2">My experience in Python and JavaScript during course and previous experience in Hi-Tech more than 4 years, leveraging strong skills in continuous self-education and effective communication to drive innovation in startup environments. Proven track record in project management, particularly within Hi-tech (DLP systems) and the construction industry, where my efforts contributed significantly to companies achieving market leadership. I would be happy to utilize my extensive professional experience and knowledge in the role of Full Stack developer.</p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {/* Элементы с логотипами */}
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
//         {/* Добавьте остальные технологии по мере необходимости */}
//       </div>
//     </div>
//   );
// };

// export default About;