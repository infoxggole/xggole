export default function WorkPage() {
  const works = [
    { 
      title: "Web App Design", 
      videoId: "u4OUd3GKjAg", 
      workflow: "This application was developed using an end-to-end professional tech stack. I utilized ChatGPT and Gemini for complex logic generation, while Cursor served as the AI-native IDE for precision scaffolding. The backend infrastructure is powered by Supabase, with the codebase managed through GitHub for version control and deployed via Cloudflare.",
      tech: ["Full-Stack", "AI-Integrated", "High-Performance"],
      result: "Optimized for speed and complex user interactions."
    },
    { 
      title: "Mobile App Design", 
      videoId: "u4OUd3GKjAg", 
      workflow: "I built this mobile experience by integrating a complete development lifecycle. Cursor and ChatGPT/Gemini were utilized for rapid, high-quality feature development. Supabase acts as the core backend server providing real-time data, while GitHub ensures code integrity through strict version control and Cloudflare provides edge-performance.",
      tech: ["Mobile-First", "Real-time Data", "Secure Auth"],
      result: "Seamless mobile experience with instant data syncing."
    },
    { 
      title: "Website Design", 
      videoId: "u4OUd3GKjAg", 
      workflow: "This web solution was engineered for scale and performance. The structure was crafted using Cursor and ChatGPT/Gemini. Data operations are handled by Supabase, GitHub serves as the repository for continuous integration, and it integrates Resend for transactional email, all hosted on Cloudflare's global edge network.",
      tech: ["Scalable", "Edge-Hosted", "Transactional-Ready"],
      result: "High-uptime architecture with reliable email delivery."
    },
    { 
      title: "Corporate Identity", 
      videoId: "u4OUd3GKjAg", 
      workflow: "For this project, I focused on strategic brand positioning and visual architecture. ChatGPT was applied to conduct audience persona analysis and establish a distinct brand voice. Cursor was leveraged to manage the digital design architecture, ensuring all brand assets remained modular and consistent.",
      tech: ["Brand Strategy", "Visual Architecture", "Modular Design"],
      result: "Unified and professional brand presence across all channels."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold mb-20 text-center">See My Work in Action</h2>

        <div className="flex flex-col gap-16">
          {works.map((work, index) => (
            <div 
              key={index} 
              className="bg-zinc-900 p-8 rounded-xl border border-white/10 flex flex-col md:flex-row items-center gap-10 transition-transform duration-300 hover:scale-[1.02]"
            >
              
              {/* মোবাইল ফ্রেমের ভেতর ভিডিও */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-[280px] h-[550px] border-[10px] border-zinc-800 rounded-[40px] overflow-hidden shadow-2xl bg-black">
                  {/* ফোনের নচ */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-10"></div>
                  
                  {/* ইউটিউব ভিডিও */}
                  <iframe 
                    className="w-full h-full object-cover"
                    src={`https://www.youtube.com/embed/${work.videoId}`}
                    title={work.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* টেক্সট ও বাটন সেকশন */}
              <div className="w-full md:w-2/3 flex flex-col">
                <h3 className="text-3xl font-bold mb-2 text-white">{work.title}</h3>
                <p className="text-blue-400 font-semibold mb-4 text-sm">{work.result}</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {work.workflow}
                </p>

                <div className="flex gap-2 mb-6 flex-wrap">
                  {work.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-full text-xs border border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => window.location.href = 'mailto:xggole.info@gmail.com'}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all"
                  >
                    Start Your Project
                  </button>
                  <button 
                    onClick={() => alert('Case study page coming soon!')}
                    className="border border-zinc-600 hover:bg-zinc-800 text-white px-6 py-2 rounded-lg font-medium transition-all"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}