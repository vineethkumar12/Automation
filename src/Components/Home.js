import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../images/side-view-hand-with-smartphone-smart-light.jpg";
import React, { useRef } from "react";
import { Link } from "react-scroll";
import Slider from "react-slick";
import "./responsive.css";
import logo from "../images/logo.png";
import "./style.css";
export const Home = () => {
  const sliderRef = useRef(null);
  const links = ["home", "about", "features", "products", "gallery", "contact"];
  const settings = {};

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
              <div className="img-box-logo">
                <img src={logo} className="logo-size" alt="..." />
              </div>
            </a>
            <div className="" id="">
              <div className="custom_menu-btn">
                <button className="b" onClick={openNav}>
                  <span className="s-1"> </span>
                  <span className="s-2"> </span>
                  <span className="s-3"> </span>
                </button>
                <div id="myNav" className="overlay">
                  <div className="overlay-content ">
                    {links.map((value, index) => (
                      <Link
                        key={index}
                        onClick={openNav}
                        to={value}
                        className="Link"
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
            <div className="img">
              <img src={img} className="bg" alt="..." />
            </div>
          </div>
        </div>
      </Slider>

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
              <Link to="contact" className="slider-link">
                CONTACT US
              </Link>
            </div>
            <div style={{ marginTop: "10px", fontFamily: "cursive" }}>
              <h5>Home automation makes life simpler, safer, and smarter</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
