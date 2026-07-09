import { useEffect, useRef, useState } from 'react';
import { X, Play, Wrench, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  videoId: string;
  thumbnail: string;
  tools: string[];
  overview: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ProjectModal({ project, isOpen, onClose, onContactClick }: ProjectModalProps) {
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

  const handleContact = () => {
    onClose();
    onContactClick();
  };

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-xggole-navy/80 backdrop-blur-md"
        onClick={(e) => {
          if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
        }}
      >
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-xggole-blue/10 shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-xggole-navy/50 hover:text-xggole-deep transition-colors bg-white/90 rounded-full p-2 shadow-md"
          >
            <X size={24} />
          </button>

          <button
            onClick={handleContact}
            className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-2 bg-xggole-deep text-white text-sm font-semibold rounded-full hover:bg-xggole-medium transition-colors shadow-md"
          >
            <MessageCircle size={16} />
            Get In Touch
          </button>

          <div className="relative aspect-video w-full bg-xggole-navy rounded-t-2xl overflow-hidden">
            {!isPlaying ? (
              <>
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-xggole-navy/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                  >
                    <Play className="w-8 h-8 text-xggole-deep ml-1" />
                  </button>
                </div>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&rel=0`}
                title={project.title}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>

          <div className="p-8">
            <span className="text-xggole-medium text-sm font-medium uppercase tracking-wider">{project.category}</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-xggole-deep mb-6 mt-1">{project.title}</h2>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-5 h-5 text-xggole-medium" />
                <h3 className="text-lg font-semibold text-xggole-deep uppercase tracking-wide">Tools Used</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-xggole-light text-xggole-deep rounded-lg text-sm border border-xggole-blue/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-xggole-deep uppercase tracking-wide mb-4">Description</h3>
              <p className="text-xggole-navy/70 leading-relaxed">{project.overview}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
