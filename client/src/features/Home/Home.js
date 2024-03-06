import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const Home = () => {
  // ADAPTIVE STYLE
  const linkStyle = "text-gray-800 hover:text-blue-400 transition duration-300 flex items-center hover:scale-110 space-x-2";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <header className="flex justify-between items-center py-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to my Portfolio</h1>
          <a href="https://drive.google.com/file/d/1RsWpu7tW7P9wLGXuUn6g14YLARhC14-h/view?usp=sharing" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" download="Viktor_Korneev_Resume">Get CV</a>
        </header>
        <main>
          <p className="mt-4 text-gray-600">Hello, I'm Viktor Korneev, a Full Stack Developer with experience in JavaScript, Python, and a strong background in Hi-Tech industries.</p>
          <p className="mt-2 text-gray-600">I'm passionate about leveraging my skills in software development to build modern, efficient web applications and contribute to innovative projects. Explore my portfolio to see my work and the technologies I specialize in.</p>
          <div className="flex flex-wrap justify-center gap-4 my-20">
            <a href="https://www.linkedin.com/in/viktor-korneev/" className={linkStyle}><FaLinkedin className="mr-2" />LinkedIn</a>
            <a href="https://github.com/k0ren0" className={linkStyle}><FaGithub className="mr-2" />GitHub</a>
            <a href="https://www.instagram.com/koren0" className={linkStyle}><FaInstagram className="mr-2" />Instagram</a>
            <a href="https://wa.me/0534912640" className={linkStyle}><FaWhatsapp className="mr-2" />WhatsApp</a>
            <a href="https://t.me/koren0" className={linkStyle}><FaTelegramPlane className="mr-2" />Telegram</a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;



// import React from 'react';
// import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
//       <div className="container mx-auto px-4">
//         <header className="flex justify-between items-center py-6">
//           <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Welcome to my Portfolio</h1>
//           <a href="https://drive.google.com/file/d/1RsWpu7tW7P9wLGXuUn6g14YLARhC14-h/view?usp=sharing" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" download="Viktor_Korneev_Resume">Download CV</a>
//         </header>
//         <main>
//           <p className="mt-4 text-gray-600 text-base sm:text-lg">Hello, I'm Viktor Korneev, a Full Stack Developer with experience in JavaScript, Python, and a strong background in Hi-Tech industries.</p>
//           <p className="mt-2 text-gray-600 text-base sm:text-lg">I'm passionate about leveraging my skills in software development to build modern, efficient web applications and contribute to innovative projects. Explore my portfolio to see my work and the technologies I specialize in.</p>
//           <div className="text-xl sm:text-2xl flex justify-center space-x-4 mb-20 mt-20">
//             <a href="https://www.linkedin.com/in/viktor-korneev/" className="text-gray-800 hover:text-blue-400 transition duration-300 flex items-center hover:scale-110"><FaLinkedin className="mr-2" />LinkedIn</a>
//             <a href="https://github.com/k0ren0" className="text-gray-800 hover:text-gray-400 transition duration-300 flex items-center hover:scale-110"><FaGithub className="mr-2" />GitHub</a>
//             <a href="https://www.instagram.com/koren0" className="text-gray-800 hover:text-blue-300 transition duration-300 flex items-center hover:scale-110"><FaInstagram className="mr-2" />Instagram</a>
//             <a href="https://wa.me/0534912640" className="text-gray-800 hover:text-green-500 transition duration-300 flex items-center hover:scale-110"><FaWhatsapp className="mr-2" />WhatsApp</a>
//             <a href="https://t.me/koren0" className="text-gray-800 hover:text-blue-400 transition duration-300 flex items-center hover:scale-110"><FaTelegramPlane className="mr-2" />Telegram</a>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Home;


