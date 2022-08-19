import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendFavoriteMovie } from '../../store/watchList'
const starFalse = require("../../assets/1.png")
const starTrue = require("../../assets/2.png")

const Favorites = (id) => {
  const {user,movies,favorites} = useSelector(state=>state)
  const {idMovie,fav} = favorites
  const dispatch = useDispatch()
  const [star,setStar] = useState(false)

console.log("||||||||||||||||||||||||", fav);


  const handleTrue = ()=> setStar(true)
  const handleFalse = ()=> setStar(false)

  const handleFavorite =(e)=>{
    e.preventDefault()
      if(!fav){

        const obj = {idMovie:id.id,fav:star}
        
        dispatch(sendFavoriteMovie(obj)) 
      }
     return
  }

  return (

    <div onClick={handleFavorite}>
      
   { fav === false? <img src= {starFalse} width="40px" onClick={handleTrue}/>
    : <img src={starTrue} width="40px" onClick={handleFalse}/>}</div>
  )
} 

export default Favorites