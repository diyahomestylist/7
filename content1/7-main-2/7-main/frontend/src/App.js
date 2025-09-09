import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JusmomoHome from "./pages/JusmomoHome";
import JusmomoMenu from "./pages/JusmomoMenu";
import JusmomoAbout from "./pages/JusmomoAbout";
import JusmomoContact from "./pages/JusmomoContact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JusmomoHome />} />
          <Route path="/menu" element={<JusmomoMenu />} />
          <Route path="/about" element={<JusmomoAbout />} />
          <Route path="/contact" element={<JusmomoContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;