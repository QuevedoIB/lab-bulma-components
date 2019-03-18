import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';

export class FormField extends Component {
  render() {
    return (
      <div class="field">
        <label class="label">{this.props.fieldName}</label>
        <div class="control">
          <input class="input" type="text" placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
}