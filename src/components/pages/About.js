import React from 'react';
import './About.css';
import Headshot from '../../images/Headshot.jpg';
import Resume from '../../images/resume.jpg';

export default function About() {
  return (
    <div className="background">
      <h1 className="about-me-header">About Me</h1>
      <div className="about-me-row">
        <img src={Headshot} alt="Gabrielle Humkey headshot" className="img-headshot"/>
        <p className="about-me-text">
        I am a new web-developer, eager to master new coding languages. 
        I graduated from the University of Washington with a Bachelor in Science. 
        I am currently attending the UW Coding Bootcamp for Full Stack Web Development. 
        My passion for coding unique solutions drove me to make this career shift and pursue frontend development. 
        I put considerable effort into creating efficient, accessible, user-friendly applications, 
        and it is something I am passionate about pursuing more of.
        </p>

      </div>

      <button className="btn">Resume</button>

      <div className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <img src={Resume} alt="resume file" className='img-resume'/>
        </div>
      </div>
      
      <a href="Assets/GabrielleHumkeyResume.pdf" download="GabrielleHumkeyResume">
        <button className="btn"><i id="img-download" class="fa fa-download"></i></button>
      </a>
    </div>
    
  );
}