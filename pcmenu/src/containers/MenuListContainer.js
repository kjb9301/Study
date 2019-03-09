import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pcmenuActions from 'store/modules/pcmenu';
import MenuList from 'components/MenuList';
import MenuBar from 'components/MenuBar';
import axios from 'axios';

class MenuListContainer extends Component {
  getData = () => {
    const { PcmenuActions } = this.props;
    console.log(111);
    console.log(PcmenuActions.getMenu());
    PcmenuActions.getMenu();
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    const {list} = this.props;

    const test = axios.get('https://study-1c4d9.firebaseio.com/menu.json').then((obj) => {
      return obj.data;
    });
    console.log(test);
    
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