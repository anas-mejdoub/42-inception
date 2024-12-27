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
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
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
      </div>
    </div> 
  );
}

export default App;