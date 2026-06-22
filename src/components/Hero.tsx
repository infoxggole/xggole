import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      
      {/* --- Custom Animation Styles for Realistic Jellyfish Movement --- */}
      <style>
        {`
          /* প্রথম জেলিফিশের জন্য এঁকেবেঁকে চলার পথ */
          @keyframes floatDrift1 {
            0% { transform: translateY(110vh) translateX(0px) rotate(-5deg); }
            25% { transform: translateY(65vh) translateX(-60px) rotate(8deg); }
            50% { transform: translateY(20vh) translateX(40px) rotate(-6deg); }
            75% { transform: translateY(-25vh) translateX(-40px) rotate(5deg); }
            100% { transform: translateY(-70vh) translateX(20px) rotate(-2deg); }
          }

          /* দ্বিতীয় জেলিফিশের জন্য ভিন্ন এঁকেবেঁকে চলার পথ */
          @keyframes floatDrift2 {
            0% { transform: translateY(110vh) translateX(0px) rotate(5deg); }
            25% { transform: translateY(75vh) translateX(70px) rotate(-8deg); }
            50% { transform: translateY(35vh) translateX(-50px) rotate(7deg); }
            75% { transform: translateY(-5vh) translateX(60px) rotate(-5deg); }
            100% { transform: translateY(-55vh) translateX(-30px) rotate(3deg); }
          }

          /* শ্বাস নেওয়া বা সাঁতার কাটার অরিজিনাল মুভমেন্ট */
          @keyframes jellyfishPulse {
            0%, 100% { transform: scale(1, 1); }
            50% { transform: scale(1.08, 0.92); } 
          }

          .jelly-float-1 {
            position: absolute;
            left: 20%;
            width: 220px;
            animation: floatDrift1 24s linear infinite;
            z-index: 0;
          }

          .jelly-float-2 {
            position: absolute;
            right: 20%;
            width: 150px;
            animation: floatDrift2 28s linear infinite 4s;
            z-index: 0;
          }

          .jelly-pulse {
            width: 100%;
            height: 100%;
            animation: jellyfishPulse 3.5s ease-in-out infinite;
            transform-origin: top center;
          }
        `}
      </style>

      {/* --- Premium Animated Background Start --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* First Glowing Jellyfish (Main) */}
        <div className="jelly-float-1">
          <div className="jelly-pulse opacity-40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" className="w-full h-full text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
              {/* Jellyfish Body */}
              <path fill="currentColor" d="M100 20 C40 20 20 80 20 120 C20 140 35 140 45 130 C55 120 65 140 75 130 C85 120 95 140 105 130 C115 120 125 140 135 130 C145 120 155 140 165 130 C175 120 180 140 180 120 C180 80 160 20 100 20 Z" />
              {/* Tentacles */}
              <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M45 130 Q30 200 50 280" />
              <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M75 130 Q60 210 80 290" />
              <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M105 130 Q120 220 100 285" />
              <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M135 130 Q150 210 130 290" />
              <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M165 130 Q180 200 160 280" />
            </svg>
          </div>
        </div>

        {/* Second Glowing Jellyfish (Smaller) */}
        <div className="jelly-float-2">
          <div className="jelly-pulse opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" className="w-full h-full text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]">
              <path fill="currentColor" d="M100 20 C40 20 20 80 20 120 C20 140 35 140 45 130 C55 120 65 140 75 130 C85 120 95 140 105 130 C115 120 125 140 135 130 C145 120 155 140 165 130 C175 120 180 140 180 120 C180 80 160 20 100 20 Z" />
              <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M45 130 Q30 200 50 280" />
              <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M75 130 Q60 210 80 290" />
              <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M105 130 Q120 220 100 285" />
              <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M135 130 Q150 210 130 290" />
              <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M165 130 Q180 200 160 280" />
            </svg>
          </div>
        </div>

      </div>
      {/* --- Premium Animated Background End --- */}

      {/* Gradient Overlay for text readability (z-10) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in text-white">
            <span className="inline-block px-6 py-2 border-2 border-slate-300 rounded-full bg-gradient-to-r from-slate-100 to-slate-400 text-black shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-4">
              Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-white to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
              Your Vision Into Reality
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-up">
            We craft stunning digital experiences that captivate audiences and elevate brands to new heights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-slide-up-delay">
            <Link
              to="/work"
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 z-20 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View My Work
              </span>
            </Link>

            <button
              onClick={onContactClick}
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-cyan-500/10 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-cyan-400 transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}