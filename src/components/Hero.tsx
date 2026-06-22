import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      
      {/* --- Custom Animation Styles for Deep Sea Ecosystem --- */}
      <style>
        {`
          /* জেলিফিশ ১ (বড়) */
          @keyframes jelly1 {
            0% { transform: translateY(110vh) translateX(0px) rotate(-5deg); }
            50% { transform: translateY(30vh) translateX(50px) rotate(5deg); }
            100% { transform: translateY(-40vh) translateX(-20px) rotate(-2deg); }
          }
          /* জেলিফিশ ২ (ছোট) */
          @keyframes jelly2 {
            0% { transform: translateY(110vh) translateX(0px) rotate(5deg); }
            50% { transform: translateY(45vh) translateX(-40px) rotate(-5deg); }
            100% { transform: translateY(-40vh) translateX(10px) rotate(2deg); }
          }
          /* জেলিফিশের পালস বা সংকোচন */
          @keyframes jellyPulse {
            0%, 100% { transform: scale(1, 1); }
            50% { transform: scale(1.06, 0.94); }
          }

          /* অক্টোপাসের মুভমেন্ট (ধীর গতিতে নিচ থেকে ওপরে ওঠা) */
          @keyframes octopusFloat {
            0% { transform: translateY(110vh) translateX(0) scale(1); opacity: 0.1; }
            20% { opacity: 0.35; }
            70% { opacity: 0.35; }
            100% { transform: translateY(-50vh) translateX(-50px) scale(0.9); opacity: 0; }
          }

          /* ছোট মাছ ১ (বাম থেকে ডানে) */
          @keyframes fishSwimRight {
            0% { transform: translateX(-10vw) translateY(0px); }
            50% { transform: translateX(50vw) translateY(-30px); }
            100% { transform: translateX(110vw) translateY(10px); }
          }
          /* ছোট মাছ ২ (ডান থেকে বামে - উল্টো দিকে) */
          @keyframes fishSwimLeft {
            0% { transform: translateX(110vw) translateY(0px) scaleX(-1); }
            50% { transform: translateX(50vw) translateY(40px) scaleX(-1); }
            100% { transform: translateX(-10vw) translateY(-10px) scaleX(-1); }
          }

          .jelly-1 { position: absolute; left: 15%; width: 200px; animation: jelly1 22s linear infinite; z-index: 0; }
          .jelly-2 { position: absolute; right: 25%; width: 120px; animation: jelly2 26s linear infinite 5s; z-index: 0; }
          .jelly-p { width: 100%; height: 100%; animation: jellyPulse 3s ease-in-out infinite; transform-origin: top center; }
          
          .octopus { position: absolute; left: 45%; width: 180px; animation: octopusFloat 32s ease-in-out infinite 3s; z-index: 0; pointer-events: none; }
          
          .fish-1 { position: absolute; top: 30%; width: 50px; animation: fishSwimRight 16s linear infinite; z-index: 0; }
          .fish-2 { position: absolute; top: 60%; width: 40px; animation: fishSwimLeft 20s linear infinite 2s; z-index: 0; }
        `}
      </style>

      {/* --- Premium Animated Background Start --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Ambient Deep Sea Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-950/20 rounded-full blur-[140px] pointer-events-none"></div>

        {/* 1. Big Jellyfish (বড় জেলিফিশ) */}
        <div className="jelly-1">
          <div className="jelly-p opacity-40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" className="w-full h-full text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]">
              <path fill="currentColor" d="M100 20 C40 20 20 80 20 120 C20 140 35 140 45 130 C55 120 65 140 75 130 C85 120 95 140 105 130 C115 120 125 140 135 130 C145 120 155 140 165 130 C175 120 180 140 180 120 C180 80 160 20 100 20 Z" />
              <path fill="none" stroke="currentColor" strokeWidth="4" d="M45 130 Q30 200 50 280" /><path fill="none" stroke="currentColor" strokeWidth="4" d="M75 130 Q60 210 80 290" /><path fill="none" stroke="currentColor" strokeWidth="5" d="M105 130 Q120 220 100 285" /><path fill="none" stroke="currentColor" strokeWidth="4" d="M135 130 Q150 210 130 290" /><path fill="none" stroke="currentColor" strokeWidth="4" d="M165 130 Q180 200 160 280" />
            </svg>
          </div>
        </div>

        {/* 2. Small Jellyfish (ছোট জেলিফিশ) */}
        <div className="jelly-2">
          <div className="jelly-p opacity-25">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" className="w-full h-full text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.4)]">
              <path fill="currentColor" d="M100 20 C40 20 20 80 20 120 C20 140 35 140 45 130 C55 120 65 140 75 130 C85 120 95 140 105 130 C115 120 125 140 135 130 C145 120 155 140 165 130 C175 120 180 140 180 120 C180 80 160 20 100 20 Z" />
              <path fill="none" stroke="currentColor" strokeWidth="4" d="M55 130 Q40 200 60 270" /><path fill="none" stroke="currentColor" strokeWidth="5" d="M100 130 Q110 210 95 275" /><path fill="none" stroke="currentColor" strokeWidth="4" d="M145 130 Q155 200 140 270" />
            </svg>
          </div>
        </div>

        {/* 3. The Octopus (অক্টোপাস) */}
        <div className="octopus">
          <svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-400/80 drop-shadow-[0_0_15px_rgba(129,140,248,0.4)]">
            {/* Octopus Head */}
            <path fill="currentColor" d="M100 30 C50 30 40 90 40 120 C40 140 55 150 100 150 C145 150 160 140 160 120 C160 90 150 30 100 30 Z" />
            {/* Tentacles (শুঁড়) */}
            <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M60 140 Q30 180 50 230" />
            <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M85 145 Q70 195 80 240" />
            <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M115 145 Q130 195 120 240" />
            <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M140 140 Q170 180 150 230" />
          </svg>
        </div>

        {/* 4. Small Fish 1 (ছোট মাছ ১ - বাম থেকে ডানে যাবে) */}
        <div className="fish-1 opacity-40">
          <svg viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-cyan-300">
            <path fill="currentColor" d="M0 15 C10 5 35 5 40 15 C35 25 10 25 0 15 Z M40 15 L50 8 L47 15 L50 22 Z" />
          </svg>
        </div>

        {/* 5. Small Fish 2 (ছোট মাছ ২ - ডান থেকে বামে যাবে) */}
        <div className="fish-2 opacity-30">
          <svg viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-400">
            <path fill="currentColor" d="M0 15 C10 5 35 5 40 15 C35 25 10 25 0 15 Z M40 15 L50 8 L47 15 L50 22 Z" />
          </svg>
        </div>

      </div>
      {/* --- Premium Animated Background End --- */}

      {/* Gradient Overlay */}
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