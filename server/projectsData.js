// projectsData.js

const projects = [
    { 
      id: 1, 
      name: "Hackathon by Python (volunteers who can walk dogs)",
      description: "Developed a web application using Python, integrating HTML, CSS, and Flask templates. Implemented forms for user registration and personal data storage on the server. Ensured secure storage of encrypted user information and events in a PostgreSQL database. Enhanced functionality with data filtering and integration using Faker.",
      bgColor: "bg-blue-50",
      technologies: [
        { name: "Python", icon: "faPython" },
        { name: "HTML", icon: "faHtml5" },
        { name: "CSS", icon: "faCss3" },
        { name: "PostgreSQL", icon: "faDatabase" }, // Corrected icon
        { name: "Flask", icon: "faFlask" }, // Corrected icon
      ],
      links: {
        github: "https://github.com/k0ren0/Bootcamp-Hackathon.git",
        demo: "https://www.loom.com/share/0d08ca416ad5480ca5a26c24bf695dd6?sid=ed5829fb-0009-4911-b034-c9591b004460"
      }
    },
    { 
      id: 2, 
      name: "Final Project by JavaScript (Dog Walking and Animal Assistance Platform)",
      description: "I created a platform linking dog owners with volunteers for walks and assistance. It should facilitate easy coordination, have a user-friendly interface with simple navigation, and organize events efficiently. The technology stack includes React and Redux for the frontend, Node.js and PostgreSQL for the backend, with  Tailwind CSS for styling, and Google Maps API for location services. Security is managed through JWT and bcrypt, with ElephantSQL and Axios or Fetch API supporting cloud storage and HTTP requests.",
      bgColor: "bg-yellow-200",
      technologies: [
        { name: "JavaScript", icon: "faJs" },
        { name: "Node.js", icon: "faNodeJs" },
        { name: "React", icon: "faReact" },
        { name: "Redux", icon: "faRedux" },
        { name: "Tailwind CSS", icon: "faBootstrap" }, // Corrected icon name
        { name: "PostgreSQL", icon: "faPostgresql" },
        { name: "JWT", icon: "faJwt" },
        { name: "bcrypt", icon: "faBcrypt" },
        { name: "ElephantSQL", icon: "faElephant" }, // Corrected icon
        { name: "Axios/Fetch API", icon: "faAxios" }, // Assuming custom icon
      ],
      links: {
        github: "https://github.com/k0ren0/portfolio-ft-js-dev.git",
        demo: "https://www.loom.com/share/3126a0aa60404f8fb0be47467964fb03?sid=6e92934c-93ac-47aa-9d95-c6636e46c07e"
      }
    }
  ];
  
  export default projects;
  
  
 