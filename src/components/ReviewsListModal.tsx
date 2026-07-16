import { X, Star } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  email: string;
  rating: number;
  message: string;
}

interface ListModalProps {
  isOpen: boolean;
  onClose: () => void;
  reviews: Review[];
}

export default function ReviewsListModal({ isOpen, onClose, reviews }: ListModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative bg-zinc-900 p-6 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto border border-zinc-800 shadow-2xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><X size={24} /></button>
        
        <h2 className="text-white text-2xl font-bold mb-6">All Reviews</h2>
        
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-semibold text-sm">{review.name}</span>
                <div className="flex">{Array.from({ length: 5 }, (_, i) => <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-blue-400 fill-blue-400' : 'text-gray-600'}`} />)}</div>
              </div>
              <p className="text-gray-400 text-sm">{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}