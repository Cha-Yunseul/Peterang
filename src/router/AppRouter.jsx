// components/Router.js
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Navigation from '../components/Navigation';
import Navbar from '../components/Navbar';
import BoardCreate from '../components/BoardCreate';
import Footer from '../components/Footer';
import BoardList from '../components/BoardList';
import BoardView from '../pages/BoardView';

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="grid grid-cols-5 w-full h-full mt-4">
        <div className="col-span-1 flex-grow card place-items-center">
          {isLoggedIn && <Navigation />}
        </div>
        {/* <div className="divider divider-horizontal"></div> */}
        <div className="col-span-4 flex-grow card place-items-center">
          <Routes>
            {isLoggedIn ? (
              <>
                <Route exact path="/" element={<Home userObj={userObj} />} />
                <Route exact path="/create" element={<BoardCreate />} />
                <Route exact path="/list" element={<BoardList />} />
                <Route path="/view/:data" element={<BoardView />}></Route>

                <Route element={<Navigate from="*" to="/" />} />
              </>
            ) : (
              <>
                <Route exact path="/" element={<Auth />} />
                <Route element={<Navigate from="*" to="/" />} />
              </>
            )}
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
