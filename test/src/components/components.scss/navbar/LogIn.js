import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export class LogIn extends Component {
  render() {
    return (
      <a className='navbar-item button is-info' href={this.props.url}>Log In</a>
    );
  }
}

