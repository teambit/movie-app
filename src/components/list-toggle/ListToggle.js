import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import '../../global.css';
/**
 * @name ListToggle
 * @description Button for adding items to favorites list
 * @example
 * <ListToggle />
 */
export default class ListToggle extends Component {
  state = {
    toggled: false
  };

  static propTypes = {
    /**
     * @property {boolean} toggled determines whether button should be toggled
     */
    toggled: PropTypes.bool
  }

  handleClick = () => {
    console.log(this.state);
    if (this.state.toggled === true) {
      this.setState({ toggled: false });
    } else {
      this.setState({ toggled: true });
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} data-toggled={this.state.toggled} className={style.ListToggle}>
        <div>
          <i className={`fa fa-fw fa-${this.state.toggled ? 'check': 'plus'}`}></i>
        </div>
      </div>
    );
  }
}
