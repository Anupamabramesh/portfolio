export default function Projects() {
  const projects = [
    {
      title: "Movie Management System",
      description:
        "A web application built using Django and MySQL that allows users to filter movies, view details, and make reservations.",
      image: "https://via.placeholder.com/400x200?text=Movie+Management+System",
      github: "https://github.com/anupamabramesh/movie-management-system",
    },
    {
      title: "Face Recognition System",
      description:
        "A real-time face detection and recognition system using Python, OpenCV, and DeepFace with CSV-based data storage.",
      image: "C:\\Users\\anupa\\OneDrive\\Desktop\\portfolio\\src\\components\\face.jpg",
      github: "https://github.com/anupamabramesh/face-recognition-system",
    },
    {
      title: "Weather Application",
      description:
        "A responsive weather dashboard built with React.js and REST APIs providing real-time weather data, 5-day forecasts, geolocation support, and interactive charts.",
      image: "https://via.placeholder.com/400x200?text=Weather+Application",
      github: "https://github.com/Anupamabramesh/weather",
    },
    {
      title: "AI Teaching Assistant",
      description:
        "A real-time AI learning assistant that converts speech into captions and generates automatic notes using NLP and speech-to-text technologies.",
      image: "https://via.placeholder.com/400x200?text=AI+Teaching+Assistant",
      github: "https://github.com/anupamabramesh/ai-teaching-assistant",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-divine-bg-light dark:bg-divine-bg-dark">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-hover bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-neural-fade">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <div className="mt-4 flex space-x-4">
                  <a href={project.github} className="cosmic-btn text-sm">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}