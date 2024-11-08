import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-hero">
        <h1>About Us</h1>
        <p>
          We are a team of dedicated professionals focused on delivering the best
          digital solutions for our clients. Our expertise spans across web design, development, and digital strategy.
        </p>
      </header>
      
      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to help businesses achieve their goals through innovative 
            technology solutions. We believe in creating user-centered experiences 
            that make a lasting impact.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Our Values</h2>
          <p>
            We are committed to quality, integrity, and collaboration. Our values 
            drive everything we do, from client interactions to project delivery.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Meet Our Team</h2>
          <p>
            Our team is a diverse group of talented individuals, each bringing unique skills
            to the table. We work together to bring your ideas to life and make your project a success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
