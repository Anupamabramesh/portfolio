export default function About() {
  return (
    <section id="about" className="py-24 bg-white/50 dark:bg-black/30">
      <div className="container">
        <h2 className="text-center mb-16 glow-text">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
             An Artificial Intelligence and Machine Learning enthusiast with experience in developing AI-based applications including face recognition systems, weather dashboards, and AI teaching assistants using Python, OpenCV, and React.
            </p>
            <p>
              Skilled in machine learning concepts, data processing, and full-stack development with hands-on internship experience and multiple AI/ML certifications.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card-hover p-8 text-center">
              <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">Expert in TensorFlow & PyTorch</p>
            </div>
            <div className="card-hover p-8 text-center">
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">React, Tailwind, Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}