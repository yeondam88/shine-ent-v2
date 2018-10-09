import React, { Component } from "react";
import djimg from "../images/dj-img.jpg";
import wedding_img from "../images/wedding-1.jpg";

class About extends Component {
  render() {
    return (
      <section className="section section-lg" id="about">
        <div className="container">
          <div className="row row-grid align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                src={djimg}
                className="img-fluid floating"
                alt="wedding reception"
              />
              <img
                src={wedding_img}
                alt=""
                className="img-fluid floating back-img"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <div className="pr-md-5">
                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                  <i className="far fa-gem" />
                </div>
                <h3>About our services</h3>
                <p>
                  Located in L.A, we are a premier full service MC, DJ, Event
                  Planning, Photo Booth, and Lighting company specializing in
                  bi- cultural Asian-American Weddings, Corporate Events,
                  Concerts, Fundraising Events, and Private Parties.
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-circle badge-success mr-3">
                          <i className="fas fa-compact-disc" />
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-0">Professional DJ Service</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-circle badge-success mr-3">
                          <i className="fas fa-award" />
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-0">Award winning uplights</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-circle badge-success mr-3">
                          <i className="fas fa-microphone-alt" />
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-0">Professional MC Services</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
