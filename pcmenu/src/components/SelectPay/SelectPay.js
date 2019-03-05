import React from 'react';
import './SelectPay.css';

const SelectPay = () => {
  return (
    <div className="selectPay-wrapper">
      <div className="pay-method-wrapper">
        <div className="pay-method-header">결제수단선택</div>
        <div className="radio-wrapper">
          <input type="radio"/> 현금
          <input type="radio"/> 카드
        </div>
      </div>

      <div className="selectbox-wrapper">
        <select>
          <option>금액에 맞게</option>
          <option>5000원</option>
          <option>10000원</option>
        </select>
      </div>

      <div className="input-wrapper">
        <input type="text" placeholder="요청사항 입력"/>
      </div>
    </div>
  );
};

export default SelectPay;