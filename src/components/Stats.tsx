import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../config';

interface CounterProps {
  end: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, decimals = 0, suffix = '', prefix = '' }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

const statItems = [
  { label: 'Projects Done', end: STATS.projectsDone, suffix: '+', decimals: 0 },
  { label: 'Client Rating', end: STATS.clientRating, suffix: '/5', decimals: 1 },
  { label: 'Clients', end: STATS.clients, suffix: '+', decimals: 0 },
];

export default function Stats() {
  return (
    <section className="relative z-20 -mt-16 pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white rounded-2xl shadow-xl shadow-xggole-blue/10 border border-xggole-blue/10 p-8 sm:p-10"
        >
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold text-xggole-deep mb-2">
                <Counter end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
              </p>
              <p className="text-sm sm:text-base text-xggole-navy/70 font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
