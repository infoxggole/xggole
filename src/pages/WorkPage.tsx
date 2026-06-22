import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { PROJECTS } from '../config';

interface Project {
  id: number;
  title: string;
  videoId: string;
  thumbnail: string;
  tools: string[];
  overview: string;
}

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen bg-zinc-950 pt-24 pb-16 overflow-hidden">
      
      {/* --- CSS Animations for Butterfly --- */}
      <style>
        {`
          @keyframes float-up-down {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-50px); }
          }
          @keyframes flap-left-wing {
            0%, 100% { transform: perspective(1000px) rotateY(10deg) rotate(-15deg); opacity: 0.8; }
            50% { transform: perspective(1000px) rotateY(75deg) rotate(-15deg); opacity: 0.3; }
          }
          @keyframes flap-right-wing {
            0%, 100% { transform: perspective(1000px) rotateY(-10deg) rotate(15deg); opacity: 0.8; }
            50% { transform: perspective(1000px) rotateY(-75deg) rotate(15deg); opacity: 0.3; }
          }
        `}
      </style>

      {/* --- Premium Animated Background Start (z-0 দেওয়া হয়েছে, Hero পেজের মতো) --- */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center overflow-hidden">
        
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Butterfly Wrapper - Floating Animation */}
        <div 
          className="relative w-full max-w-5xl h-screen flex items-center justify-center"
          style={{ animation: 'float-up-down 6s ease-in-out infinite' }}
        >
          {/* Left Wing (Blue & White) */}
          <div 
            className="absolute right-1/2 w-[250px] sm:w-[350px] md:w-[450px] h-[400px] md:h-[600px] bg-gradient-to-tr from-blue-700 via-blue-400 to-white/50 rounded-[100%] blur-[60px] mix-blend-screen origin-right"
            style={{ animation: 'flap-left-wing 3s ease-in-out infinite' }}
          ></div>
          
          {/* Right Wing (Blue & White) */}
          <div 
            className="absolute left-1/2 w-[250px] sm:w-[350px] md:w-[450px] h-[400px] md:h-[600px] bg-gradient-to-tl from-blue-700 via-blue-400 to-white/50 rounded-[100%] blur-[60px] mix-blend-screen origin-left"
            style={{ animation: 'flap-right-wing 3s ease-in-out infinite' }}
          ></div>
        </div>
      </div>
      {/* --- Premium Animated Background End --- */}

      {/* Gradient Overlay for content visibility (z-10) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 z-10" />

      {/* Main Content (z-20 দেওয়া হয়েছে যাতে লেখা এবং কার্ড সবার ওপরে থাকে) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to Our <span className="bg-gradient-to-r from-blue-400 via-white to-slate-400 bg-clip-text text-transparent drop-shadow-md">Collection</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            See how we bring ideas to life. Explore our creative journey below.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}