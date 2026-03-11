import {
  SiPython,
  SiHtml5,
  SiMysql,
  SiMongodb,
  SiJupyter,
  SiC,
  SiReact,
  SiNumpy,
  SiFlask,
  SiStreamlit,
} from "react-icons/si";

import { FaJava, FaBrain, FaCloud, FaDatabase, FaCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <SiPython className="text-yellow-500" /> },
        { name: "C", icon: <SiC className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "HTML/CSS", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <SiReact className="text-cyan-500" /> },
        { name: "Django", icon: <span className="text-green-600">🎯</span> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
        { name: "Flask", icon: <SiFlask className="text-gray-600" /> },
        { name: "Streamlit", icon: <SiStreamlit className="text-red-500" /> },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
        { name: "Jupyter", icon: <SiJupyter className="text-orange-500" /> },
        { name: "Supabase", icon: <span className="text-orange-500">🔥</span> },
        { name: "Git", icon: <span className="text-orange-600">📚</span> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <FaDatabase className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Machine Learning", icon: <FaBrain className="text-purple-500" /> },
        { name: "Computer Vision", icon: <span className="text-blue-500">👁️</span> },
        { name: "Deep Learning", icon: <span className="text-pink-500">🧠</span> },
        { name: "Data Structures", icon: <FaCode className="text-green-500" /> },
        { name: "Cloud Computing", icon: <FaCloud className="text-sky-500" /> },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: <span className="text-yellow-500">💡</span> },
        { name: "Team Collaboration", icon: <span className="text-blue-500">🤝</span> },
        { name: "Communication", icon: <span className="text-green-500">📢</span> },
        { name: "Quick Learner", icon: <span className="text-purple-500">📚</span> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-white">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive set of skills spanning AI/ML, web development, and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400 border-b border-slate-100 dark:border-slate-700 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

