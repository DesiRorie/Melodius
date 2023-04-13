import React from "react";
import "../App.css";
import { Button } from "@mui/material";

const Choices = () => {
  return (
    <div className="choices">
      <Button
        className="choicesButtons"
        style={{ backgroundColor: "#222", margin: "5px" }}
        variant="contained"
      >
        Music
      </Button>
      <Button
        className="choicesButtons"
        style={{ backgroundColor: "#222", margin: "5px" }}
        variant="contained"
      >
        Podcast & Shows
      </Button>
      <Button
        id="audioBooks"
        className="choicesButtons"
        style={{ backgroundColor: "#222", margin: "5px" }}
        variant="contained"
      >
        Audiobooks
      </Button>
    </div>
  );
};

export default Choices;
