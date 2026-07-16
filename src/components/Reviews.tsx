import { useState, useEffect } from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';
import ReviewModal from './ReviewModal';
import ReviewsListModal from './ReviewsListModal'; // নতুন ফাইলটি ইমপোর্ট করলাম
import md5 from 'md5';

interface Review {
  id: string;
  name: string;
  email: string;
  rating: number;
  message: string;
  created_at: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isListModalOpen, setIsListModalOpen] = useState(false); // নতুন স্টেট

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews') 
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

  const getGravatarUrl = (email: string) => {
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=100`;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={`star-${i}`}
        className={`w-4 h-4 ${
          i < rating ? 'text-blue-400 fill-blue-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-blue-400 via-white to-blue-200 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Here's what our valued clients have to say about their experience with XGGOLE.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {reviews.length === 0 ? (
              <div className="text-center py-12 col-span-1 sm:col-span-2 border border-zinc-800/50 rounded-2xl bg-zinc-900/10">
                <p className="text-gray-500 text-sm">No reviews yet. Be the first to share your experience!</p>
              </div>
            ) : (
              // শুধুমাত্র প্রথম ৪টি রিভিউ এখানে দেখাচ্ছি
              reviews.slice(0, 4).map((review) => (
                <div key={review.id} className="group p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between">
                  <div>
                    <Quote className="w-6 h-6 text-blue-500/20 mb-2" />
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-4">{review.message}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-3">{renderStars(review.rating)}</div>
                    <div className="flex items-center gap-3">
                      <img src={getGravatarUrl(review.email)} alt={review.name} className="w-8 h-8 rounded-full shadow-lg border border-zinc-700" loading="lazy" />
                      <div>
                        <p className="text-white font-semibold text-xs">{review.name}</p>
                        <p className="text-blue-400 text-[10px] font-medium">Verified Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        <div className="flex justify-center mt-12 gap-4">
          {/* View All বাটন */}
          {reviews.length > 4 && (
            <button
              onClick={() => setIsListModalOpen(true)}
              className="px-6 py-3 bg-zinc-800 text-white font-semibold rounded-lg hover:bg-zinc-700 transition-colors shadow-lg text-sm"
            >
              View All Reviews
            </button>
          )}
          <button
            onClick={() => setIsWriteModalOpen(true)}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center gap-2 text-sm"
          >
            <MessageSquare size={18} />
            Write a Review
          </button>
        </div>

        {/* মোডালস */}
        <ReviewModal isOpen={isWriteModalOpen} onClose={() => { setIsWriteModalOpen(false); fetchReviews(); }} />
        <ReviewsListModal isOpen={isListModalOpen} onClose={() => setIsListModalOpen(false)} reviews={reviews} />
      </div>
    </section>
  );
}