import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/login/", { email, password })
      .then(() => alert("bienvenido de nuevo"))
      .then(() => {
        navigate("/secret");
      })
      .catch((err) => console.log("******no pasa*******",err.response.data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Put your email"
          onChange={handleChangeEmail}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Put your password"
          onChange={handleChangePass}
        />
        <br />
        <br />
        <br />
        <button>Submit</button>
      </form>

      <Link to={"/404"}>¿Foget your password?</Link>
    </div>
  );
};

export default LogIn;
