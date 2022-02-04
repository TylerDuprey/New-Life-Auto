import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-container">
        <h1>Affordable Car Repairs For People In Need</h1>
        <div className="btn-row">
            <div className="btn-container">
            <a className="fa-icon btn services-link no-arrow" href="/#">Request an Appointment</a>
            </div>
            <div className="btn-container">
            <a className="fa-icon btn support-link no-arrow" href="/#">Support Our Mission</a>
            </div>
        </div>
        </div>
    </section>
  );
};

export default Hero;
