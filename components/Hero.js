import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-container">
        <h1>Affordable Car Repairs For People In Need</h1>
        <div className="btn-row">
            <div className="btn-container">
            <Link href="/#">
                <a className="fa-icon btn services-link no-arrow">Request an Appointment</a>
            </Link>
            </div>
            <div className="btn-container">
            <Link href="/#">
                <a className="fa-icon btn support-link no-arrow">Support Our Mission</a>
            </Link>
            </div>
        </div>
        </div>
    </section>
  );
};

export default Hero;
