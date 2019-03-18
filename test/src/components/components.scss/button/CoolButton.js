import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';


const data = {
  isActive: 'is-active',
  isBlack: 'is-black',
  isCentered: 'is-centered',
  isDanger: 'is-danger',
  isDark: 'is-dark',
  isFocused: 'is-focused',
  isGrouped: 'is-grouped',
  isHovered: 'is-hovered',
  isInfo: 'is-info',
  isInverted: 'is-inverted',
  isLarge: 'is-large',
  isLight: 'is-light',
  isLink: 'is-link',
  isLoading: 'is-loading',
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  isStatic: 'is-static',
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white',
}



export class CoolButton extends Component {
  render() {
    const array = []
    const coolButtonStyle = classNames({
      button: true,
      'is-small': this.props.isSmall,
      'is-danger': this.props.isDanger,
      'is-success': this.props.isSuccess
    });

    for (const prop in data) {
      array.push(<button className={data[prop]} type="submit" > {prop}</button >)
    }

    return (
      <div>
        {/* {array} */}
        <button className={coolButtonStyle} type='submit'>{this.props.children}</button>
      </div >
    );
  }
}






