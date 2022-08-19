import { createReducer,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//pedido de busqueda de una pelicula en particular
const API_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=3f8117490ee37e5c84303e9e7d0f467d&language=es"
//pedido de peliculas mas populares
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=3f8117490ee37e5c84303e9e7d0f467d&language=en-US&page=1&include_adult=false"

const API_SEARCH_2 = "https://api.themoviedb.org/3/search/movie?api_key=3f8117490ee37e5c84303e9e7d0f467d&query="

const API_TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?api_key=3f8117490ee37e5c84303e9e7d0f467d&language=es-US&page=1"

export const sendTopRatedMovies = createAsyncThunk("TOP-RATED-MOVIES",()=>{
    return axios.get(API_TOP_RATED).then(r=>r.data)
})

export const sendPopularMovies = createAsyncThunk("POPULAR-MOVIES",()=>{
    return axios.get(API_POPULAR).then(r=>r.data)
})

export const sendQueryMovies = createAsyncThunk("SEARCH-MOVIE",(query)=>{
    return axios.get(API_SEARCH_2+query+"&language=es").then(r=>r.data)
})

const moviesReducer = createReducer([],{
    [sendTopRatedMovies.fulfilled]:(state,action)=> action.payload.results,  
    [sendQueryMovies.fulfilled]: (state,action)=> action.payload.results,    
    [sendPopularMovies.fulfilled]:(state,action)=>action.payload.results,

})

export default moviesReducer