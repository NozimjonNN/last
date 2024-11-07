import React from "react";

import { Route, Routes } from 'react-router-dom'

import Ruxsora from "./Components/Ruxsora/Ruxsora";
import Nozimjon from "./Components/Nozimjon/Nozimjon";
import Diyorbek from "./Components/Diyorbek/Diyorbek/Diyorbek"

export default function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={ <Nozimjon /> }/>
        <Route path="/diyor" element={ <Diyorbek /> }/>
        <Route path="/ruxsoo" element={ <Ruxsora /> }/>
      </Routes>
    </>
  )
}
