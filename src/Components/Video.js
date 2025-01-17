import React from "react";
import "./video.css"; // Add custom styling here
import video1 from "../Videos/video4.mp4"; // Import the video

const VideoSection = () => {
  return (
    <section className="video_section">
      <div className="container">
        <div className="video_title">
          <h2>See It in Action</h2>
          <p>
            Learn how our smart solutions work through this video demonstration.
          </p>
        </div>
        <div data-aos="zoom-in" className="video_container">
          <video
            muted
            autoPlay
            loop
            width="100%"
            height="400px"
            className="custom-video"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
