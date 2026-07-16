import React from 'react';

const whyChooseUs = [
  { 
    title: "Custom AI Solutions", 
    desc: "At XGGOLE, I don't believe in off-the-shelf templates. I architect bespoke AI-driven solutions that act as a force multiplier for your operations. By integrating advanced machine learning models directly into your custom business logic, I transform abstract concepts into tangible, high-efficiency digital tools that automate workflows, streamline complex decision-making processes, and provide you with a distinct, insurmountable competitive advantage in your industry." 
  },
  { 
    title: "Scalable Architecture", 
    desc: "A scalable application is not just about handling traffic; it's about structural integrity. I engineer every application with a modular, microservices-ready architecture that ensures your platform remains resilient under heavy loads. By prioritizing clean, decoupled code, I ensure that your application can evolve rapidly as your business expands, allowing you to add new features or scale your infrastructure without ever sacrificing performance or stability." 
  },
  { 
    title: "Enterprise-Grade Security", 
    desc: "Security is never an afterthought at FGGOLE; it is the foundation of every line of code I write. From implementing rigorous data encryption and robust authentication protocols to securing your database integrity, I treat your data with the highest level of confidentiality. By utilizing advanced firewall protections and secure deployment environments, I ensure that your business, your data, and your users are protected against evolving cyber threats." 
  },
  { 
    title: "Lightning-Fast Performance", 
    desc: "In the digital age, speed is the ultimate currency. I obsessively optimize every asset, code block, and server-side response to guarantee that your platform provides a fluid, near-instantaneous experience. By optimizing core web vitals, leveraging global CDN caching, and fine-tuning database queries, I ensure your application maintains a high-performance score across all devices, directly boosting user retention and conversion rates." 
  }
];

const roadmap = [
  { 
    step: "01", 
    title: "Deep Discovery & Planning", 
    desc: "I begin by deep-diving into your vision to identify the core problems that need solving. This phase involves extensive requirement analysis, user persona mapping, and the creation of a comprehensive architectural blueprint. By aligning your business objectives with technical feasibility early on, I ensure that the final product is not just a collection of features, but a strategic asset built to deliver specific, measurable outcomes for your organization." 
  },
  { 
    step: "02", 
    title: "Stack Architecture", 
    desc: "A robust application requires a foundation that is both flexible and secure. I carefully select the industry’s most reliable technology stack—such as Next.js, React, and Supabase—to structure your database and application logic. This phase is dedicated to establishing data integrity, defining API schemas, and ensuring that the underlying architecture is capable of supporting your long-term growth and technical requirements with maximum efficiency." 
  },
  { 
    step: "03", 
    title: "AI-Powered Execution", 
    desc: "By leveraging cutting-edge AI-native development environments like Cursor, I accelerate the build process without ever compromising on code quality. I decompose complex features into modular, clean, and highly maintainable components. This AI-assisted workflow allows for rapid iteration and prototyping, ensuring that the development cycle is fast, the code is future-proof, and the final delivery is precise, bug-free, and perfectly aligned with your specifications." 
  },
  { 
    step: "04", 
    title: "GitHub Integrity", 
    desc: "Your code is your most valuable intellectual property, and I treat it with absolute care. I maintain a strict, professional version control workflow on GitHub, where every line of code is tracked, reviewed, and versioned. By managing feature branches, conducting rigorous code reviews, and maintaining a clear commit history, I ensure total transparency and stability throughout the entire development lifecycle, making your project easy to manage, audit, and upgrade." 
  },
  { 
    step: "05", 
    title: "Global Cloudflare Infrastructure", 
    desc: "Deployment is handled with enterprise-grade standards using Cloudflare’s global edge network. I ensure that your application is not just hosted, but intelligently distributed to data centers worldwide. This approach dramatically reduces latency, protects your infrastructure against DDoS attacks, and ensures that your platform is accessible and reliable for users, no matter where they are located on the globe." 
  },
  { 
    step: "06", 
    title: "Performance Optimization", 
    desc: "The development cycle doesn't conclude at deployment; that is where the refinement begins. I obsessively fine-tune audiovisual assets, optimize front-end rendering, and perform rigorous cross-device testing to guarantee a high-performance experience. By monitoring core web vitals and constantly iterating on load times and accessibility, I ensure that your platform remains ahead of the curve, providing a smooth, flawless interface for every visitor." 
  }
];

export default function Work() {
  return (
    <div className="bg-[#030303] min-h-screen text-white font-sans overflow-x-hidden">
      
      {/* Header Section */}
      <div className="pt-20 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          XGGOLE Development Workflow
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          From concept to production—leveraging modern tech and AI-powered tools to bring your vision to life.
        </p>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose XGGOLE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Development Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmap.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl hover:border-blue-500/30 transition-all duration-300">
              <span className="text-4xl font-bold text-white/20 mb-6 block">{s.step}</span>
              <h3 className="text-xl font-semibold text-white mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
