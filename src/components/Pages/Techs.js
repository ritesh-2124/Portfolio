import React from 'react';
import { Div } from '../docs/TechsIcon';
// import { FaAngleRight } from 'react-icons/fa';

function Techs() {
  return (
    <div className="Tech">
      <div className="techstacks">
        <div className="intro">
          Here are a few technologies that I've been working with
        </div>
        <div className="techs">
         <div id='techsIcon'>
         
          <Div img="https://cdn.svgporn.com/logos/html-5.svg" />
          <Div img="https://cdn.svgporn.com/logos/css-3.svg" /> 
          <Div img="https://cdn.svgporn.com/logos/javascript.svg" />
          <Div img="https://cdn.svgporn.com/logos/react.svg" />
          <Div img="https://cdn.svgporn.com/logos/nodejs.svg" />
          <Div img="https://cdn.svgporn.com/logos/express.svg" />
          <Div img="https://cdn.svgporn.com/logos/redux.svg" />
          <Div img="https://cdn.svgporn.com/logos/mongodb.svg" />
          

         </div>
        </div>
      </div>
    </div>
  );
}

export default Techs;
