import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { X, Loader2, Send } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ১. ডাটাবেসে সেভ করা
      await supabase.from('inquiries').insert([
        { name: formData.name, email: formData.email, message: formData.message }
      ]);

      // ২. আপনার কাছে নোটিফিকেশন পাঠানো
      await supabase.functions.invoke('send-email', {
        body: {
          to: 'mirajulhossain143@gmail.com', // আপনার ইমেইল
          subject: `New Inquiry from ${formData.name}`,
          html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>`
        }
      });

      // ৩. ক্লায়েন্টকে অটো-রিপ্লাই পাঠানো
      await supabase.functions.invoke('send-email', {
        body: {
          to: formData.email,
          subject: "Thank you for contacting XGGOLE",
          html: `<p>Hi ${formData.name}, thanks for reaching out! We've received your message and will get back to you soon.</p>`
        }
      });

      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      onClose();
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md border border-zinc-800" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X size={24} /></button>
        <h2 className="text-white text-2xl font-bold mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-3 bg-zinc-800 text-white rounded-lg" placeholder="Name" required onChange={e => setFormData({...formData, name: e.target.value})} value={formData.name} />
          <input className="w-full p-3 bg-zinc-800 text-white rounded-lg" type="email" placeholder="Email" required onChange={e => setFormData({...formData, email: e.target.value})} value={formData.email} />
          <textarea className="w-full p-3 bg-zinc-800 text-white rounded-lg" placeholder="Message" required onChange={e => setFormData({...formData, message: e.target.value})} value={formData.message} />
          <button type="submit" disabled={loading} className="w-full p-4 bg-amber-500 rounded-lg text-white font-bold flex justify-center items-center gap-2">
            {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}