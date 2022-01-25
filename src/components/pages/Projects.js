import React from 'react';
import './Projects.css';
import Horiseon from '../../images/Working Horiseon Homepage.png';
import Notetaker from '../../images/noteTaker.PNG';
import Regex from '../../images/Regex.png';
import Moodsic from '../../images/moodsic.png';
import Careercone from '../../images/careerCone.PNG';
import Placeholder from '../../images/placeholder.jpg';
import Redux from '../../images/redux-store.gif';
import Workday from '../../images/workday-scheduler.jpg';
import Password from '../../images/password-generator.png';
import Employee from '../../images/employee-tracker.jpg';
import Team from '../../images/team-profile-generator.jpg';
import Blog from '../../images/the-tech-blog.jpg';
import Weather from '../../images/team-profile-generator.jpg';



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
                    <div className="card-body align-items-center d-flex justify-content-center">
                      <p className="card-text">A refactor of broken HTML and CSS organization <br/>
                      <a target="_blank" href="https://humkeyg.github.io/01-HMTL-Git-CSS-Homework/" className="card-link">Horiseon Homepage</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img" src={Notetaker} alt="Note Taker Homepage"/>
                    <div className="card-body align-items-center d-flex justify-content-center">
                      <p className="card-text">An Express.js application utilizing POST & GET requests<br/>
                      <a target="_blank" href="https://humkeyg.github.io/Note-Taker/" className="card-link">Note Taker application</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img" src={Regex} alt="Regex tutorial image"/>
                    <div className="card-body align-items-center d-flex justify-content-center">
                      <p className="card-text">A Github gist page explaining the functionality of an email Regex<br/>
                      <a target="_blank" href="https://github.com/humkeyg/Regex-Tutorial" className="card-link">Regex Tutorial application</a>
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row">

                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img" src={Redux} alt="Redux-Store image"/>
                    <div className="card-body align-items-center d-flex justify-content-center">
                      <p className="card-text">A code refactor of an e-commerce back-end.<br/>
                      <a target="_blank" href="https://mighty-river-91299.herokuapp.com/" className="card-link">Redux-Store application</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img" src={Workday} alt="Workday Scheduler image"/>
                    <div className="card-body align-items-center d-flex justify-content-center">
                      <p className="card-text">A real-time JS application for scheduling the current workday<br/>
                      <a target="_blank" href="https://humkeyg.github.io/Work-Day-Scheduler/" className="card-link">Workday Scheduler application</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img" src={Password} alt="Password Generator image"/>
                    <div className="card-body align-items-center d-flex justify-content-center">
                      <p className="card-text">A random password generator app using JS<br/>
                      <a target="_blank" href="https://humkeyg.github.io/Random-Password-Generator/" className="card-link">Password Generator appplication</a>
                      </p>
                    </div>
                  </div>
                </div>

              </div>

        </section>

        <section className="container-fluid" id="applications">
          <h4 id="sub-header-applications" className="sub-header">Applications</h4>
            <div className="applications-grid" id="applications-grid"></div>
            <div className="row">

              <div className="col-md-4">
                <div className="card">
                  <img className="card-img" src={Moodsic} alt="Moodsic Homepage"/>
                  <div className="card-body align-items-center d-flex justify-content-center">
                    <p className="card-text">A music listening application using the Spotify API<br/>
                    <a target="_blank" href="https://k-kelsey.github.io/GroupProject1/" className="card-link">Moodsic application</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img className="card-img" src={Careercone} alt="Career Cone Homepage"/>
                  <div className="card-body align-items-center d-flex justify-content-center">
                    <p className="card-text">A job search management application using the MVC paradigm<br/>
                    <a target="_blank" href="https://careerconeproject.herokuapp.com/" className="card-link">Career Cone application</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img className="card-img" src={Employee} alt="Employee Tracker image"/>
                  <div className="card-body align-items-center d-flex justify-content-center">
                    <p className="card-text">A node.js command-line application for managers to add an update employees<br/>
                    <a target="_blank" href="https://watch.screencastify.com/v/11FB3Q3XndV7fOvSGjJg" className="card-link">Employee Tracker Demo</a>
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">

              <div className="col-md-4">
                <div className="card">
                  <img className="card-img" src={Team} alt="Team profile generator image"/>
                  <div className="card-body align-items-center d-flex justify-content-center">
                    <p className="card-text">A JS application that generates an HTML page with employee cards<br/>
                    <a target="_blank" href="https://watch.screencastify.com/v/ZL7u4WuRnTjEISPJnSgh" className="card-link">Team Profile Generator Demo</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img className="card-img" src={Blog} alt="Tech Blog image"/>
                  <div className="card-body align-items-center d-flex justify-content-center">
                    <p className="card-text">A tech blog using the MCV paradigm Handlebars<br/>
                    <a target="_blank" href="https://salty-fortress-37062.herokuapp.com/" className="card-link">The Tech Blog homepage</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img className="card-img" src={Weather} alt="Weather dashboard image "/>
                  <div className="card-body align-items-center d-flex justify-content-center">
                    <p className="card-text">A weather app using the One Call Weather API to retrieve and display data using JS<br/>
                    <a target="_blank" href="https://humkeyg.github.io/Weather-Dashboard/" className="card-link">Weather Dashboard application</a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
        </section>
      </div>
    </div>
  );
}