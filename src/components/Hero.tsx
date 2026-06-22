import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      
      {/* --- Custom Animation Styles for Blue Whale & Bubbles --- */}
      <style>
        {`
          /* তিমির ধীর গতিতে সাঁতার কাটার অ্যানিমেশন */
          @keyframes whalePan {
            0% { transform: translateX(-40vw) translateY(5vh) rotate(3deg); }
            50% { transform: translateX(40vw) translateY(-5vh) rotate(-1deg); }
            100% { transform: translateX(120vw) translateY(10vh) rotate(2deg); }
          }
          
          /* পানির বুদবুদ ওপরে ওঠার অ্যানিমেশন */
          @keyframes floatBubble {
            0% { transform: translateY(110vh) scale(0.5); opacity: 0; }
            20% { opacity: 0.6; }
            80% { opacity: 0.6; }
            100% { transform: translateY(-20vh) scale(1.2); opacity: 0; }
          }

          .whale-wrapper {
            position: absolute;
            top: 25%;
            left: -30%;
            width: 1200px;
            animation: whalePan 45s linear infinite;
            z-index: 0;
            pointer-events: none;
          }

          .bubble {
            position: absolute;
            bottom: -10%;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.4), rgba(56, 189, 248, 0.05));
            box-shadow: inset 0 0 10px rgba(56, 189, 248, 0.2);
            animation: floatBubble linear infinite;
            z-index: 0;
            pointer-events: none;
          }
        `}
      </style>

      {/* --- Premium Animated Background Start --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Deep Ocean Ambient Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* The Majestic Blue Whale */}
        <div className="whale-wrapper opacity-30">
          <svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
            {/* Whale Body */}
            <path d="M 950 180 C 800 120 600 80 350 150 C 200 190 100 180 40 140 C 30 120 20 90 10 70 C 20 110 40 140 60 170 C 40 190 15 210 0 230 C 40 220 80 200 120 185 C 200 230 400 280 700 220 C 850 190 950 185 980 185 C 990 185 1000 185 1000 185 C 980 185 960 183 950 180 Z" fill="currentColor"/>
            {/* Pectoral Fin */}
            <path d="M 550 225 C 500 300 400 380 320 380 C 380 340 450 280 490 230 Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Underwater Bubbles */}
        <div className="bubble w-6 h-6 left-[15%]" style={{ animationDuration: '12s', animationDelay: '0s' }}></div>
        <div className="bubble w-10 h-10 left-[35%]" style={{ animationDuration: '18s', animationDelay: '3s' }}></div>
        <div className="bubble w-4 h-4 left-[60%]" style={{ animationDuration: '10s', animationDelay: '7s' }}></div>
        <div className="bubble w-8 h-8 left-[80%]" style={{ animationDuration: '15s', animationDelay: '1s' }}></div>
        <div className="bubble w-5 h-5 left-[50%]" style={{ animationDuration: '14s', animationDelay: '5s' }}></div>

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
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 z-20 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View My Work
              </span>
            </Link>

            <button
              onClick={onContactClick}
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-blue-500/10 hover:border-blue-400/40 transition-all duration-300 hover:scale-105"
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