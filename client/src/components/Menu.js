// Menu.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="flex justify-end space-x-4 bg-gray-700 p-3 md:space-x-10 fixed top-0 right-0 w-full z-10">
      <NavLink to="/" className="text-white">Home</NavLink>
      <NavLink to="/about" className="text-white">About</NavLink>
      <NavLink to="/projects" className="text-white">Projects</NavLink>
    </nav>
  );
};

export default Menu;




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
