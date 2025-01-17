import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./Gallery.css"; // Import the CSS file for styling

import g2 from "../images/gallery-img-2.png";

import g3 from "../images/curtain-product.jpg";
import g4 from "../images/gallery-img-4.jpg";

import g6 from "../images/gallery-img-6.jpg";

import video1 from "../Videos/video3.mp4"; // Add video paths
import video2 from "../Videos/video2.mp4"; // Add video paths

// Define initial gallery items
const initialGalleryItems = [
  { type: "image", src: g2 },
  { type: "image", src: g3 },
  { type: "image", src: g4 },
  { type: "image", src: g6 },

  { type: "video", src: video1 },
  { type: "video", src: video2 },
];

const Gallery = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const openLightbox = (index) => {
    setItemIndex(index);
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
        <div
          className="heading_container heading_center "
          style={{ marginBottom: "50px" }}
        >
          <h2>Gallery</h2>
        </div>
        <div className="gallery-row">
          {initialGalleryItems.map((item, index) => (
            <div key={index} className="img-box">
              {item.type === "image" ? (
                <img src={item.src} alt="" loading="lazy" />
              ) : (
                <video
                  src={item.src}
                  controls={false}
                  muted
                  style={{ width: "100%", height: "100%" }}
                ></video>
              )}
              <button
                className="lightbox-icon"
                onClick={() => openLightbox(index)}
              >
                <i
                  className={
                    item.type === "image" ? "far fa-image" : "fas fa-play"
                  }
                ></i>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal open={isOpen} onClose={closeLightbox} center>
        {initialGalleryItems[itemIndex].type === "image" ? (
          <img
            src={initialGalleryItems[itemIndex].src}
            alt=""
            style={{ maxWidth: "100%", maxHeight: "80vh" }}
          />
        ) : (
          <video
            src={initialGalleryItems[itemIndex].src}
            controls
            style={{ maxWidth: "100%", maxHeight: "80vh" }}
          ></video>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
