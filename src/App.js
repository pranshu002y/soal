import "./App.css";
import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
  return (
    <div className="w-full h-full bg-zinc-800 relative">
      <Background />
      <Foreground/>
    </div>
  );
}

export default App;
