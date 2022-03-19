import React from 'react';
import Ritesh from '../images/insta pic.jpg';
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelope,
  FaInstagram
} from 'react-icons/fa';
import closeMobileMenu from "../Nav"

function About() {
  return (
    <div id='about'>
      <div className="aboutmeintro">A short introduction about me</div>
      <div className="About">
        <div className="abouttext">
          <div className="headtext">
            I'm Ritesh Yadav,
            <div>A Software Developer Based In India.</div>
          </div>
          <div className="details">
            I am currently a student at Masai School studying (MERN) Fullstack web Developer. I'm passionate about
            programming and everything technology and have endeavored to be upto
            date with the current technologies and skills.
          </div>
          <div className="more">
            I design and create beautiful and exceptional websites . I dream of working on websites to
            be used by billions of people use and having an impact on the world
            with my work.
          </div>
          <div className="socialsInAbout">
          <ul>
       {/*  <li className="resumes" onClick={closeMobileMenu}>
              {/* <Link to='/blog'>
                <div>Blogs</div>
              </Link> }
            </li> */}
            <li className='round' onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:riteshyad222000@gmail.com"
              >
                <FaEnvelope />{' '}
              </a>
            </li>
            <li  className='round'   onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ritesh-2124"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li  className='round'  onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ritesh-yadav-3749a7202/"
              >
                <FaLinkedin />
              </a>
            </li>
            <li  className='round'  onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/RiteshY30993174"
              >
                <FaTwitterSquare />
              </a>
            </li>
            <li  className='round'  onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/rit___esh___html"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        </div>
        <div className="imageme">
          <img src={Ritesh} alt="Allan" height="300" />
        </div>
      </div>
    </div>
  );
}

export default About;
