import React, { useContext, useState } from "react";
import ModalShow from "./Modal";
import { MyContext } from "../App";
const TableRowShow = ({ data, index }) => {
  const { totalData, setTotalData } = useContext(MyContext);
  const { name, title, description, id } = data;
  const handleDelete = () => {
    const deleteData = totalData.filter((del) => del.id !== id);
    localStorage.setItem("note" , JSON.stringify(deleteData))
   
    setTotalData(deleteData);
  };

  return (
    <tr>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>{title}</td>
          <td>{description}</td>
          <td>
          <button onClick={handleDelete} className="btn btn-danger">
             Delete
         </button>
          </td>
          <td>
          <button
          type="button"
          class="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          update
        </button>
          </td>
         
     </tr>
       
    // <tr>
    //   <th scope="row">{index + 1}</th>
    //   <td>{name}</td>
    //   <td>{title}</td>
    //   <td>{description}</td>
    //   <td>
    //     <button onClick={handleDelete} className="btn btn-danger">
    //       Delete
    //     </button>
    //   </td>
    //   <td>
    //     <button
    //       type="button"
    //       class="btn btn-warning"
    //       data-bs-toggle="modal"
    //       data-bs-target="#exampleModal"
    //     >
    //       update
    //     </button>
    //     <ModalShow data={data} />
    //   </td>
    // </tr>
  );
};

export default TableRowShow;
