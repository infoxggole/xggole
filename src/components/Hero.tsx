import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
// আপনার supabase client ফাইলটি এখানে ইমপোর্ট করুন
import { supabase } from '../lib/supabase'; 

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const [projectsCount, setProjectsCount] = useState<number>(0);
  const [avgRating, setAvgRating] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        // ১. প্রজেক্টের সংখ্যা বের করা
        const { count: projCount } = await supabase
          .from('projects') // এখানে আপনার টেবিলের নাম দিন
          .select('*', { count: 'exact', head: true });

        // ২. ক্লায়েন্ট রেটিং বা রিভিউয়ের গড় বের করা
        const { data: reviews } = await supabase
          .from('review') // এখানে আপনার রিভিউ টেবিলের নাম দিন
          .select('rating');

        if (projCount) setProjectsCount(projCount);
        
        if (reviews && reviews.length > 0) {
          const sum = reviews.reduce((acc, curr) => acc + (curr.rating || 0), 0);
          setAvgRating(parseFloat((sum / reviews.length).toFixed(1)));
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      {/* CSS Animations */}
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(50px, -50px) scale(1.1); }
            66% { transform: translate(-40px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 15s infinite ease-in-out; }
          @keyframes floatUp {
            0% { transform: translateY(100vh) translateX(-50px); opacity: 0; }
            20% { opacity: 0.5; }
            80% { opacity: 0.5; }
            100% { transform: translateY(-20vh) translateX(50px); opacity: 0; }
          }
          .animate-jelly { animation: floatUp 15s linear infinite; }
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          .typing-text {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            animation: typing 3.5s steps(40, end) forwards;
          }
        `}
      </style>

      {/* --- Animated Background --- */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full mix-blend-screen blur-[120px] animate-blob"></div>
        <div className="absolute left-[15%] w-[200px] h-[250px] bg-cyan-400/30 rounded-[50%] blur-[60px] animate-jelly"></div>
        <div className="absolute right-[25%] w-[150px] h-[200px] bg-blue-500/30 rounded-[50%] blur-[60px] animate-jelly" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* --- Main Content --- */}
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
          
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            High-performance digital solutions tailored to your brand, delivered with precision and innovation.
          </p>

          <div className="flex gap-6 justify-center">
            <Link to="/work" className="px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95">
              View My Work
            </Link>
            <button onClick={onContactClick} className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-110 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-95">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Social Proof Bar - Dynamic */}
        <div className="absolute bottom-12 w-full flex justify-center items-center gap-6 md:gap-12 text-gray-400 text-sm md:text-base opacity-70">
          <span className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">{loading ? "..." : `${projectsCount}+`}</span> Projects Done
          </span>
          <div className="w-[1px] h-4 bg-gray-600"></div>
          <span className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">{loading ? "..." : avgRating}</span> Client Rating
          </span>
          <div className="w-[1px] h-4 bg-gray-600"></div>
          <span className="flex items-center gap-2">Clients</span>
        </div>
      </div>
      
      <button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 hover:text-cyan-400 transition-colors animate-bounce z-30">
        <ChevronDown size={32} />
      </button>
    </section>
  );
}