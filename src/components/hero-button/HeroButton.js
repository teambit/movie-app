import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import '../../global.css';

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

  static defaultProps = {
    text: 'Hero Button!',
    primary: true,
  }

  render() {
    return (
      <a href="#" className={style.Button} data-primary={this.props.primary}>{this.props.text}</a>
    );
  }
}
