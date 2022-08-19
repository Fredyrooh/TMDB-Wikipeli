import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"

export const setOnClickFavorite = createAsyncThunk("FAV-CLICK",(bool)=>{
    return bool
})


const favReducer = createReducer(Boolean,{
    [setOnClickFavorite.fulfilled]: (state, action) => action.payload
})
export default favReducer