import React from 'react';
import Button from './Button';
import Container from './Container';

const Footer = () => {
  return (
    <footer className='bg-blue-950 py-14 px-6'>
      <Container classes='flex flex-col md:flex-row gap-18  items-center md:items-stretch'>
        <div className='flex flex-col gap-6 justify-between'>
          <a href="#">
            <img src="/images/logo-light.svg" />
          </a>
          <ul className='flex gap-4 links'>
            <li>
              <a href="#none">
                <img src="/images/icon-facebook.svg" />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src="/images/icon-youtube.svg" />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src="/images/icon-twitter.svg" />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src="/images/icon-pinterest.svg" />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src="/images/icon-instagram.svg" />
              </a>
            </li>
          </ul>
        </div>
        <div className='flex text-center md:text-left flex-col md:flex-row gap-8 text-gray-50'>
          <ul className='flex flex-col gap-4 links'>
            <li>
              <a href="#none"> About Us </a>
            </li>
            <li>
              <a href="#none"> Contact </a>
            </li>
            <li>
              <a href="#none"> Blog </a>
            </li>
          </ul>
          <ul className='flex flex-col gap-4 links'>
            <li>
              <a href="#none"> Careers </a>
            </li>
            <li>
              <a href="#none"> Support </a>
            </li>
            <li>
              <a href="#none"> Privacy Policy </a>
            </li>
          </ul>
        </div>
        <div className='md:ml-auto flex flex-col items-center  md:items-end gap-4 '>
          <Button>Request Invite</Button>
          <p className='text-gray-600'> &copy; Digitalbank. All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
