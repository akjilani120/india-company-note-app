import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../App';
import InputField from './InputField';

const UpdateNote = () => {
    const { totalData, setTotalData , updateData  } = useContext(MyContext);
    const {id} = useParams()
    const navigate = useNavigate()
    const [updateName, setUpdateName] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    const dataId = updateData.id 
    const dataDele = totalData.filter(dataDel => dataDel.id !== dataId)
     const updateMainData ={
        name : updateName,
        title : updateTitle,
        description: updateMessage
     }
     setTotalData([...dataDele , updateMainData])
     localStorage.setItem("note" , JSON.stringify([...dataDele , updateMainData]))
     navigate("/showData")
  };
    console.log("update from data" , updateData)
    return (
        <div className='d-flex justify-content-center mt-5'>
           
           <div className='update-form'>
           <form onSubmit={ handleUpdate}>
           <InputField
              require="required"
              type="text"
              name="name"
              lableName="Note name"
              placeHolder={updateData.name}
              setData={setUpdateName}
            />
            <InputField
              require="required"
              type="text"
              name="name"
              lableName="Note Title"
              placeHolder={updateData.title}
              setData={setUpdateTitle}
            />
            <InputField
              require="required"
              type="text"
              name="name"
              lableName="Note Details"
              placeHolder={updateData.description}
              setData={setUpdateMessage}
            />
            <Button className="mt-3 px-4 py-2" variant="primary" type="submit">
              Submit
            </Button>
           </form>
           </div>
        </div>
    );
};

export default UpdateNote;