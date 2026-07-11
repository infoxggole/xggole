"use client";
import React from 'react';
import { motion } from 'framer-motion';

// গ্লোয়িং উইং এনিমেশন
function Wings() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-80 h-96 bg-blue-600/15 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-32 w-80 h-96 bg-blue-600/15 blur-[120px] rounded-full"
      />
    </div>
  );
}

export default function WorkPage() {
  const works = [
    { 
      title: "Web App Development", 
      videoId: "u4OUd3GKjAg", 
      workflow: "My approach to web apps is focused on high performance. I use ChatGPT and Gemini to architect complex logic, combined with Cursor as my AI-native IDE. Data is managed via Supabase, ensuring a secure and scalable foundation, while the entire build is deployed on Cloudflare.",
      tech: ["Full-Stack", "AI-Integrated", "High-Performance"],
      result: "Optimized for speed, reliability, and security."
    },
    { 
      title: "Mobile App Development", 
      videoId: "u4OUd3GKjAg", 
      workflow: "For mobile experiences, I follow a mobile-first development lifecycle. I leverage AI coding assistants for rapid feature scaffolding, while Supabase provides real-time data synchronization. GitHub acts as my core for version control, ensuring a stable and professional deployment.",
      tech: ["Mobile-First", "Real-time Data", "Secure Auth"],
      result: "Seamless mobile data handling and synchronization."
    },
    { 
      title: "Website Development", 
      videoId: "u4OUd3GKjAg", 
      workflow: "I focus on crafting responsive and user-centric websites that deliver seamless browsing experiences. By leveraging modern frameworks and clean code practices, I ensure that every site is optimized for performance, SEO, and accessibility across all devices.",
      tech: ["Responsive Design", "SEO Optimized", "Performance"],
      result: "A fast, accessible, and visually stunning digital presence."
    },
    { 
      title: "Corporate Identity Suite", 
      videoId: "u4OUd3GKjAg", 
      workflow: "I build comprehensive corporate identity suites that create a cohesive visual language. From logotypes to modular digital asset systems, every element is designed to maintain professional consistency across all platforms and touchpoints.",
      tech: ["Visual Architecture", "Modular Design", "Professional Assets"],
      result: "Scalable, consistent, and recognizable branding."
    }
  ];

  const margins = ["ml-10", "ml-24", "ml-10", "ml-24"];

  return (
    <div className="w-full h-screen bg-black text-white px-4 py-2 overflow-hidden flex flex-col justify-center">
      <Wings />
      
      <h2 className="text-xl font-light text-center tracking-widest text-zinc-400 uppercase mb-4 relative z-10">Development Workflow</h2>
      
      <div className="flex flex-col h-full gap-3 relative z-10 justify-center">
        {works.map((work, index) => (
          <motion.div 
            key={index} 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`flex flex-row items-center gap-4 bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 transition-all ${margins[index % 4]} h-[19vh]`}
          >
            {/* ভিডিও সাইড */}
            <div className="w-1/4 h-full bg-black overflow-hidden border-r border-white/5 flex-shrink-0">
              <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${work.videoId}`} />
            </div>
            
            {/* টেক্সট সাইড - এখানে পুরো ডেসক্রিপশন আছে */}
            <div className="w-3/4 p-3 flex flex-col justify-center overflow-hidden">
              <h3 className="text-sm font-medium text-white mb-0.5">{work.title}</h3>
              <p className="text-blue-400/80 text-[9px] uppercase tracking-wider italic mb-1">{work.result}</p>
              <p className="text-zinc-400 text-[10px] leading-tight mb-2 pr-4">{work.workflow}</p>
              
              <div className="flex flex-wrap gap-1">
                {work.tech.map((t, i) => (
                  <span key={i} className="px-1.5 py-0 bg-white/5 text-[8px] uppercase tracking-wider text-zinc-600 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}