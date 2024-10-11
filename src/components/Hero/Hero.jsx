import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container" id="Hero" >
      <div className="hero-content">
        <h2> Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless
          Visually Stunning Web Solutions 
        </p>
      </div>

      <div className="hero-img">
        <div>
            <div className="tech-icon">
                <img src="../logo192.png" alt=""/>
            </div>
            <img src="../assets/teja-pic-1.jpg" alt="Profile Pic" style={{borderRadius: "10px"}}/>
        </div>
     

      <div>
        <div className="tech-icon">
          <img src="../assets/html-5.png" alt=""/>
        </div>
        <div className="tech-icon">
          <img src="../assets/css-3.png" alt=""/>
        </div>
        <div className="tech-icon">
          <img src="../assets/js.png" alt=""/>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
