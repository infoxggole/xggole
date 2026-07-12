import React from 'react';

const workflowSteps = [
  { 
    step: "01", 
    title: "Deep Discovery & Planning", 
    desc: "Before writing a single line of code, I dive deep into the project requirements. I map out user needs and business objectives to create a solid architectural blueprint. This ensures that every feature I build solves a real problem and adds tangible value to the product." 
  },
  { 
    step: "02", 
    title: "Stack Architecture", 
    desc: "A scalable application requires a rock-solid foundation. I select industry-standard technologies like JavaScript, React, and Supabase. I architect the database structure and security protocols to ensure the project remains robust and performant, even as user traffic grows." 
  },
  { 
    step: "03", 
    title: "AI-Powered Execution", 
    desc: "I leverage Cursor AI to accelerate development, ensuring code quality and precision. I break the project into modular components, keeping the codebase clean, maintainable, and bug-free. My development style combines visual aesthetics with high-end technical logic." 
  },
  { 
    step: "04", 
    title: "GitHub Integrity", 
    desc: "Code is an asset that needs protection. I use GitHub to track every development stage, maintain version control, and ensure team transparency. This rigorous commit history guarantees that your source code is always secure, versioned, and audit-ready." 
  },
  { 
    step: "05", 
    title: "Global Cloudflare Infrastructure", 
    desc: "I deploy projects using Cloudflare’s powerful infrastructure. By utilizing a Global CDN, I ensure your application is delivered at lightning speed to users worldwide, while keeping it shielded behind enterprise-grade security protocols." 
  },
  { 
    step: "06", 
    title: "Performance Optimization", 
    desc: "Deployment is just the start. I fine-tune every audiovisual element, optimize page load times, and ensure cross-device responsiveness. My goal is to provide a seamless, premium user experience that converts visitors into loyal clients." 
  }
];

const services = [
  { title: "Web App Development", desc: "High-performance, scalable web apps built with modern logic.", img: "/images/web-app.jpeg" },
  { title: "Mobile App Development", desc: "User-centric mobile experiences with real-time data synchronization.", img: "/images/mobile-app.jpeg" },
  { title: "Website Development", desc: "Responsive, SEO-optimized digital presence for all devices.", img: "/images/website-dev.jpeg" },
  { title: "Corporate Identity Suite", desc: "Professional branding kits that define your corporate identity.", img: "/images/identity.jpeg" }
];

const Work = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white p-6 md:p-12 font-sans">
      {/* Header */}
      <header className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          XGGOLE Development Workflow
        </h1>
        <p className="text-slate-400 text-lg md:text-xl">
          From concept to production—leveraging modern tech and AI-powered tools to bring your vision to life.
        </p>
      </header>

      {/* Workflow Steps */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">The A to Z Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflowSteps.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              <span className="text-blue-500 font-bold text-2xl mb-4 block">{s.step}</span>
              <h3 className="text-2xl font-semibold mb-4 text-white">{s.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <div key={i} className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition hover:shadow-2xl hover:shadow-blue-500/10">
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose XGGOLE */}
      <section className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose XGGOLE?</h2>
        <ul className="text-slate-300 space-y-5 text-left inline-block text-lg">
          <li>✅ <strong>Modern Tech Stack:</strong> Using cutting-edge tools that ensure longevity.</li>
          <li>✅ <strong>AI-Assisted Precision:</strong> Clean, bug-free, and high-performance code.</li>
          <li>✅ <strong>Global Professional Standards:</strong> GitHub, Supabase, and Cloudflare integration.</li>
          <li>✅ <strong>User-Centric Design:</strong> Not just functional, but an immersive experience.</li>
        </ul>
      </section>
    </div>
  );
};

export default Work;