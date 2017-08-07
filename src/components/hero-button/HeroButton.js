import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * CTA button for `Hero` featured content
 */
export default class HeroButton extends Component {
  static propTypes = {
    /**
     * @property {boolean} primary determines is a primary button (emphasized)
     */
    primary: PropTypes.bool,

    /**
     * @property {string} text label to be displayed within the button
     */
    text: PropTypes.string
  }

  render() {
    return (
      <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
    );
  }
}
