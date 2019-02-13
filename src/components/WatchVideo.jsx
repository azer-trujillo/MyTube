import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFavorite } from '../actions/videos';

const WatchVideo = () => (
  <div>
    <h1>Watching video</h1>
    <h1>Please continue</h1>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addFavorite: videoId => dispatch(addFavorite(videoId))
});

export default connect(
  null,
  mapDispatchToProps
)(WatchVideo);
