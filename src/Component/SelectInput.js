import React from 'react';

const SelectInput = ({setData , value1, value2 , value3}) => {
    return (
        <div>
            <select className='form-select' name="" id="" onChange={(e) => setData(e.target.value)}>
            <option value={value1}>{value1}</option>
            <option value={value2}>{value2}</option>
            <option value={value3}>{value3}</option>
           </select>
        </div>
    );
};

export default SelectInput;