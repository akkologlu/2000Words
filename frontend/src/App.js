import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import FavWord from "./components/FavWord";
import Navbar from "./components/NavBar";
import "./App.css";
function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wordList" element={<FavWord />} />
      </Routes>
    </div>
  );
}

export default App;
