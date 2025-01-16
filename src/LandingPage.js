import React from "react";
import { Rocket, Box } from "lucide-react";

const skills = [
  { name: "Java", icon: <Box size={40} /> },
  { name: "C#", icon: <Box size={40} /> },
  { name: "Lua", icon: <Box size={40} /> },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="text-purple-500" size={24} />
            <span className="text-xl font-bold">Zepp</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-800 block">Hey, I'm</span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-600 text-transparent bg-clip-text">
              Zeph
            </span>
          </h1>
        </div>

        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-12">I am confident with</h2>
          <div className="flex justify-center gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group p-8 rounded-xl shadow-lg">
                <div
                  className="relative w-40 h-40 rounded-full bg-gray-300 hover:bg-purple-500 overflow-hidden"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = `radial-gradient(circle, purple, transparent)`;
                  }}
                >
                  {skill.icon}
                </div>
                <span className="text-gray-800 font-semibold text-lg mt-4">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>© 2025 Zepp Web | Sitemap</p>
      </footer>
    </div>
  );
};

export default LandingPage;
