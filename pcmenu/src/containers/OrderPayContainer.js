import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pcmenuActions from 'store/modules/pcmenu';
import OrderList from 'components/OrderList';
import SelectPay from 'components/SelectPay';
import Payment from 'components/Payment';

class OrderPayContainer extends Component {
  render() {
    const { order } = this.props;
    return (
      <Fragment>
        <OrderList order={order}/>
        <SelectPay/>
        <Payment/>
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    order: state.pcmenu.get('order'),
  }),
  (dispatch) => ({
    PcmenuActions: bindActionCreators(pcmenuActions,dispatch)
  })
)(OrderPayContainer);