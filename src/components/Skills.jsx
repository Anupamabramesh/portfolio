import {
  SiPython,
  SiHtml5,
  SiMysql,
  SiMongodb,
  SiJupyter
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skills = [
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "C", icon: "💻" },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Jupyter Notebook", icon: <SiJupyter className="text-orange-400" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Computer Vision", icon: "👁️" },
  { name: "Deep Learning", icon: "🧠" },
  { name: "Data Structures", icon: "📊" },
  { name: "Cloud Computing", icon: "☁️" },
  { name: "Supabase", icon: "🗄️" },
  { name: "Windows / macOS", icon: "💻" },
];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-700 
              hover:border-blue-400 hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}