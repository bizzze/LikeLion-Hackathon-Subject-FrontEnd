import React, { useState } from "react";
import "./Evaluation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";

/* 변수값 저장*/
const Evaluation = () => {
  const [course, setCourse] = useState({
    lecture_name: "",
    professor_name: "",
    lecture_divide: "",
    credit_score: "",
    lecture_year: "",
    semester_divide: "",
    evaluate_title: "",
    evaluate_content: "",
    // ... other form fields
  });

  /* 변수값 넘기기*/
  const handleSubmit = (event) => {
    event.preventDefault();
    /* form data 넘겨야함*/
    // 백엔드 request api 필요.
  };

  /* 입력에 대한 변화 저장*/
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };
  /* 별 클릭 시, 별이 채워질 수*/
  const handleStarClick = (rating) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      rating,
    }));
  };
  /* 별 rating값에 따라 채우기*/
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= course.rating ? "filled" : ""}`}
          onClick={() => handleStarClick(i)}
        >
          {i <= course.rating ? (
            <FontAwesomeIcon
              icon={fasFaStar}
              size="2xl"
              style={{ color: "#f9ca1f" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={farFaStar}
              size="2xl"
              style={{ color: "#f9ca1f" }}
            />
          )}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="main">
      <form className="evaluate form_margin" onSubmit={handleSubmit}>
        <div className="container">
          <div className="box">
            <div className="label_box">
              <label>수업명</label>
            </div>
            <input
              type="text"
              name="lecture_name"
              className="input_style"
              value={course.lecture_name}
              onChange={handleChange}
            />
          </div>

          <div className="box">
            <div className="label_box">
              <label>교수님</label>
            </div>
            <input
              type="text"
              name="professor_name"
              className="input_style"
              value={course.professor_name}
              onChange={handleChange}
            />
          </div>

          <div className="box">
            <div className="label_box">
              <label>강의 구분</label>
            </div>
            <select
              name="lecture_select"
              id="lecture_select"
              className="sl-style"
              value={course.lecture_divide}
            >
              <option value="total">전체</option>
              <option value="major">전공</option>
              <option value="liberal">교양</option>
              <option value="etc">기타</option>
            </select>
          </div>

          <div className="box">
            <div className="label_box">
              <label>성적</label>
            </div>
            <select
              name="score"
              id="score"
              className="sl-style_score"
              value={course.credit_score}
            >
              <option value="4.5">A+</option>
              <option value="4">AO</option>
              <option value="3.5">B+</option>
              <option value="3">BO</option>
              <option value="2.5">C+</option>
              <option value="2">CO</option>
              <option value="1.5">D+</option>
              <option value="1">DO</option>
              <option value="0">F</option>
              <option value="pass">PASS</option>
              <option value="fail">FAIL</option>
            </select>
          </div>

          <div className="box">
            <div className="label_box">
              <label>강의 년도</label>
            </div>
            <select
              name="lecture_year"
              id="lecture_year"
              className="sl-style"
              value={course.lecture_year}
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>

          <div className="box">
            <div className="label_box">
              <label>학기</label>
            </div>
            <select
              name="semester"
              id="semester"
              className="sl-style"
              value={course.semester_divide}
            >
              <option value="first_semester">1학기</option>
              <option value="second_semester">2학기</option>
              <option value="summer_semester">여름학기</option>
              <option value="winter_semester">겨울학기</option>
            </select>
          </div>
        </div>

        <div className="write_container">
        <textarea
          className="evaluate title"
          id="evaluate_title"
          name="evaluate_title"
          placeholder="제목"
          value={course.evaluate_title}
          onChange={handleChange}
        ></textarea>

        <textarea
          className="evaluate content"
          id="evaluate_content"
          name="evaluate_content"
          placeholder="이 수업에 대한 총평을 적어주세요."
          value={course.evaluate_content}
          onChange={handleChange}
        ></textarea>
        </div>
        
        <div className="star_box">
          <div className="star-rating">{renderStars()}</div>
          <p>{course.rating}/5</p>
        </div>

        <div className="button">
          <button className="evaluate_button" type="submit">
            평가하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default Evaluation;