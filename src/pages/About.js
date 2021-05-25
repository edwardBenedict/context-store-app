import React from "react";
import aboutSvg from "../assets/work_together.svg";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "calc(100vh - 175px)",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        About Software Developer <span>Ed Ben</span>
      </h1>
      <div style={{ textAlign: "center" }}>
        <img
          src={aboutSvg}
          alt="about"
          style={{
            maxWidth: "800px",
            width: "50%",
          }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>I'm Ed.</h2>
        <p>I’m currently learning Full-Stack Development Languages.</p>
        <p>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
          Python, AWS Services.
        </p>
        <p>
          <a href="mailto:edwardbenedict92@gmail.com">Send email</a> :
          edwardbenedict92@gmail.com
        </p>
      </div>
    </div>
  );
};

export default About;
