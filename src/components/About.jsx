import { FaGraduationCap, FaAward, FaUniversity, FaSchool, FaBrain, FaGlobe } from "react-icons/fa";

export default function About() {
  const education = [
    {
      institution: "Sri Siddhartha Institute of Technology, Tumakuru",
      degree: "B.E – Artificial Intelligence and Machine Learning",
      year: "2022–2026",
      details: "CGPA: 6.65",
      icon: <FaUniversity />,
    },
    {
      institution: "Vision PU College, Bengaluru",
      degree: "Karnataka PUC Board",
      year: "2019–2021",
      details: "Percentage: 77.5%",
      icon: <FaSchool />,
    },
    {
      institution: "Stella Maris School, Tiptur",
      degree: "Karnataka State Board",
      year: "2019",
      details: "Percentage: 73%",
      icon: <FaSchool />,
    },
  ];

  const certifications = [
    "AI Product Intern – XtransMatrix Pvt. Ltd. ",
    "Kodnest Technologies Pvt. Ltd. Internship (2025–26)",
    "Artificial Intelligence Course – Adverk (2023)",
    "Computer Vision Using Python (2025)",
    "NPTEL – Introduction to Intellectual Property (2025)",
    "AI & ML with YOLOv8 Using Python (Offline) (2024)",
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-white">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 p-8 rounded-2xl border border-purple-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white flex items-center gap-3">
                <FaBrain className="text-purple-600 dark:text-purple-400" />
                AI & ML Engineer
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                An Artificial Intelligence and Machine Learning enthusiast with experience in developing AI-based applications including face recognition systems, weather dashboards, and AI teaching assistants.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Skilled in machine learning concepts, data processing, and full-stack development with hands-on internship experience and multiple AI/ML certifications.
              </p>
            </div>
            
            {/* Skills Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-500 transition-all">
                <FaBrain className="text-purple-600 dark:text-purple-400 text-3xl mb-3" />
                <h4 className="font-semibold text-lg mb-1 text-slate-800 dark:text-white">Machine Learning</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">TensorFlow & PyTorch</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-500 transition-all">
                <FaGlobe className="text-blue-600 dark:text-blue-400 text-3xl mb-3" />
                <h4 className="font-semibold text-lg mb-1 text-slate-800 dark:text-white">Web Development</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">React, Django, Node.js</p>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800 dark:text-white">
                <FaGraduationCap className="text-purple-600 dark:text-purple-400" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md border-l-4 border-purple-500 dark:border-purple-500 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="text-purple-600 dark:text-purple-400 text-2xl mt-1">{edu.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-slate-800 dark:text-white">{edu.institution}</h4>
                        <p className="text-slate-600 dark:text-slate-300">{edu.degree}</p>
                        <div className="flex justify-between mt-2 text-sm">
                          <span className="text-purple-600 dark:text-purple-400 font-medium">{edu.year}</span>
                          <span className="text-slate-500 dark:text-slate-400">{edu.details}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800 dark:text-white">
                <FaAward className="text-blue-600 dark:text-blue-400" />
                Certifications & Achievements
              </h3>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 p-6 rounded-xl border border-purple-100 dark:border-slate-700">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

