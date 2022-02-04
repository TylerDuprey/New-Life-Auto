import React from 'react';

const Hero = () => {
  return (
    <section className="hero about" style={{borderRadius: "3em"}}>
        <div className="hero-container">
        <h2 style={{textAlign:"center", marginBottom:"1rem", marginTop: "0", color: "#fff"}}>About New Life Auto Repair</h2>
        <p style={{width:"100%", fontSize: "1.25rem", maxWidth: "1200px", textAlign: "center", margin: "0 auto"}}>New Life Auto was started by Marysville, Ohio resident Steven Crane as a way to help people struggling to pay for their basic car repairs and maintenance. For single mothers to low income households, a working car can make all the difference in the world. At New Life Auto we provide auto maintenance and teach people how to maintain their cars so they can avoid costly repairs in the first place.</p>

        </div>
    </section>
  );
};

export default Hero;
