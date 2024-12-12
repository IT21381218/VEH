import React from 'react';
import './styles/Header.css';

function Header() {
  const handleClick = (id) => {
    const targetSection = document.getElementById(id);
    window.scrollTo({
      top: targetSection.offsetTop - 0, // Adjust for header height if needed
      behavior: 'smooth',
    });
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li onClick={() => handleClick('top')}>Top</li>
          <li onClick={() => handleClick('about')}>About</li>
          <li onClick={() => handleClick('skills')}>Skills</li>
          <li onClick={() => handleClick('contact')}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
