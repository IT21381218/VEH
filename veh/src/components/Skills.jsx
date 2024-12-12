import React, { useEffect, useRef } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython , FaJava,FaNodeJs,FaGithub,FaFigma  } from 'react-icons/fa';
import { SiMongodb, SiPostman  } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import './styles/Skills.css';

function Skills() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', onWheel);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', onWheel);
      }
    };
  }, []);

  return (
    <div className="skills">
      <div className="skill-box">
        <h1>My Skills</h1>
        <div className="skills-list" ref={scrollRef}>
          <div className="skill-item">
            <FaReact className="skill-icon react" />
            <span>React.js</span>
          </div>
          <div className="skill-item">
            <FaJsSquare className="skill-icon javascript" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon css" />
            <span>CSS</span>
          </div>
          <div className="skill-item">
            <FaHtml5 className="skill-icon html" />
            <span>HTML</span>
          </div>
          <div className="skill-item">
            <FaPython className="skill-icon html" />
            <span>Python</span>
          </div>
          <div className="skill-item">
            <FaJava  className="skill-icon html" />
            <span>Java</span>
          </div>
          <div className="skill-item">
            <FaNodeJs  className="skill-icon html" />
            <span>NodeJS</span>
          </div>
          <div className="skill-item">
            <FaGithub  className="skill-icon html" />
            <span>Github</span>
          </div>
          <div className="skill-item">
            <SiMongodb className="skill-icon html" />
            <span>Mongodb</span>
          </div>
          <div className="skill-item">
            <IoLogoFirebase className="skill-icon html" />
            <span>Firebase</span>
          </div>
          <div className="skill-item">
            <FaFigma  className="skill-icon html" />
            <span>Figma</span>
          </div>
          <div className="skill-item">
            <SiPostman  className="skill-icon html" />
            <span>Postman</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
