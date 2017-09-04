import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledButton = styled.a`
  display: flex;
  height: 44px;
  background: transparent;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid rgba(245, 245, 241, 0.2);
  border-radius: 44px;
  font-size: 14px;
  font-weight: 600;
  transition: border .125s ease, background .125s ease;
  cursor: pointer;
  &:hover {
    border: 2px solid #f5f5f1;
  }
  &[data-primary='true'] {
    border: 2px solid #e50914;
  }
  &[data-primary='true']:hover {
    background: #e50914;
  }
`

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
      <StyledButton
        href={this.props.href}
        data-primary={this.props.primary}
        {...this.props}
      >
        {this.props.text}
      </StyledButton>
    );
  }
}
