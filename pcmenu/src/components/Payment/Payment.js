import React from 'react';
import './Payment.css';

const Payment = () => {
  return (
    <div className="payment-wrapper">
      <div className="total-price"><span>0원</span></div>
      <div className="pay-btn">
        <button>상품 주문하기</button>
      </div>
    </div>
  );
};

export default Payment;