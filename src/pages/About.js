import React from "react";
import aboutSvg from "../assets/work_together.svg";

const About = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        About Software Developer <span>Ed Ben</span>
      </h1>
      <div style={{ textAlign: "center" }}>
        <img
          src={aboutSvg}
          alt="about"
          style={{ maxWidth: "600px", width: "80%" }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>I'm Ed.</h2>
        <h4>I’m currently learning Full-Stack Development Languages.</h4>
        <h4>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
          Python, AWS Services.
        </h4>
        <h4>
          <a href="mailto:edwardbenedict92@gmail.com">Send email</a> :
          edwardbenedict92@gmail.com
        </h4>
      </div>
    </div>
  );
};

export default About;
