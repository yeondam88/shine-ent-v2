import React, { Component } from "react";
import wedding_img from "../images/wedding-bg.jpg";

class Reviews extends Component {
  render() {
    return (
      <section className="section bg-secondary" id="review">
        <div className="container">
          <div className="row row-grid align-items-center">
            <div className="col-md-6">
              <div className="card bg-default shadow border-0">
                <img src={wedding_img} className="card-img-top" alt="wedding" />
                <blockquote className="card-blockquote">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="svg-bg"
                  >
                    <polygon
                      points="0,52 583,95 0,95"
                      className="fill-default"
                    />
                    <polygon
                      points="0,42 583,95 683,0 0,95"
                      opacity=".2"
                      className="fill-default"
                    />
                  </svg>
                  <h4 className="display-3 font-weight-bold text-white">
                    Our services
                  </h4>
                  <p className="lead text-italic text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorem cupiditate soluta ab nisi dolor dignissimos?
                    Accusamus dicta iusto ab fuga deserunt ipsam quam dolore
                    distinctio temporibus. Totam exercitationem nobis dolorem!
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pl-md-5">
                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                  <i className="fas fa-bullhorn" />
                </div>
                <h3>Our customers</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis fuga excepturi rem reprehenderit voluptatem ratione
                  nemo doloremque obcaecati odio vel delectus assumenda deleniti
                  consequuntur, rerum ab doloribus eligendi neque
                  exercitationem.
                </p>
                <a
                  href="https://www.yelp.com/biz/shine-entertainment-los-angeles?osq=shine+entertainment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-weight-bold text-warning mt-5"
                >
                  See our{" "}
                  <span>
                    <i className="fab fa-yelp" />
                  </span>{" "}
                  Review
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
