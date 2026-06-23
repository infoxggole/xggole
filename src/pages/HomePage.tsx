import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';

interface HomePageProps {
  onContactClick: () => void;
}

export default function HomePage({ onContactClick }: HomePageProps) {
  return (
    <div>
      <Hero onContactClick={onContactClick} />
      {/* এখানে প্রপসটি পাস করে দিন */}
      <Services onContactClick={onContactClick} />
      <Reviews />
    </div>
  );
}