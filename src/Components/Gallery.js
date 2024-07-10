import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./Gallery.css"; // Import the CSS file for styling

import g1 from "../images/g1.jpg";
import g2 from "../images/g2.jpg";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.jpg";
import g5 from "../images/g5.jpg";
import g6 from "../images/g6.jpg";

const galleryImages = [g5, g2, g3, g4];

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div
      id="gallery"
      data-aos="fade-up"
      className="gallery_section layout_padding2"
    >
      <div className="container-fluid">
        <div className="heading_container heading_center">
          <h2>Gallery</h2>
        </div>
        <div className="row">
          {galleryImages.map((image, index) => (
            <div key={index} className="col-sm-4 col-md-3 px-0">
              <div className="img-box">
                <img src={image} alt="" loading="lazy" />
                <button
                  className="lightbox-icon"
                  onClick={() => openLightbox(index)}
                >
                  <i className="far fa-image"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-box">
          <a href="/"> View All </a>
        </div>
      </div>

      <Modal open={isOpen} onClose={closeLightbox} center>
        <img
          src={galleryImages[photoIndex]}
          alt=""
          style={{ maxWidth: "100%", maxHeight: "80vh" }}
        />
      </Modal>
    </div>
  );
};

export default Gallery;
