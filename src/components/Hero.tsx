import { ChevronRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
      }}
    >
      <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Leading the way in fertilizer supply, real estate,{' '}
          <span className="text-green-400">clean water</span>, and{' '}
          <span className="text-green-400">construction solutions</span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed">
          Your trusted partner for high-quality inorganic fertilizers, 
          clean sachet water production, reliable block manufacturing, and professional estate agency services.
        </p>
        
        <button
          onClick={() => scrollToSection('contact')}
          className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Get In Touch
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}