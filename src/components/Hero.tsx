import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      
      {/* --- CSS Animations for Hovering Bird --- */}
      <style>
        {`
          /* Background Blob Animation */
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(50px, -50px) scale(1.1); }
            66% { transform: translate(-40px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 15s infinite ease-in-out; }

          /* Bird Hover Animation */
          @keyframes bird-hover {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          /* Rapid Wing Flap */
          @keyframes bird-flap {
            0%, 100% { transform: scaleX(1); opacity: 0.9; }
            50% { transform: scaleX(0.2); opacity: 0.5; }
          }
          .animate-hover { animation: bird-hover 3s ease-in-out infinite; }
          .animate-flap { animation: bird-flap 0.2s linear infinite; }
        `}
      </style>

      {/* --- Animated Background --- */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center overflow-hidden">
        
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Aurora Blur Effects */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full mix-blend-screen blur-[120px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/20 rounded-full mix-blend-screen blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>

        {/* Kingfisher Silhouette (Hovering) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 animate-hover">
          <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            {/* Body */}
            <path d="M70 50 C70 40 130 40 130 50 C130 65 70 65 70 50Z" fill="white" fillOpacity="0.8"/>
            {/* Beak */}
            <path d="M130 48 L160 52 L130 54 Z" fill="white" fillOpacity="0.8"/>
            {/* Wings */}
            <g className="animate-flap" style={{ transformOrigin: '100px 50px' }}>
              <path d="M100 50 L60 20 L100 50 L60 80 Z" fill="white" fillOpacity="0.6"/>
              <path d="M100 50 L140 20 L100 50 L140 80 Z" fill="white" fillOpacity="0.6"/>
            </g>
          </svg>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950 z-20" />

      {/* Main Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Transform Your Vision
            </span>
          </h1>
          <p className="text-gray-300 text-lg mb-12">
            We craft stunning digital experiences that captivate audiences.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/work" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}