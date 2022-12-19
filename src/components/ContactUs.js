import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="first-row">
        <div className="box-contact-us">
          <div className="icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="text">
            <h6>Have any questions?</h6>
            <p>noreply@gmail.com</p>
          </div>
        </div>

        <div className="box-contact-us">
          <div className="icon">
            <i className="fas fa-phone"></i>
          </div>
          <div className="text">
            <h6>Call us</h6>
            <p>+10556556565</p>
          </div>
        </div>

        <div className="box-contact-us">
          <div className="icon">
            <i className="fas fa-fax"></i>
          </div>
          <div className="text">
            <h6>Fax</h6>
            <p>+10556556565</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-info">
        <h2>Write a message</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetu
          incidunt?
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
       

        <div className="contact-form">
         
          <form action="" className="contact" method="post">
            <input type="text" name="name" className="text-box" placeholder="Name" />
            <input type="email" name="email" className="text-box" placeholder="E-mail" />
            <input type="text" name="subject" className="text-box" placeholder="Subject" />
            <textarea name="message" id="" rows="5" placeholder="Your message" required></textarea>
            <input type="submit"name="submit" className="send-btn"  value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
