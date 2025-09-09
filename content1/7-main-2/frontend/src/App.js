import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FranchisePage from "./pages/FranchisePage";
import NewsPage from "./pages/NewsPage";
import OutletsPage from "./pages/OutletsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/outlets" element={<OutletsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;