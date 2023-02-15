import React, { useState } from "react";
import "bootstrap"
import {Modal,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
// import { putFavotiteMovie } from "../store/user";

const starFalse = require("../assets/1.png")
const starTrue = require("../assets/2.png")

// import Favorites from "../components/pages/Favorites";
const API_IMG = "https://image.tmdb.org/t/p/w500"


const MovieBox = ({id,title ,poster_path ,vote_average ,release_date ,overview})=>{
    const {user,movies,favorites} = useSelector(state=>state)
    const {idMovie,fav} = favorites
    const dispatch = useDispatch()

    //logica para mostrar cards
    const [show,setShow] = useState(false)
    const handleShow = ()=> setShow(true)
    const handleClose = ()=> setShow(false) 

    //logica para elegir un favorito
    const [star,setStar] = useState(false)

    const handleTrue = ()=> {
        setStar(true)
        axios.post(`/api/watchlist/create/${id}`)
    }
    const handleFalse = ()=> setStar(false)
    const handleFavorite =(e)=>{
        // e.preventDefault()
        //   if(!show){ 
        // //   const obj = {idMovie:[id],fav:star}       
        //   dispatch(putFavotiteMovie({id,user:user.id})) }
    }

    return(
        <div className="card text-center bg-secondary mb-3 ">
            <div className="card-body">
               <img alt="" className="card-img-top" src={API_IMG+poster_path}/>
               console.log();
            <div className="card-body">
               <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button> 
               <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                   <img className="card-img-top" src={API_IMG+poster_path}/>
                   <div onClick={handleFavorite}>

      {/* esto es el boton y logica de favoritos... */}
      {!star? <img src= {starFalse} width="40px" onClick={handleTrue}/>
       : <img src={starTrue} width="40px" onClick={handleFalse}/>}</div> 

                   {/* <Favorites id={id}/> */}
                   <h3>{title}</h3> 
                   <h4>IMDB: {vote_average}</h4>    
                   <h5>Release Date: {release_date}</h5>
                   <br />
                   <h6>Overview</h6>
                   <p>{overview}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>

                </Modal.Footer>
               </Modal>
            </div>
             </div> 
        </div>
    )
}

export default MovieBox

/* ESTO TRAEMOS DE MOVIES.RESULTS[0]
adult: false
backdrop_path: "/p1F51Lvj3sMopG948F5HsBbl43C.jpg"
genre_ids: (3) [28, 12, 14]
id: 616037
original_language: "en"
original_title: "Thor: Love and Thunder"
overview: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late."
popularity: 8625.547
poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
release_date: "2022-07-06"
title: "Thor: Love and Thunder"
video: false
vote_average: 6.8
vote_count: 1774

ESTO ESTOY USANDO PARA EL PATH = title ,poster_path ,vote_average ,release_date ,overview
*/