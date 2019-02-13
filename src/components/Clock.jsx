import React, { Component } from 'react';
import moment from 'moment';
import { TimePicker } from 'antd';

export default class Clock extends Component {
  constructor() {
    super();
    this.interval = null;
    this.state = {
      time: moment()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: moment() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state;
    return <TimePicker value={time} size="large" disabled />;
  }
}
