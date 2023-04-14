import React from "react";
import "../App.css";
import theWeeknd from "../assets/theWeeknd.jpeg";
import drakeImage from "../assets/drake.jpeg";
import karolG from "../assets/karolG.jpeg";
import tyler from "../assets/tyler.jpeg";
import lexfrid from "../assets/lexfrid.jpeg";
import joerogan from "../assets/joerogan.jpeg";

const Suggestion = () => {
  return (
    <div className="suggestions">
      <div className="suggestionBox">
        <img src={drakeImage} />
        <h4>Drake</h4>
      </div>
      <div className="suggestionBox">
        <img src={theWeeknd} />
        <h4>The Weeknd</h4>
      </div>
      <div className="suggestionBox">
        <img src={karolG} />
        <h4>Karol G</h4>
      </div>
      <div className="suggestionBox">
        <img src={tyler} />
        <h4>Tyler The Creator</h4>
      </div>
      <div className="suggestionBox">
        <img src={lexfrid} />
        <h4>Lex Fridman</h4>
      </div>
      <div className="suggestionBox">
        <img src={joerogan} />
        <h4>Joe Rogan</h4>
      </div>
    </div>
  );
};

export default Suggestion;
