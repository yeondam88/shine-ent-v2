import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row row-grid align-items-center my-md">
            <div className="col-lg-6">
              <h3 className="text-primary font-weight-light mb-2">
                Thank you for checking out!
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's us serve your big day!
              </h4>
            </div>
            <div className="col-lg-6 text-lg-center btn-wrapper">
              <a
                target="_blank"
                href="/"
                className="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
                data-toggle="tooltip"
                data-original-title="Follow us"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                target="_blank"
                href="/"
                className="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
                data-toggle="tooltip"
                data-original-title="Like us"
              >
                <i className="fab fa-facebook-square" />
              </a>
              <a
                target="_blank"
                href="/"
                className="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round"
                data-toggle="tooltip"
                data-original-title="Follow us"
              >
                <i className="fab fa-yelp" />
              </a>
            </div>
          </div>
          <hr />
          <div className="row align-items-center justify-content-md-between">
            <div className="col-md-6">
              <div className="copyright">
                &copy; 2018
                <a href="/"> Shine Entertainment</a>.
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav nav-footer justify-content-end">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
