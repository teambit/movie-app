// import { expect } from 'chai';
import React from 'react';
import HeroButton from './HeroButton';
import {mount,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('#HeroButton', () => {
  function mountComponent(props = {}) {
    return mount(<HeroButton text='REACT SF' />);
  }
  it('Should render', () => {
    expect(HeroButton).to.be.ok;
  });
  it('Should contain text REACT SF', () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).to.equal('REACT SF');
  });
});