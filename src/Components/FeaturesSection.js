import React from "react";
import "./FeaturesSection.css";

const features = [
  {
    title: "Accessibility",
    description: "Control all your appliances from anywhere in the world.",
    icon: "fa-globe",
  },
  {
    title: "Scheduling",
    description:
      "Schedule your appliances like geysers and ACs for efficiency.",
    icon: "fa-calendar-alt",
  },
  {
    title: "Security",
    description: "Receive instant intrusion alerts to keep your home safe.",
    icon: "fa-shield-alt",
  },
  {
    title: "User-friendly Setup",
    description: "Syncs with existing switches without additional wiring.",
    icon: "fa-tools",
  },
  {
    title: "Multi-access",
    description:
      "Multiple users can control appliances with real-time updates.",
    icon: "fa-users",
  },
  {
    title: "Scenes",
    description: "Control a set of appliances at once with a single click.",
    icon: "fa-th-large",
  },
  {
    title: "Voice Control with Alexa",
    description: "Use voice commands via Alexa to control appliances easily.",
    icon: "fa-microphone",
  },
  {
    title: "2-Years Warranty",
    description: "Enjoy peace of mind with a comprehensive 2-years warranty.",
    icon: "fa-shield",
  },
  {
    icon: "fa fa-plug",
    title: "Easy Installation",
    description: "Set up your device in a few simple steps with no hassle!",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="features_section">
      <div className="container">
        <h2 className="section_title">
          <strong>Our Key Features</strong>
        </h2>
        <div className="features_grid">
          {features.map((feature, index) => (
            <div className="feature_card" data-aos="zoom-in" key={index}>
              <div className="icon_container">
                <i className={`fa ${feature.icon}`} aria-hidden="true"></i>
              </div>
              <h4 className="feature_title">{feature.title}</h4>
              <p className="feature_description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
