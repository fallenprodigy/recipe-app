import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine" element={<Cuisine />} />
      </Routes>
    </Router>
  );
};

export default Pages;
