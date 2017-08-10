import { expect } from 'chai';
import React from 'react';
import Hero from './Hero';
import {mount} from 'enzyme';
mockDom('<html><body></body></html>');

describe('Hero', () => {
  function mountComponent(props = {}) {
    return mount(<Hero />);
  }

  it('Should render', () => {
    expect(Hero).to.be.ok;
  });

  it('Should contain a logo', () => {
    const wrapper = mountComponent();
    const logo = wrapper.find('img');
    expect(logo).to.be.ok
  });

  it('Should render an overlay', () => {
    const wrapper = mountComponent();
    const overlay  = wrapper.find('.overlay');
    expect(overlay).to.be.ok
  });
});
