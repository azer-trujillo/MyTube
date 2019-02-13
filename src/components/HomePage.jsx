import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, List, Icon, Avatar } from 'antd';
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
      {videos.fetched && (
        <List
          itemLayout="horizontal"
          pagination={{
            onChange: page => {
              console.log(page); //eslint-disable-line
            },
            pageSize: 8
          }}
          dataSource={videos.items}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.snippet.thumbnails.high.url} />}
                title={<a href="/">{item.snippet.title}</a>}
                description={item.snippet.description}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

IconText.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
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
