import React, { Component } from "react";
import Nav from "./Nav";
import About from "./About";
import Reviews from "./Reviews";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";

class Home extends Component {
  scroll = (e, section) => {
    e.preventDefault();
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  render() {
    return (
      <>
        <Nav scroll={this.scroll} />
        <main>
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default" />
              <div className="container py-lg-md d-flex">
                <div className="col px-0">
                  <div className="row">
                    <div className="col-lg-6">
                      <h1 className="display-3  text-white">
                        Shine Entertainment
                        <span>completed wedding service</span>
                      </h1>
                      <p className="lead  text-white">
                        Located in L.A, we are a premier full service MC, DJ,
                        Event Planning, Photo Booth, and Lighting company
                        specializing in bi- cultural Asian-American Weddings,
                        Corporate Events, Concerts, Fundraising Events, and
                        Private Parties.
                      </p>
                      <div className="btn-wrapper">
                        <a
                          href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                          className="btn btn-info btn-icon mb-3 mb-sm-0"
                          onClick={e => this.scroll(e, "contact")}
                        >
                          <span className="btn-inner--icon">
                            <i className="far fa-envelope-open" />
                          </span>
                          <span className="btn-inner--text">Contact Us</span>
                        </a>
                        <a
                          href="https://www.creative-tim.com/product/argon-design-system"
                          className="btn btn-white btn-icon mb-3 mb-sm-0"
                          onClick={e => this.scroll(e, "review")}
                        >
                          <span className="btn-inner--icon">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">Reviews</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="separator separator-bottom separator-skew">
                <svg
                  x="0"
                  y="0"
                  viewBox="0 0 2560 100"
                  preserveAspectRatio="none"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
          <About />
          <Reviews />
          <Team />
          <Contact />
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
