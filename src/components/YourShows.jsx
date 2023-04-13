import React from "react";
import joerogan from "../assets/joerogan.jpeg";
import lexfrid from "../assets/lexfrid.jpeg";

const YourShows = () => {
  return (
    <div className="yourShows">
      <h2>Your Shows</h2>
      <div className="showContainer">
        <div className="shows">
          <img src={joerogan} />
        </div>
        <div className="shows">
          <img src={lexfrid} />
        </div>
      </div>
    </div>
  );
};

export default YourShows;
