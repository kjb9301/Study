import React, { Fragment } from 'react';
import './MenuBar.css';

const MenuBar = ({onType}) => {
  return (
    <div className="menuBar-wrapper">
      <ul>
        <li onClick={() => onType("")}>전체</li>
        <li onClick={() => onType("ramen")}>라면류</li>
        <li onClick={() => onType("drink")}>음료류</li>
        <li onClick={() => onType("snack")}>스낵류</li>
      </ul>
    </div>
  );
};

export default MenuBar;