import React from 'react';
import { Link } from 'react-router-dom';

import location from "../../assets/icons/location.svg";
import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";

export const Header = () => { 
  return (
    <header className="px-4 pt-4 md:px-8">
      <div className="relative text-gray-100 text-sm flex flex-row gap-2 flex-wrap justify-end">
        <a
          href="https://www.google.com/maps/place/Kyiv"
          target="_blank"
          rel="noopener noreferrer"
          className='flex flex-row gap-1'
        >
          <img src={location} alt="location" />
          Kyiv
        </a>

        <a
          href="mailto:masha.shmakova@gmail.com"
          className='flex flex-row gap-1'
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
          className='flex flex-row gap-1'
        >
        <img src={phone} alt="phone" />
        +380660372751
        </a>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='text-4xl text-secondary pt-4'>
          <Link
          to="/"
        >
          MARIA SHMAKOVA
          </Link>
        </div>

        <div className='flex flex-col md:flex-row md:justify-between text-xl font-jura text-gray-100'>
          <p className='text-xl font-jura'>
            Web Designer / Frontend Developer
          </p>

          <Link
            to= "bio"
            className="hover:border-b-1 transition-border duration-100 text-secondary"
          >
            Bio & Resume
          </Link>
         </div>
      </div>
  </header>
  )
}