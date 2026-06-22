import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      
      {/* --- CSS Animations (No Cartoons, Just Premium Motion) --- */}
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(50px, -50px) scale(1.1); }
            66% { transform: translate(-40px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 15s infinite ease-in-out; }

          /* Premium Wing Flap - Gradient based */
          @keyframes premium-flap {
            0%, 100% { transform: scaleX(1); opacity: 0.8; }
            50% { transform: scaleX(0.3); opacity: 0.4; }
          }
          
          /* Gentle Floating Motion */
          @keyframes gentle-hover {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }

          .animate-premium-wing { animation: premium-flap 0.2s linear infinite; }
          .animate-gentle-hover { animation: gentle-hover 4s ease-in-out infinite; }
        `}
      </style>

      {/* --- Premium Animated Background --- */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Aurora Blobs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full mix-blend-screen blur-[120px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/20 rounded-full mix-blend-screen blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>

        {/* --- The Premium Gradient Bird --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 animate-gentle-hover">
          <div className="relative w-[300px] h-[200px] flex items-center justify-center">
            
            {/* Body (Central Blur) */}
            <div className="absolute w-[60px] h-[60px] bg-gradient-to-r from-blue-500 to-orange-400 rounded-full blur-2xl"></div>

            {/* Left Wing (Premium Gradient) */}
            <div className="absolute right-[50%] w-[150px] h-[100px] bg-gradient-to-r from-blue-600 to-blue-400 rounded-[100px] blur-xl origin-right animate-premium-wing"></div>
            
            {/* Right Wing (Premium Gradient) */}
            <div className="absolute left-[50%] w-[150px] h-[100px] bg-gradient-to-l from-orange-500 to-orange-300 rounded-[100px] blur-xl origin-left animate-premium-wing"></div>
            
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950 z-20 pointer-events-none" />

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