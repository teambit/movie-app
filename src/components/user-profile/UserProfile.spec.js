import { expect } from 'chai';
import React from 'react';
import UserProfile from './UserProfile';
import {mount,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import style from './style.scss';
configure({ adapter: new Adapter() });


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
    const name  = wrapper.text();
    expect(name).to.equal("Jack Oliver");
  });

});
