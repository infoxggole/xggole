import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Projects from '../components/Projects'; // ১. এখানে ইমপোর্ট করলেন

interface HomePageProps {
  onContactClick: () => void;
}

export default function HomePage({ onContactClick }: HomePageProps) {
  return (
    <div>
      <Hero onContactClick={onContactClick} />
      
      {/* Services এর সাথে onContactClick পাস করা হয়েছে */}
      <Services onContactClick={onContactClick} />
      
      {/* ২. এখানে প্রজেক্ট সেকশনটি বসালেন */}
      <Projects />
      
      <Reviews />
    </div>
  );
}