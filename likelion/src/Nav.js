import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(){
  return(
    <div>
      <div className="navBar">
        <Link className="navbarMenu1" to={'/'}>Like Lion</Link>
        <Link className="navbarMenu2" to={'/Evaluation'}>수업평가</Link>
        <Link className="navbarMenu3" to={'/Mypage'}>마이페이지</Link>
        <Link to="/Login">
          <button className="loginBtn">로그인</button>
        </Link>
        <Link to="/Signin">
          <button  className="signinBtn">회원가입</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;