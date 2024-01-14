import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Photoview from "./components/Photoview";
import Viewjobs from "./components/Viewjobs";
import Imageupload from "./components/Imageupload";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Photoview" element={<Photoview />} />
        <Route path="/Viewjobs" element={<Viewjobs />} />
        <Route path="/image" element={<Imageupload />} />
      </Routes>
    </Router>
  );
}

export default App;
