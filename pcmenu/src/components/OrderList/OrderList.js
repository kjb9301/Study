import React from 'react';
import './OrderList.css';

const OrderList = () => {
  return (
    <div className="orderList-wrapper">
      <div>상품주문목록</div>
      <div className="order-content">
        <div><span>상품명</span></div>
        <div><span>판매금액</span></div>
        <div><span>수량</span></div>
        <div><span>최종금액</span></div>
      </div>
    </div>
  );
};

export default OrderList;