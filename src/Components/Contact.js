import React from "react";
import "./Contact.css";
const ContactSection = () => {
  return (
    <section id="contact" className="contact_section">
      <div className="container">
        <div className="row">
          <div data-aos="flip-left" className="col-md-7 col-lg-6">
            <div className="form_container">
              <div className="heading_container">
                <h2>Contact Us</h2>
              </div>
              <form action="">
                <div>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Message"
                  />
                </div>
                <div className="btn_box">
                  <button>SEND</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5 col-lg-6">
            <div className="subscribe-box">
              <h3>Subscribe To Our Newsletter</h3>
              <p>
                Neque, omnis? Maiores consectetur molestiae assumenda earum ea
                exercitationem velit tempora molestias quae, neque voluptas
                magnam maxime, repudiandae voluptatum quaerat tempore accusamus.
              </p>
              <form action="">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
