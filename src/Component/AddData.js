import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
const AddData = () => {
  const { totalData, setTotalData } = useContext(MyContext);
  const navigate = useNavigate();
  const [noteName, setNoteName] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [check , setCheck] = useState("check")
  console.log("check" , check)
  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = parseInt(Math.random() * 1200000);
    const data = {
      name: noteName,
      title: noteTitle,
      description: noteDescription,
      check : check ,
      id: uniqueId,
    };
    setTotalData([...totalData, data]);   
    localStorage.setItem("note" , JSON.stringify([...totalData, data]))
       
    navigate("/showData");
  };
  return (
    <div>
      <h1 className="text-center text-primary mt-5">Add Note</h1>
      <div className="form-body d-flex justify-content-center mt-5">
        <div className="form-main">
          <form onSubmit={handleSubmit}>
            <InputField
              require="required"
              type="text"
              name="name"
              lableName="Note Name"
              value="name"
              setData={setNoteName}
            />
            <InputField
              require="required"
              type="text"
              name="name"
              lableName="Note Title"
              value="phone"
              setData={setNoteTitle}
            />
            <InputField
              require="required"
              type="text"
              name="name"
              lableName="Note Details"
              value="address"
              setData={setNoteDescription}
            />
          <SelectInput className="" setData={setCheck} value1="Check" value2="Read" value3="Write" />
            <Button className="mt-3 px-4 py-2" variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddData;
