import React, { useEffect } from 'react';
import './styles/Timeline.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Timeline() {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
  }, []);

  const experiences = [
    { company: 'Citizens Development Business Finance PLC', role: 'Customer Service Officer, Deposit Officer, Teller', date: '2019- 2021', logo: 'https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734023279/eehanee/picture_rloqhz.jpg' },
    { company: 'National Development Bank PLC (NDB Bank )', role: 'Internship at Product Lifecycle Management', date: 'April 2024 - October 2024', logo: 'https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734023511/eehanee/images_fgi4f5.png' },

  ];

  return (
    <div className="timeline">
      <h1 className="timeline-title">Experiences</h1>
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            data-aos="fade-up"
          >
            <div className="timeline-dot">
              <img src={exp.logo} alt={`${exp.company} logo`} />
            </div>
            <div className="timeline-content">
              <h2>{exp.company}</h2>
              <h4>{exp.role}</h4>
              <p>{exp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;