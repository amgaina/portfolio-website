import React, { useState, useRef } from "react";
import "./contact.css";
import Globe from "../Utils/globe.png";
import LinkedInIcon from "../Utils/LinkedIn.png";
import GitHubIcon from "../Utils/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const service_Id = "service_23e8hd6";
    const template_Id = "template_bujwa6f";
    const public_key = "q404yMwEDGK43SRRJ";

    emailjs.sendForm(service_Id, template_Id, form.current, public_key).then(
      (response) => {
        form.current.reset();
        setMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      },
      (error) => {
        setMessage("Oops ! Something went wrong. Try again later.");
      }
    );
  };

  return (
    <div className="contact-page" id="contact">
      <h1 className="contact-page-title mb-5">Contact</h1>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Form on the left */}
          <div className="col-md-6 right-form">
            <h1 className="contact-title animated fadeInRight">Get In Touch</h1>
            <form
              className="contact-form animated fadeInRight"
              onSubmit={handleSubmit}
              ref={form}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-control"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control"
              />
              <button type="submit" className="btn btn-primary animated-button">
                Send Message
              </button>
            </form>
            {message && <p className="mt-5 message-text">{message}</p>}
          </div>

          {/* Globe on the right */}
          <div className="col-md-6 text-center">
            <img
              src={Globe}
              alt="Contact Globe"
              className="profile-pic animated fadeInRight mt-5"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Abhishek Amgain</p>
        <div className="social-icons">
          <a
            href="https://github.com/amgaina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-amgain-04b642265/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
