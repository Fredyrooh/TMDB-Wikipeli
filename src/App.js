import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { Route, Routes } from "react-router";
import "./index.css";

import NotFound from "./components/pages/NotFound";
import Register from "./components/pages/Register";
import LogIn from "./components/pages/LogIn";
import Home from "./components/Home";
import Secret from "./components/pages/Secret"

import { useDispatch, useSelector } from "react-redux";
import { getValidateAuth } from "./store/user";
import { Navbar } from "./components/Navbar";
import { getFavoritesRequest } from "./store/watchList";

const App = () => {
  const { user } = useSelector(state => state)
  const dispatch = useDispatch()

  //validacion de usuario para mantener sesion
  useEffect(() => {
    dispatch(getValidateAuth(user))
      .then(() => console.log("user validate.. ok", user.name))
      .catch(err => alert("error en app use effect", err))
  }, [])

  //intento de mantener favoritos en la sesion
  useEffect(() => {
    dispatch(getFavoritesRequest())
      .then((r) => r.data)
      .catch(err => alert("error en app use effect", err))
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  )
}

export default App