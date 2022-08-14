import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import "./index.css";

import {Navbar}  from  "./components/Navbar";
import Sidebar from   "./components/Sidebar";
import NotFound from "./components/pages/NotFound";
import Register from "./components/pages/Register";
import ShowUsers from "./components/pages/ShowUsers";
import axios from "axios";
import LogIn from "./components/pages/LogIn";
import Home from "./components/Home";
import Header from "./components/Header";

const App = ()=> {

    const[users,setUsers]=useState([])


    useEffect(()=>{
      axios.get("/")
      .then((usuarios)=>{setUsers(usuarios)})
      .catch(err=>console.log(err.response.data))
    },[])
   

    return (
        <div>
          <Header/>
          <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/showUser" element={<ShowUsers users={users}/>}/>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/404" />} />  
         </Routes>
      </div>
    )
}

export default App