import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export class Home extends Component {
  render() {
    return (
      <a className='navbar-item' href={this.props.url}>Home</a>
    );
  }
}