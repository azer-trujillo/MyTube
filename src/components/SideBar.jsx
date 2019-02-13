import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { startLogout } from '../actions/auth';

const { Sider } = Layout;

class SideBar extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line
  handleClick(e) {
    if (e.key === 'logout') {
      const { logout } = this.props;
      logout();
    } else {
      const { history } = this.props;
      history.push(e.key);
    }
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
          <Menu.Item key="/watchlater">
            <span>
              <Icon type="clock-circle" />
              Watch Later
            </span>
          </Menu.Item>
          <Menu.Item key="logout">
            <span>
              <Icon type="logout" />
              Logout
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

SideBar.propTypes = {
  location: PropTypes.object.isRequired, //eslint-disable-line
  history: PropTypes.object.isRequired, //eslint-disable-line
  logout: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   watchLaterList: state.videos.watchLater
// });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(startLogout())
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(SideBar));
