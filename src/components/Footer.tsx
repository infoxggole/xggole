import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">fggole</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Next-gen agency specializing in Cinematic Brand Stories, AI-driven video production, and premium Web/App development.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            {/* once you click here page will go specific section */}
            {/* once you click here page will go specific section or page */}
<li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
<li><a href="/#services" className="hover:text-blue-400 transition-colors">Services</a></li>
<li><a href="/work" className="hover:text-blue-400 transition-colors">Our Work</a></li>
<li><a href="/#reviews" className="hover:text-blue-400 transition-colors">Reviews</a></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Contact Us</h4>
          <div className="space-y-3 text-gray-400 text-sm">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail size={16} className="text-blue-500" />
              <span>contact@fggole.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone size={16} className="text-blue-500" />
              <span>+971 523674519</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin size={16} className="text-blue-500" />
              <span>Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 pt-8 border-t border-zinc-900 text-gray-600 text-xs">
        © {new Date().getFullYear()} Fggole. All rights reserved.
      </div>
    </footer>
  );
}