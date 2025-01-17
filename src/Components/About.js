import React from "react";
import aboutImage from "../images/aboutimage2.jpeg";
import "./About.css";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div id="about" data-aos="fade-up">
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={aboutImage} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  PAT IOT creates smart solutions for homes and industries,
                  letting you control appliances from your phone. You can even
                  use your voice to command them, replacing old-fashioned
                  switches. Our team in Hyderabad keeps improving existing
                  products and exploring new tech. We make everything in-house,
                  led by passionate engineers, to make your life easier and
                  affordable. Join us in embracing the future with PAT IOT for a
                  simpler, smarter way of living.
                </p>
                <Link to="/aboutcompany">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
