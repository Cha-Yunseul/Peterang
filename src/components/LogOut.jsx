import React, { useState } from 'react';
import { authService } from '../fbase';
import { signOut } from 'firebase/auth';

function LogOut() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [loginUserData, setLoginUserData] = useState('');

  const Logout = async () => {
    await signOut(authService).then(() => {
      setLoginUserData('');
      console.log(authService);
      console.log('logged out');
    });
  };

  return (
    <>
      <button
        onClick={() => {
          Logout(loginEmail, loginPassword);
        }}
      >
        Log Out
      </button>
    </>
  );
}

export default LogOut;
