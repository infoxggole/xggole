"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

// ১. পুরো স্ক্রিন জুড়ে প্রজাপতি ব্যাকগ্রাউন্ড
function ButterflyBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center opacity-40">
      <div className="absolute inset-0 bg-blue-900/10 blur-[150px]"></div>
      <motion.div 
        initial={{ rotateY: 0, scale: 0.8 }}
        animate={{ rotateY: [0, 60, 0], scale: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="text-blue-300 text-[150px] md:text-[250px] filter drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
      >
        🦋
      </motion.div>
    </div>
  );
}

// ২. কন্টাক্ট ফর্ম কম্পোনেন্ট
function ContactForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('YOUR_SUPABASE_EDGE_FUNCTION_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => { onClose(); }, 2000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-zinc-900 p-8 rounded-xl border border-white/10 max-w-md w-full relative shadow-2xl">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>
            <h3 className="text-xl font-bold mb-6 text-white">Start Your Project</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input required className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input required type="email" className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <textarea required className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white" placeholder="Describe your project..." rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                <button disabled={status === 'loading'} className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            {status === 'success' && <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>}
            {status === 'error' && <p className="mt-4 text-red-500 text-center">Something went wrong.</p>}
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
    <div className="w-full min-h-screen bg-zinc-950 text-white py-16 px-8 relative overflow-hidden">
      <ButterflyBackground />
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-20 text-center">My Development Workflow</h2>
        
        <div className="flex flex-col gap-16">
          {works.map((work, index) => (
            <div key={index} className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-xl border border-white/10 flex flex-col md:flex-row items-center gap-10 transition-transform duration-300 hover:scale-[1.02]">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-[280px] h-[550px] border-[10px] border-zinc-800 rounded-[40px] overflow-hidden shadow-2xl bg-black">
                  <iframe className="w-full h-full object-cover" src={`https://www.youtube.com/embed/${work.videoId}`} title={work.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>

              <div className="w-full md:w-2/3 flex flex-col">
                <h3 className="text-3xl font-bold mb-2 text-white">{work.title}</h3>
                <p className="text-blue-400 font-semibold mb-4 text-sm">{work.result}</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">{work.workflow}</p>

                <div className="flex gap-2 mb-6 flex-wrap">
                  {work.tech.map((t, i) => <span key={i} className="px-3 py-1 bg-zinc-800/50 rounded-full text-xs border border-zinc-700">{t}</span>)}
                </div>

                <div className="flex gap-4">
                  <button onClick={() => setShowForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all">Start A Collaboration</button>
                  <button onClick={() => alert('Detailed methodology coming soon!')} className="border border-zinc-600 hover:bg-zinc-800 text-white px-6 py-2 rounded-lg font-medium transition-all">View Methodology</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}