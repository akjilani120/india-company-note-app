import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDatas } from "./Redux/SliceData";
import Row from "react-bootstrap/Row";
import CardMovie from "./CardMovie";
const MovieDataShow = () => {
  const dispatch = useDispatch();
  const { datas, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getDatas());
  }, []);
  if (loading) {
    return <h4> Loading ........</h4>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  console.log("redux datas", datas);
 const totalData = datas.meals.slice(0 , 9);

  return (
    <div>
      <h1 className="text-center text-warning mb-3"> Ak Hotel Food</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
      {totalData?.map(data => <CardMovie data={data} key={data.idMeal}/> )}
      </Row>

     
    </div>
  );
};

export default MovieDataShow;
