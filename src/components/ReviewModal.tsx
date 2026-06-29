import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { X, Loader2, MessageSquare, Star } from 'lucide-react';

export default function ReviewModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5); // default 5 star
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('review').insert([
        { 
          name, 
          rating, 
          message ,
        }
      ]);

      if (error) throw error;

      alert("Thank you so much for your review!");
      setName('');
      setMessage('');
      setRating(5);
      onClose(); 
    } catch (err) {
      console.error("Database Error:", err);
      alert("There is was an error submitting your review.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md border border-zinc-800 shadow-2xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <h2 className="text-white text-2xl font-bold mb-6">Share your feedback</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            className="w-full p-3 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" 
            placeholder="Your Name" 
            required 
            onChange={e => setName(e.target.value)} 
            value={name} 
          />
          
          {/* new star reating system*/}
          <div className="flex gap-2 items-center">
            <span className="text-gray-400 mr-2">your ratting:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-8 h-8 cursor-pointer transition-colors ${
                  star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>

         <textarea 
  className="w-full p-3 !bg-zinc-800 !text-white rounded-lg h-32 focus:ring-2 focus:ring-amber-500 outline-none resize-none" 
  placeholder="Write your feedback..." 
  required 
  onChange={e => setMessage(e.target.value)} 
  value={message} 
/>
          
          <button 
            type="Submit" 
            disabled={loading} 
            className="w-full p-4 bg-amber-500 rounded-lg text-white font-bold flex justify-center items-center gap-2 hover:bg-amber-600 transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : <MessageSquare size={20} />}
            {loading ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </div>
  );
}