import { motion } from 'framer-motion';
import { CLIENTS } from '../config';

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Clients</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Trusted by forward-thinking brands across the globe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              /* এখানে শুধু কার্ডের ব্যাকগ্রাউন্ডে একটি হালকা শেড (zinc-900) দেয়া হয়েছে */
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-zinc-900/50 border-none shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg">
                {client.initials}
              </div>
              <span className="text-lg font-medium text-white text-center">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}