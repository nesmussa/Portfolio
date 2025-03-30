import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sdry75q", // Your EmailJS Service ID
        "template_i3l06eg", // Your EmailJS Template ID
        form.current,
        "zxIbRjbybMRC9ckGA" // Your EmailJS User ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send the message. Please try again.");
          console.log(error.text);
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-text">
            Feel free to contact me for collaborations or inquiries.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:emileofnm@gmail.com" className="link">
              emileofnm@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+251988998278" className="link">
              +251988998278
            </a>{" "}
            |{" "}
            <a href="tel:+251926785580" className="link">
              +251926785580
            </a>
          </p>
        </div>
        <div className="contact-form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="input-field"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="input-field"
              required
            />
            <input
              type="text"
              name="user_phone"
              placeholder="Your Phone Number"
              className="input-field"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="input-field textarea-field"
              required
            ></textarea>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
