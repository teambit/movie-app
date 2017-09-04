import React, { Component } from 'react';
import ListToggle from '../list-toggle';
import PropTypes from 'prop-types';
import style from './style.scss';
import styled, { css } from 'styled-components';
const Item = styled.div`
  width: calc(20% - 10px);
  min-width: calc(20% - 10px);
  background-color: #000000;
  flex: 1 0 auto;
  background-position: center;
  background-size: 100%;
  height: 200px;
  background-repeat: no-repeat;
  overflow: hidden;
  margin-right: 10px;
  transition: background 1s ease;
  background: ${({ backdrop }) => css`url(${backdrop})`};
  &:hover {
    background-size: 150%;
  }
  &:nth-child(n+6) {
    margin-top: 20px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Overlay = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, transparent 100%);
  padding: 20px;
  position: relative;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity .125s ease;
 `
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
      <Item>
        <Overlay>
          <div className={style.title}>{this.props.title}</div>
          <div className={style.rating}>{this.props.score} / 10</div>
          <div className={style.plot}>{this.props.overview}</div>
          <ListToggle />
        </Overlay>
      </Item>
    );
  }
}
