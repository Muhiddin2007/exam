import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ElonMain from "./components/ElonMain";
import { Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [useActive, setUseActive] = useState({});
  const [useSecondActive, setSecondUseActive] = useState({});
  const [useThirdActive, setThirdUseActive] = useState({});
  const onActives = (state) => {
    setUseActive(state);
  };
  const onSecondActives = (state) => {
    setSecondUseActive(state);
  };
  const onThirdActives = (state) => {
    setThirdUseActive(state);
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={
              <Main
                onActives={onActives}
                useActive={useActive}
                useSecondActive={useSecondActive}
                onSecondActives={onSecondActives}
                onThirdActives={onThirdActives}
                useThirdActive={useThirdActive}
              />
            }
          />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/elon" element={<ElonMain />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
