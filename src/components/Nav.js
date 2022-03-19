import React, { useState } from 'react';
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelope,
  FaTimes,
  FaBars,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <Link to='/'>
      <div className="logo">{'<Ritesh />'}</div>
      </Link>
      <div className={click ? 'menu active' : 'menu'}>
        <ul className="navvs">
          <li className='hovers' onClick={closeMobileMenu}> <a href='#about'>About</a>  </li>
          <li className='hovers' onClick={closeMobileMenu}><a href='#project'>Projects</a> </li>
          <li className='hovers' onClick={closeMobileMenu}><a href='#bottom' >Contact</a> </li>
          <li className='hovers' onClick={closeMobileMenu}><a  target="_blank" href='https://drive.google.com/file/d/18KG9VPwdGJzP73msH0H-Dgw_srD3Drrr/view?usp=sharing' >Resume</a> </li>
        </ul>
        <div className="socials">
          <ul>
       {/*  <li className="resumes" onClick={closeMobileMenu}>
              {/* <Link to='/blog'>
                <div>Blogs</div>
              </Link> }
            </li> */}
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:riteshyad222000@gmail.com"
              >
                <FaEnvelope />{' '}
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ritesh-2124"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ritesh-yadav-3749a7202/"
              >
                <FaLinkedin />
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/RiteshY30993174"
              >
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Nav;
// menu
