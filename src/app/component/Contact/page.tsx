import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We love to hear from you! Whether you have a question, a project idea, 
          or just want to say hello, feel free to reach out.
        </p>
      </header>
      
      <section className="contact-content">
        <div className="contact-section">
          <h2>Contact Information</h2>
          <p>Email: contact@yourwebsite.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main Street, Your City, Country</p>
        </div>
        
        <div className="contact-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
