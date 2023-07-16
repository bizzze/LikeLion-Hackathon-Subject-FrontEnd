import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(){
  return(
    <div>
      <div className="navBar">
        <Link className="navbarMenu1">Like Lion</Link>
        <Link className="navbarMenu2" to={'/'}>수업평가</Link>
        <Link className="navbarMenu3" to={'/Mypage'}>마이페이지</Link>
        <Link to="/Login"> <button className="loginBtn">로그인</button></Link>
      </div>
    </div>
  );
}

export default Nav;