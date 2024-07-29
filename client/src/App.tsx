import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Data from "./views/Data/Data";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  );
}

export default App;
