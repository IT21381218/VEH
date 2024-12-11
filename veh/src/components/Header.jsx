import React from 'react';
import './styles/Header.css';

function Header() {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
        <li onClick={() => handleScroll('top')}>Top</li>
          <li onClick={() => handleScroll('about')}>About</li>
          <li onClick={() => handleScroll('skills')}>Skills</li>
          <li onClick={() => handleScroll('contact')}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
