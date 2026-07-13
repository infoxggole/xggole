"use client";
import { useState } from 'react';

// ১. পুরো স্ক্রিন জুড়ে প্রজাপতি ব্যাকগ্রাউন্ড (CSS এনিমেশন দিয়ে করা)
function ButterflyBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <style jsx>{`
        @keyframes butterflyAnim {
          0%, 100% { transform: rotateY(0deg) scale(0.8); }
          50% { transform: rotateY(60deg) scale(1); }
        }
        .butterfly-animate {
          animation: butterflyAnim 4s infinite ease-in-out;
        }
      `}</style>
      <div className="absolute inset-0 bg-blue-900/10 blur-[150px]"></div>
      <div 
        className="absolute top-1/4 left-1/4 text-blue-300 text-[200px] butterfly-animate"
      >
        🦋
      </div>
    </div>
  );
}

// ২. কন্টাক্ট ফর্ম
function ContactForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
      <div className="bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-700 max-w-md w-full relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-red-400">✕</button>
        <h3 className="text-xl font-bold mb-6 text-white">Start Your Project</h3>
        <input className="w-full p-3 mb-4 bg-zinc-800 rounded border border-zinc-700 text-white" placeholder="Name" />
        <input className="w-full p-3 mb-4 bg-zinc-800 rounded border border-zinc-700 text-white" placeholder="Email" />
        <textarea className="w-full p-3 mb-4 bg-zinc-800 rounded border border-zinc-700 text-white" placeholder="Project Details" rows={4} />
        <button className="w-full bg-blue-600 p-3 rounded text-white font-semibold hover:bg-blue-700">Send Message</button>
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [showForm, setShowForm] = useState(false);

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
    <div className="w-full min-h-screen bg-zinc-950 text-white relative py-10 px-4 md:py-16 md:px-8">
      <ButterflyBackground />
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
      
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center">My Development Workflow</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {works.map((work, index) => (
            <div key={index} className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-xl border border-zinc-800 flex flex-col hover:border-blue-500/50 transition-all">
              <div className="w-full h-48 bg-black rounded-lg overflow-hidden mb-6 border border-zinc-700">
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${work.videoId}`} />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-2">{work.title}</h3>
              <p className="text-blue-400 text-xs md:text-sm font-semibold mb-4">{work.result}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{work.workflow}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {work.tech.map((t, i) => <span key={i} className="px-2 py-1 bg-zinc-800 text-[10px] rounded text-zinc-300">{t}</span>)}
              </div>

              <div className="flex gap-4 mt-auto">
                <button onClick={() => setShowForm(true)} className="flex-1 bg-blue-600 py-2 rounded text-sm font-medium hover:bg-blue-700">Start Collaboration</button>
                <button className="flex-1 border border-zinc-600 py-2 rounded text-sm font-medium hover:bg-zinc-800">View Methodology</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
