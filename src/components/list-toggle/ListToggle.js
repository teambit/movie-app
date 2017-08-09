import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
/**
 * Button for adding items to favorites list
 */
export default class ListToggle extends Component {
  constructor() {
    super();
    this.state = {
      toggled: false
    };
  }

  static propTypes = {
    /**
     * @property {boolean} toggled determines whether button should be toggled
     */
    toggled: PropTypes.bool
  }

  handleClick() {
    if(this.state.toggled === true) {
      this.setState({ toggled: false });
    } else {
      this.setState({ toggled: true }); 
    }
    
  }

  render() {
    return (
      <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    );
  }
}
