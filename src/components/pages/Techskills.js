import React from "react";
import "./Techskills.css";
import { Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <>
      <div className="background">
        <h1 className="techskills-header">Technical Skills</h1>
        <Row className="techskills-row">
          
          <Col className="col">
            
          </Col>
         
          <Col className="col">
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
      </div>

    </>
  );
}
