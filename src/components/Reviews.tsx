import { useState, useEffect } from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';
import ReviewModal from './ReviewModal';

interface Review {
  id: string;
  name: string;
  rating: number;
  message: string;
  created_at: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('review')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (err) {
      console.error('Error fetching reviews:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-blue-400 fill-blue-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  const handleModalClose = () => {
    setIsReviewModalOpen(false);
    fetchReviews();
  };

  return (
    <section id="reviews" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-blue-400 via-white to-blue-200 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Here's what our valued clients have to say about our work.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <Quote className="w-8 h-8 text-blue-500/20 mb-3" />
                <p className="text-gray-300 mb-4 text-sm leading-relaxed min-h-[80px]">{review.message}</p>
                <div className="flex items-center gap-1 mb-4">{renderStars(review.rating)}</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-blue-400 text-xs font-medium">Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsReviewModalOpen(true)}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center gap-2 text-sm"
          >
            <MessageSquare size={18} />
            Write a Review
          </button>
        </div>

        <ReviewModal
          isOpen={isReviewModalOpen}
          onClose={handleModalClose}
        />
      </div>
    </section>
  );
}