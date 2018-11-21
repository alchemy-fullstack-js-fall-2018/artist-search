import React from 'react';
import { shallow } from 'enzyme';
import ArtistLyrics from './ArtistLyrics';

jest.mock('../../services/musicSearch', () => {
  return { getLyrics: () => Promise.resolve({ lyrics: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat quae quam iusto omnis reprehenderit amet repellat. Atque accusantium suscipit rem sint quisquam repellat. Enim fuga excepturi magni blanditiis officia.' }) };
});

describe('Lyrics test', () => {

  let wrapper;
  const match = { params: {artistName: 'Mariah Carey', songName: 'Butterflies'} };

  beforeEach(() => {
    wrapper = shallow(<ArtistLyrics match={match}/>);
  });

   it('renders an Lyrics Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
