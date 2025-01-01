import { useState } from 'react';
import myPicture from './assets/pic.jpg'; // Make sure to import your picture

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen min-w-screen">
      <nav className="sticky top-0 bg-gray-800/90 backdrop-blur-sm p-6 mb-12 w-full">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-white">Anas</span>
          <div className="flex gap-12">
            <a href="#about" className="text-gray-300 hover:text-white text-lg">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white text-lg">Experience</a>
            <a href="#education" className="text-gray-300 hover:text-white text-lg">Education</a>
            <a href="#projects" className="text-gray-300 hover:text-white text-lg">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white text-lg">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-screen-xl mx-auto px-4 text-white">        {/* About Section */}
        <section id="about" className="mb-24 text-center w-full">
          <img src={myPicture} alt="Profile" className="w-40 h-40 rounded-full mx-auto mb-8 object-cover ring-4 ring-blue-500" />
          <h1 className="text-6xl font-bold mb-6">Anas</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Software Engineering Student passionate about developing innovative solutions and learning new technologies.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 w-full">
          <h2 className="text-5xl font-bold mb-12 text-center">Experience</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Software Engineering Intern</h3>
                  <p className="text-blue-400 text-lg">Tech Company</p>
                </div>
                <span className="text-gray-400 text-lg">2024 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
                <li>Developed and maintained web applications using React</li>
                <li>Collaborated with senior developers on large-scale projects</li>
                <li>Implemented responsive designs and modern UI components</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-24 w-full">
          <h2 className="text-5xl font-bold mb-12 text-center">Education</h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold">Bachelor of Software Engineering</h3>
                <p className="text-blue-400 text-lg">University Name</p>
              </div>
              <span className="text-gray-400 text-lg">2021 - 2025</span>
            </div>
            <p className="text-gray-300 text-lg">Relevant Coursework:</p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 text-lg">
              <li>Data Structures and Algorithms</li>
              <li>Web Development</li>
              <li>Database Management</li>
              <li>Software Architecture</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 w-full">
          <h2 className="text-5xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">E-Commerce Platform</h3>
              <p className="text-gray-300 mb-6 text-lg">A full-stack e-commerce solution with React and Node.js</p>
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-blue-900 rounded-full text-lg">React</span>
                <span className="px-4 py-2 bg-blue-900 rounded-full text-lg">Node.js</span>
                <span className="px-4 py-2 bg-blue-900 rounded-full text-lg">MongoDB</span>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Task Management App</h3>
              <p className="text-gray-300 mb-6 text-lg">A collaborative task management application</p>
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-blue-900 rounded-full text-lg">React</span>
                <span className="px-4 py-2 bg-blue-900 rounded-full text-lg">Firebase</span>
                <span className="px-4 py-2 bg-blue-900 rounded-full text-lg">Tailwind</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24 w-full">
          <h2 className="text-5xl font-bold mb-12 text-center">Contact</h2>
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-semibold mb-3" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-3" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-lg"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-semibold mb-3" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-3" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-lg"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200 text-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;