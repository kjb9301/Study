import React from 'react';
import './SelectPay.css';

const SelectPay = () => {
  return (
    <div className="selectPay-wrapper">
      <div className="pay-method-wrapper">
        <div className="pay-method-header">결제수단선택</div>
        <div className="radio-wrapper">
          <div><input type="radio" id="cash" name="pay"/>현금</div>
          <div><input type="radio" id="card" name="pay"/>카드</div>
        </div>
      </div>
      <div className="selectbox-wrapper">
        <select disabled>
          <option value="0">---선택---</option>
          <option value="1">금액에 맞게</option>
          <option value="2">5000원</option>
          <option value="3">10000원</option>
        </select>
      </div>
      <div className="input-wrapper">
        <textarea placeholder="요청사항 입력"/>
      </div>
    </div>
  );
};

export default SelectPay;