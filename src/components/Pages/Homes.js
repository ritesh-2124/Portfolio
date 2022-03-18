import React from 'react'
import Home from './Home';
import About from './About';
import Project from './Project';
import Techs from './Techs';
// import Contect from "./Contact" 


function Homes() {
  return (
    <div>
        <Home />
        <About />
        <Techs />
        <Project />
        {/* <Contect/> */}
    </div>
  )
}

export default Homes