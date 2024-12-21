import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./src/Login"
import Dashboard from "./src/Dashboard"


const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default Allroutes
