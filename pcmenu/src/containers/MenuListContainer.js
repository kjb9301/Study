import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pcmenuActions from 'store/modules/pcmenu';
import MenuList from 'components/MenuList';
import MenuBar from 'components/MenuBar';

class MenuListContainer extends Component {
  state = { counter: 1 }

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
    const { counter } = this.state;
    let { orderList } = this.props;
    menu = {...menu, counter};
    
    if(orderList.length < 1) orderList = orderList.concat(menu);
    else{
      const index = (orderList.findIndex(order => order.name === menu.name));
      if(index >= 0){ 
        orderList[index].counter++;
        orderList = [
          ...orderList.slice(0,index),
          orderList[index],
          ...orderList.slice(index+1, orderList.length)
        ];
      }else {
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