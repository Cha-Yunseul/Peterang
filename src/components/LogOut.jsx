import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { useNavigate } from 'react-router';

function LogOut() {
  let navigate = useNavigate();

  const onLogOutClick = () => {
    signOut(auth);
    navigate('/');
  };

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
}

export default LogOut;
