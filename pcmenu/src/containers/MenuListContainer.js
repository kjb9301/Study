import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pcmenuActions from 'store/modules/pcmenu';
import MenuList from 'components/MenuList';
import MenuBar from 'components/MenuBar';

class MenuListContainer extends Component {
  getData = () => {
    const { PcmenuActions } = this.props;
    PcmenuActions.getMenu();
  }

  handleType = (type) => {
    console.log(type);
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    const { menuList } = this.props;
    const { handleType } = this;
    console.log(menuList);

    return (
      <Fragment>
        <MenuBar onType={handleType}/>
        <MenuList menuList={menuList}/>
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    menuList: state.pcmenu.get('list')
  }),
  (dispatch) => ({
    PcmenuActions: bindActionCreators(pcmenuActions,dispatch)
  })
)(MenuListContainer);