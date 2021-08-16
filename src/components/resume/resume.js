import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          {/* <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">{item.datesAttended}</em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div> 
        </div> */}
          {/* <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">{item.DatesWorked}</em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })} */}
          <div className="column w-1000-stack">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/e/2PACX-1vSf8G-qyaWUKflunEEzU59panb1II2m4qZDv8_XEtpiqYqbPUec6OFVCRCI4OT1pRzqRLVvVqbdMaGw/pub"
              className="btn btn--download"
            >
              VIEW CV
            </a>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}
