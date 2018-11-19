import React from 'react';
import Songs from './Songs';
import { shallow } from 'enzyme';

jest.mock('../../services/lyricSearch', () => {
  return { getLyrics: () => Promise.resolve({ lyrics: 'blah' }) };
});

describe('Songs', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Songs location={{ pathname: '/somepath' }}/>);
  });
  it('renders a Songs component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays artist, song and lyrics', () => {
    expect(wrapper.html()).toContain('blah');
  });
});
