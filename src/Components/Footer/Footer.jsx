import React from 'react';
import "./Footer.scss";

export const Footer = () => {

  return (
    <footer className="flex flex-row justify-around items-center text-lg text-gray-100 font-jura px-4 md:px-8 h-[80px]">
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