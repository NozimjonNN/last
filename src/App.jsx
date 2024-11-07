import React from "react";
import Nozimjon from "./Components/Nozimjon/Nozimjon";
import { Route, Routes } from 'react-router-dom'
import Ruxsora from "./Components/Ruxsora/Ruxsora";
import Diyorbek from "./Components/Diyorbek/Diyorbek/Diyorbek"
import Farruh from "./Components/Farruh/Farruh";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Nozimjon /> }/>
        <Route path="/diyor" element={ <Diyorbek /> }/>
        <Route path="/ruxsoo" element={<Ruxsora />} />
        <Route path="/farrux" element={ <Farruh /> }/>
      </Routes>
    </>
  );
}
