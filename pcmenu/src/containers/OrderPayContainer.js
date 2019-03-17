import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pcmenuActions from 'store/modules/pcmenu';
import OrderList from 'components/OrderList';
import SelectPay from 'components/SelectPay';
import Payment from 'components/Payment';

class OrderPayContainer extends Component {
  countUp = () => {

  }

  countDown = () => {

  }

  handleCount = (id,total,sign) => {
    const { PcmenuActions } = this.props;
    let { orderList } = this.props;
    let newArr = orderList.slice();
    const index = newArr.findIndex(order => order.id === id);
    sign === "+" ? newArr[index].counter++ : newArr[index].counter--;
    newArr = newArr.filter(order => order.counter !== 0);
    orderList = [
      ...newArr.slice(0,index),
      newArr[index],
      ...newArr.slice(index+1, newArr.length)
    ];
    PcmenuActions.setOrder(orderList);
    PcmenuActions.setTotalPrice(total);
  }

  render() {
    const { orderList, totalPrice } = this.props;
    const { handleCount } = this;
    return (
      <Fragment>
        <OrderList orderList={orderList} onCount={handleCount}/>
        <SelectPay/>
        <Payment totalPrice={totalPrice}/>
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    orderList: state.pcmenu.get('orderList'),
    totalPrice: state.pcmenu.get('totalPrice')
  }),
  (dispatch) => ({
    PcmenuActions: bindActionCreators(pcmenuActions,dispatch)
  })
)(OrderPayContainer);