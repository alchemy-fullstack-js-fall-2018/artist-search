import React from 'react';
import Artists from './Artists';
import render from 'react-test-renderer';

describe('Artists component tests', () => {
  test('header snapshot', () => {
    expect(render
      .create(<Artists />)
      .toJSON()).toMatchSnapshot();
  });
});