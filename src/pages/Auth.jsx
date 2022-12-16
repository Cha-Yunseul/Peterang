import { auth, Signup } from '../firebase';
import React, { useState } from 'react';
import {
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const Auth = () => {
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [loginUserData, setLoginUserData] = useState('');

  const [userData, setUserData] = useState(null);

  //로그인
  const Login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
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

  //로그아웃
  const Logout = async () => {
    await signOut(auth).then(() => {
      setLoginUserData('');
      console.log(auth);
      console.log('logged out');
    });
  };

  //구글로그인
  const GoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    await signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        // console.log(data); // console로 들어온 데이터 표시
        console.log(auth);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div className="flex justify-center m-10 ">
      <div className="border-4 w-max h-96 leading-10">
        <div className="text-center m-4">
          <h1 className="text-xl">Sign Up</h1>
          <input
            placeholder="Email"
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <button
            onClick={() => {
              Signup(signupEmail, signupPassword);
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="text-center m-4">
          <h1 className="text-xl">Login</h1>
          <input
            placeholder="Email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button
            onClick={() => {
              Login(loginEmail, loginPassword);
            }}
          >
            Login
          </button>
        </div>
        <div className="m-4">
          <div>
            {loginUserData ? `${loginUserData}` : null}
            {userData ? userData.displayName : null}
          </div>
        </div>
        <div className="m-4">
          <button
            className="text-l"
            onClick={() => {
              GoogleLogin();
            }}
          >
            Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
