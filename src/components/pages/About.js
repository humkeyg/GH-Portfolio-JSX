import React, { useEffect } from "react";
import "./About.css";
import Headshot from "../../images/Headshot.jpg";
import ModalContainer from "../Modal.js";

export default function About() {
  return (
    <>
      <div id="app-modal"/>
      <div className="background">
        <h1 className="about-me-header">About Me</h1>
        <div className="about-me-row">
          <div className="img-container">
            <img
              src={Headshot}
              alt="Gabrielle Humkey headshot"
              className="img-headshot"
            />
          </div>
          <p className="about-me-text">
            I am a new web-developer, eager to master new coding languages. I
            graduated from the University of Washington with a Bachelor in
            Science. I am currently attending the UW Coding Bootcamp for Full
            Stack Web Development. My passion for coding unique solutions drove
            me to make this career shift and pursue frontend development. I put
            considerable effort into creating efficient, accessible,
            user-friendly applications, and it is something I am passionate
            about pursuing more of.
          </p>
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
