import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import TableRowShow from "./TableRowShow";
import Table from 'react-bootstrap/Table';

const ShowData = () => {
  const { totalData } = useContext(MyContext);
  return (
    <div>
      <h1 className="text-center text-warning my-4">
        {totalData.length < 1
          ? "Sorry..Do not here any note"
          : "You are Note here "}
      </h1>
      <Table responsive striped>
      <thead >
        <tr className="table-dark">
          <th>No</th>
          <th>Note Name</th>
          <th>Note Title</th>
          <th>Note Details</th>
          <th>Delete Note</th>
          <th>Edite Note</th>
         
        </tr>
      </thead>
      <tbody>
      {totalData?.map((data , index) => (
          <TableRowShow data={data} key={data.id}  index={index}/>
        ))}
      </tbody>
    </Table>
     
      
    </div>
  );
};

export default ShowData;
