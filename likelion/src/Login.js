import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Login.css';


function LoginPage(props) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form">
      <div className="back"></div>
      <h2>로그인</h2>
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
        <input
          className="btn"
          type="submit"
          value="Login"
          onClick={() => {
            const userData = {
              userId: id,
              userPassword: password,
            };
            fetch('http://localhost:3000/login', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(userData),
            })
              .then((res) => res.json)
              .then((json) => {
                if (json.isLogin === 'True') {
                  props.setMode('WELCOME');
                } else {
                  alert(json.isLogin);
                }
              });
          }}
        />
      </p>
      <p className="sign">
        계정이 없으신가요?{' '}
        <span
          style={{ textDecoration: 'underline' }}
          onClick={() => {
            props.setMode('SIGNIN');
          }}
        >
          회원가입
        </span>
      </p>
    </div>
  );
}

function SigninPage(props) {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [passwordMatched, setPasswordMatched] = useState(true); // 비밀번호 일치 여부를 저장하는 상태값

  const onChangePasswordConfirm = (event) => {
    const currentPasswordConfirm = event.target.value;
    setPassword2(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다!');
      setPasswordMatched(false);
    } else {
      setPasswordConfirmMessage('비밀번호가 일치합니다!');
      setPasswordMatched(true);
    }
  };

  return (
    <div className="form" >
      <h2>회원가입</h2>
      <p>
        <input
          className="login"
          type="email"
          placeholder="이메일"
          onChange={(event) => {
            setEmail(event.target.value);
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
          onChange={onChangePasswordConfirm}
        />
      </p>
      <p className="pwdConfirm" style={{textAlign: 'left',marginLeft:"50px",marginTop:"0px",fontSize: '13px',color: passwordMatched ? '#008E63' : '#FF2626' }}>
        {passwordConfirmMessage}
      </p>
      <p>
        <input
          className="btn"
          type="submit"
          value="Register"
          onClick={() => {
            const userData = {
              userEmail:email,
              userID: id,
              userPassword: password
            };
            fetch('http://localhost:3000/signin', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(userData),
            })
              .then((res) => res.json())
              .then((json) => {
                if (json.isSuccess === 'True') {
                  alert('회원가입이 완료되었습니다!');
                  props.setMode('LOGIN');
                } else {
                  alert(json.isSuccess);
                }
              });
          }}
        />
      </p>
      <p
        className="sign"
        style={{ textDecoration: 'underline' }}
        onClick={() => {
          props.setMode('LOGIN');
        }}
      >
        로그인 화면으로 돌아가기{' '}
      </p>
    </div>
  );
}

function Login() {
  const [mode, setMode] = useState('LOGIN');
  const location = useLocation();
  const isLoginPage = location.pathname === '/Login'; // 현재 페이지가 로그인 페이지인지 확인

  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태값

  useEffect(() => {
    fetch('http://localhost:3000/authcheck')
      .then((res) => res.json())
      .then((json) => {
        if (json.isLogin === 'True') {
          setIsLoggedIn(true); // 로그인 상태 갱신
          setMode('WELCOME');
        } else {
          setIsLoggedIn(false); // 로그인 상태 갱신
          setMode('LOGIN');
        }
      });
  }, []);

  let content = null;

  if (mode === 'LOGIN') {
    content = <LoginPage setMode={setMode}></LoginPage>;
  } else if (mode === 'SIGNIN') {
    content = <SigninPage setMode={setMode}></SigninPage>;
  } else if (mode === 'WELCOME') {
    content = <Link to="/"></Link>;
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="background">{content}</div>
    </>
  );
}

export default Login;
