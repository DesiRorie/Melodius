import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

import Choices from "./components/Choices";
import Suggestion from "./components/Suggestion";
import YourShows from "./components/YourShows";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Choices />
      <Suggestion />
      <YourShows />
    </div>
  );
};

export default Home;
