import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Movie Management System",
      description: "Web application built using Django with MySQL database. Implemented filtering, viewing and reservation system for movies.",
      technologies: ["Django", "MySQL", "HTML", "CSS"],
      github: "https://github.com/anupamabramesh/movie-management-system",
      date: "Dec 2024",
    },
    {
      title: "Face Recognition System",
      description: "Implemented real-time face detection and recognition system with CSV data storage.",
      technologies: ["Python", "OpenCV", "DeepFace"],
      github: "https://github.com/anupamabramesh/face-recognition-system",
      date: "Apr 2025 – Jun 2025",
    },
    {
      title: "Weather Application",
      description: "Developed a responsive Weather Dashboard using React.js and REST APIs for real-time weather and forecasts with dynamic UI themes and temperature trend charts.",
      technologies: ["React.js", "REST APIs", "Recharts"],
      github: "https://github.com/Anupamabramesh/weather",
      date: "Feb 2026",
    },
    {
      title: "AI Teaching Application",
      description: "Built AI assistant converting speech to captions using speech-to-text processing. Integrated audio capture, transcription and chatbot pipeline.",
      technologies: ["Python", "SpeechRecognition", "Whisper", "NLTK", "Streamlit"],
      github: "https://github.com/anupamabramesh/ai-teaching-assistant",
      date: "Current",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-100 dark:bg-pink-900/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-white">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Showcasing innovative AI and web development projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 dark:border-slate-700"
            >
              {/* Project Image */}
              <div className={`h-48 flex items-center justify-center ${
                index === 0 ? 'bg-gradient-to-br from-blue-400 to-white-400' :
                index === 1 ? 'bg-gradient-to-br from-white-400 to-blue-400' :
                index === 2 ? 'bg-gradient-to-br from-blue-400 to-white-400' :
                'bg-gradient-to-br from-blue-400 to-white-400'
              }`}>
                <span className="text-7xl opacity-60">{index === 0 ? '🎬' : index === 1 ? '👁️' : index === 2 ? '🌤️' : '🤖'}</span>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {project.date}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                >
                  <FaGithub />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

