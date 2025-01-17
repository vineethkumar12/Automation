import React from "react";
import "./info.css";
import logo from "../images/logo.png";
import Brochure from "./Brochure.pdf";
const InfoSection = () => {
  return (
    <section id="info" className="info_section">
      <div className="container">
        <div className="row info_main_row">
          <div className="logo-box">
            <img src={logo} className="logo-size-info" alt="Company Logo" />
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="info_detail">
              <h4>Company</h4>
              <p></p>
              <a href={Brochure} download="PAT Home Automation Brochure">
                Download Broucher
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <h4>Contact Us</h4>
            <div className="info_contact">
              <a href="tel:+919030983040">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span> +91 9030983040 </span>
              </a>
              <a href="mailto:bharath.patiot@gmail.com">
                <i className="fa fa-envelope"></i>
                <span> bharath.patiot@gmail.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/2feVz9LNJCrWAxsr8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>Location us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
