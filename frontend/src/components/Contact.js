import React, { useState } from "react";
import "../css/contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    setStatus("⏳ Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();
      setStatus(result.message);
    } catch (err) {
      setStatus("❌ Could not connect to server.");
      console.error(err);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left: Contact Information */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out for any inquiries or collaborations.</p>

          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span>9606395719</span>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>anudeep7405@gmail.com</span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Bengaluru, India</span>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61572564303329">
              <img src="/images/sm1.png" width="30" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/anudeep-thatapudi-b4b54731b/">
              <img src="/images/sm2.png" width="30" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/anudeep_341/">
              <img src="/images/sm3.jpg" width="45" alt="Instagram" />
            </a>
            <a href="https://github.com/anudeep7405">
              <img src="/images/sm4.png" width="30" alt="GitHub" />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
          <p id="status">{status}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
