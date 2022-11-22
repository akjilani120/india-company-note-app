import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import InputField from "./InputField";

const ModalShow = ({ data }) => {

    const {totalData , setTotalData} = useContext(MyContext)
  const [updateName, setUpdateName] = useState(data.name);
  const [updateTitle, setUpdateTitle] = useState(data.title);
  const [updateMessage, setUpdateMessage] = useState(data.description);

  const handleUpdate = () => {
    const dataId = data.id 
    const dataDele = totalData.filter(dataDel => dataDel.id !== dataId)
     const updateMainData ={
        name : updateName,
        title : updateTitle,
        description: updateMessage
     }
     setTotalData([...dataDele , updateMainData])
     localStorage.setItem("note" , JSON.stringify([...dataDele , updateMainData]))
  };
  return (
    <div
      class="modal fade text-dark"
      id="exampleModal"
      tabindex="-3"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Note Update
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <InputField
              require="required"
              type="text"
              name="name"
              lableName="Note name"
              value="name"
              setData={setUpdateName}
            />
            <InputField
              require="required"
              type="text"
              name="name"
              lableName="Note Title"
              value="phone"
              setData={setUpdateTitle}
            />
            <InputField
              require="required"
              type="text"
              name="name"
              lableName="Note Details"
              value="address"
              setData={setUpdateMessage}
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary" 
              data-bs-dismiss="modal"             
              onClick={handleUpdate}
            >
              Save Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalShow;
