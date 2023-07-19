import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function Home() {
  const location = useLocation();
  const courseInfo = { ...location.state };
  const navigate = useNavigate();

  function handleDelete(e) {
    if (e) {
      e.preventDefault();

      delete e.returnValue;
    }

    navigate({ ...navigate.location, state: undefined, replace: true });
  }

  const handleEdit = () => {
    navigate("/Edit", { state: { ...location.state } });
  };

  return (
    <div className="home-container">
      <form className="search-form">
        <input type="text" placeholder="수업 평가 검색하기" />
      </form>
      <div className="header">
        <h1 className="evaluation-title">수업 평가</h1>
        <Link to="/Evaluation" className="writeBtn">
          평가하기
        </Link>
      </div>

      <p className="text">아직 작성된 수업 평가가 없습니다.</p>

      <div className="evaluate_box">
        <div className="title_box">
          <span>{courseInfo.evaluate_title}</span>
        </div>
        <div className="noneTitle_box">
          <span>{courseInfo.lecture_name}</span>
          <span>{courseInfo.professor_name}</span>
          <div className="star_box">
            <FontAwesomeIcon icon={fasFaStar} style={{ color: "#f9ca1f" }} />
            <span>{courseInfo.rating}</span>
          </div>
          <div className="button_box">
            <button className="btn edit" onClick={handleEdit}>
              수정
            </button>
            <button className="btn delete" onClick={handleDelete}>
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
