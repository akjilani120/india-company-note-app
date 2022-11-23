import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import TableRowShow from "./TableRowShow";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import InputField from "./InputField";

const ShowData = () => {
  const { totalData } = useContext(MyContext);
  const [searchItems, setSearchItems] = useState("")
  console.log("search value" , searchItems)
  return (
    <div>
       {
        totalData.length  < 1 ?
          "" : <div className="search-field-main">
          <InputGroup className="mb-3">
           <InputGroup.Text className="bg-primary text-white" id="inputGroup-sizing-default" disabled>
             Search 
           </InputGroup.Text>
           <Form.Control onChange={(e)=> setSearchItems(e.target.value)} placeholder="Search Note"
             aria-label="Large"
             aria-describedby="inputGroup-sizing-sm"
           />
         </InputGroup>
              
          </div>
       }
       <div>
       {totalData.length < 1
          ? <h1 className="text-center text-warning my-4">Sorry..Do not here any note</h1>
          : <Table responsive striped>
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
          {totalData?.filter(value => {
            if(searchItems == ""){
              return value
            }else if(value.name.toLowerCase().includes(searchItems.toLowerCase())){
              return   value
            }
          })
          .map((data , index) => (
              <TableRowShow data={data} key={data.id}  index={index}/>
            ))}
          </tbody>
        </Table>} 
       </div>
     
      
     
      
    </div>
  );
};

export default ShowData;
