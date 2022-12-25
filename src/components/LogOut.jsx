import React from 'react';
import { authService } from '../fbase';
// import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';

function LogOut() {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    console.log(authService);
    console.log('logged out');

    navigate('/');
  };

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
}

export default LogOut;
