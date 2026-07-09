import Hero from '../components/Hero';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Reviews from '../components/Reviews';

interface HomePageProps {
  onContactClick: () => void;
}

export default function HomePage({ onContactClick }: HomePageProps) {
  return (
    <div>
      <Hero onContactClick={onContactClick} />
      <Services onContactClick={onContactClick} />
      <Clients />
      <Reviews />
    </div>
  );
}
