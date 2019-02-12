import React, { Component } from 'react';
import { Drawer, Button } from 'antd';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  onClose() {
    this.setState({
      visible: false
    });
  }

  showDrawer() {
    this.setState({
      visible: true
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <nav className="menuBar">
        <div className="logo">
          <a href="#as">logo</a>
        </div>
        <div className="menuCon">
          <div className="leftMenu">{/* <LeftMenu /> */}</div>
          <div className="rightMenu">{/* <RightMenu /> */}</div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn" />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={visible}
          >
            {/* <LeftMenu /> */}
            {/* <RightMenu /> */}
          </Drawer>
        </div>
      </nav>
    );
  }
}
