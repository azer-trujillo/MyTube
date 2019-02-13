import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Spin, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { searchVideos } from '../actions/videos';

const { Search } = Input;

const HomePage = props => {
  const { videos } = props;
  return (
    <div className="box">
      <div className="row search">
        <Search
          placeholder="input search text"
          onSearch={value => props.searchVideos({ keyword: value, maxResults: 50, pageToken: '' })}
          enterButton
        />
      </div>
      <div className="row content">
        {videos.fetching && <Spin size="large" />}
        {videos.fetched && (
          <List
            itemLayout="horizontal"
            pagination={{
              onChange: page => {
                console.log(page); //eslint-disable-line
              },
              pageSize: 5
            }}
            dataSource={videos.items}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.snippet.thumbnails.high.url} />}
                  title={<Link to={`watch/${item.id.videoId}`}>{item.snippet.title}</Link>}
                  description={`${item.snippet.description.substring(0, 100)}...`}
                />
              </List.Item>
            )}
          />
        )}
      </div>
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
