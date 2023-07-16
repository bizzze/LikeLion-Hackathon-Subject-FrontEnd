import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import Evaluation from "./Evaluation";
import Mypage from "./Mypage";
import Home from "./Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태값

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleWithdraw = () => {
    // 회원탈퇴 로직 구현
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/"element={<><Nav /><Home /></>}/>
          <Route path="/Evaluation" element={<><Nav /><Evaluation /></>}/>
          <Route path="/Mypage"element={<><Nav /><Mypage /></>}/>
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        </Routes>

        {isLoggedIn ? (
          <Nav onLogout={handleLogout} onWithdraw={handleWithdraw} />
        ) : null}
      </div>
    </BrowserRouter>
  );
}

export default App;
