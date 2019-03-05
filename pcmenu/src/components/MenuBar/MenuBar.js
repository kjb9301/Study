import React, { Fragment } from 'react';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <div className="menuBar-wrapper">
      <ul>
        <li>전체</li>
        <li>라면류</li>
        <li>음료류</li>
        <li>스낵류</li>
      </ul>
    </div>
  );
};

export default MenuBar;