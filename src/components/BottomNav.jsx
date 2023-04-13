import React from "react";
import "../App.css";
import { Link, Route, Routes } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="bottomNav">
      <ul>
        <li>
          <Link to="/Melodius/">Home</Link>
        </li>
        <li>
          <Link to="/Melodius/test">Search</Link>
        </li>
        <li>
          <Link to="/Melodius/">Your Library</Link>
        </li>
      </ul>
    </div>
  );
};
export default BottomNav;
