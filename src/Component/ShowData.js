import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import TableRowShow from "./TableRowShow";
import Table from 'react-bootstrap/Table';
import SelectInput from "./SelectInput";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const ShowData = () => {
  const { totalData } = useContext(MyContext);
  const [searchItems, setSearchItems] = useState("")
  const[ nameSearch , setNameSearch] = useState("")
  const handleReset =() =>{
    setSearchItems("")
    setNameSearch("")
  }
  
  return (
    <div>
       {
        totalData.length  < 1 ?
          "" : <div className="search-field-main d-md-flex justify-content-aroud">
             <div>
             <SelectInput className="form-section search-select " setData={setSearchItems} value1="Check" value2="Read" value3="Write" />
             </div>
             <div>
              <InputGroup className="">
        <InputGroup.Text className="ms-4 bg-primary text-white" id="inputGroup-sizing-default">
          Search 
        </InputGroup.Text>
        <Form.Control onChange={(e) =>setNameSearch(e.target.value) }
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
             </div>
           <div>
           <button onClick={handleReset} className="btn btn-primary ms-3">Reset</button>   
           </div>
          </div>
       }
       <div>
       {totalData.length < 1
          ? <h1 className="text-center text-warning my-4">Sorry..Do not here any note</h1>
          : <Table responsive striped>
          <thead >
            <tr className="table-dark text-center">
              <th>No</th>
              <th>Note Name</th>
              <th>Note Title</th>
              <th>Note Details</th>
              <th>Checking</th>
              <th>Delete Note</th>
              <th>Edite Note</th>
             
            </tr>
          </thead>
          <tbody>
          {totalData?.filter(value => {
            if(searchItems ===""){
              return value
            }else if(value.check.toLowerCase().includes(searchItems.toLowerCase())){
              return   value
            }
          })
          .filter(value => {
            if(nameSearch ===""){
              return value
            }else if(value.name.toLowerCase().includes(nameSearch.toLowerCase())){
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
