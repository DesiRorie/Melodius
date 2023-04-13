import "./App.css";
import BottomNav from "./components/BottomNav";

import Home from "./Home";
import { Link, Route, Routes } from "react-router-dom";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Melodius/test" element={<Test />} />
        </Routes>

        <BottomNav />
      </>
    </div>
  );
}

export default App;
