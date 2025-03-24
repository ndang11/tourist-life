import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PackagePage from "./pages/PackagePage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import { useState } from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Chatbot from "./component/Chatbot";
import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
    <div className={darkMode ? "dark-mode" : ""}></div>
      <Banner />
      <Header />
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/package" element={<PackagePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Chatbot/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
