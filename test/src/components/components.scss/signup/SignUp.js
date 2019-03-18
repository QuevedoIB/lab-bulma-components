import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import { Nav } from '../navbar/Nav';
import { FormField } from '../form/FormField'
import { CoolButton } from '../button/CoolButton'

export class SignUp extends Component {
  render() {
    return (
      [
        <Nav />,
        <FormField fieldName='Name' placeholder='Your Name' />,
        <FormField fieldName='Email' placeholder='Your Email' />,
        <FormField fieldName='Password' placeholder='Your Password' />,
        <CoolButton />
      ]
    );
  }
}