import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <form className="search-form">
        <input type="text" placeholder="수업 평가 검색하기" />
      </form>
      <div className="header">
        <h1 className="evaluation-title">수업 평가</h1>
        <Link to="/Evaluation" className="writeBtn">평가하기</Link>
      </div>
      <p className="text">아직 작성된 수업 평가가 없습니다.</p>
    </div>
  );
}

export default Home;
