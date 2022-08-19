import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";


export const getFavoritesRequest = createAsyncThunk("FAVORITES-MOVIES",()=>{ return axios.get("/api/watchlist").then((r) => r.data)
})

export const sendFavoriteMovie = createAsyncThunk("SEND-FAVORITES",(idMovie)=>{
    return axios.post("api/watchlist",idMovie)
    .then(r=>r.data)
})

export const putFavotiteMovie = createAsyncThunk("ADD-FAVORITE",(idMovie)=>{
    return axios.put("api/watchlist",idMovie)
    .then(r=>console.log("..add favorite success"))
})


const watchListReducer = createReducer([], {
    [getFavoritesRequest.fulfilled]: (state,action)=> action.payload,
    [sendFavoriteMovie.fulfilled]: (state, action) => action.payload,
    [putFavotiteMovie.fulfilled]: (state, action) => action.payload,
  });
  
  export default watchListReducer;