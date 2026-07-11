"use client";
import { motion } from 'framer-motion';

// সফট গ্লোয়িং উইং এনিমেশন
function Wings() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* বাম দিকের উইং */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -left-32 w-80 h-96 bg-blue-600/15 blur-[120px] rounded-full"
      />
      {/* ডান দিকের উইং */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-32 w-80 h-96 bg-blue-600/15 blur-[120px] rounded-full"
      />
    </div>
  );
}

export default function WorkPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:miraj@yourdomain.com?subject=Collaboration Request";
  };

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

  return (
    <div className="w-full min-h-screen bg-black text-white relative py-20 px-6">
      <Wings />
      
      {/* সেন্ট্রাল কন্টেইনার (এখানেই সব গ্রিড থাকবে) */}
      <main className="max-w-4xl mx-auto z-10 relative">
        <h2 className="text-2xl font-light text-center tracking-widest text-zinc-400 uppercase mb-16">Development Workflow</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <div key={index} className="bg-zinc-900/40 p-5 border border-white/5 hover:border-blue-500/20 transition-all duration-300 flex flex-col">
              <div className="w-full h-32 bg-black border border-white/5 mb-4 overflow-hidden">
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${work.videoId}`} />
              </div>
              
              <h3 className="text-sm font-medium mb-1">{work.title}</h3>
              <p className="text-blue-500/70 text-[10px] uppercase tracking-wider mb-3 italic">{work.result}</p>
              <p className="text-zinc-500 text-xs leading-relaxed mb-4 flex-grow">{work.workflow}</p>
              
              <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                {work.tech.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 bg-white/5 text-[9px] uppercase tracking-wider text-zinc-600 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              <button 
                onClick={handleEmailClick}
                className="w-full border border-white/10 py-2 text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all text-zinc-400"
              >
                Start Collaboration
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}