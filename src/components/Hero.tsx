import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      
      {/* --- Premium Abstract Jellyfish CSS --- */}
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
          .animate-jelly-float { animation: float-jelly 6s ease-in-out infinite; }
          .animate-jelly-pulse { animation: pulse-jelly 3s ease-in-out infinite; }
        `}
      </style>

      {/* --- Animated Background --- */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center overflow-hidden">
        
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* --- Premium Glow Jellyfish (Abstract Shape) --- */}
        <div className="relative w-[300px] h-[400px] animate-jelly-float">
          {/* Jellyfish Bell (মাথার অংশ - প্রিমিয়াম গ্রেডিয়েন্ট ব্লার) */}
          <div className="absolute w-[200px] h-[200px] left-1/2 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent rounded-[100%] blur-[50px] mix-blend-screen animate-jelly-pulse"></div>
          
          {/* Jellyfish Tentacles (শুঁড় - আলতো আলোর রেখা) */}
          <div className="absolute w-[10px] h-[200px] top-[150px] left-[100px] bg-gradient-to-b from-cyan-300 to-transparent blur-[8px] animate-jelly-pulse"></div>
          <div className="absolute w-[10px] h-[180px] top-[150px] left-[130px] bg-gradient-to-b from-blue-300 to-transparent blur-[8px] animate-jelly-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute w-[10px] h-[160px] top-[150px] left-[70px] bg-gradient-to-b from-cyan-200 to-transparent blur-[8px] animate-jelly-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
            <span className="inline-block px-6 py-2 border-2 border-slate-300 rounded-full bg-gradient-to-r from-slate-100 to-slate-400 text-black mb-4 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-white to-blue-400 bg-clip-text text-transparent">
              Your Vision Into Reality
            </span>
          </h1>
          <div className="flex gap-4 justify-center">
            <Link to="/work" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all">
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}