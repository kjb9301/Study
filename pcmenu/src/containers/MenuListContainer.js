import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pcmenuActions from 'store/modules/pcmenu';
import MenuList from 'components/MenuList';
import MenuBar from 'components/MenuBar';

class MenuListContainer extends Component {
  render() {
    const {list} = this.props;
    console.log(list)
    return (
      <Fragment>
        <MenuBar/>
        <MenuList/>
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    list: state.pcmenu.get('list')
  }),
  (dispatch) => ({
    PcmenuActions: bindActionCreators(pcmenuActions,dispatch)
  })
)(MenuListContainer);