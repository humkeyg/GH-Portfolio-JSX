import React from 'react';
import './Projects.css';
import Horiseon from '../../images/Working Horiseon Homepage.png';
import Notetaker from '../../images/noteTaker.PNG';
import Regex from '../../images/Regex.png';
import Moodsic from '../../images/moodsic.png';
import Careercone from '../../images/careerCone.PNG';
import Placeholder from '../../images/placeholder.jpg';

export default function Projects() {
  return (
    <div>
      <h2 id="header-work" className="work-header">Work</h2>
      <div className="work-background" id="work-background">

        <section className="container-fluid" id="code-refactor">
          <h3 id="sub-header-code-refactors" className="sub-header">Code Refactors</h3>
            <div className="code-refactor-grid" id="code-refactor-grid"></div>
              <div className="row">

                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img" src={Horiseon} alt="Horiseon Homepage"/>
                    <div className="card-body">
                      <p className="card-text">A refactor of broken HTML and CSS organization <br/>
                      <a href="https://humkeyg.github.io/01-HMTL-Git-CSS-Homework/" className="card-link">Horiseon Homepage</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img" src={Notetaker} alt="Note Taker Homepage"/>
                    <div className="card-body">
                      <p className="card-text">An Express.js application utilizing POST & GET requests</p>
                      <a href="https://humkeyg.github.io/Week11HW/" className="card-link">Note Taker application</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img" src={Regex} alt="Regex tutorial image"/>
                    <div className="card-body">
                      <p className="card-text">A Github gist page explaining the functionality of an email Regex</p>
                      <a href="https://github.com/humkeyg/Regex-Tutorial" className="card-link">Regex Tutorial</a>
                    </div>
                  </div>
                </div>

              </div>
        </section>

        <section className="container-fluid" id="projects">
          <h4 id="sub-header-projects" className="sub-header">Projects</h4>
            <div className="projects-grid" id="projects-grid"></div>
            <div className="row">

              <div className="col-md-4">
                <div className="card">
                  <img className="card-img" src={Moodsic} alt="Moodsic Homepage"/>
                  <div className="card-body">
                    <p className="card-text">A music listening application using the Spotify API</p>
                    <a href="https://k-kelsey.github.io/GroupProject1/" className="card-link">Moodsic application</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img className="card-img" src={Careercone} alt="Career Cone Homepage"/>
                  <div className="card-body">
                    <p className="card-text">A job search management application using the MVC paradigm</p>
                    <a href="https://careerconeproject.herokuapp.com/" className="card-link">Career Cone application</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img className="card-img" src={Placeholder} alt="coming "/>
                  <div className="card-body">
                    <p className="card-text">Coming soon</p>
                    <a href="#" className="card-link"></a>
                  </div>
                </div>
              </div>

            </div>
        </section>
      </div>
    </div>
  );
}