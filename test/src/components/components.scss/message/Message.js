import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { Header } from './Header'

export class Message extends Component {
  render() {
    return (
      <article className='message is-info'>
        <Header title='Hello World' />,
        <div className='message-body'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </p>
        </div>
      </article>
    );
  }
}