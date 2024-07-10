import React from "react";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import "./Services.css";
const ServiceSection = () => {
  const services = [
    {
      imgSrc: s1,
      title: "Residential Decoration",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio aspernatur officiis exercitationem asperiores praesentium",
    },
    {
      imgSrc: s2,
      title: "Ecommercial Decoration",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio aspernatur officiis exercitationem asperiores praesentium",
    },
    {
      imgSrc: s3,
      title: "Office Decoration",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio aspernatur officiis exercitationem asperiores praesentium",
    },
  ];

  return (
    <section id="services" className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Services</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceBox key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceBox = ({ imgSrc, title, description }) => {
  return (
    <div to="services" className="col-md-6 col-lg-4 mx-auto">
      <div data-aos="zoom-in" className="box">
        <div className="img-box">
          <img src={imgSrc} alt="" />
        </div>
        <div className="detail-box">
          <h5>{title}</h5>
          <p>{description}</p>
          <a href=""> Read More </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
