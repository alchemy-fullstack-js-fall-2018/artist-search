import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

jest.mock('../../services/lyricSearch', () => {
  return { getLyrics: () => Promise.resolve({ lyrics: 'I believe in a thing called love' }) };
});

describe('Lyrics Component', () => {

  let wrapper;
  const location = { pathname: '/lyrics/Metallica/Atlas, Rise!' };
  beforeEach(() => {
    wrapper = shallow(
      <Lyrics
        location={location}
      />
    );
  });

  it('renders component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays artist, song and lyrics', () => {
    expect(wrapper.html()).toContain('Metallica');
    expect(wrapper.html()).toContain('Atlas, Rise');
    expect(wrapper.html()).toContain('I believe in a thing called love');
  });

});
