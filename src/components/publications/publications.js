import React, { Component } from "react";
export default class publications extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="publications">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>...and here are some of my publications.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-fifths s-bgrid-thirds cf"
            >
              {resumeData.publications &&
                resumeData.publications.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <img src={`${item.imgurl}`} className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                      <a target="_blank" rel="noreferrer" href={item.url}>
                        VIEW ARTICLE
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
