import React from 'react';
import { shallow } from 'enzyme';
import ArtistDetail from './ArtistDetail';

jest.mock('../../services/fetch', () => {
  const getArtistResult = {
    artist: {
      name: 'Joni Mitchell',
      works: [
        { id: 'abc', title: 'Song1' },
        { id: '123', title: 'Song2' }]
    }
  };
  return { getArtist: () => Promise.resolve(getArtistResult) };
});

describe ('tests for ArtistDetail component', () => {

  it('renders an ArtistDetail component', () => {
    const wrapper = shallow(<ArtistDetail match={ { params: { id: '123' } }} />);
    expect(wrapper).toMatchSnapshot();
  });

});
