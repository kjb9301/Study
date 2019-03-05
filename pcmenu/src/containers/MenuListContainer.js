import React, { Component, Fragment } from 'react';
import MenuList from 'components/MenuList';
import MenuBar from 'components/MenuBar';

class MenuListContainer extends Component {
  render() {
    return (
      <Fragment>
        <MenuBar/>
        <MenuList/>
      </Fragment>
    );
  }
}

export default MenuListContainer;