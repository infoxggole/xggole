import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      
      {/* --- Premium Bird Silhouette Animation (Using Butterfly-style Light Effects) --- */}
      <style>
        {`
          @keyframes float-gentle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
          /* পাখির ডানার ঝাপটানোর জন্য দ্রুত অ্যানিমেশন */
          @keyframes bird-flap-left {
            0%, 100% { transform: perspective(1000px) rotateY(20deg) rotate(-10deg); opacity: 0.8; }
            50% { transform: perspective(1000px) rotateY(60deg) rotate(-25deg); opacity: 0.4; }
          }
          @keyframes bird-flap-right {
            0%, 100% { transform: perspective(1000px) rotateY(-20deg) rotate(10deg); opacity: 0.8; }
            50% { transform: perspective(1000px) rotateY(-60deg) rotate(25deg); opacity: 0.4; }
          }
        `}
      </style>

      {/* --- Animated Background Start --- */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center overflow-hidden">
        
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Bird Light Wrapper */}
        <div 
          className="relative w-full max-w-2xl h-screen flex items-center justify-center pointer-events-none"
          style={{ animation: 'float-gentle 4s ease-in-out infinite' }}
        >
          {/* Left Wing (Bird Wing Shape using Premium Blur) */}
          <div 
            className="absolute right-1/2 w-[200px] h-[150px] bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-bl-[100px] rounded-tr-[20px] blur-[40px] mix-blend-screen origin-right"
            style={{ animation: 'bird-flap-left 0.4s ease-in-out infinite' }}
          ></div>
          
          {/* Right Wing (Bird Wing Shape using Premium Blur) */}
          <div 
            className="absolute left-1/2 w-[200px] h-[150px] bg-gradient-to-tl from-cyan-400 to-blue-600 rounded-br-[100px] rounded-tl-[20px] blur-[40px] mix-blend-screen origin-left"
            style={{ animation: 'bird-flap-right 0.4s ease-in-out infinite' }}
          ></div>
        </div>
      </div>
      {/* --- Premium Animated Background End --- */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
            <span className="inline-block px-6 py-2 border-2 border-slate-300 rounded-full bg-gradient-to-r from-slate-100 to-slate-400 text-black mb-4">
              Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Your Vision Into Reality
            </span>
          </h1>
          <div className="flex gap-6 justify-center">
            <Link to="/work" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all">
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}