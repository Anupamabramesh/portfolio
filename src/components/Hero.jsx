import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-200/50 dark:bg-purple-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-200/50 dark:bg-blue-600/20 rounded-full blur-[100px]"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Name */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-800 dark:text-white">
         Hi,I'm Anupama BR
        </h1>
        
        {/* Title */}
        <div className="mb-6">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium">
            <span className="text-purple-600 dark:text-purple-400">AI & ML Engineer</span>
            <span className="text-slate-400 dark:text-slate-500 mx-3">|</span>
            <span className="text-blue-600 dark:text-blue-400">Web Developer</span>
          </p>
        </div>

        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-purple-500 dark:bg-purple-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

