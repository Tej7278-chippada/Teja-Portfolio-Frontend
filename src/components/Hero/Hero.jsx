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
                <img src="../assets/react.png" alt="React Icon"/>
            </div>
            <img src="../assets/teja-pic-1.jpg" alt="Profile Pic" style={{borderRadius: "10px"}}/>
        </div>
     

      <div>
        <div className="tech-icon">
          <img src="../assets/html-5.png" alt="HTML Icon"/>
        </div>
        <div className="tech-icon">
          <img src="../assets/css-3.png" alt="CSS Icon"/>
        </div>
        <div className="tech-icon">
          <img src="../assets/js.png" alt="JS Icon"/>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
