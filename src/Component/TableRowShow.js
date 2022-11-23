import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
const TableRowShow = ({ data, index }) => {
  const navigate = useNavigate()
  const { totalData, setTotalData, setUpdateData } = useContext(MyContext);
  const { name, title, description, id } = data;
  const handleDelete = () => {
    const deleteData = totalData.filter((del) => del.id !== id);
    localStorage.setItem("note" , JSON.stringify(deleteData))
   
    setTotalData(deleteData);
  };
  
const handleUpdate =(id) =>{
  setUpdateData(data)
  navigate(`/updateNote/${id}`)
}
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
         onClick={() =>handleUpdate(id)}
        >
          update
        </button>
          </td>
         
     </tr>       
    
  );
};

export default TableRowShow;
