import React from 'react';

function Footer({}) {
    return (
        <footer className="App-footer">
          <div className="social-links">
            <p className="footer-text">Check out my Github and Linked In!</p>
            <a href="https://github.com/humkeyg">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/gabrielle-humkey-b74729217/">
            <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </footer>
    )
};

export default Footer;