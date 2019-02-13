import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { Button } from 'antd';
import { startAddToWatchLater } from '../actions/videos';

const WatchVideo = props => {
  const { location, watchLaterList } = props;
  const videoId = location.pathname.substr(location.pathname.lastIndexOf('/') + 1);

  const opts = {
    height: '480',
    width: '640',
    playerVars: {
      autoplay: 1
    }
  };
  return (
    <div className="box">
      <div className="row search">
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className="row content">
        <Button
          shape="round"
          icon="clock-circle"
          size="large"
          onClick={() => props.addToWatchLater(videoId)}
          disabled={watchLaterList.indexOf(videoId) > -1}
        >
          {watchLaterList.indexOf(videoId) > -1 ? 'Already in watch later' : 'Watch Later'}
        </Button>
      </div>
    </div>
  );
};

WatchVideo.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line
  addToWatchLater: PropTypes.func.isRequired,
  watchLaterList: PropTypes.array.isRequired //eslint-disable-line
};

const mapStateToProps = state => ({
  watchLaterList: state.videos.watchLater
});

const mapDispatchToProps = dispatch => ({
  addToWatchLater: videoId => dispatch(startAddToWatchLater(videoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchVideo);
