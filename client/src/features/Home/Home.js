import React from 'react';

const Home = () => {
  return (
    <div className="m-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mt-4">Welcome!</h1>
        <p className="text-lg mt-4">Hello, I'm Viktor Korneev, a Full Stack Developer with experience in Python, JavaScript, and a strong background in Hi-Tech industries.</p>
        <p className="text-lg mt-2">I'm passionate about leveraging my skills in software development to build modern, efficient web applications and contribute to innovative projects. Explore my portfolio to see my work and the technologies I specialize in.</p>
      </div>
    </div>
  );
};

export default Home;





// import React from 'react';
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
// import { SiRedux, SiJira, SiConfluence, SiFlask, SiPostgresql } from 'react-icons/si';

// const Home = () => {
//   // Функция для создания стиля технологий
//   const techStyle = "text-xl hover:text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out";

//   return (
//     <div className="m-4">
//       <div className="flex justify-center items-center mb-8">
//         {/* Замените "/path/to/your/profile/image.jpg" на путь к вашему изображению */}
//         <img src="/path/to/your/profile/image.jpg" alt="Viktor Korneev" className="rounded-full h-24 w-24 mr-4" />
//         <div>
//           <p className="text-lg">Hello! I'm Viktor, a beginner web developer passionate about building modern web applications.</p>
//           <p className="text-lg">I have experience with the following technologies:</p>
//           <ul className="flex flex-wrap list-disc ml-6">
//             <li className={techStyle}><FaHtml5 /> HTML</li>
//             <li className={techStyle}><FaCss3Alt /> CSS5</li>
//             <li className={techStyle}><FaJsSquare /> JavaScript</li>
//             <li className={techStyle}><FaReact /> React</li>
//             <li className={techStyle}><SiRedux /> Redux</li>
//             <li className={techStyle}><FaNodeJs /> Node.js</li>
//             <li className={techStyle}><SiJira /> Jira</li>
//             <li className={techStyle}><SiConfluence /> Confluence</li>
//             <li className={techStyle}><FaGithub /> Github</li>
//             <li className={techStyle}><SiFlask /> Flask</li>
//             <li className={techStyle}><SiPostgresql /> SQL</li>
//             {/* Добавьте другие технологии с иконками здесь */}
//           </ul>
//         </div>
//       </div>
//       {/* Добавьте другие разделы вашего портфолио или информацию по желанию */}
//     </div>
//   );
// };

// export default Home;
