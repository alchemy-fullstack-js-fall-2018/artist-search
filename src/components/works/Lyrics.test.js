import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

jest.mock('../../services/musicSearch', () => {
  return { getLyrics: () => Promise.resolve({ lyrics: 'Lalalalala' }) };
});

describe('Lyrics', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Lyrics location={{ pathname: '/sldkfj' }}/>);
  });

  it('renders an Lyrics Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
