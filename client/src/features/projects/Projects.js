// Projects.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <div className="m-4">
      <h2 className="text-lg font-bold text-center mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <div key={project.id} className="p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white">
            <h3 className="font-semibold mb-2">{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;





// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProjects } from './projectsSlice';

// const Projects = () => {
//   const dispatch = useDispatch();
//   const { projects, loading, error } = useSelector((state) => state.projects);

//   useEffect(() => {
//     dispatch(fetchProjects());
//   }, [dispatch]);

//   if (loading) return <div className="text-center py-4 text-blue-500">Loading...</div>;
//   if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

//   // Добавленная проверка на наличие данных
//   if (!projects || projects.length === 0) {
//     return <div className="text-center py-4">No projects found</div>;
//   }

//   return (
//     <div className="m-4">
//       <h2 className="text-lg font-bold text-center mb-4">My Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {projects.map((project) => (
//           <div key={project.id} className="p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white">
//             <h3 className="font-semibold mb-2">{project.name}</h3>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;


