import React from 'react';
import { Rocket, Terminal, Box } from 'lucide-react';

const LandingPage = () => {
  const skills = [
    { name: 'Java', icon: <Box size={40} /> },
    { name: 'C#', icon: <Box size={40} /> },
    { name: 'Lua', icon: <Box size={40} /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="text-purple-500" size={24} />
            <span className="text-gray-800 text-xl font-bold">YourBrand</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pricing" className="text-gray-600 hover:text-gray-800">PRICING</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-800">TESTIMONIALS</a>
            <a href="#blog" className="text-gray-600 hover:text-gray-800">BLOG</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-800 block">Hey, I'm</span>
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-600 text-transparent bg-clip-text">
              Zeph
            </span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
            I am a freelance programmer
          </p>
          <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all relative overflow-hidden">
            More about me
          </button>
        </div>

        {/* Skills Section */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-12">
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-600 text-transparent bg-clip-text">
              I am confident with
            </span>
          </h2>
          <div className="flex justify-center gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-gray-600 group-hover:text-purple-500 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-gray-800 font-semibold text-lg">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
