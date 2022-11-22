import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddData from "./Component/AddData";
import Home from "./Component/Home";
import ShowData from "./Component/ShowData";

export const MyContext = createContext([]);

function App() {
  const [totalData, setTotalData] = useState([]);
  
  useEffect(() =>{
    const locatData= JSON.parse(localStorage.getItem("note"))  
    setTotalData(locatData)
  } , [])
  return (
    <MyContext.Provider value={{ totalData,  setTotalData }}>
      <Routes>
        <Route element={<Home />} path="/">
          <Route
            index
            element={
              <AddData  />
            }
          ></Route>
          <Route
            path="showData"
            element={<ShowData  />}
          ></Route>
        </Route>
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
