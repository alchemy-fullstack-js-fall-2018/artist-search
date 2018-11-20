import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

jest.mock('../../services/musicSearch', () => {
  return { getArtist: () => Promise.resolve(
    {
      id: 'abcd4567',
      name: 'Meatloaf',
      works: [
        {
          id: 'abcd1234',
          title:'The Blues'
        }
      ]
    })
  };
});

describe('Artist Component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Artist
        match={{ params: { id: 1 }, isExact: true, path: '', url: '' }}
      />);
  });

  it('renders component', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
