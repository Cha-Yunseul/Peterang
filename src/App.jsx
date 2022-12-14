import React, { useState } from 'react';

import AppRouter from './router/AppRouter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = usestate(false);
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
