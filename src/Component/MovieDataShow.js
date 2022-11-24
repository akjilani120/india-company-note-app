import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDatas } from './Redux/SliceData';
const MovieDataShow = () => {
    const dispatch = useDispatch()
    const {datas , loading , error } = useSelector(state => state.data )
   
    useEffect(() =>{
        dispatch(getDatas())
    } ,[])
    console.log("redux" , datas)
    return (
        <div>
            <h1> I am here</h1>
            {
                datas.map(data => <h1>{data.Title}</h1>)
            }
        </div>
    );
};

export default MovieDataShow;