import React, { useRef } from 'react';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Top from './Top';
import './styles/Home.css';

function Home() {
  return (
    <div className="home">

<video autoPlay loop muted className="background-video">
        <source 
          src="https://res.cloudinary.com/dwcxwpn7q/video/upload/v1733940890/eehanee/1_xuwm2i.mov" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      <section id="top">
        <Top />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
