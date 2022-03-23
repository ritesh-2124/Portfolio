import React from 'react';
import Hello from '../images/undraw_Hello_re_3evm.svg';
// import resume from '../docs/resumee.pdf';
function Home() {
  return (
    <div id='Homeid' className="home">
      <div className="main">
        <div className="intro">
          <div className="text">Hi I'm Ritesh Yadav</div>
        </div>
        <div className="intro2">
          <div className="text">Web Developer</div>
        </div>
        <div id='resumesec'>
           <div className="button">
          <a href="#bottom">Get In Touch</a>
        </div>
        <div className="button">
          <a href="https://drive.google.com/drive/u/1/folders/1HR9afslsZB1nPoq-r9v5dyAM2GhuJmES"  target="_blank">Resume</a>
        </div>
        </div>
       
      </div>
      <img className="image" src={Hello} alt="Hello" />
    </div>
  );
}

export default Home;
