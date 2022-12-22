import React from 'react';

import { Logout } from '../pages/Auth';

function LogOut() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <>
      <button
        onClick={() => {
          Logout(loginEmail, loginPassword);
        }}
      >
        Login
      </button>
      ;
    </>
  );
}

export default LogOut;
