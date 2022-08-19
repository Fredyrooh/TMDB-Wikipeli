import React from 'react'
import { useDispatch} from 'react-redux'
import { sendTopRatedMovies } from '../../store/movies'

const topRated = () => {
    const dispatch = useDispatch()

  const handleChange = (e)=>{
    e.preventDefault()
    dispatch(sendTopRatedMovies())
  }
  return (
    <button onclick={handleChange}/>
  )
}

export default topRated