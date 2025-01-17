import React from "react";
import "./SmartSwitchSection.css";
import smartSwitchImage from "../images/smart-switch.png"; // Replace with your image path

const SmartSwitchSection = () => {
  return (
    <section className="smart_switch_section">
      <div className="container">
        <div className="iframe_section">
          <iframe
            src="https://giphy.com/embed/WTu5YH9J0kyVtymRIe"
            width="480"
            height="269"
            frameBorder="0"
            className="giphy-embed iframe-pointer-blocked"
            allowFullScreen
          ></iframe>
        </div>
        <div className="row">
          <div className="col">
            <div className="text_section">
              <h2 className="title">Smart Touch WiFi Switches</h2>
              <p className="description">
                Modernize Your Home...Transform your home with smart touch WiFi
                switches, offering convenience, control, and elegance.
                Experience the future of home automation with these innovative
                devices.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="image_section">
              <img
                src={smartSwitchImage}
                alt="Smart Touch WiFi Switches"
                className="responsive-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSwitchSection;
