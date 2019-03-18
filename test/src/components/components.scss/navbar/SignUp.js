import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export class SignUp extends Component {
  render() {
    return (
      <a className='navbar-item button is-primary' href={this.props.url}>Sign Up</a>
    );
  }
}