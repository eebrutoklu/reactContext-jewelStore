import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";
import Header from "./components/Header";

// Define the functional component named App
const App = () => {
  // Return JSX markup
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Basket" element={<BasketPage />} />
        </Routes>
      </Router>
    </>
  );
};

// Export the App component as the default export of this module
export default App;
