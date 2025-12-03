import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Timings from './components/Timings';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-academy-dark text-stone-200">
      <Navbar />
      <main>
        <Hero />
        {/* About section removed as requested */}
        <Programs />
        <Timings />
        <Instructors />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;