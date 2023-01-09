
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("registerEntry"));

    const check = data.find((item) => item.email === email);
    if (check) {
      if (check.password === password) {
        localStorage.setItem("login", JSON.stringify(check));
        navigate("/home");
      } else {
        alert("Password is incorrect");
      }
    } else {
      alert("Email is incorrect");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="pass"
            required
          />
        </div>
        <div className="button-container">
          <input type="submit" value={"Login"} />
        </div>
        <div className="a">
          <a href="/register">Register</a>
        </div>
      </form>
    </div>
  );
};

export default Login;