import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendRegisterUser = createAsyncThunk("REGISTER", (register) => {
  return axios.post("api/users/register/", register)
    .then(r => r.data)
});

export const sendLoginRequest = createAsyncThunk(
  "LOGIN",
  (datos) => {
    return axios.post("/api/users/login", datos)
      .then((r) => r.data)
  })

export const getValidateAuth = createAsyncThunk("LOGOUT", (user) => {
  return axios.get("api/users/me",user).then(r => r.data)
})

export const logoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios.post("api/users/logout").then(r => console.log("adios desde el store"))
})

export const getUserRequest = createAsyncThunk("USER", () => {
  return axios.get("/api/users").then((r) => r.data);
});

export const getSecretRequest = createAsyncThunk("USER", () => {
  return axios.get("/api/users/secret").then((r) => r.data);
});


export const putFavotiteMovie = createAsyncThunk("ADD-FAVORITE",(idMovie)=>{
  return axios.put("api/users/favorites",idMovie)
  .then(r=>console.log("..add favorite success"))
})

const userReducer = createReducer([], {
  [sendRegisterUser.fulfilled]: (state, action) => action.payload,
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [logoutRequest.fulfilled]: (state, action) => action.payload,
  [getValidateAuth.fulfilled]: (state,action) => action.payload
});

export default userReducer;
