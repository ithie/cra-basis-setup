import React from 'react';
import renderer from 'react-test-renderer';
import Headline from './Headline';
import 'jest-styled-components';

it('renders Headline snapshot', () => {
  const tree = renderer.create(<Headline>Test</Headline>).toJSON();
  expect(tree).toMatchSnapshot();
});
