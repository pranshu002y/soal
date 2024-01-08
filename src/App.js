import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Photoview from "./components/Photoview";
import Viewjobs from "./components/Viewjobs";
function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/Photoview" element={<Photoview />} />
        <Route path="/Viewjobs" element={<Viewjobs />} />

      </Routes>
    </Router>
  );
}

export default App;
