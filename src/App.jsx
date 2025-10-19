import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Collection from './components/Collection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-pink-500/40 selection:text-white">
      <Hero />
      <Features />
      <Collection />
      <Footer />
    </div>
  );
}
