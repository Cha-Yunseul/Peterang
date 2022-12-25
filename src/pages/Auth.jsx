import { authService } from '../fbase';
import React, { useState } from 'react';
import {
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPassword2, setSignupPassword2] = useState('');
  const [signupPasswordCheck, setSignupPasswordCheck] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [loginUserData, setLoginUserData] = useState('');

  const [userData, setUserData] = useState(null);

  //비밀번호 체크
  const PasswordCheck = async (password, password2) => {
    if (password == password2) {
      setSignupPasswordCheck(true);
      alert('비밀번호가 일치합니다.');
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  //회원가입
  const Signup = async (email, password) => {
    if (signupPasswordCheck == true) {
      try {
        const user = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
        console.log(user);
        cosole.log('logged in');
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    } else {
    }
  };

  //로그인
  const Login = async (email, password) => {
    await signInWithEmailAndPassword(authService, email, password)
      .then((data) => {
        setLoginUserData(data.user.email);
        console.log(loginUserData);
        console.log('logged in');
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  // //로그아웃
  // const Logout = async () => {
  //   await signOut(authService).then(() => {
  //     setLoginUserData('');
  //     console.log(authService);
  //     console.log('logged out');
  //   });
  // };

  //구글로그인
  const GoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    await signInWithPopup(authService, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        // console.log(data); // console로 들어온 데이터 표시
        console.log(authService);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div className="justify-center m-10 grid grid-cols-4 w-full h-[32rem] mt-20">
      <div className="border-4 h-full leading-10 flex flex-col w-full lg:flex-row col-span-3">
        <div className="text-center m-4 grid flex-grow bg-base-300 rplace-items-center">
          <div className="">
            <h1 className="text-xl font-bold mt-8">회원가입</h1>
          </div>
          <input
            placeholder="Email"
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <input
            placeholder="Password check"
            type="password"
            onChange={(e) => setSignupPassword2(e.target.value)}
          />
          <button
            className="font-bold"
            onClick={() => {
              PasswordCheck(signupPassword, signupPassword2);
            }}
          >
            Password Check
          </button>
          <button
            className="font-bold"
            onClick={() => {
              Signup(signupEmail, signupPassword);
            }}
          >
            Sign Up
          </button>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="text-center m-4 grid flex-grow bg-base-300 place-items-center">
          <h1 className="text-xl w-full font-bold">로그인</h1>
          <input
            className="w-full h-full"
            placeholder="Email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            className="w-full h-full"
            placeholder="Password"
            type="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button
            className="font-bold"
            onClick={() => {
              Login(loginEmail, loginPassword);
            }}
          >
            Log in
          </button>

          <button
            className="text-l font-bold"
            onClick={() => {
              GoogleLogin();
            }}
          >
            Google Login
          </button>

          {/* <div className="">
            <div>
              {loginUserData ? `${loginUserData}` : null}
              {userData ? userData.displayName : null}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Auth;
