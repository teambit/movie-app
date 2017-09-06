import React, { Component } from 'react';
import ListToggle from '../list-toggle';
import PropTypes from 'prop-types';
import style from './style.scss';
import '../../global.css';
/**
 * @render react
 * @name Item
 * @description Netflix's title items
 * @example
 * <Item
 *   title='Demo List Item'
 *   rating={6}
 *   overview='This demo item brought you by the Bit team'
 *   backdrop='http://image.tmdb.org/t/p/original/aok7IhrbA83josNz9Dqh8tNA0Ao.jpg'
 * />
 */
export default class Item extends Component {
  static defaultProps = {
    title: 'Demo Item',
    rating: 6,
    overview: 'This demo item brought you by Bit team',
    backdrop: 'http://image.tmdb.org/t/p/original/aok7IhrbA83josNz9Dqh8tNA0Ao.jpg',
  }

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
    overview: PropTypes.string,

    /**
     * @property {string} backdrop thumbnail image for item
     */
    backdrop: PropTypes.string
  }

  render() {
    const { backdrop, title, score, overview } = this.props;
    return (
      <div className={style.Item} style={{ backgroundImage: 'url(' + backdrop + ')' }} >
        <div className={style.overlay}>
          <div className={style.title}>{title}</div>
          <div className={style.rating}>{score} / 10</div>
          <div className={style.plot}>{overview}</div>
          <ListToggle />
        </div>
      </div>
    );
  }
}
