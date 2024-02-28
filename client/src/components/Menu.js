// // Menu.js

import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false); // Close the menu when a section is selected
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 p-3 fixed top-0 w-full z-50 shadow-md">
      <div className="text-white text-xl md:text-2xl font-bold">Viktor Korneev's Portfolio</div>
      {/* <div className="hidden md:flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/viktor-korneev/" className="text-white hover:text-blue-400 transition duration-300">LinkedIn</a>
        <a href="https://github.com/k0ren0" className="text-white hover:text-gray-400 transition duration-300">GitHub</a>
        <a href="https://www.instagram.com/koren0" className="text-white hover:text-blue-300 transition duration-300">Instagram</a>
        <a href="https://wa.me/0534912640" className="text-white hover:text-green-500 transition duration-300">WhatsApp</a>
        <a href="https://t.me/koren0" className="text-white hover:text-blue-400 transition duration-300">Telegram</a>
      </div> */}
      <button className="text-white focus:outline-none md:hidden" onClick={toggleMenu}>
        {/* Menu icon for mobile devices */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>
      <div className={`${isOpen ? 'flex' : 'hidden'} flex-col absolute top-full right-0 w-full bg-gray-800 md:static md:w-auto md:flex md:flex-row md:space-x-4`}>
        <button onClick={() => scrollToSection('home-section')} className="text-white hover:text-gray-400 p-2 transition duration-300">Home</button>
        <button onClick={() => scrollToSection('about-section')} className="text-white hover:text-gray-400 p-2 transition duration-300">About</button>
        <button onClick={() => scrollToSection('projects-section')} className="text-white hover:text-gray-400 p-2 transition duration-300">Projects</button>
        {/* Additional links if needed */}
      </div>
    </nav>
  );
};

export default Menu;



// import React, { useState } from 'react';

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const scrollToSection = (sectionId) => {
//     setIsOpen(false); // Close the menu when a section is selected
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className="flex justify-between items-center bg-gray-700 p-3 md:p-5 fixed top-0 w-full z-10">
//       <div className="text-white mr-4 font-poppins text-3xl">Viktor Korneev's Portfolio</div>
//       <div className="flex justify-center space-x-4 mt-4">
//         <a href="https://www.linkedin.com/in/viktor-korneev/" className="hover:text-blue-400">LinkedIn</a>
//         <a href="https://github.com/k0ren0" className="hover:text-gray-400">GitHub</a>
//         <a href="https://www.instagram.com/koren0" className="hover:text-blue-300">Instagram</a>
//         <a href="https://wa.me/0534912640" className="hover:text-green-500">WhatsApp</a>
//         <a href="https://t.me/koren0" className="hover:text-blue-400">Telegram</a>
//       </div>
//       <button className="text-white focus:outline-none md:hidden" onClick={toggleMenu}>
//         {/* Menu icon for mobile devices */}
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           {isOpen ? (
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           ) : (
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//           )}
//         </svg>
//       </button>
//       <div className={`${isOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full bg-gray-700 md:static md:w-auto md:flex md:flex-row md:space-x-4`}>
//         <button onClick={() => scrollToSection('home-section')} className="text-white hover:text-gray-400 p-2 md:py-0 md:px-3">Home</button>
//         <button onClick={() => scrollToSection('about-section')} className="text-white hover:text-gray-400 p-2 md:py-0 md:px-3">About</button>
//         <button onClick={() => scrollToSection('projects-section')} className="text-white hover:text-gray-400 p-2 md:py-0 md:px-3">Projects</button>
//         {/* Additional links if needed */}
//       </div>
      
//     </nav>
//   );
// };

// export default Menu;




