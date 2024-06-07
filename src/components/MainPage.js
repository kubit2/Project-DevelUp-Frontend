import React from "react";
import "../styles.css";
import { Outlet } from "react-router-dom";

function MainPage() {
  return (
    <div className="main-container">
      <div className="content"></div>
      <Outlet />
    </div>
  );
}

export default MainPage;
