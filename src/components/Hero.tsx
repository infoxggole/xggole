import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      
      {/* --- Custom CSS for Rapid Hummingbird Wing Flap & Hover --- */}
      <style>
        {`
          /* পাখির ডানার অত্যন্ত দ্রুত ঝাপটানোর অ্যানিমেশন (Extreme Speed) */
          @keyframes rapidWingFlap {
            0%, 100% { transform: rotateX(0deg) skewY(0deg); opacity: 1; }
            50% { transform: rotateX(80deg) skewY(20deg); opacity: 0.5; } /* অপাসিটি কমিয়ে ঝাপসা ভাব আনা */
          }

          /* পাখিটির ফুলের সামনে বাতাসে ভেসে থাকার হালকা নড়াচড়া */
          @keyframes birdHover {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-5px) translateX(2px); }
            66% { transform: translateY(3px) translateX(-1px); }
          }
          
          .animate-wing-flap {
            animation: rapidWingFlap 0.08s linear infinite; /* মাত্র ০.০৮ সেকেন্ড - অত্যন্ত দ্রুত */
            transform-origin: center top;
          }
          
          .animate-bird-hover {
            animation: birdHover 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* --- Premium Animated Background Start --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        
        {/* Subtle Cyber Grid (গ্রিড pattern টি রাখা হয়েছে প্রিমিয়াম লুকের জন্য) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Ambient Nature Glow (ফুলের পাশে একটি উষ্ণ আভা) */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-rose-950/30 rounded-full blur-[120px] pointer-events-none"></div>

        {/* --- Hummingbird and Flower Scene Container --- */}
        {/* ভিজিবিলিটি বেশি করার জন্য অপাসিটি ০.৭ (৭০%) রাখা হয়েছে এবং রেসপন্সিভ পজিশনিং করা হয়েছে */}
        <div className="absolute top-[25%] right-[10%] sm:right-[15%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] opacity-70 z-0 pointer-events-none">
          
          {/* 1. The Flower (ফুলটি স্থির থাকবে) */}
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]">
            {/* Flower Stem & Leaves */}
            <path fill="none" stroke="#166534" strokeWidth="4" strokeLinecap="round" d="M100 190 Q90 150 100 110" />
            <path fill="#15803d" d="M100 150 Q130 140 140 160 Q120 170 100 150 Z" />
            
            {/* Flower Petals (পাঁপড়ি) */}
            <g fill="currentColor">
              <ellipse cx="100" cy="70" rx="30" ry="50" transform="rotate(0 100 70)" />
              <ellipse cx="100" cy="70" rx="30" ry="50" transform="rotate(72 100 70)" />
              <ellipse cx="100" cy="70" rx="30" ry="50" transform="rotate(144 100 70)" />
              <ellipse cx="100" cy="70" rx="30" ry="50" transform="rotate(216 100 70)" />
              <ellipse cx="100" cy="70" rx="30" ry="50" transform="rotate(288 100 70)" />
            </g>
            {/* Flower Center (ফুলের কেন্দ্র যেখানে ঠোঁট থাকবে) */}
            <circle cx="100" cy="70" r="15" fill="#f59e0b" />
          </svg>

          {/* 2. The Hummingbird (পাখিটি ফুল থেকে একটু ওপরে ভেসে থাকবে) */}
          <div className="absolute top-0 left-0 w-48 h-32 sm:w-64 sm:h-40 animate-bird-hover">
            <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">
              
              {/* Animated Wings (ডানা দুটির অত্যন্ত দ্রুত মুভমেন্ট) */}
              <g className="animate-wing-flap">
                {/* Left Wing */}
                <path fill="#10b981" d="M80 40 C60 10 30 10 10 30 C30 35 60 45 80 40 Z" opacity="0.8"/>
                {/* Right Wing */}
                <path fill="#059669" d="M100 40 C120 10 150 10 170 30 C150 35 120 45 100 40 Z" opacity="0.8"/>
              </g>

              {/* Bird Body & Head (পাখির শরীর ও মাথা) */}
              <path fill="currentColor" d="M120 50 C110 30 80 30 70 50 C60 70 80 90 100 90 C120 90 130 70 120 50 Z" />
              <circle cx="85" cy="50" r="10" fill="currentColor" />
              <circle cx="82" cy="48" r="2" fill="black" /> {/* চোখ */}
              
              {/* The Long Beak (লম্বা ঠোঁট - যা ফুলের কেন্দ্রের দিকে নির্দেশ করা) */}
              {/* পজিশন এমনভাবে সেট করা যাতে এটি ফুলের কেন্দ্রের দিকে থাকে */}
              <path fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" d="M75 52 L35 75" transform="rotate(-10 75 52)"/> 
            
            </svg>
          </div>
          
        </div>

      </div>
      {/* --- Premium Animated Background End --- */}

      {/* Gradient Overlay for text readability (z-10) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 z-10 pointer-events-none" />

      {/* Content (Text stays exactly the same) */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in text-white">
            <span className="inline-block px-6 py-2 border-2 border-slate-300 rounded-full bg-gradient-to-r from-slate-100 to-slate-400 text-black shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-4">
              Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-white to-teal-500 bg-clip-text text-transparent drop-shadow-sm">
              Your Vision Into Reality
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-up">
            We craft stunning digital experiences that captivate audiences and elevate brands to new heights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-slide-up-delay">
            <Link
              to="/work"
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 z-20 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View My Work
              </span>
            </Link>

            <button
              onClick={onContactClick}
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-emerald-500/10 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105"
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-emerald-400 transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}