import React, { useEffect, useRef } from "react"; // Import useEffect here
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import './styles/Projects.css';

const SECTION_HEIGHT = 1500;

const Projects = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-container">
      <HomeNavigation />
      <Hero />
      <ProjectsDetails />
    </div>
  );
};

const HomeNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="home-navigation" onClick={() => navigate("/")}>
      Home
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero-section">
      <CenterImage />
      <ParallaxImages />
      <div className="gradient-overlay" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="center-image"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="parallax-images">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Space launch"
        start={0}
        end={200}
        className="parallax-img img-left"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Spacecraft"
        start={200}
        end={-250}
        className="parallax-img img-center"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Satellite"
        start={-200}
        end={200}
        className="parallax-img img-right"
      />
      
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const ProjectsDetails = () => {
  const projects = [
    {
      title: "Project One",
      description: "A detailed overview of the first project.",
      image: "https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80",
      link: "https://example.com/project-one",
    },
    {
      title: "Project Two",
      description: "Highlights the second project's features.",
      image: "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80",
      link: "https://example.com/project-two",
    },
    {
      title: "Project Three",
      description: "Details about the technologies and outcomes.",
      image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80",
      link: "https://example.com/project-three",
    },
  ];

  return (
    <div className="projects-details">
      {projects.map((project, index) => (
        <motion.div
          className="project-card"
          key={index}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.5)" }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <motion.button
              className="project-link-button"
              whileHover={{ scale: 1.1, backgroundColor: "#5aafff" }}
              transition={{ duration: 0.3 }}
            >
              Visit Project
            </motion.button>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
