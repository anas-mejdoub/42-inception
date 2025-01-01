import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <nav className="sticky top-0 bg-gray-800/90 backdrop-blur-sm p-4 mb-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold text-white">Anas</span>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-300 hover:text-white">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white">Experience</a>
            <a href="#education" className="text-gray-300 hover:text-white">Education</a>
            <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 text-white">
        <section id="about" className="mb-16 text-center">
          <img src="/api/placeholder/128/128" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover ring-4 ring-blue-500" />
          <h1 className="text-4xl font-bold mb-4">Anas</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Software Engineering Student passionate about developing innovative solutions and learning new technologies.
          </p>
        </section>

        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Software Engineering Intern</h3>
                  <p className="text-blue-400">Tech Company</p>
                </div>
                <span className="text-gray-400">2024 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed and maintained web applications using React</li>
                <li>Collaborated with senior developers on large-scale projects</li>
                <li>Implemented responsive designs and modern UI components</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">Bachelor of Software Engineering</h3>
                <p className="text-blue-400">University Name</p>
              </div>
              <span className="text-gray-400">2021 - 2025</span>
            </div>
            <p className="text-gray-300">Relevant Coursework:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Data Structures and Algorithms</li>
              <li>Web Development</li>
              <li>Database Management</li>
              <li>Software Architecture</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">E-Commerce Platform</h3>
              <p className="text-gray-300 mb-4">A full-stack e-commerce solution with React and Node.js</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Task Management App</h3>
              <p className="text-gray-300 mb-4">A collaborative task management application</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">Tailwind</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
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