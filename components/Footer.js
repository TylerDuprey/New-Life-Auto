import React from 'react';

const getDate = () => alert('Date')

const Footer = () => {
  return (

    <footer className="main-footer">
        <div className="footer-container container">
                <p>&copy; <span onLoad={getDate} className="jsDate">2022</span> New Life Auto Repair</p>
        </div>
    </footer>   
  );
};

export default Footer;
