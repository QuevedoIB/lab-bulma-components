import React, { Component } from 'react';
import { Logo } from './Logo';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';
import { Home } from './Home'
import 'bulma/css/bulma.css';


export class Nav extends Component {

  render() {
    return (
      <header className='navbar'>
        <div className='navbar-start'>
          <Logo />
          <Home />
        </div>
        <div className='navbar-end'>
          <LogIn />
          <SignUp />
        </div>
      </header>
    );
  }
}