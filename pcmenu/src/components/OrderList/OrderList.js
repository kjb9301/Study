import React from 'react';
import './OrderList.css';

const OrderList = ({orderList}) => {
  const orders = orderList.map((order,index) => {
    return (
      <OrderItem
        key={index}
        order={order}
      />
    )
  })
  return (
    <div className="orderList-wrapper">
      <div>상품주문목록</div>
      <div className="order-content">
        <div><span>상품명</span></div>
        <div><span>판매금액</span></div>
        <div><span>수량</span></div>
        <div><span>최종금액</span></div>
      </div>
      {orders}
    </div>
  );
};

const OrderItem = ({onClick,order}) => {
  const { name, price, counter, total } = order;
  return (
    <div className="order-content">
      <div><span>{name}</span></div>
      <div><span>{price}원</span></div>
      <div><span>{counter}</span></div>
      <div><span>{price*counter}원</span></div>
    </div>
  );
};

export default OrderList;