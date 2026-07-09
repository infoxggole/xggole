import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  asLink?: boolean;
}

export default function Logo({ className = '', asLink = true }: LogoProps) {
  const content = (
    <span className={`inline-flex items-baseline font-bold tracking-wider ${className}`}>
      <motion.span
        className="text-3xl sm:text-4xl text-xggole-deep inline-block"
        animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        X
      </motion.span>
      {/* এখানে ml-0.5 পরিবর্তন করে ml-2 করা হয়েছে গ্যাপ বাড়ানোর জন্য */}
      <span className="text-lg sm:text-xl text-xggole-medium ml-2">GGOLE</span>
    </span>
  );

  if (asLink) {
    return (
      <Link to="/" className="flex-shrink-0">
        {content}
      </Link>
    );
  }

  return content;
}