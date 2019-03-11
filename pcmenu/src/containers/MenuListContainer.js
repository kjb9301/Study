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
    const { PcmenuActions } = this.props;
    PcmenuActions.getType(type);
  }

  handleClick = (menu) => {
    const { PcmenuActions } = this.props;
    PcmenuActions.setOrder(menu); 
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    const { list, menuType } = this.props;
    const { handleType, handleClick } = this;
    let menuList = [];

    if(menuType == '') menuList = list;
    else menuList = list.filter((v) => v.type == menuType);

    return (
      <Fragment>
        <MenuBar onType={handleType}/>
        <MenuList menuList={menuList} onClick={handleClick}/>
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    list: state.pcmenu.get('list'),
    menuType: state.pcmenu.get('type')
  }),
  (dispatch) => ({
    PcmenuActions: bindActionCreators(pcmenuActions,dispatch)
  })
)(MenuListContainer);