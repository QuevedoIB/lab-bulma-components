import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bulma/css/bulma.css';
import { Nav } from './components/components.scss/navbar/Nav';
import { FormField } from './components/components.scss/form/FormField'
import { CoolButton } from './components/components.scss/button/CoolButton'
import { SignUp } from './components/components.scss/signup/SignUp'
import { Message } from './components/components.scss/message/Message'

class App extends Component {
  render() {
    return (
      [
        <Nav className='App-header' />,
        <FormField fieldName='Name' placeholder='Your Name' />,
        <FormField fieldName='Email' placeholder='Your Email' />,
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>,
        <CoolButton isSmall isSuccess>Button 2</CoolButton>,
        <SignUp />,
        <Message />
      ]
    );
  }
}

export default App;
