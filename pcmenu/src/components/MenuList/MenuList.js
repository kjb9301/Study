import React from 'react';
import './MenuList.css';

const MenuList = ({menuList, onClick}) => {
  const menues = menuList.map((menu) => {
    const { id } = menu;
    return (
      <MenuItem
        key={id}
        onClick={onClick}
        menu={menu}
      />
    )
  })
  return (
    <div className="menuList-wrapper">
      {menues}
    </div>
  );
};

const MenuItem = ({onClick,menu}) => {
  const { name, price, img } = menu;
  return (
    <div className="item-wrapper">
      <div className="item-img"><img src={img} alt={name}/></div>
      <div className="item-bottom">
        <div className="item-text">
          <div className="item-name"><span>{name}</span></div>
          <div className="item-price"><span>{price}원</span></div>
        </div>
        <div className="item-btn">
          <button onClick={() => onClick(menu)}>담기</button>
        </div>
      </div>
    </div>
  );
};


export default MenuList;