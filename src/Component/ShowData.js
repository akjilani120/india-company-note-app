import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import TableRowShow from "./TableRowShow";


const ShowData = () => {
  const { totalData } = useContext(MyContext);
  return (
    <div>
      <h1 className="text-center text-warning my-4">
        {totalData.length < 1
          ? "Sorry..Do not here any note"
          : "You are Note here "}
      </h1>

      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr class="table-dark">
              <th scope="col">No</th>
              <th scope="col">Note Name</th>
              <th scope="col">Note Title</th>
              <th scope="col">Note Details</th>
              <th scope="col">Delete Note</th>
              <th scope="col">Edite Note</th>
            </tr>
          </thead>
          <tbody>
          {totalData?.map((data , index) => (
          <TableRowShow data={data} key={data.id}  index={index}/>
        ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ShowData;
