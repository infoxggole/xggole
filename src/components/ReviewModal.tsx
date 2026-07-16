import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { X, Loader2, MessageSquare, Star } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('reviews').insert([
        { 
          name, 
          email, 
          rating, 
          message,
        }
      ]);

      if (error) throw error;

      alert("Thank you so much for your review!");
      setName('');
      setEmail('');
      setMessage('');
      setRating(5);
      onClose(); 
    } catch (err) {
      console.error("Database Error:", err);
      alert("There was an error submitting your review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="relative bg-zinc-900 p-8 rounded-2xl w-full max-w-md border border-zinc-800 shadow-2xl" 
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-white text-2xl font-bold mb-6">Share your feedback</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input 
            className="w-full p-3 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-zinc-700/50 transition-all" 
            placeholder="Your Name" 
            required 
            onChange={e => setName(e.target.value)} 
            value={name} 
          />
          
          {/* Email Input */}
          <input 
            type="email"
            className="w-full p-3 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-zinc-700/50 transition-all" 
            placeholder="Your Email (for profile photo)" 
            required 
            onChange={e => setEmail(e.target.value)} 
            value={email} 
          />
          
          {/* Star Rating Section */}
          <div className="flex gap-2 items-center">
            <span className="text-gray-400 mr-2 text-sm">Your Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-7 h-7 cursor-pointer transition-all hover:scale-110 ${
                  star <= rating ? 'text-blue-400 fill-blue-400' : 'text-gray-600'
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>

          {/* Feedback Textarea */}
          <textarea 
            className="w-full p-3 bg-zinc-800 text-white rounded-lg h-32 focus:ring-2 focus:ring-blue-500 outline-none resize-none border border-zinc-700/50 transition-all" 
            placeholder="Write your feedback..." 
            required 
            onChange={e => setMessage(e.target.value)} 
            value={message} 
          />
          
          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading} 
            className="w-full p-4 bg-blue-600 rounded-lg text-white font-bold flex justify-center items-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:hover:bg-blue-600"
          >
            {loading ? <Loader2 className="animate-spin" /> : <MessageSquare size={20} />}
            {loading ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </div>
  );
}