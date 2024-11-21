import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';

import location from "../../assets/icons/location.svg";
import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";

export const Header = () => { 
  return (
    <header className="header">
      <div className="header__sotial">

      <div >
        <a
          href="https://www.google.com/maps/place/Kyiv"
          target="_blank"
          rel="noopener noreferrer"
          className='header__subtitle'
        >
          <img src={location} alt="location" />
          Kyiv
        </a>
      </div>

        <a
          href="mailto:masha.shmakova@gmail.com"
          className='header__subtitle'
          rel="noopener noreferrer"
        >
          <img
            src={email}
            alt="email"
          />
          masha.shmakova@gmail.com
        </a>

        <a
          href="tel:+380660372751"
          className='header__subtitle'
        >
        <img src={phone} alt="phone" />
        +380660372751
        </a>
      </div>

      <div className='header__left'>
        <div className='header__title'>
          <Link
          to="/"
          className="header__name"
        >
          MARIA SHMAKOVA
        </Link>
          <p className='header__position'>Web Designer / Frontend Developer</p>
        </div>

        <Link
          to= "bio"
          className="header__link"
        >
          Bio & Resume
        </Link>

      </div>

  </header>
  )
}