import { useEffect, useRef, useState } from 'react';
import { X, Play, Wrench } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  videoId: string;
  thumbnail: string;
  tools: string[];
  overview: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setIsPlaying(false);
  }, [project]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleWatchVideo = () => {
    setIsPlaying(true);
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl animate-scale-in"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors bg-black/50 rounded-full p-2"
        >
          <X size={24} />
        </button>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black rounded-t-2xl overflow-hidden">
          {!isPlaying ? (
            <>
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <button
                  onClick={handleWatchVideo}
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-orange-500/30"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
            </>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&rel=0`}
              title={project.title}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>

        <div className="p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{project.title}</h2>

          {/* Tools & Technologies */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-semibold text-white uppercase tracking-wide">
                Tools & Technologies
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Project Overview */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-4">
              Project Overview
            </h3>
            <p className="text-gray-300 leading-relaxed">{project.overview}</p>
          </div>

          {/* Action Button */}
          {!isPlaying && (
            <button
              onClick={handleWatchVideo}
              className="mt-8 w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch the Video
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
