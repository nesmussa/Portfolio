import React from "react";


function Contact() {
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
          <form className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              className="input-field"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              className="input-field"
            />
            <textarea
              placeholder="Your Message"
              className="input-field textarea-field"
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
