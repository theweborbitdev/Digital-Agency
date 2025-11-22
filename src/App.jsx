import React, { useEffect, useState } from 'react';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/Herosection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import ProjectsSection from './components/ProjectSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import StatsSection from './components/StatsSection.jsx';
import BlogSection from './components/BlogSection.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide spinner after 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;  // Show spinner first
  }

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <TestimonialsSection />
      <StatsSection />
      <BlogSection />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
