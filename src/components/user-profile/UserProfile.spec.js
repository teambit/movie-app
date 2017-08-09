import { expect } from 'chai';
import TestUtils from 'react-dom/test-utils';
import jsdom from 'mocha-jsdom';
import React from 'react';
import UserProfile from './UserProfile';

mockDom('<html><body></body></html>');

describe('#MyComponent', () => {
  jsdom({ skipWindowCheck: true });
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = TestUtils.renderIntoDocument(
      <UserProfile />
    );
  });

  it('should do something cool...', () => {
    expect(true).to.equal(true);
  });
});
