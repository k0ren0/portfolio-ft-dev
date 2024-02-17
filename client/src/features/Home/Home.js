// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="m-4">
      <h2 className="text-2xl font-bold text-center mb-4">Welcome to Viktor Korneev's Portfolio</h2>
      <div className="flex justify-center items-center mb-8">
        <img src="/path/to/your/profile/image.jpg" alt="Viktor Korneev" className="rounded-full h-24 w-24 mr-4" />
        <div>
          <p className="text-lg">Hello! I'm Viktor, a beginner web developer passionate about building modern web applications.</p>
          <p className="text-lg">I have experience with the following technologies:</p>
          <ul className="list-disc ml-6">
            <li className="text-base">HTML/CSS</li>
            <li className="text-base">JavaScript</li>
            <li className="text-base">OOP (Object-Oriented Programming)</li>
            <li className="text-base">SQL (Structured Query Language)</li>
            <li className="text-base">Flask</li>
            <li className="text-base">React <span role="img" aria-label="React">⚛️</span></li>
            <li className="text-base">Redux</li>
            <li className="text-base">Node.js</li>
            <li className="text-base">Jira</li>
            <li className="text-base">Confluence</li>
            <li className="text-base">Github</li>
            {/* Добавьте другие технологии здесь */}
          </ul>
        </div>
      </div>
      {/* Добавьте другие разделы вашего портфолио или информацию по желанию */}
    </div>
  );
};

export default Home;
