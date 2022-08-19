import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import gatito from "../../assets/gatito.webp"

export default () => {
  const user = useSelector(state=>state.user)
  const navigate = useNavigate()
  if (user.email) {
    return (
      <div>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
         bienvenido{user.name}!
        </h2>
        <p className="m-0 text-center text-m leading-9 text-gray-900">
          Your Email : {user.email}
        </p>
        <img src={gatito} alt="the cake is a lie" width="400" />
      </div>
    );
  }

  return (
    <>
      <h1>no se puede ingresar si no sos usuario...</h1>
      {setTimeout(() => {
        navigate("/")
      }, 4000)}
    </>
  );
};
