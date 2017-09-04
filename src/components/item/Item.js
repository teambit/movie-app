import React, { Component } from 'react';
import ListToggle from '../list-toggle';
import PropTypes from 'prop-types';
import style from './style.scss';
/**
 * Netflix's title items
 */
export default class Item extends Component {
  static propTypes = {
    /**
     * @property {string} title item's title
     */
    title: PropTypes.string,

    /**
     * @property {number} score item's score (1-10 float range)
     */
    score: PropTypes.number,

    /**
     * @property {string} overview text for describing the item's overview
     */
    overview: PropTypes.string
  }

  render() {
    return (
      <div className={style.Item} style={{ backgroundImage: 'url(' + this.props.backdrop + ')' }} >
        <div className={style.overlay}>
          <div className={style.title}>{this.props.title}</div>
          <div className={style.rating}>{this.props.score} / 10</div>
          <div className={style.plot}>{this.props.overview}</div>
          <ListToggle />
        </div>
      </div>
    );
  }
}
