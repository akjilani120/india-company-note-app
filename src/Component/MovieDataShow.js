import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDatas } from "./Redux/SliceData";
import Row from "react-bootstrap/Row";
import CardMovie from "./CardMovie";
const MovieDataShow = () => {
  const [allDatas , setAllDatas] = useState([])
  const dispatch = useDispatch();
  const { datas, loading, error } = useSelector((state) => state.data);
  
  useEffect(() => {
    dispatch(getDatas());    
    
  }, [dispatch ]);
  useEffect(() =>{
    setAllDatas(datas)

  } , [datas])
  useEffect(() =>{
    const locatData= JSON.parse(localStorage.getItem("note"))  
    setAllDatas(locatData)
  } ,[])
  if (loading) {
    return <h4> Loading ........</h4>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  console.log("redux datas", allDatas);
 localStorage.setItem("shop" , JSON.stringify(allDatas))

  return (
    <div>
      <h1 className="text-center text-warning mb-3"> Ak Jilani Shoping Shop </h1>
      <Row xs={1} md={2} lg={3} className="g-4">
      {allDatas?.map(data => <CardMovie data={data} key={data.id}/> )}
      </Row>

     
    </div>
  );
};

export default MovieDataShow;
