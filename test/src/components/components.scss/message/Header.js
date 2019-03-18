import React, { Component } from 'react';
import 'bulma/css/bulma.css';


export class Header extends Component {
  render() {
    return (
      <div className='message-header'>
        <p>
          {this.props.title}
        </p>
        <button type='submit' className='delete' ariaLabel="delete"></button>
      </div>
    );
  }
}