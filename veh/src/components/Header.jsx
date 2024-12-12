import React from 'react';
import './styles/Header.css';

function Header() {
  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
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
