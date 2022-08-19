import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sendPopularMovies, sendQueryMovies, sendTopRatedMovies } from "../store/movies";
import { logoutRequest } from "../store/user";

export const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [query, setQuery] = useState("")
  const handleChangeQuery = (e) => {
    setQuery(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(sendQueryMovies(query))
      .then(r => r.data)
  }

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logoutRequest()).then(() => window.location = "/login")
  };

  const handleChangeRated = (e)=>{
    e.preventDefault()
    dispatch(sendTopRatedMovies())
  }

  const handleChangePopular = (e)=>{
    e.preventDefault()
    dispatch(sendPopularMovies())
  }
  return (

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <span   onClick={handleChangePopular}><Link className="navbar-brand" to={"/"}>WikiPeli</Link></span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={handleChangeRated}>Mas Valorados</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="query" onChange={handleChangeQuery} />
          </form>

        </div>
      </div>
      <header>
        {user.email ?
          (<div className="btn-group " role="group" aria-label="Basic example">
            <Link to={"/secret"} type="button" className="btn btn-dark">{user.name}</Link>
            <button type="button" className="btn btn-dark" onClick={handleLogout}>Logout</button>
          </div>)
          :
          (<div className="btn-group " role="group" aria-label="Basic example">
            <Link type="button" className="btn btn-dark" to={"/login"}>Login</Link>
            <Link type="button" className="btn btn-dark" to={"/register"}>Register</Link></div>)}
      </header>
    </nav>
  );
};

