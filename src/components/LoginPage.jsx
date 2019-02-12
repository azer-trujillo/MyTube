import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// eslint-disable-next-line
const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">MyTube</h1>
      <p>Just another youtube client (i think).</p>
      <button className="button" onClick={() => startLogin()} type="button">
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
