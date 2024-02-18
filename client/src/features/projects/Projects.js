import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from './projectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faNodeJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const { projects, loading, error } = useSelector(state => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-blue-50 p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      {projects.map(project => (
        <div key={project.id} className="flex items-center justify-between mb-8">
          <div className="w-4/4 pr-12">
            <h3 className="text-xl font-semibold mb-5">{project.name}</h3>
            <p className="mb-6">{project.description}</p>
            <div className="mb-4 flex">
              <Link to={project.links.github} className="text-blue-500 mr-4 flex items-center">
                <svg className="w-6 h-6 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 0c-5.523 0-10 4.477-10 10 0 4.419 2.864 8.171 6.839 9.49.5.092.679-.217.679-.48 0-.237-.009-.864-.014-1.697-2.782.603-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.908-.619.069-.606.069-.606 1.004.071 1.532 1.032 1.532 1.032.893 1.528 2.344 1.087 2.915.83.092-.647.349-1.087.635-1.338-2.223-.25-4.558-1.104-4.558-4.916 0-1.086.388-1.977 1.024-2.675-.103-.251-.445-1.266.098-2.635 0 0 .837-.268 2.746 1.02.798-.222 1.65-.333 2.502-.337.851.004 1.705.115 2.502.337 1.909-1.288 2.744-1.02 2.744-1.02.545 1.369.203 2.384.1 2.635.64.698 1.023 1.589 1.023 2.675 0 3.82-2.339 4.664-4.569 4.908.36.307.679.914.679 1.842 0 1.331-.013 2.405-.013 2.731 0 .266.177.577.687.479 3.97-1.319 6.832-5.073 6.832-9.492 0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
                </svg>
                GitHub
              </Link>
              <Link to={project.links.demo} className="text-blue-500 flex items-center">
                <FontAwesomeIcon icon={faPlayCircle} className="w-6 h-6 inline-block mr-2" />
                Watch Video
              </Link>
            </div>
          </div>
          <div className="w-0/4">
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faPython} className="text-blue-500 text-2xl mr-2" />
                <span className="text-sm">Python</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faNodeJs} className="text-blue-500 text-2xl mr-2" />
                <span className="text-sm">Node.js</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faDatabase} className="text-blue-500 text-2xl mr-2" />
                <span className="text-sm">PostgreSQL</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faHtml5} className="text-blue-500 text-2xl mr-2" />
                <span className="text-sm">HTML</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faCss3} className="text-blue-500 text-2xl mr-2" />
                <span className="text-sm">CSS</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;



// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProjects } from './projectsSlice';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPython, faNodeJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
// import { faDatabase, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

// const Projects = () => {
//   const { projects, loading, error } = useSelector(state => state.projects);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchProjects());
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="bg-blue-50 p-8 rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Projects</h2>
//       {projects.map(project => (
//         <div key={project.id} className="flex items-center justify-between mb-8">
//           <div className="w-3/4 pr-8">
//             <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
//             <p className="mb-4">{project.description}</p>
//             <div className="mb-2 flex">
//               <Link to={project.links.github} className="text-blue-500 mr-4 flex items-center">
//                 <svg className="w-6 h-6 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 0c-5.523 0-10 4.477-10 10 0 4.419 2.864 8.171 6.839 9.49.5.092.679-.217.679-.48 0-.237-.009-.864-.014-1.697-2.782.603-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.908-.619.069-.606.069-.606 1.004.071 1.532 1.032 1.532 1.032.893 1.528 2.344 1.087 2.915.83.092-.647.349-1.087.635-1.338-2.223-.25-4.558-1.104-4.558-4.916 0-1.086.388-1.977 1.024-2.675-.103-.251-.445-1.266.098-2.635 0 0 .837-.268 2.746 1.02.798-.222 1.65-.333 2.502-.337.851.004 1.705.115 2.502.337 1.909-1.288 2.744-1.02 2.744-1.02.545 1.369.203 2.384.1 2.635.64.698 1.023 1.589 1.023 2.675 0 3.82-2.339 4.664-4.569 4.908.36.307.679.914.679 1.842 0 1.331-.013 2.405-.013 2.731 0 .266.177.577.687.479 3.97-1.319 6.832-5.073 6.832-9.492 0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
//                 </svg>
//                 GitHub
//               </Link>
//               <Link to={project.links.demo} className="text-blue-500 flex items-center">
//                 <FontAwesomeIcon icon={faPlayCircle} className="w-6 h-6 inline-block mr-1" />
//                 Watch Video
//               </Link>
//             </div>
//             <div className="flex flex-wrap">
//               <div className="flex items-center mr-4 mb-2">
//                 <FontAwesomeIcon icon={faPython} className="text-blue-500 text-2xl mr-2" />
//                 <span className="text-sm">Python</span>
//               </div>
//               <div className="flex items-center mr-4 mb-2">
//                 <FontAwesomeIcon icon={faNodeJs} className="text-blue-500 text-2xl mr-2" />
//                 <span className="text-sm">Node.js</span>
//               </div>
//               <div className="flex items-center mr-4 mb-2">
//                 <FontAwesomeIcon icon={faDatabase} className="text-blue-500 text-2xl mr-2" />
//                 <span className="text-sm">PostgreSQL</span>
//               </div>
//               <div className="flex items-center mr-4 mb-2">
//                 <FontAwesomeIcon icon={faHtml5} className="text-blue-500 text-2xl mr-2" />
//                 <span className="text-sm">HTML</span>
//               </div>
//               <div className="flex items-center mr-4 mb-2">
//                 <FontAwesomeIcon icon={faCss3} className="text-blue-500 text-2xl mr-2" />
//                 <span className="text-sm">CSS</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Projects;




