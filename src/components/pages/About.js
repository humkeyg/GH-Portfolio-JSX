import React from "react";
import "./About.css";
import Headshot from "../../images/Headshot.jpg";
import { Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <>
      <div id="app-modal"/>
      <div className="background">
        <h1 className="about-me-header">About Me</h1>
        <Row className="about-me-row">
          
          <Col className="col-4">
            <img
              src={Headshot}
              alt="Gabrielle Humkey headshot"
              className="img-headshot"
            />
          </Col>
         
          <Col className="col-8">
            <div className="text-background">
              <p className="about-me-text">
              Full stack web developer with a passion for creating polished front end designs and accessible user interfaces. 
              Strong commitment to developing customer friendly and easy to use applications. 
              Proactive, agile practicing leader with strong communication and collaboration skills.
              <br/> 
              I have had the unique experience of completing a psychology degree and 
              developing fluid social skills through leading staff members and working with children, 
              but now wish to pivot in my career trajectory. 
              As a result, I opted to enroll and successfully complete the UW Coding Bootcamp and 
              wish to continue refining my knowledge in the coding world. 
              </p>
            </div>
          </Col>

        </Row>

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
