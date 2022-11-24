import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDatas = createAsyncThunk("movies/getDatas" , async() =>{
    return fetch("MovieAPI.json").then(res => res.json())
})

 const datasSlice = createSlice({
    name :"movies",
    initialState:{
        datas : [],
        loading : false,
        error : null
    },
    extraReducers:{
        [getDatas.pending] :(state) =>{
            state.loading  = true
        },
        [getDatas.fulfilled] : (state , action) =>{
            state.loading = false 
            state.datas = action.payload
        },
        [getDatas.rejected] : (state , action) =>{
            state.loading = false
            state.error = action.payload
        }
    }
})
export default datasSlice.reducer