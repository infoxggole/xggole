import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';

function AppContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation(); // বর্তমান পেজের লোকেশন ট্র্যাক করার জন্য

  // যখনই পেজের লিংক (pathname) চেঞ্জ হবে, স্ক্রল একদম উপরে (0, 0) চলে যাবে
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onContactClick={() => setIsContactOpen(true)} />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
      <Footer onContactClick={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;