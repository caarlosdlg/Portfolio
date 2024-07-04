import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div className="bg-slate-200">
      <div id="about" className="about">
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
              I'm a driven web development student with a strong foundation in 
              front-end technologies. I'm particularly skilled in building 
              dynamic and interactive user interfaces using Bootstrap and 
              crafting clean, responsive styles with native CSS.
              </p>
              <p>
              My passion lies in creating user-centric experiences, and I 
              leverage my knowledge of JavaScript to bring those experiences
              to life. Currently, I'm expanding my skillset by learning 
              TypeScript to achieve a more robust development environment.
              To complement my front-end capabilities, I'm delving into 
              backend development with MongoDB and exploring its potential
              for data-driven applications.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>Boostrap</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Next JS</p>
                <hr style={{ width: "40%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>2</h1>
            <p>Years of experience</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>6+</h1>
            <p>Projects completed</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>6+</h1>
            <p>Completed courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
