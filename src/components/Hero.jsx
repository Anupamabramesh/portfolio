export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-divine-bg-light to-divine-bg-dark/50 dark:from-divine-bg-dark dark:to-black/50">
      <div className="text-center z-10 max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-xl md:text-2xl mb-12 opacity-90 text-black dark:text-black">
          AI & Web Developer
        </h1>
        <p className="text-2xl md:text-3xl font-light mb-8 text-gray-700 dark:text-gray-300">
          AI & ML Engineer
        </p>
        
       
      </div>

      {/* Subtle particles – only a few, larger & blurred */}
      <div className="aura-particle top-20 left-20 w-32 h-32"></div>
      <div className="aura-particle bottom-40 right-32 w-40 h-40"></div>
      <div className="aura-particle top-1/2 left-1/4 w-24 h-24"></div>
    </section>
  );
}