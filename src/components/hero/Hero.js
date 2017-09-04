import React, { Component } from 'react';
import HeroButton from '../hero-button';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background-size: cover;
  min-height: 800px;
  background: url(https://images.alphacoders.com/633/633643.jpg);
  color: #FFF;
`;

const Content = styled.div`
  position: relative;
  z-index: 4;
  width: 500px;
  left: 10vw;
  top: 10vw;
  > p {
    width: 100%;
  }
`;

const Logo = styled.img`
  max-width: 400px;
  display: block;
  position: relative;
  left: -5px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 400px;
  margin-top: 30px;
  > button:first-child {
    margin-right: 10px;
  }
`;

const Overlay = styled.div`
  background: linear-gradient(to bottom, #221f1f 0%, rgba(34, 31, 31, 0) 100%);
  height: 100%;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  transform: rotate(180deg);
`;
/**
 * Netflix's Hero banner, shows our featured content.
 */
export default class Hero extends Component {
  static defaultProps = {
    title: 'Season 2 now available',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.',
  }

  render() {
    const { title, description, ...rest } = this.props;
    return (
      <Wrapper {...rest}>
        <Content>
          <Logo
            src="http://www.returndates.com/backgrounds/narcos.logo.png"
            alt="narcos background"
          />
          <h2>{title}</h2>
          <p>{description}</p>
          <ButtonsWrapper>
            <HeroButton primary text="Watch now" />
            <HeroButton primary={false} text="+ My list" />
          </ButtonsWrapper>
        </Content>
        <Overlay />
      </Wrapper>
    );
  }
}
