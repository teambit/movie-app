import React, { Component } from 'react';
import HeroButton from '../hero-button';
import style from './style.scss';

/**
 * Netflix's Hero banner, shows our featured content.
 */
export default class Hero extends Component {
  static defaultProps = {
    title: 'Season 2 now available',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.',
  }

  render() {
    return (
      <div id="hero" className={style.Hero} style={{ backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)' }}>
        <div className={style.content}>
          <img
            className={style.logo}
            src="http://www.returndates.com/backgrounds/narcos.logo.png"
            alt="narcos background"
          />
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <div className={style['button-wrapper']}>
            <HeroButton primary text="Watch now" />
            <HeroButton primary={false} text="+ My list" />
          </div>
        </div>
        <div className={style.overlay}></div>
      </div>
    );
  }
}
