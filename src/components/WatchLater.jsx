import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'antd';

const WatchLater = props => {
  const { watchLaterList } = props;
  const data = watchLaterList.map(v => {
    return {
      key: v,
      videoId: v,
      action: <Link to={`watch/${v}`}>Watch</Link>
    };
  });
  const columns = [
    {
      title: 'VideoId',
      dataIndex: 'videoId',
      key: 'videoId'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    }
  ];
  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

WatchLater.propTypes = {
  watchLaterList: PropTypes.array.isRequired // eslint-disable-line
};

const mapStateToProps = state => ({
  watchLaterList: state.videos.watchLater
});

// const mapDispatchToProps = (dispatch) => {};

export default connect(
  mapStateToProps,
  null
)(WatchLater);
