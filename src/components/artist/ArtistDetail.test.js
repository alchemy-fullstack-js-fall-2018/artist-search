import React from 'react';
import { shallow } from 'enzyme';
import ArtistDetail from './ArtistDetail'
import Artist from './Artist'
import { MemoryRouter } from 'react-router-dom';

describe('Arist Test', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Artist name="David Banner" id="abcd222" works="Hustlin"/>);
  });

  it('Renders a artist details', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders songs for the artist', () => {
    const wrapperWithROuter = shallow(
      <MemoryRouter>
        <ArtistDetail />
      </MemoryRouter>
    );
    expect(wrapperWithROuter.find('works')).toBeTruthy();
  });

});
