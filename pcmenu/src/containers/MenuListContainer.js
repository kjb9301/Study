import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pcmenuActions from 'store/modules/pcmenu';
import MenuList from 'components/MenuList';
import MenuBar from 'components/MenuBar';

class MenuListContainer extends Component {

  state = {
    counter : 0
  }

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
    let { orderList } = this.props;
    let { counter }  = this.state
    
    menu = {...menu, counter}
    const overlap = (orderList.map(order => order.name).indexOf(menu.name) >= 0)? true : false;
    if(orderList.length < 1) orderList = orderList.concat(menu);
    else{
      if(overlap){
        orderList.map(order => {
          if(order.name === menu.name) order.counter++;
        })
      }else{
        orderList = orderList.concat(menu);
      }
    }
    PcmenuActions.setOrder(orderList); 
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
    menuType: state.pcmenu.get('type'),
    orderList: state.pcmenu.get('orderList')
  }),
  (dispatch) => ({
    PcmenuActions: bindActionCreators(pcmenuActions,dispatch)
  })
)(MenuListContainer);