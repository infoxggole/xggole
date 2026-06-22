import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      
      {/* --- CSS Animations for Premium Butterfly Wing Flap --- */}
      <style>
        {`
          @keyframes float-up-down {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-50px); }
          }
          @keyframes flap-left-wing {
            0%, 100% { transform: perspective(1000px) rotateY(10deg) rotate(-15deg); opacity: 0.6; }
            50% { transform: perspective(1000px) rotateY(75deg) rotate(-15deg); opacity: 0.2; }
          }
          @keyframes flap-right-wing {
            0%, 100% { transform: perspective(1000px) rotateY(-10deg) rotate(15deg); opacity: 0.6; }
            50% { transform: perspective(1000px) rotateY(-75deg) rotate(15deg); opacity: 0.2; }
          }
        `}
      </style>

      {/* --- Animated Background Start --- */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center overflow-hidden">
        
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Butterfly-Style Wing Wrapper */}
        <div 
          className="relative w-full max-w-5xl h-screen flex items-center justify-center"
          style={{ animation: 'float-up-down 6s ease-in-out infinite' }}
        >
          {/* Left Wing (Premium Abstract) */}
          <div 
            className="absolute right-1/2 w-[300px] md:w-[450px] h-[400px] md:h-[600px] bg-gradient-to-tr from-blue-700 via-cyan-500 to-white/20 rounded-[100%] blur-[80px] mix-blend-screen origin-right"
            style={{ animation: 'flap-left-wing 3s ease-in-out infinite' }}
          ></div>
          
          {/* Right Wing (Premium Abstract) */}
          <div 
            className="absolute left-1/2 w-[300px] md:w-[450px] h-[400px] md:h-[600px] bg-gradient-to-tl from-blue-700 via-cyan-500 to-white/20 rounded-[100%] blur-[80px] mix-blend-screen origin-left"
            style={{ animation: 'flap-right-wing 3s ease-in-out infinite' }}
          ></div>
        </div>
      </div>
      {/* --- Premium Animated Background End --- */}

      {/* Gradient Overlay for content visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 z-10" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in text-white">
            <span className="inline-block px-6 py-2 border-2 border-slate-300 rounded-full bg-gradient-to-r from-slate-100 to-slate-400 text-black shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-4">
              Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-white to-slate-400 bg-clip-text text-transparent">
              Your Vision Into Reality
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-up">
            We craft stunning digital experiences that captivate audiences and elevate brands to new heights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-slide-up-delay">
            <Link
              to="/work"
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 z-20 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View My Work
              </span>
            </Link>

            <button
              onClick={onContactClick}
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => {
            const services = document.querySelector('#services');
            services?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}