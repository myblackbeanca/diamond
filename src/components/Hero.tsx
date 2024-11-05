import { Diamond } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Kevin Diamond - EDM Artist & Producer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-pulse mb-6">
          <Diamond className="h-16 w-16 mx-auto text-purple-500" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Kevin Diamond
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Experience the future of music with exclusive MINY drops and premium content
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#miny"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105"
          >
            Explore MINY Drop
          </a>
          <a
            href="#events"
            className="px-8 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all transform hover:scale-105 backdrop-blur-sm"
          >
            View Events
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 rounded-full bg-gradient-to-b from-purple-500 to-transparent" />
      </div>
    </section>
  );
}