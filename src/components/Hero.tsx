import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      
      {/* --- CSS Animations --- */}
      <style>
        {`
          @keyframes float-jelly {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-40px) rotate(5deg); }
          }
          @keyframes pulse-jelly {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.05); opacity: 0.9; }
          }
          
          /* Typing Animation */
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: cyan; }
          }
          
          .animate-jelly-float { animation: float-jelly 6s ease-in-out infinite; }
          .animate-jelly-pulse { animation: pulse-jelly 3s ease-in-out infinite; }
          
          .typing-text {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: .15em solid cyan;
            animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
          }
        `}
      </style>

      {/* --- Background --- */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Jellyfish */}
        <div className="relative w-[300px] h-[400px] animate-jelly-float">
          <div className="absolute w-[200px] h-[200px] left-1/2 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent rounded-[100%] blur-[50px] mix-blend-screen animate-jelly-pulse"></div>
          <div className="absolute w-[10px] h-[200px] top-[150px] left-[100px] bg-gradient-to-b from-cyan-300 to-transparent blur-[8px] animate-jelly-pulse"></div>
        </div>
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
            <span className="inline-block px-6 py-2 border-2 border-slate-300 rounded-full bg-gradient-to-r from-slate-100 to-slate-400 text-black mb-4 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Transform
            </span>
            <br />
            <span className="typing-text bg-gradient-to-r from-cyan-400 via-white to-blue-400 bg-clip-text text-transparent">
              Your Vision Into Reality
            </span>
          </h1>
          
          {/* --- Magnetic Buttons --- */}
          <div className="flex gap-6 justify-center">
            <Link 
              to="/work" 
              className="px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95"
            >
              View My Work
            </Link>
            <button 
              onClick={onContactClick}
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-110 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-95"
            >
              Get in Touch
            </button>
          </div>
          {/* --- সোশ্যাল প্রুফ বার --- */}
          <div className="absolute bottom-12 left-0 w-full flex justify-center items-center gap-6 md:gap-12 text-gray-400 text-sm md:text-base opacity-70 animate-fade-in-up">
            <span className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">50+</span> Projects Done
            </span>
            <div className="w-[1px] h-4 bg-gray-600"></div>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">4.9/5</span> Client Rating
            </span>
            <div className="w-[1px] h-4 bg-gray-600"></div>
            <span className="flex items-center gap-2">
              Global Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}