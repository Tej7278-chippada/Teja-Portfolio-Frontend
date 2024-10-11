import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {

  const handleDownload = ()=>{
    const pdfurl = 'teja-resume.pdf';
    const link = document.createElement('a');
    link.href = pdfurl;
    link.download = "Teja's Resume.pdf"
    document.body.appendChild(link);
    link.click();
  }
  
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/teja-logo.png" alt="name-logo" />
          <ul>
            <li>
              <a className="menu-item" href="#Hero">Home</a>
            </li>

            <li>
              <a className="menu-item" href="#Skills">Skills</a>
            </li>

            <li>
              <a className="menu-item" href="#Work">Projects</a>
            </li>

            <li>
              <a className="menu-item" href="#Contact">Contact Me</a>
            </li>

            <button className='contact-btn' onClick={handleDownload}>
            Download Resume
           </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
