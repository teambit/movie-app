import React, { Component } from 'react';
import style from './style.scss';
/**
 * Main navigation for Netflix.
 */
export default class Navigation extends Component {
  render() {
    return (
      <div id="navigation" className={style.Navigation}>
        <nav>
          <ul>
            <li>Browse</li>
            <li>My list</li>
            <li>Top picks</li>
            <li>Recent</li>
          </ul>
        </nav>
      </div>
    );
  }
}
