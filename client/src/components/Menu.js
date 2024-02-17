import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false); // Закрыть меню при выборе пункта
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center bg-gray-700 p-3 md:p-5 fixed top-0 w-full z-10">
      <div className="text-white mr-4">Viktor Korneev</div>
      <button className="text-white focus:outline-none md:hidden" onClick={toggleMenu}>
        {/* SVG иконка меню для мобильных устройств */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>
      <div className={`${isOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full bg-gray-700 md:static md:w-auto md:flex md:flex-row md:space-x-4`}>
        <button onClick={() => scrollToSection('home-section')} className="text-white hover:text-gray-400 p-2 md:py-0 md:px-3">Home</button>
        <button onClick={() => scrollToSection('about-section')} className="text-white hover:text-gray-400 p-2 md:py-0 md:px-3">About</button>
        <button onClick={() => scrollToSection('projects-section')} className="text-white hover:text-gray-400 p-2 md:py-0 md:px-3">Projects</button>
        {/* Дополнительные ссылки */}
      </div>
    </nav>
  );
};

export default Menu;






// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Функция для закрытия мобильного меню при клике на элемент меню
//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="flex justify-between items-center bg-gray-700 p-3 md:p-5 fixed top-0 right-0 w-full z-10">
//       <div className="flex items-center">
//         <div className="text-white mr-4">Viktor Korneev</div>
//         <button className="text-white focus:outline-none md:hidden" onClick={toggleMenu}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </button>
//       </div>
//       <div className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
//         <NavLink to="/" className="text-white hover:text-gray-400" onClick={closeMenu}>Home</NavLink>
//         <NavLink to="/about" className="text-white hover:text-gray-400" onClick={closeMenu}>About</NavLink>
//         <NavLink to="/projects" className="text-white hover:text-gray-400" onClick={closeMenu}>Projects</NavLink>
//         {/* При необходимости добавьте дополнительные ссылки */}
//       </div>
//     </nav>
//   );
// };

// export default Menu;



// // Menu.js
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="flex justify-between items-center bg-gray-700 p-3 md:p-5 fixed top-0 right-0 w-full z-10">
//       <div className="flex items-center">
//         <div className="text-white mr-4">Viktor Korneev</div>
//         <button className="text-white focus:outline-none md:hidden" onClick={toggleMenu}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </button>
//       </div>
//       <div className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
//         <NavLink to="/" className="text-white hover:text-gray-400">Home</NavLink>
//         <NavLink to="/about" className="text-white hover:text-gray-400">About</NavLink>
//         <NavLink to="/projects" className="text-white hover:text-gray-400">Projects</NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Menu;





// import { NavLink } from 'react-router-dom';

// const Main = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <header className="bg-gray-800 text-white fixed top-0 right-0 p-5">
//         <nav className="space-x-4">
//           <NavLink to="/" className="hover:text-yellow-300">Home</NavLink>
//           <NavLink to="/about" className="hover:text-yellow-300">About</NavLink>
//           <NavLink to="/projects" className="hover:text-yellow-300">Projects</NavLink>
//         </nav>
//       </header>
//       <div className="pt-20">
//         {/* Hero Section */}
//         <section className="text-center p-20">
//           <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
//           <p className="text-xl">Discover my projects and skills</p>
//         </section>
//         {/* About Section */}
//         <section className="bg-gray-100 p-20 text-center">
//           <h2 className="text-4xl font-bold mb-6">About Me</h2>
//           <p>Here is some information about me...</p>
//         </section>
//         {/* Projects Section */}
//         <section className="p-20 text-center">
//           <h2 className="text-4xl font-bold mb-6">Projects</h2>
//           <p>Check out some of my work...</p>
//         </section>
//         {/* Contact Section */}
//         <section className="bg-gray-100 p-20 text-center">
//           <h2 className="text-4xl font-bold mb-6">Contact</h2>
//           <p>How to reach me...</p>
//         </section>
//       </div>
//       <footer className="mt-auto bg-gray-800 text-white text-center p-5">
//         © 2024 My Portfolio
//       </footer>
//     </div>
//   );
// };

// export default Main;
