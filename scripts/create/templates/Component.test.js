import React from 'react';
import renderer from 'react-test-renderer';
import Component from './Component';

it('renders Component snapshot', () => {
  const tree = renderer.create(<Component>Test</Component>).toJSON();
  expect(tree).toMatchSnapshot();
});
