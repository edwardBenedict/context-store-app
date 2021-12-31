import React from "react";
import MailIcon from "../../assets/icons/Mail";
import PasswordIcon from "../../assets/icons/Password";
import UserIcon from "../../assets/icons/User";
import styles from "./Input.module.css";

const CustomInput = ({ value, required, name, label, type, onChange, placeholder }) => {

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.inputDiv}>
        {name === "password" || name === "password2" ? (
          <PasswordIcon />
        ) : name === "email" ? (
          <MailIcon />
        ) : name === "username" ? (
          <UserIcon />
        ) : null}
        <input
          onChange={onChange}
          className={styles.input}
          type={type}
          name={name}
          required={required}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default CustomInput;