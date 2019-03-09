import React from 'react';
import './MenuList.css';

const MenuList = ({menuList}) => {
  const menues = menuList.map((menu) => {
    const { id, name, price, img, count } = menu;
    return (
      <MenuItem
        key={id}
        menu_name={name}
        menu_price={price}
        menu_img={img}
        menu_count={count}
      />
    )
  })
  return (
    <div className="menuList-wrapper">
      {menues}
    </div>
  );
};

const MenuItem = ({menu_name,menu_price,menu_img,menu_count}) => {
  return (
    <div className="item-wrapper">
      <div className="item-name"><span>{menu_name}</span></div>
      <div className="item-img"><img src={menu_img} alt={menu_name}/></div>
      <div className="item-bottom">
        <div className="item-count">{menu_count}</div>
        <div className="item-price">{menu_price}</div>
      </div>
    </div>
  );
};


export default MenuList;