import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      
      {/* --- Custom CSS for Premium Liquid Aurora Blur & Majestic Bird --- */}
      <style>
        {`
          /* --- Floating Aurora Lights --- */
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(50px, -50px) scale(1.1); }
            66% { transform: translate(-40px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 15s infinite ease-in-out;
          }

          /* --- Front-Facing Bird Wing Flap --- */
          @keyframes majesticFlap {
            0%, 100% { transform: rotateX(0deg) translateY(0px); }
            50% { transform: rotateX(60deg) translateY(-10px); } /* ডানা ওপর-নিচ হওয়ার মুভমেন্ট */
          }
          
          /* --- Bird Hovering in Air --- */
          @keyframes majesticHover {
            0%, 100% { transform: translate(-50%, -60%) translateY(0px); }
            50% { transform: translate(-50%, -60%) translateY(-15px); }
          }

          .animate-wings {
            animation: majesticFlap 1.5s ease-in-out infinite;
            transform-origin: center center;
            transform-style: preserve-3d;
          }
          
          .animate-bird-body {
            animation: majesticHover 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* --- Premium Animated Background Start --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Liquid Aurora Blur Elements (আলোর মেঘগুলো ঠিক রাখা হয়েছে) */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/30 rounded-full mix-blend-screen blur-[120px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/30 rounded-full mix-blend-screen blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>
        <div className="absolute -bottom-10 left-1/3 w-[500px] h-[500px] bg-emerald-500/20 rounded-full mix-blend-screen blur-[120px] animate-blob" style={{ animationDelay: '8s' }}></div>

        {/* --- The Front-Facing Majestic Bird --- */}
        {/* কার্টুন লুক বাদ দিয়ে তীক্ষ্ণ সিলুয়েট ব্যবহার করা হয়েছে */}
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] z-0 pointer-events-none animate-bird-body">
          <div className="w-full h-full text-white opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
              
              {/* Bird Body (সামনে থেকে দেখা পাখির শরীর ও লেজ) */}
              <path fill="currentColor" d="M48,25 C50,15 52,15 52,25 C55,45 58,70 54,90 C52,95 48,95 46,90 C42,70 45,45 48,25 Z" />
              
              {/* Animated Wings (ডান এবং বাম ডানা যা নড়াচড়া করবে) */}
              <g className="animate-wings">
                {/* Left Wing */}
                <path fill="currentColor" d="M48,35 C30,10 5,20 2,40 C10,50 35,55 46,55 Z" />
                {/* Right Wing */}
                <path fill="currentColor" d="M52,35 C70,10 95,20 98,40 C90,50 65,55 54,55 Z" />
              </g>
              
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
            <span className="bg-gradient-to-r from-cyan-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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