import { message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendLoginRequest } from "../../store/user";
import "bootstrap";

const LogIn = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendLoginRequest({ email: email, password: password }))
      .then(() => navigate("/secret"))
      .catch((err) => message.error(`Failed login: ${err.message}`, 5));
  };

  return (
      <div class="position-relative m-4 ">
        <form onSubmit={handleSubmit}>
          <div class="input-group flex-nowrap">
            <label htmlFor="email" class="input-group-text" id="addon-wrapping">
              Email:
            </label>
            <input
              type="email"
              id="email"
            name="email"
              class="form-control"
              placeholder="Email"
              onChange={handleChangeEmail}
            />
          </div>
          <div class="input-group flex-nowrap">
            <label htmlFor="password" class="input-group-text" id="addon-wrapping">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              placeholder="Password"
              onChange={handleChangePass}
            />
          </div>
          <button class="btn btn-dark ">Submit</button>
        </form>

        <Link to={"/404"}>¿For get your password?</Link>
      </div>
  );
};

export default LogIn;
