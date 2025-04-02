// HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MusicSection from '../components/MusicSection';
import TourSection from '../components/TourSection';
import MerchSection from '../components/MerchSection';
import About from '../components/About';
import Contact from '../components/Contact';

export function HomePage() {
  return (
    <div className="bg-white text-black font-sans min-h-screen overflow-x-hidden">
      <Header />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="music" className="px-4 sm:px-6 lg:px-20 py-16">
          <MusicSection />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-20">
          <section id="shows" className="py-16">
            <TourSection />
          </section>

          <section id="merch" className="py-16">
            <MerchSection />
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-20">
          <section id="about" className="py-16">
            <About />
          </section>

          <section id="contact" className="py-16">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;