import { expect } from 'chai';
import React from 'react';
import Navigation from './Navigation';
import {mount,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('#Navigation', () => {

  function mountComponent(props = {}) {
    return mount(<Navigation text='REACT SF' />);
  }

  it('Should render', () => {
    const wrapper = mountComponent();
    expect(wrapper).to.be.ok;

  });

  it('Should contain list size of 4', () => {
    const wrapper = mountComponent();
    const list = wrapper.find('li');
    expect(list).to.have.length(3);
  });
});
