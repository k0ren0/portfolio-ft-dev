import React from 'react';
import About from './about/About';
import Home from './Home/Home';
import Projects from './projects/Projects';

const AppContent = () => {
  return (
    <div className="space-y-8">
      <div id="home-section">
        <Home />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
      {/* Можете добавить другие компоненты или разделы здесь */}
    </div>
  );
};

export default AppContent;




// import React from 'react';
// import About from './about/About'; // Убедитесь, что пути корректны
// import Home from './Home/Home';
// import Projects from './projects/Projects';

// const AppContent = () => {
//   return (
//     <div className="space-y-8">
//       <Home />
//       <About />
//       <Projects />
//       {/* Можете добавить другие компоненты или разделы здесь */}
//     </div>
//   );
// };

// export default AppContent;

