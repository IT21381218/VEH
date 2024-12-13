import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/Timeline.css'; // Custom CSS for styles

function Timeline() {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
  }, []);

  const experiences = [
    { company: 'National Development Bank PLC (NDB Bank)', role: 'Internship at Product Lifecycle Management', date: 'April 2024 - October 2024', logo: 'https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734023279/eehanee/picture_rloqhz.jpg' },
    { company: 'Citizens Development Business Finance PLC', role: 'Customer Service Officer, Deposit Officer, Teller', date: 'December 2019 - August 2021', logo: 'https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734023511/eehanee/images_fgi4f5.png' },
  ];

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">EXPERIENCES</h1>
      <div className="timeline">
        <div className="vertical-line"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="timeline-item"
          >
            <div className="timeline-logo">
              <img src={exp.logo} alt={`${exp.company} logo`} className="logo-image" />
            </div>
            <div className="timeline-details">
              <h2 className="company-name">{exp.company}</h2>
              <h4 className="role-name">{exp.role}</h4>
              <p className="date-range">{exp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
