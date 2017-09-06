import { expect } from 'chai';
import React from 'react';
import UserProfile from './UserProfile';
import {mount} from 'enzyme';
import style from './style.scss';

mockDom('<html><body></body></html>');
describe('#UserProfile', () => {
  let renderedComponent;

  function mountComponent(props = {}) {
    return mount(<UserProfile />);
  }

  it('Should render', () => {
    expect(UserProfile).to.be.ok;
  });

  it('Should contain default prop name of Jack Oliver', () => {
    const wrapper = mountComponent();
    const name  = wrapper.find(`.${style.name}`).text();
    expect(name).to.equal("Jack Oliver");
  });

});
