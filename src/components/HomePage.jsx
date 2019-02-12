import React, { Component } from 'react';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Probando'
    };
  }

  render() {
    const { message } = this.state;
    return <div>{message}</div>;
  }
}
