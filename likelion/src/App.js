import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";
import Evaluation from "./Evaluation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/"element={<><Nav /><Home /></>}/>
          <Route path="/Evaluation"element={<><Nav /><Evaluation /></>}/>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
