import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  videoId: string;
  thumbnail: string;
  tools: string[];
  overview: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-xggole-blue border-2 border-xggole-blue/10 hover:border-xggole-blue/40 transition-colors duration-300 bg-white shadow-lg shadow-xggole-blue/5"
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src =
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop';
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-xggole-deep/90 via-xggole-deep/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
          <Play className="w-6 h-6 text-xggole-deep ml-1" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
        <span className="text-xggole-sky text-xs font-medium uppercase tracking-wider mb-1 block">
          {project.category}
        </span>
        <h3 className="text-white text-lg sm:text-xl font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {project.title}
        </h3>
      </div>
    </motion.button>
  );
}
