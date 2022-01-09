import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


function Footer({}) {
    return (
        <footer className="App-footer">
          <div className="social-links">
            <p className="footer-text">Check out my Github and Linked In!</p>
            <a 
              href="https://github.com/humkeyg"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielle-humkey-b74729217/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </footer>
    )
};

export default Footer;