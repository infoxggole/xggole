import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { sendContactEmail } from '../lib/email';
import { X, Loader2, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMsg('');

    try {
      const { error: dbError } = await supabase.from('inquiries').insert([
        { name: formData.name, email: formData.email, message: formData.message },
      ]);

      if (dbError) throw new Error(dbError.message);

      const emailResult = await sendContactEmail(formData);

      if (!emailResult.success) {
        console.warn('Email notification failed:', emailResult.error);
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-xggole-navy/60 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white p-8 rounded-2xl w-full max-w-md border border-xggole-blue/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-xggole-navy/40 hover:text-xggole-deep transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-xggole-deep text-2xl font-bold mb-2">Get In Touch</h2>
            <p className="text-xggole-navy/60 text-sm mb-6">We'd love to hear about your project.</p>

            {status === 'success' ? (
              <div className="flex flex-col items-center py-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <p className="text-xggole-deep font-semibold">Message sent successfully!</p>
                <p className="text-xggole-navy/60 text-sm mt-2">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  className="w-full p-3 bg-xggole-light/50 text-xggole-deep rounded-lg border border-xggole-blue/10 focus:ring-2 focus:ring-xggole-blue/30 outline-none"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  className="w-full p-3 bg-xggole-light/50 text-xggole-deep rounded-lg border border-xggole-blue/10 focus:ring-2 focus:ring-xggole-blue/30 outline-none"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <textarea
                  className="w-full p-3 bg-xggole-light/50 text-xggole-deep rounded-lg border border-xggole-blue/10 focus:ring-2 focus:ring-xggole-blue/30 outline-none resize-none h-28"
                  placeholder="Tell us about your project..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full p-4 bg-xggole-deep rounded-lg text-white font-bold flex justify-center items-center gap-2 hover:bg-xggole-medium transition-colors disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
