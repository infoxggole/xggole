import { Play } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  videoId: string;
  thumbnail: string;
  tools: string[];
  overview: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10 hover:border-blue-500/50 transition-colors duration-300 bg-zinc-900"
    >
      {/* Top Layer: project real image (opacity has been set to 100% for perfect clarity) */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {
          // If the image fails to load for any reason, this premium blue placeholder image will be used
          e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop';
        }}
      />
      
      {/* Dark Gradient Overlay (Ensure the text below is clearly legible and beautifully rendered) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Play Button - Premium Blue/Silver Theme */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-slate-400 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          <Play className="w-6 h-6 text-white ml-1" />
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
        <h3 className="text-white text-lg sm:text-xl font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">
          {project.title}
        </h3>
      </div>
    </button>
  );
}