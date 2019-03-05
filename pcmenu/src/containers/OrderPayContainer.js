import React, { Component, Fragment } from 'react';
import OrderList from 'components/OrderList';
import SelectPay from 'components/SelectPay';
import Payment from 'components/Payment';

class OrderPayContainer extends Component {
  render() {
    return (
      <Fragment>
        <OrderList/>
        <SelectPay/>
        <Payment/>
      </Fragment>
    );
  }
}

export default OrderPayContainer;