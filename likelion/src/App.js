import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import Evaluation from "./Evaluation";
import Mypage from "./Mypage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/"element={<><Nav /><Evaluation /></>}/>
          <Route path="/Mypage"element={<><Nav /><Mypage /></>}/>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
