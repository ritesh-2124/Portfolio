import React from 'react';
import Ritesh from '../images/insta pic.jpg';

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
        </div>
        <div className="imageme">
          <img src={Ritesh} alt="Allan" height="300" />
        </div>
      </div>
    </div>
  );
}

export default About;
