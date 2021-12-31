import React from "react";
import styles from "./Button.module.css";

const CustomButton = ({ label, type, primary, onClick, width }) => {
  let handleClick = () => {
    if(onClick){
      onClick();
    }
  }
  
  return (
    <div>
      <button
        className={primary ? styles.primary : styles.secondary}
        type={type || "button"}
        onClick={handleClick}
        style={{width: width || "100%"}}
      >
        {label || "Button"}
      </button>
    </div>
  );
};

export default CustomButton;
