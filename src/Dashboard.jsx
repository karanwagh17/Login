import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const token = location.state?.token || "No token available";
  const logout =()=>{
    localStorage.removeItem("token");
    navigate("/");
    
  }

  return (
    <div  style={{ marginLeft : '250%' ,  paddingBottom : '90px'}}>
      <h1>Dashboard</h1>
      <h3>Token: {token}</h3>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Dashboard;