import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendRegisterUser } from "../../store/user";

const Register = () => {
  const [register, setRegister] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch()

  console.log("**name***", register);

  const handleChangeRegister = (e) => {
    setRegister(
      {
        ...register,
        [e.target.name]: e.target.value,
        [e.target.email]: e.target.value,
        [e.target.password]: e.target.value,
      },
      {}
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendRegisterUser({...register}))
      .then(() => alert("usuario creado"))
      .then(() => navigate("/"))
      .catch((err) => alert("no se pudo crear el usuario",err));
  };

  return (
    <div>
      <h3>New User</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChangeRegister}
          placeholder="Put your name"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChangeRegister}
          placeholder="Put your email"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChangeRegister}
          placeholder="Put your password"
        />
        <br />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
