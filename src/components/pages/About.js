import React from "react";
import "./About.css";
import Headshot from "../../images/Headshot.jpg";

export default function About() {
  return (
    <>
      <div id="app-modal"/>
      <div className="background">
        <h1 className="about-me-header">About Me</h1>
        <div className="about-me-row">
          
          <div className="col-4">
            <img
              src={Headshot}
              alt="Gabrielle Humkey headshot"
              className="img-headshot"
            />
          </div>
         
          <div className="col-8">
            <p className="about-me-text">
            I am a full stack web developer with a passion for creating polished front end designs and accessible user interfaces. 
            I possess a strong commitment to developing customer friendly and easy to use applications. 
            I am a proactive, agile practicing leader with strong communication and collaboration skills. 
            I am eager to learn and further refine my knowledge in coding languages and structures.
            </p>
          </div>

        </div>

        <a
          className="btn btn-resume btn-warning"
          href="https://docs.google.com/document/d/1FVMCWTkOJGX6Kxr8YnLLrAY15t_RwUy1MJqxF00Zo9Y/edit?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
        
        <a
          href="https://docs.google.com/document/export?format=pdf&id=1FVMCWTkOJGX6Kxr8YnLLrAY15t_RwUy1MJqxF00Zo9Y&includes_info_params=true&usp=sharing"
          download="GabrielleHumkeyResume"
        >
          <i id="img-download" className="fa fa-download btn btn-warning"></i>
        </a>
      </div>

    </>
  );
}
