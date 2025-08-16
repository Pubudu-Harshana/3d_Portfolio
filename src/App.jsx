import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      {/* Temporarily disable Hero to test other components */}
      {/* <Hero /> */}
      <div className="min-h-screen flex items-center justify-center bg-primary text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Portfolio Coming Soon</h1>
          <p className="text-xl">3D components temporarily disabled for debugging</p>
        </div>
      </div>
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
