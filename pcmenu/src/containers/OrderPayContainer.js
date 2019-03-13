import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pcmenuActions from 'store/modules/pcmenu';
import OrderList from 'components/OrderList';
import SelectPay from 'components/SelectPay';
import Payment from 'components/Payment';

class OrderPayContainer extends Component {
  render() {
    const { orderList } = this.props;
    console.log(orderList)
    return (
      <Fragment>
        <OrderList/>
        <SelectPay/>
        <Payment/>
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    orderList: state.pcmenu.get('orderList')
  }),
  (dispatch) => ({
    PcmenuActions: bindActionCreators(pcmenuActions,dispatch)
  })
)(OrderPayContainer);