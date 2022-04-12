import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => setCurrentPage('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => setCurrentPage('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
        
          onClick={() => setCurrentPage('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      {/* <li className="nav-item">
        <a
          href="#techskills"
        
          onClick={() => setCurrentPage('Techskills')}
          className={currentPage === 'Techskills' ? 'nav-link active' : 'nav-link'}
        >
          Technical Skills
        </a>
      </li> */}
    </ul>
  );
}

export default Navigation;