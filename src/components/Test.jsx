import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useMediaQuery from "@mui/material/useMediaQuery";
import Genres from "./Genres";

const Test = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <div className="searchDiv">
        {isMobile && <h2>Search</h2>}
        {!isMobile && <ArrowBackIosNewIcon />}
        {!isMobile && <ArrowForwardIosIcon />}
        <input
          className="searchInput"
          placeholder="What do you want to listen to?"
        />
      </div>{" "}
      <Genres />
    </>
  );
};

export default Test;
