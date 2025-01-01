import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';
import myPicture from './assets/pic.jpg'; // Make sure to import your picture

function App() {
  return (
    <div className="bg-gradient-to-b from-dark-blue to-dark min-h-screen flex flex-col items-center justify-center">
      <nav className="bg-gray-800 p-4 rounded-lg w-full max-w-4xl mb-8">
        <div className="flex justify-around items-center">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </nav>
      <div className="container mx-auto p-4 text-white">
        <section id="about" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <img src={myPicture} alt="My Picture" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
          <p className="text-lg font-inter font-semibold italic">
            Hello! My name is <span className="text-2xl font-bold">Anas</span> and I'm a software engineering student with a passion for developing innovative ideas.
          </p>
        </section>
        <section id="projects" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-2xl font-bold">Project 1</h3>
              <p className="text-lg">Description of project 1.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-2xl font-bold">Project 2</h3>
              <p className="text-lg">Description of project 2.</p>
            </div>
            {/* <!-- Add more projects as needed --> */}
          </div>
        </section>
        <section id="contact" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-semibold" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full p-2 rounded-lg bg-gray-800 text-white" />
            </div>
            <div>
              <label className="block text-lg font-semibold" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-2 rounded-lg bg-gray-800 text-white" />
            </div>
            <div>
              <label className="block text-lg font-semibold" htmlFor="message">Message</label>
              <textarea id="message" className="w-full p-2 rounded-lg bg-gray-800 text-white" rows="4"></textarea>
            </div>
            <button type="submit" className="w-full p-2 bg-blue-600 rounded-lg hover:bg-blue-700">Send</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;