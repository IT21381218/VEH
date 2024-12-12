import React, { useEffect, useState } from 'react';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Top from './Top';
import './styles/Home.css';

function Home() {
  const [currentSection, setCurrentSection] = useState('top');

  // Handle Scroll
  const handleScroll = () => {
    const sections = ['top', 'about', 'skills', 'contact'];
    let current = null;
    
    sections.forEach((id) => {
      const section = document.getElementById(id);
      const rect = section.getBoundingClientRect();
      
      // Check if the section is in the viewport
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 4) {
        current = id;
      }
    });
    
    if (current !== currentSection) {
      setCurrentSection(current);
    }
  };

  // Scroll to the section when clicked
  const handleClick = (id) => {
    const targetSection = document.getElementById(id);
    window.scrollTo({
      top: targetSection.offsetTop - 60, // Adjust for header height if needed
      behavior: 'smooth',
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="home">
      <video autoPlay loop muted className="background-video">
        <source 
          src="https://res.cloudinary.com/dwcxwpn7q/video/upload/v1733940890/eehanee/1_xuwm2i.mov" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      <section 
        id="top" 
        className={currentSection === 'top' ? 'slide-in' : ''}>
        <Top />
      </section>
      <section 
        id="about" 
        className={currentSection === 'about' ? 'slide-in' : ''}>
        <About />
      </section>
      <section 
        id="skills" 
        className={currentSection === 'skills' ? 'slide-in' : ''}>
        <Skills />
      </section>
      <section 
        id="contact" 
        className={currentSection === 'contact' ? 'slide-in' : ''}>
        <Contact />
      </section>
    </div>
  );
}

export default Home;
