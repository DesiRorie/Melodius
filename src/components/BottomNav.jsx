import React from "react";
import "../App.css";
import { Link, Route, Routes } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="bottomNav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">Search</Link>
        </li>
        <li>
          <Link to="/">Your Library</Link>
        </li>
      </ul>
    </div>
  );
};
export default BottomNav;
