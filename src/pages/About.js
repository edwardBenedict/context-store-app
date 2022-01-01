import React from "react";
import Github from "../assets/icons/Github";
import aboutSvg from "../assets/work_together.svg";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "calc(100vh - 175px)",
        border: "1px solid black",
        backgroundColor: "white",
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
          <a href="mailto:edwardbenedict92@gmail.com">
            Send email : edwardbenedict92@gmail.com
          </a>
        </p>
        <a
          href="https://github.com/edwardBenedict"
          target="_blank"
          rel="noreferrer"
        >
          Visit my Github <Github size="24px" />
        </a>
      </div>
    </div>
  );
};

export default About;
