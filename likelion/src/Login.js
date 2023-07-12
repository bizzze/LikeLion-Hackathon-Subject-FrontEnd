import React, { useState } from 'react';
import './Login.css';

function LoginPage(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form">
        <div className='back'></div>
        <h2>User Login</h2>
        <p>
          <input
            className="login"
            type="text"
            name="username"
            placeholder="User ID"
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
        </p>
        <p>
          <input
            className="login"
            type="password"
            name="pwd"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </p>
        <p>
          <input className="btn" type="submit" value="Login" />
        </p>
        <p className="sign">
          계정이 없으신가요?{' '}
          <span
            style={{ textDecoration: 'underline'}}
            onClick={() => { props.setMode("SIGNIN");}}
          >
            회원가입
          </span>
        </p>
    </div>
  );
}
function SigninPage(props){
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    return (
        <div className="form">
            <h2>회원가입</h2>
            <p>
              <input
                className="login"
                type="email"
                placeholder="이메일"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </p>
            
            <p>
              <input
                className="login"
                type="text"
                placeholder="아이디"
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
            </p>
            <p>
              <input
                className="login"
                type="password"
                placeholder="비밀번호"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </p>
            <p>
              <input
                className="login"
                type="password"
                placeholder="비밀번호 확인"
                onChange={(event) => {
                  setPassword2(event.target.value);
                }}
              />
            </p>
            <p>
              <input className="btn" type="submit" value="Register" />
            </p>
            <p className="sign"  style={{ textDecoration: 'underline'}}
            onClick={() => { props.setMode("LOGIN");}}>
            로그인 화면으로 돌아가기{' '}</p>
          </div>
      );

}
function Login() {
    const [mode, setMode] = useState("LOGIN");
  
    let content = null; 

    if(mode==="LOGIN"){
      content = <LoginPage setMode={setMode}></LoginPage> 
    }
    else if (mode === 'SIGNIN') {
      content = <SigninPage setMode={setMode}></SigninPage> 
    }
  
    return (
      <>
        <div className="background">
          {content}
        </div>
      </>
    );
  }
  
export default Login;
