import React from 'react';
import { shallow } from 'enzyme';
import WorkDetail from './WorkDetail';

jest.mock('../../services/fetch', () => {
  return { getLyrics: () => Promise.resolve('poetic lyrics') };
});

describe ('tests for WorkDetail component', () => {
  const params = {
    artist: 'Joni Mitchell',
    title: 'Blue'
  };
  it('renders an WorkDetail component', () => {
    const wrapper = shallow(<WorkDetail match={ { params } } />);
    expect(wrapper).toMatchSnapshot();
  });
});
