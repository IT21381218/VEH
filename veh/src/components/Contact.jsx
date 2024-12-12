import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./styles/Contact.css";

function Contact() {
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rvu2w8x", // Your EmailJS service ID
        "template_28awftj", // Your EmailJS template ID
        e.target, // The form element
        "xJh1MF3UPME4vYCKx" // Your EmailJS public key
      )
      .then(
        (result) => {
          setNotification({ type: "success", message: "Message Sent!" });
        },
        (error) => {
          setNotification({ type: "error", message: "Something went wrong!" });
        }
      );
  };

  return (
    <div className="contact">
      {/* Left Side: Text */}
      <div className="contact-left">
        <h1>Let’s Get Social!</h1>
      </div>

      {/* Right Side: Contact Form */}
      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="topic"
            placeholder="Subject / Topic"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>

          {/* Show notification */}
          {notification && (
            <div
              className={`notification ${
                notification.type === "success" ? "success" : "error"
              }`}
            >
              {notification.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
