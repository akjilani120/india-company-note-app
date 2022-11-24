import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./SliceData";

export default configureStore({
           reducer :{
            data : dataReducer
           }
})