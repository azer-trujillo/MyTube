import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const { Sider } = Layout;

class SideBar extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line
  handleClick(e) {
    const { history } = this.props;
    history.push(e.key);
  }

  render() {
    const { location } = this.props;

    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          onClick={this.handleClick}
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="/home">
            <span>
              <Icon type="search" />
              Search
            </span>
          </Menu.Item>
          <Menu.Item key="/favorites">
            <span>
              <Icon type="star" />
              Favorites
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

SideBar.propTypes = {
  location: PropTypes.object.isRequired, //eslint-disable-line
  history: PropTypes.object.isRequired //eslint-disable-line
};

export default withRouter(SideBar);
