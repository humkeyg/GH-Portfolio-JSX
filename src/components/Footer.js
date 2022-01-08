import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-solid-svg-icons'

function Footer({}) {
    return (
        <footer className="App-footer">
          <div className="social-links">
            <p className="footer-text">Check out my Github and Linked In!</p>
            <a href="https://github.com/humkeyg">
            <FontAwesomeIcon icon={'fab', 'faGithub'} />
            </a>
            <a href="https://www.linkedin.com/in/gabrielle-humkey-b74729217/">
            <FontAwesomeIcon icon={'fab', 'faLinkedin'} />
            </a>
          </div>
        </footer>
    )
};

export default Footer;