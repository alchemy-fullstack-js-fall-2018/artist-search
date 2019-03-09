import React from 'react';
import { shallow } from 'enzyme';
import ArtistDetail from './ArtistDetail';

jest.mock('../../services/musicSearch', () => {
  return {
    getArtist: () =>
      Promise.resolve({ artist: 'Nirvana', works: ['Song1', 'Song2'] })
  };
});

describe('ArtistDetail', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ArtistDetail location={{ pathname: '1234' }} />);
  });

  it('renders an ArtistDetail Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
