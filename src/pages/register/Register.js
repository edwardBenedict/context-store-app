import React, { useState } from "react";
import CustomButton from "../../components/button/Button";
import  CustomInput from "../../components/input/Input";
import style from "./Register.module.css";

const Login = () => {
  const [info, setInfo] = useState({ username: "", email: "", password: "", password2: "" });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };
  return (
    <div className={style.loginWrapper}>
      <div className={style.login}>
        <h2>Register</h2>
        <form className={style.form} onSubmit={handleSubmit}>
          <CustomInput
            onChange={handleChange}
            name="username"
            label="Username"
            type="text"
            value={info.username}
            required
          />
          <CustomInput
            onChange={handleChange}
            name="email"
            label="Email"
            type="email"
            value={info.value}
            required
          />
          <CustomInput
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
            value={info.value}
            required
          />
          <CustomInput
            onChange={handleChange}
            name="password2"
            label="Confirm Password"
            type="password"
            value={info.value}
            required
          />
          <CustomButton type="submit" label="Login" primary color="white"/>
        </form>
      </div>
    </div>
  );
};

export default Login;
