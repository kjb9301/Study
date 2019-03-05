import React from 'react';
import './PcMenuWrapper.css';
import MenuListContainer from 'containers/MenuListContainer';
import OrderPayContainer from 'containers/OrderPayContainer';

const PcMenuWrapper = () => {
  return (
    <div className="wrapper">
      <div className="header">피시방 메뉴판</div>
      <div className="section">
        <MenuListContainer/>
      </div>
      <div className="footer">
        <OrderPayContainer/>
      </div>
    </div>
  );
};

export default PcMenuWrapper;