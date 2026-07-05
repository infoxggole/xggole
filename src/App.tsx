import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ScrollToTop from './components/ScrollToTop'; // এই লাইনটি নতুন যোগ হয়েছে

function AppContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onContactClick={openContact} />
      <Routes>
        <Route path="/" element={<HomePage onContactClick={openContact} />} />
        <Route path="/work" element={<WorkPage onContactClick={openContact} />} />
      </Routes>
      <Footer onContactClick={openContact} />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* এটি রাউটারের ভেতরে বসানো হয়েছে */}
      <AppContent />
    </Router>
  );
}

export default App;