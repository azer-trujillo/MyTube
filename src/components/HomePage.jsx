import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Col, Row } from 'antd';
import { searchVideos } from '../actions/videos';

const { Search } = Input;

const HomePage = props => {
  const { videos } = props;
  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={value => props.searchVideos({ keyword: value, maxResults: 20, pageToken: '' })}
        enterButton
      />
      {videos.fetching && <span>Loading...</span>}
      {videos.fetched &&
        videos.items.map(v => {
          return (
            <Row key={v.id.videoId}>
              <Col span={12}>{v.snippet.title}</Col>
            </Row>
          );
        })}
    </div>
  );
};

HomePage.propTypes = {
  videos: PropTypes.object.isRequired, // eslint-disable-line
  searchVideos: PropTypes.func.isRequired // eslint-disable-line
};

const mapStateToProps = state => ({
  videos: state.videos
});

const mapDispatchToProps = dispatch => ({
  searchVideos: search => dispatch(searchVideos(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
