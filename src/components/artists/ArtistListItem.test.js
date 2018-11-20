import React from 'react';
import { shallow } from 'enzyme';
import ArtistListItem from './ArtistListItem';

describe ('tests for ArtistListItem component', () => {

  it('renders an ArtistListItem component', () => {
    const result = {
      name: 'Joni Mitchell',
      type: 'Person',
      description: 'American folk singer',
      id: '12345'

    };
    const wrapper = shallow(<ArtistListItem result={result}/>);
    expect(wrapper).toMatchSnapshot();
  });

});
