import React from 'react';
import "./Footer.scss";

export const Footer = () => {

  return (
    <footer className="footer">
      <a
        href="https://github.com/msdreams"
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/mariashmakova"
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linked In
      </a>
      <a
        href="https://www.instagram.com/maria_mariash_"
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </footer>
  );
};