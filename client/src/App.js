import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import AppContent from './features/AppContent'; 
import './index.css';
import projectsReducer, { fetchProjects } from './features/projects/projectsSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<AppContent />} /> 
          </Routes>
          <Footer className="mt-auto" />
        </div>
      </Router>
    </Provider>
  );
};

export default App;



// // App.js

// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider, useDispatch } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import About from './features/about/About';
// import Menu from './components/Menu';
// import Home from './features/Home/Home';
// import './index.css';
// import Projects from './features/projects/Projects';
// import projectsReducer, { fetchProjects } from './features/projects/projectsSlice';

// const store = configureStore({
//   reducer: {
//     projects: projectsReducer,
//   },
// });

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchProjects());
//   }, [dispatch]);

//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="flex flex-col min-h-screen">
//           <Header />
//           <Menu />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/projects" element={<Projects />} />
//          </Routes>
//           <Footer className="mt-auto" />
//         </div>
//       </Router>
//     </Provider>
//   );
// };

// export default App;





