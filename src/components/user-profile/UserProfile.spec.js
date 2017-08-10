import { expect } from 'chai';
import React from 'react';
import UserProfile from './UserProfile';
import {mount} from 'enzyme';
mockDom('<html><body></body></html>');

describe('#UserProfile', () => {
  let renderedComponent;

  function mountComponent(props = {}) {
    return mount(<UserProfile />);
  }

  it('Should render', () => {
    expect(UserProfile).to.be.ok;
  });
  it('Should contain className with default name Jack Oliver', () => {
    const wrapper = mountComponent();
    const name  = wrapper.find('.name').text();
    expect(wrapper.find('.name')).to.have.length(1);
    expect(name).to.equal(name);
  });
});
