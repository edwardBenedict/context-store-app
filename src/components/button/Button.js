import React from "react";
import styles from "./Button.module.css";

const CustomButton = ({ label, type, primary }) => {
  return (
    <div>
      <button
        className={primary ? styles.primary : styles.secondary}
        type={type || "button"}
      >
        {label || "Button"}
      </button>
    </div>
  );
};

export default CustomButton;
