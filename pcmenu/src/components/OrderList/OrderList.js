import React from 'react';
import './OrderList.css';

const OrderList = ({order}) => {
  return (
    <div className="orderList-wrapper">
      <div>상품주문목록</div>
      <div className="order-content">
        <div><span>상품명</span></div>
        <div><span>판매금액</span></div>
        <div><span>수량</span></div>
        <div><span>최종금액</span></div>
      </div>
      <div className="order-content">
        <div><span>{order.name}</span></div>
        <div><span>{order.price}</span></div>
        <div><span>{order.count}</span></div>
        <div><span>{order.total}</span></div>
      </div>
    </div>
  );
};

export default OrderList;