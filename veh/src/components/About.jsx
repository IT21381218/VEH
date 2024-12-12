import React, { useEffect, useRef } from 'react';
import './styles/About.css';

function About() {
  const aboutContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutContentRef.current.classList.add('visible');
          } else {
            aboutContentRef.current.classList.remove('visible');
          }
        });
      },
      { threshold: 0.5 } // Trigger the animation when 50% of the content is visible
    );

    if (aboutContentRef.current) {
      observer.observe(aboutContentRef.current);
    }

    return () => {
      if (aboutContentRef.current) {
        observer.unobserve(aboutContentRef.current);
      }
    };
  }, []);

  return (
    <div className="about">
      <div className="about-content" ref={aboutContentRef}>
        <div className="about-image">
          <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1733945742/eehanee/20231111_133032_mqdz8r.jpg" alt="About Me" />
        </div>
        <div className="about-description">
          <h1>About Me</h1>
          <p>I'm an undergraduate at the Sri Lanka Institute
of Information Technology (SLIIT) who is
enthusiastic, self-motivated, reliable,
responsible, and hardworking with a solid
foundation in programming languages. I am
seeking for a challenging role to apply my
technical expertise and contribute to the
innovation and efficiency of the organization.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
