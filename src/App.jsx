// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-divine-bg-light dark:bg-divine-bg-dark text-gray-900 dark:text-gray-100">
      {/* Navbar stays fixed at top */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;