import React from "react";

const InputField = ({ setData, type, name, lableName,  placeHolder }) => {
  return (
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">
        {lableName}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        className="form-control"
        onChange={(e) => setData(e.target.value)}
        required
      />
    </div>
  );
};

export default InputField;
