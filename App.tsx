import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Specialization from './components/Specialization';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-midna-dark selection:bg-midna-accent selection:text-white">
      <Navbar scrolled={scrollY > 50} />
      <main>
        <Hero />
        <WhoWeAre scrollY={scrollY} />
        <Specialization />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;