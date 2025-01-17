import React from "react";
import "./howItWorks.css";
import "./responsive.css";
import wifiModuleImage from "../images/work1.png";
import cloudServerImage from "../images/work2.png";
import appControlImage from "../images/work3.png";

const tiles = [
  {
    image: wifiModuleImage,
    alt: "WiFi Module",
    description:
      "Smart switch with WiFi module connects to a cloud server via your home Wi-Fi network.",
  },
  {
    image: cloudServerImage,
    alt: "Cloud Server",
    description:
      "The cloud server acts as a bridge, enabling remote communication between the switch and the mobile app.",
  },
  {
    image: appControlImage,
    alt: "App Control",
    description:
      "Users can access and control the switch from anywhere via the mobile app.",
  },
];

const HowItWorks = () => (
  <section className="how_it_works_section">
    <div className="container">
      <h2 className="section_title">How It Works</h2>
      <div className="tiles_row" data-aos="zoom-in">
        {tiles.map((tile, index) => (
          <div className="tile" key={index}>
            <img src={tile.image} alt={tile.alt} className="tile_image" />
            <p className="tile_description">{tile.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
