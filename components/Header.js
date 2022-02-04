import { useState } from "react";
import Head from 'next/head'
import Link from 'next/link';

const Header = () => {

  const [drawer, setCount] = useState(false)

  const toggleDrawer = () => {
    setCount(prev => prev ? false : true)
  }

  return (

    <>

      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>New Life Auto</title>
        <meta name="description" content="We serve and witness to the community, through high-quality and honest auto repair and maintenance. " />

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link href="/assets/css/fontawesome.css" rel="stylesheet" />
        <link href="/assets/css/brands.css" rel="stylesheet" />
        <link href="/assets/css/solid.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>

      <header className="main-header card stick-to-top">
          <section className="header-container container">
            <div>
              <a className="fa-icon logo" href="#">
                <div>
                  <span className="logo-text">New Life</span><br />
                  <span className="tagline">Auto Repair</span>
                </div>
              </a>
            </div>
            <input id="trigger-1" className="menu-trigger" type="checkbox" checked={drawer} onChange={toggleDrawer} />
            <label htmlFor="trigger-1" className="menu">
              <div></div>
              <div></div>
              <div></div>
            </label>
            <nav className="drawer card" role="navigation">
              <ul>
                <li>
                  <Link href="/#home">
                    <a className="fa-icon home-link">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    <a className="fa-icon about-link">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    <a className="fa-icon services-link">Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#contact">
                    <a className="fa-icon contact-link">Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#support">
                    <a className="fa-icon support-link">Support</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div onClick={toggleDrawer} className="main-obfuscator obfuscator"></div>
          </section>
            </header>
    </>
  );
};

export default Header;
