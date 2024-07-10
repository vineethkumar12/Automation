import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../images/slider-bg.jpg";
import React, { useRef } from "react";
import { Link } from "react-scroll";
import Slider from "react-slick";
import "./responsive.css";

export const Home = () => {
  const sliderRef = useRef(null);
  const links = ["home", "about", "gallery", "services", "contact"];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const openNav = () => {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");
  };

  return (
    <section id="home" className="slider_section position-relative">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="/">
              <span>PAT</span>
            </a>
            <div className="" id="">
              <div className="custom_menu-btn">
                <button onClick={openNav}>
                  <span className="s-1"> </span>
                  <span className="s-2"> </span>
                  <span className="s-3"> </span>
                </button>
                <div id="myNav" className="overlay">
                  <div className="overlay-content">
                    {links.map((value, index) => (
                      <Link
                        key={index}
                        onClick={openNav}
                        to={value}
                        className="Link"
                        smooth={true}
                        duration={500}
                      >
                        {value}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* end header section */}
      <Slider ref={sliderRef} {...settings}>
        <div className="carousel-item">
          <div className="img_container">
            <div className="img-box">
              <img src={img} className="" alt="..." />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img_container">
            <div className="img-box">
              <img src={img} className="" alt="..." />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img_container">
            <div className="img-box">
              <img src={img} className="" alt="..." />
            </div>
          </div>
        </div>
      </Slider>
      <div className="carousel_btn_box">
        <button className="carousel-control-prev" onClick={goToPrev}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" onClick={goToNext}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
          <span className="sr-only">Next</span>
        </button>
      </div>
      <div className="detail-box">
        <div className="col-md-8 col-lg-6 mx-auto">
          <div className="inner_detail-box">
            <h1>
              PAT IOT <br />
              SOLUTIONS
            </h1>
            <p>
              PAT redefines home automation with intuitive IoT solutions,
              accessible via our mobile app. Seamlessly control electrical
              appliances from anywhere, simplifying daily life. Experience
              effortless living with PAT's innovative technology.
            </p>
            <div>
              <a href="/" className="slider-link">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
