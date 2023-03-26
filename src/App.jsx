import "./App.css";
import Choices from "./components/Choices";
import Navbar from "./components/Navbar";
import Suggestion from "./components/Suggestion";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Choices />
      <Suggestion />
    </div>
  );
}

export default App;
