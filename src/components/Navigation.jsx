// /components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="menu bg-base-100 m-2">
        <li className="menu-title flex">
          <div>게시판</div>
        </li>
        <li>
          <Link to="/list">숙소</Link>
        </li>
        <li>
          <Link to="/list">식당</Link>
        </li>
        <li>
          <Link to="/list">관광지</Link>
        </li>
        <li>
          <Link to="/list">대중교통</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
