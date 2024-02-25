// // Project.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Project = ({ project }) => {
  const { name, description, links, bgColor, technologies } = project;

  return (
    <div className={`${bgColor} p-14 rounded-lg mb-8 shadow-md`}>
      <h3 className="text-xl font-semibold mb-4">{name}</h3>
      <p className="mb-4">{description}</p>
      <div className="flex gap-4 mb-4">
        <Link to={links.github} className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out flex items-center">
          <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
        </Link>
        <Link to={links.demo} className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out flex items-center">
          <FontAwesomeIcon icon={faPlayCircle} className="mr-2" /> Watch Video
        </Link>
      </div>
      <div className="flex flex-wrap">
        {technologies.map((tech, index) => (
          <span key={index} className="text-sm text-gray-600 mr-2 mb-2">{tech.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Project;

