import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

import Choices from "./components/Choices";
import Suggestion from "./components/Suggestion";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Choices />
      <Suggestion />
    </div>
  );
};

export default Home;
