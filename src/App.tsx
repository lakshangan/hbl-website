import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Prizes } from './components/Prizes';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { Sponsors } from './components/Sponsors';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Team />
      <Footer />
    </div>
  );
}

export default App;