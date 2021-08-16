import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/bhowe-studio.jpeg"
              alt=""
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Broad experience across writing, service, education, programming
              and radio. Able to do more with less. Setting my teams and clients
              up for success, continuous learning and a strong sense of mission
              are my primary motivators. Chess enthusiast.
            </p>

            <p>
              I write, conduct, record, and produce interviews with innovators
              in business technology and the arts. I also play guitar and
              tennis.
            </p>
            <br />

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>
                    <a href="mailto:brendan.howe1@gmail.com">
                      {resumeData.email}
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
