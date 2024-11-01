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
        Contacts
      </a>
      <a
        href="https://github.com/msdreams"
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rights
      </a>
    </footer>
  );
};