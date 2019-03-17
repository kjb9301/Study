import React from 'react';
import './OrderList.css';

const OrderList = ({orderList, onCount}) => {
  const orders = orderList.map((order,index) => {
    return (
      <OrderItem
        key={index}
        order={order}
        onCount={onCount}
      />
    )
  })
  return (
    <div className="orderList-wrapper">
      <div className="orderList-header">상품주문목록</div>
      <div className="order-wrapper">
        <div className="order-text">
          <div><span>상품명</span></div>
          <div><span>판매금액</span></div>
          <div><span>수량</span></div>
          <div><span>최종금액</span></div>
        </div>
        <div className="order-content">
          {orders}
        </div>
      </div>
    </div>
  );
};

const OrderItem = ({order,onCount}) => {
  const { id, name, price, counter } = order;
  const priceSum = price * counter;
  
  return (
    <div className="order-item">
      <div><span>{name}</span></div>
      <div><span>{price}원</span></div>
      <div className="item-count">
        <span className="count-cal" onClick={()=>onCount(id,priceSum,"-")}>-</span>
        <span className="count-text">{counter}</span>
        <span className="count-cal" onClick={()=>onCount(id,priceSum,"+")}>+</span>
      </div>
      <div><span>{priceSum}원</span></div>
    </div>
  );
};

export default OrderList;