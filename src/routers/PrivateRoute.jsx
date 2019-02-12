import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import SideBar from '../components/SideBar';

const { Header, Content } = Layout;

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <Layout style={{ height: '100vh' }}>
          <Header className="header">
            <span style={{ color: 'red' }}>MY TUBE</span>
          </Header>
          <Layout>
            <SideBar />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: '16px 0',
                  minHeight: 280
                }}
              >
                <Component {...props} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.node]).isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
