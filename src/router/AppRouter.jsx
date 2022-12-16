import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BoardCreate from '../components/BoardCreate';

function AppRouter({ isLoggedIn }) {
  return (
    <BrowserRouter>
      <Navbar />
      {isLoggedIn && <Navigation />}

      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<BoardCreate />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
