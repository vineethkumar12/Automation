import React, { useRef } from "react";
import "./Contact.css";
import { toast } from "react-toastify"; // For showing notifications
import emailjs from "@emailjs/browser"; // For sending emails

const ContactSection = () => {
  const form = useRef();

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const fromName = formData.get("from_name");
    const email = formData.get("from_email");
    const message = formData.get("message");

    if (!fromName || !email || !message) {
      toast.error("Please fill out all required fields.");
      return;
    }

    emailjs
      .sendForm("service_5z3p4q1", "template_w1ejqkw", form.current, {
        publicKey: "8hMqKfWh1Q_BkPeUt",
      })
      .then(
        () => {
          console.log("Email sent successfully!");
          toast.success("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Error in sending email:", error.text);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact_section">
      <div className="container">
        <div className="row">
          <div data-aos="flip-left" className="col-md-7 col-lg-6">
            <div className="form_container">
              <div className="heading_container">
                <h2>Contact Us</h2>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="from_name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="ph_no"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="from_email"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Message"
                    name="message"
                    required
                  />
                </div>
                <div className="btn_box">
                  <button type="submit">SEND</button> {/* Added submit type */}
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5 col-lg-6"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
