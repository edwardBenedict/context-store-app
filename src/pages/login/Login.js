import React, { useState } from "react";
import style from "./Login.module.css";
import CustomButton from "../../components/button/Button";
import CustomInput from "../../components/input/Input";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [info, setInfo] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    history.push("/admin");

  };
  return (
    <div className={style.loginWrapper}>
      <div className={style.login}>
        <h2>Login</h2>
        <form className={style.form} onSubmit={handleSubmit}>
          <CustomInput
            name="email"
            label="email"
            type="email"
            value={info.email}
            placeholder="Email"
            onChange={handleChange}
            required
            />
          <CustomInput
            name="password"
            type="password"
            value={info.password}
            placeholder="Password"
            label="Password"
            onChange={handleChange}
            required
          />
          <CustomButton type="submit" primary color="white"/>
        </form>
      </div>
    </div>
  );
};

export default Login;
