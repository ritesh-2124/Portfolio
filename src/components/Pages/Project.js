import React from 'react'
import movies from '../images/himalya.png';
import Gymshark from '../images/gymshark.png';
import Weather from '../images/weather.png';
import Github from '../images/github.png'
import BottomAbout from '../BottomAbout'
import {FaGithub} from 'react-icons/fa'

function Project() {
    return (
        <div id='project'>
            <div className="Project">
            <div className="head">
                My Projects
                <div className="projectsIntro">
                    <div>Here are some of the projects that I have done</div>
                </div>
            </div>
            <div className="container">
                <div className="projs">
                    <div className="img">
                        <img src={movies} alt="movies" />
                    </div>
                    <div className="title">
                        Himalaya
                    </div>
                    <div className="projinfo">
                    A web application that deals with the sale of various
Himalaya company products.
                    </div>
                    <div className='live_git'>
 <div className="projlinks">
                        <a href="https://himalayacwproject.netlify.app/"  target="_blank">Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/ritesh-2124/Himalaya-clone"  target="_blank">Source Code</a>
                    </div>

                    </div>
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={Gymshark} alt="gymshark"/>
                    </div>
                    <div className="title">
                        GymShark.com-clone
                    </div>
                    <div className="projinfo">
                    A web application where one can purchase a wide range of gym-related products.
                    </div>
                    <div className='live_git'>
                   <div className="links">
                    <a href="https://gymshark-team-shark.vercel.app" target='_blank' rel="noreferrer">Live</a>
                    </div>
                    <div className="links">
                    <a href="https://github.com/Aniket-Pilankar/Gymshark_FRONTEND_Unit4" target='_blank' rel="noreferrer">Source Code</a>
                    </div>

                    </div>
                    
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={Weather} alt="weather" />
                    </div>
                    <div className="title">Weather App</div>
                    <div className="projinfo">
                       A website which forecast weather for next seven days.
                    </div>
                  <div className='live_git'>
                      <div className="links">
                        <a href="https://objective-pare-84f415.netlify.app/" target='blank' rel="weather">Live</a>
                    </div>
                    <div className="links">
                        <a href="https://github.com/ritesh-2124/weather-app-" target='blank' rel="weather">Source Code</a>
                    </div> 
                  </div>
                   
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={Github} alt="github" />
                    </div>
                    <div className="title">
                        Github-Clone
                    </div>
                    <div className="projinfo">
                        A github clone where you can search any one by using github API.
                    </div>
                  <div className='live_git'>
                  <div className="links">
                        <a href="https://minigithubmasai.netlify.app/"  target="_blank">Live</a>  
                    </div>
                    <div className="links">
                        <a href="https://github.com/ritesh-2124/github-clone"  target="_blank">Source Code</a>  
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className="moreprojs">
                <div>For more You can view my github</div>
                <div><a href="https://github.com/Ritesh-2124"  target="_blank"><FaGithub /> Github</a></div>
            </div>
            <BottomAbout/>
        </div> 
        </div>
       
    )
}

export default Project
