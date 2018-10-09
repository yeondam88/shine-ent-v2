import React, { Component } from "react";
import ShineLogo from "../images/shine-ent_logo-1.png";

class Nav extends Component {
  render() {
    return (
      <header className="header-global">
        <nav
          id="navbar-main"
          className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom"
        >
          <div className="container">
            <a className="navbar-brand mr-lg-5" href="/">
              <img src={ShineLogo} height="50px" alt="shine entertainment" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar_global"
              aria-controls="navbar_global"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="/">
                      <img
                        src={ShineLogo}
                        height="50px"
                        alt="shine entertainment"
                      />
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <button
                      type="button"
                      className="navbar-toggler"
                      data-toggle="collapse"
                      data-target="#navbar_global"
                      aria-controls="navbar_global"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>

              <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                <li className="nav-item">
                  <a
                    href="#about"
                    className="nav-link"
                    onClick={e => this.props.scroll(e, "about")}
                  >
                    <span className="nav-link-inner--text">About Us</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#team"
                    className="nav-link"
                    onClick={e => this.props.scroll(e, "team")}
                  >
                    <span className="nav-link-inner--text">Team</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#reviews"
                    className="nav-link"
                    onClick={e => this.props.scroll(e, "review")}
                  >
                    <span className="nav-link-inner--text">Reviews</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-icon"
                    href="https://www.facebook.com/ShineEntertainment.LA/"
                    title="Like us on Facebook"
                  >
                    <i className="fab fa-yelp" />
                    <span className="nav-link-inner--text d-lg-none">Yelp</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-icon"
                    href="https://www.instagram.com/shine.entertainment/"
                    title="Follow us on Instagram"
                  >
                    <i className="fab fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none">
                      Instagram
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
