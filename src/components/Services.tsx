import { Code, Smartphone, Globe, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const developmentServices = [
  { icon: Globe, title: 'Website Development', description: 'Responsive and fast websites with a premium digital presence.' },
  { icon: Code, title: 'Web App Development', description: 'Scalable web applications built with modern, robust technology.' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Intuitive mobile interfaces that engage and retain users.' },
  { icon: Palette, title: 'Corporate Identity Suite', description: 'Complete brand systems that communicate your unique value.' },
];

// অ্যানিমেশন সেটিংস
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function Services({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 via-white to-blue-200 bg-clip-text text-transparent">Services</span>
          </h2>
        </div>

        <ServiceCategory 
          title="Digital Development"
          description="We build robust, scalable, and intuitive digital solutions."
          bgImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
          services={developmentServices}
          onContactClick={onContactClick}
        />
      </div>
    </section>
  );
}

function ServiceCategory({ title, description, bgImage, services, onContactClick }: { title: string, description: string, bgImage: string, services: any[], onContactClick: () => void }) {
  return (
    <div className="relative mb-20 rounded-3xl overflow-hidden border border-zinc-800">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      <div className="relative p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-4">{title}</h3>
        <p className="text-gray-300 max-w-3xl mb-10 leading-relaxed">{description}</p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 ${services.length > 3 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-6`}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} onContactClick={onContactClick} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function ServiceCard({ service, onContactClick }: { service: any, onContactClick: () => void }) {
  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ 
        y: -10, 
        scale: 1.02, 
        transition: { type: "spring", stiffness: 400, damping: 25 } 
      }}
      className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-700/50 hover:border-blue-500/50 transition-colors duration-300 flex flex-col h-full backdrop-blur-md"
    >
      <div className="flex-grow">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
          <service.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.description}</p>
      </div>

      <button 
        onClick={onContactClick}
        className="w-full py-2.5 rounded-xl border border-blue-500/30 bg-blue-500/5 text-white font-medium hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
      >
        Get in Touch
      </button>
    </motion.div>
  );
}