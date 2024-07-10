import { React, useRef } from "react";
import "./Testimonial.css";
import c1 from "../images/client.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const sliderRef = useRef(null);

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const testimonials = [
    {
      imgSrc: c1,
      name: "Siaalya",
      content:
        "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable c",
    },
    {
      imgSrc: c1,
      name: "Siaalya",
      content:
        "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable c",
    },
    {
      imgSrc: c1,
      name: "Siaalya",
      content:
        "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable c",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Testimonial</h2>
        </div>
        <div data-aos="fade-right">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="box">
                <div className="img-box">
                  <img src={testimonial.imgSrc} alt="" />
                </div>
                <div className="detail-box">
                  <div className="name">
                    <h6>{testimonial.name}</h6>
                  </div>
                  <p>{testimonial.content}</p>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="carousel_btn-container">
          <button className="carousel-control-prev" onClick={goToPrev}>
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" onClick={goToNext}>
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
