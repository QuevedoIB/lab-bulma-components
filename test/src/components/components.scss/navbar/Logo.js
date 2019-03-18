import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export class Logo extends Component {
  render() {
    return (
      <a className='navbar-item'><img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" /></a> // src={this.props.url} alt="logo"
    );
  }
}