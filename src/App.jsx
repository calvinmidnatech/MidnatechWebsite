import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import WhatWeBuild from './components/WhatWeBuild';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhoWeAre />
      <WhatWeBuild />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

